import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { MonoChairModel } from './MonoChairModel';

// Smooth Camera Rig lerping to desired target position
function CameraRig({ position = [0, 1.4, 3.8], target = [0, 0.2, 0] }) {
  useFrame(({ camera }) => {
    if (position) {
      camera.position.lerp(new THREE.Vector3(...position), 0.08);
      camera.lookAt(...target);
    }
  });
  return null;
}

// Lighting setup tuned for museum gallery objects
function GalleryLighting({ isDarkStage = false }) {
  return (
    <>
      <ambientLight intensity={isDarkStage ? 0.35 : 0.75} color={isDarkStage ? '#1F1E1D' : '#F7F5F0'} />
      
      {/* High-angle dramatic key spotlight */}
      <spotLight
        position={[4, 7, 5]}
        intensity={isDarkStage ? 2.4 : 1.6}
        angle={0.65}
        penumbra={0.8}
        color="#FFFBF5"
        castShadow
        shadow-bias={-0.0001}
      />

      {/* Cool architectural fill */}
      <directionalLight 
        position={[-5, 3, 2]} 
        intensity={isDarkStage ? 0.45 : 0.65} 
        color="#E2E6E9" 
      />

      {/* Back rim light that catches edges of wood and cast bronze */}
      <directionalLight 
        position={[0, 4.5, -4]} 
        intensity={isDarkStage ? 1.8 : 0.9} 
        color="#FCEEE3" 
      />

      {/* Floor bounce */}
      <directionalLight 
        position={[0, -2, 2]} 
        intensity={0.2} 
        color="#E6DEC9" 
      />
    </>
  );
}

export const ObjectScene = ({
  color = '#634735',
  roughness = 0.5,
  metalness = 0.05,
  rotationY = 0.4,
  scale = 1.0,
  explodedProgress = 0.0,
  selectedComponentKey = null,
  isDarkStage = false,
  enableOrbit = true,
  cameraPosition = [0, 1.4, 3.8],
  className = 'w-full h-full'
}) => {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 32 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <CameraRig position={cameraPosition} />
          <GalleryLighting isDarkStage={isDarkStage} />

          <MonoChairModel
            color={color}
            roughness={roughness}
            metalness={metalness}
            scale={scale}
            rotationY={rotationY}
            explodedProgress={explodedProgress}
            selectedComponentKey={selectedComponentKey}
          />

          <ContactShadows
            position={[0, -0.22, 0]}
            opacity={isDarkStage ? 0.75 : 0.45}
            scale={6.5}
            blur={2.8}
            far={4}
            color={isDarkStage ? '#000000' : '#1E1B18'}
          />

          {enableOrbit && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2 - 0.05}
              minPolarAngle={Math.PI / 6}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ObjectScene;
