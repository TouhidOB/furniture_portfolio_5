import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

export const MonoChairModel = ({
  color = '#634735', // Walnut timber or leather
  roughness = 0.5,
  metalness = 0.05,
  scale = 1.0,
  rotationY = 0,
  explodedProgress = 0.0, // 0.0 = assembled, 1.0 = fully exploded
  selectedComponentKey = null
}) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current && rotationY !== undefined) {
      groupRef.current.rotation.y = rotationY;
    }
  });

  // Exploded offsets multiplied by explodedProgress
  const p = Math.max(0, Math.min(1, explodedProgress));

  // Offsets for each sub-assembly
  const backrestOffset = [0, 0.65 * p, -0.45 * p];
  const cushionOffset = [0, 0.38 * p, 0.15 * p];
  const panOffset = [0, 0.12 * p, 0];
  const pedestalOffset = [0, -0.55 * p, 0];
  const hardwareOffset = [0.35 * p, -0.15 * p, 0.2 * p];

  return (
    <group ref={groupRef} scale={[scale, scale, scale]} position={[0, -0.2, 0]}>
      {/* 1. MESH_BACKREST: Sculptural Steam-Bent Walnut Back Shell */}
      <group position={backrestOffset}>
        {/* Main contoured back shell */}
        <RoundedBox
          args={[1.1, 0.72, 0.18]}
          radius={0.08}
          smoothness={4}
          position={[0, 0.88, -0.32]}
        >
          <meshStandardMaterial
            color={selectedComponentKey === 'backrest' ? '#A14F39' : color}
            roughness={roughness}
            metalness={metalness}
          />
        </RoundedBox>

        {/* Wrap-around ergonomic wings */}
        <RoundedBox
          args={[0.22, 0.58, 0.65]}
          radius={0.08}
          smoothness={4}
          position={[-0.48, 0.82, -0.08]}
        >
          <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
        </RoundedBox>
        <RoundedBox
          args={[0.22, 0.58, 0.65]}
          radius={0.08}
          smoothness={4}
          position={[0.48, 0.82, -0.08]}
        >
          <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
        </RoundedBox>
      </group>

      {/* 2. MESH_CUSHION: Tuscan Full-Grain Saddle Leather Seat Cushion */}
      <group position={cushionOffset}>
        <RoundedBox
          args={[0.96, 0.22, 0.88]}
          radius={0.1}
          smoothness={4}
          position={[0, 0.45, 0.04]}
        >
          <meshStandardMaterial
            color={selectedComponentKey === 'seat_cushion' ? '#A14F39' : '#A14F39'}
            roughness={0.65}
            metalness={0.02}
          />
        </RoundedBox>
      </group>

      {/* 3. MESH_SEAT_PAN: Molded Plywood Substructure Pan */}
      <group position={panOffset}>
        <RoundedBox
          args={[1.02, 0.12, 0.94]}
          radius={0.05}
          smoothness={4}
          position={[0, 0.3, 0.02]}
        >
          <meshStandardMaterial
            color={selectedComponentKey === 'seat_pan' ? '#A14F39' : '#33271E'}
            roughness={0.8}
            metalness={0.0}
          />
        </RoundedBox>
      </group>

      {/* 4. MESH_PEDESTAL: Cast Bronze Three-Point Ground Pedestal */}
      <group position={pedestalOffset}>
        {/* Central stem */}
        <mesh position={[0, 0.14, 0]}>
          <cylinderGeometry args={[0.07, 0.12, 0.28, 24]} />
          <meshStandardMaterial
            color={selectedComponentKey === 'pedestal' ? '#A14F39' : '#524136'}
            roughness={0.3}
            metalness={0.85}
          />
        </mesh>
        {/* Three-point tripod feet */}
        <mesh position={[0, 0.02, 0]}>
          <cylinderGeometry args={[0.48, 0.52, 0.05, 32]} />
          <meshStandardMaterial
            color={selectedComponentKey === 'pedestal' ? '#A14F39' : '#524136'}
            roughness={0.3}
            metalness={0.85}
          />
        </mesh>
      </group>

      {/* 5. MESH_HARDWARE: Precision CNC Fasteners */}
      <group position={hardwareOffset}>
        <mesh position={[0.2, 0.24, 0.1]}>
          <cylinderGeometry args={[0.02, 0.02, 0.06, 12]} />
          <meshStandardMaterial color="#D8D4CE" roughness={0.2} metalness={0.9} />
        </mesh>
        <mesh position={[-0.2, 0.24, 0.1]}>
          <cylinderGeometry args={[0.02, 0.02, 0.06, 12]} />
          <meshStandardMaterial color="#D8D4CE" roughness={0.2} metalness={0.9} />
        </mesh>
      </group>
    </group>
  );
};

export default MonoChairModel;
