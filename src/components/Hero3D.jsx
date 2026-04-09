import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, PresentationControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function FloatingObject() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
    meshRef.current.rotation.x += delta * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshPhysicalMaterial 
          color="#2563eb"
          metalness={0.5}
          roughness={0.1}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={true}
        />
      </mesh>
      
      {/* Inner solid core */}
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Discover the Future of Shopping</h1>
        <p>Premium quality products with an immersive 3D experience. Enjoy top-tier electronics, fashion, and more with lightning-fast delivery.</p>
        <button className="btn-primary">
          Explore Products
        </button>
      </div>

      <div className="hero-3d-canvas">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <FloatingObject />
          </PresentationControls>

          <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
}
