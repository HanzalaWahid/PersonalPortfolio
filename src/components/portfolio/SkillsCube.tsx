import React from 'react';
import './SkillsCube.css';

interface FloatingCubeProps {
    size?: number;
    duration?: number;
    delay?: number;
    top?: string;
    left?: string;
    skills: string[];
}

function FloatingSkillsCube({ size = 100, duration = 20, delay = 0, top = '50%', left = '50%', skills }: FloatingCubeProps) {
    const halfSize = size / 2;
    return (
        <div
            className="cube-container floating"
            style={{
                width: size,
                height: size,
                top,
                left,
                animationDelay: `${delay}s`,
            }}
        >
            <div className="cube" style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}>
                <div className="face front" style={{ transform: `translateZ(${halfSize}px)` }}><span>{skills[0]}</span></div>
                <div className="face back" style={{ transform: `rotateY(180deg) translateZ(${halfSize}px)` }}><span>{skills[1]}</span></div>
                <div className="face right" style={{ transform: `rotateY(90deg) translateZ(${halfSize}px)` }}><span>{skills[2]}</span></div>
                <div className="face left" style={{ transform: `rotateY(-90deg) translateZ(${halfSize}px)` }}><span>{skills[3]}</span></div>
                <div className="face top" style={{ transform: `rotateX(90deg) translateZ(${halfSize}px)` }}><span>{skills[4]}</span></div>
                <div className="face bottom" style={{ transform: `rotateX(-90deg) translateZ(${halfSize}px)` }}><span>{skills[5]}</span></div>
            </div>
        </div>
    );
}

export function FloatingCubesGroup() {
    const cubeData = [
        // Left Margin
        { size: 90, duration: 25, delay: 0, top: '10%', left: '2%', skills: ["AI", "Python", "ML", "Dev", "QA", "FastAPI"] },
        { size: 60, duration: 22, delay: -2, top: '45%', left: '1%', skills: ["React", "CSS", "Vite", "QA", "Git", "Bug"] },
        { size: 85, duration: 35, delay: -10, top: '80%', left: '3%', skills: ["Automation", "CI/CD", "Testing", "Unit", "UI", "UX"] },

        // Right Margin
        { size: 75, duration: 30, delay: -5, top: '20%', left: '94%', skills: ["Django", "NLP", "API", "RAG", "LLM", "Data"] },
        { size: 55, duration: 20, delay: -15, top: '65%', left: '95%', skills: ["SQL", "Redis", "Mongo", "NoSQL", "DB", "ORM"] },
        { size: 70, duration: 28, delay: -8, top: '90%', left: '93%', skills: ["Python", "Flask", "Pandas", "Scipy", "Keras", "Torch"] },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {cubeData.map((cube, i) => (
                <FloatingSkillsCube key={i} {...cube} />
            ))}
        </div>
    );
}
