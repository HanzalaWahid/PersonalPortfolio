import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ErrorBoundary } from './ErrorBoundary';

function Particles({ count = 100 }) {
    const mesh = useRef<THREE.Points>(null);
    const linesMesh = useRef<THREE.LineSegments>(null);
    const maxLines = count * 10;

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

            velocities[i * 3] = (Math.random() - 0.5) * 0.005;
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
        }
        return { positions, velocities };
    }, [count]);

    const linePositions = useMemo(() => new Float32Array(maxLines * 2 * 3), [maxLines]);

    useFrame(() => {
        if (!mesh.current || !linesMesh.current) return;

        const { positions, velocities } = particles;
        let lineIdx = 0;

        for (let i = 0; i < count; i++) {
            positions[i * 3] += velocities[i * 3];
            positions[i * 3 + 1] += velocities[i * 3 + 1];
            positions[i * 3 + 2] += velocities[i * 3 + 2];

            if (Math.abs(positions[i * 3]) > 5) velocities[i * 3] *= -1;
            if (Math.abs(positions[i * 3 + 1]) > 5) velocities[i * 3 + 1] *= -1;
            if (Math.abs(positions[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;

            for (let j = i + 1; j < count; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const dist = dx * dx + dy * dy + dz * dz;

                if (dist < 4 && lineIdx < maxLines) {
                    linePositions[lineIdx * 6] = positions[i * 3];
                    linePositions[lineIdx * 6 + 1] = positions[i * 3 + 1];
                    linePositions[lineIdx * 6 + 2] = positions[i * 3 + 2];
                    linePositions[lineIdx * 6 + 3] = positions[j * 3];
                    linePositions[lineIdx * 6 + 4] = positions[j * 3 + 1];
                    linePositions[lineIdx * 6 + 5] = positions[j * 3 + 2];
                    lineIdx++;
                }
            }
        }

        mesh.current.geometry.attributes.position.needsUpdate = true;
        linesMesh.current.geometry.attributes.position.needsUpdate = true;
        (linesMesh.current.geometry as THREE.BufferGeometry).setDrawRange(0, lineIdx * 2);
    });

    return (
        <>
            <points ref={mesh}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.positions.length / 3}
                        array={particles.positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.3} sizeAttenuation />
            </points>
            <lineSegments ref={linesMesh}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePositions.length / 3}
                        array={linePositions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="#ffffff" transparent opacity={0.1} />
            </lineSegments>
        </>
    );
}

export function ParticlesBackground() {
    return (
        <ErrorBoundary>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true, antialias: false }}>
                    <Suspense fallback={null}>
                        <Particles count={40} />
                    </Suspense>
                </Canvas>
            </div>
        </ErrorBoundary>
    );
}
