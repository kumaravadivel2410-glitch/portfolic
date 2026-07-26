"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const { pointer } = state;
    // Gentle rotation
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 + pointer.y * 0.3;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25 + pointer.x * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#8B5CF6"
          roughness={0.25}
          metalness={0.8}
          distort={0.3}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function Hero3DScene() {
  return (
    <div className="w-full h-[400px] sm:h-[480px] relative flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38BDF8" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8B5CF6" />
        <FloatingShape />
      </Canvas>
    </div>
  );
}
