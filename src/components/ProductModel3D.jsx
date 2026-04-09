import React, { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// An internal component that actually uses the Texture hook so it can be Suspense-wrapped easily if needed
function DynamicImageCard({ imageUrl, color }) {
  const group = useRef();
  
  // useTexture handles the network fetching of the product image automatically
  const texture = useTexture(imageUrl);
  texture.colorSpace = THREE.SRGBColorSpace; // Ensures colors aren't washed out

  // Provides a luxurious, slow spin showcase
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Premium Glassmorphic / Metallic Display Frame */}
      <RoundedBox args={[3.2, 3.2, 0.2]} radius={0.05} smoothness={4} castShadow>
        <meshPhysicalMaterial 
          color="#ffffff" 
          metalness={0.6} 
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
        />
        
        {/* Dynamic Front Holographic Display */}
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[2.9, 2.9]} />
          {/* Unlit material ensures the actual product image is perfectly visible regardless of lighting */}
          <meshBasicMaterial map={texture} transparent={true} />
        </mesh>
        
        {/* Glowing Backlight matching the theme */}
        <mesh position={[0, 0, -0.11]} rotation={[0, Math.PI, 0]}>
           <planeGeometry args={[2.9, 2.9]} />
           <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.4} />
        </mesh>
      </RoundedBox>
    </group>
  );
}

export default function ProductModel3D({ imageUrl, color = "#2563eb" }) {
  // We wrap the texture loaded component in a generic fallback spinning box 
  // so if the network takes a moment to fetch the image texture, it doesn't crash the scene.
  return (
    <Suspense fallback={
        <RoundedBox args={[3, 3, 0.2]} radius={0.05}>
            <meshStandardMaterial color="#cbd5e1" wireframe={true} />
        </RoundedBox>
    }>
      <DynamicImageCard imageUrl={imageUrl} color={color} />
    </Suspense>
  );
}
