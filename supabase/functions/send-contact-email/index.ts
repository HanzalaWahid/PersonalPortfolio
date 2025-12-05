import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message must be less than 5000 characters"),
});

// Simple in-memory rate limiting (per edge function instance)
// Note: This resets when the function cold starts, but provides basic protection
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(identifier: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

// HTML escape function to prevent injection
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";

    // Check rate limit
    const { allowed, remaining } = checkRateLimit(clientIP);
    if (!allowed) {
      console.log("Rate limit exceeded for IP:", clientIP);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { 
            "Content-Type": "application/json", 
            "X-RateLimit-Remaining": "0",
            ...corsHeaders 
          },
        }
      );
    }

    // Parse and validate input
    const rawBody = await req.json();
    const parseResult = contactSchema.safeParse(rawBody);

    if (!parseResult.success) {
      const errorMessages = parseResult.error.errors.map(e => e.message).join(", ");
      console.log("Validation failed:", errorMessages);
      return new Response(
        JSON.stringify({ error: errorMessages }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, message } = parseResult.data;

    // Log only non-sensitive info
    console.log("Contact form submission received from:", email);

    // Escape HTML in user inputs for email templates
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    // Send notification email to you using Resend REST API
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["wahidhanzala123@gmail.com"],
        subject: `New Contact Form Submission from ${safeName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.json();
      console.error("Failed to send notification email:", errorData);
      throw new Error(errorData.message || "Failed to send notification email");
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to the sender
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Muhammad Hanzala Wahid <onboarding@resend.dev>",
        to: [email], // Use original email for sending, not escaped version
        subject: "Thank you for reaching out!",
        html: `
          <h2>Thank you for contacting me, ${safeName}!</h2>
          <p>I have received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <blockquote style="border-left: 3px solid #00A8E8; padding-left: 15px; color: #555;">
            ${safeMessage.replace(/\n/g, "<br>")}
          </blockquote>
          <p>Best regards,<br>Muhammad Hanzala Wahid</p>
        `,
      }),
    });

    if (!confirmationResponse.ok) {
      console.error("Failed to send confirmation email");
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { 
          "Content-Type": "application/json", 
          "X-RateLimit-Remaining": String(remaining),
          ...corsHeaders 
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error.message);
    return new Response(
      JSON.stringify({ error: "An error occurred. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
