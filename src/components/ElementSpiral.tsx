import React, { useMemo } from 'react';
import { calculateConicalHelix } from '../math/conicalHelix';
import type { Position3D } from '../math/conicalHelix';
import { elements } from '../data/elements';
import type { ElementData } from '../data/elements';
import { NucleusParticles } from './NucleusParticles';
import { Line, Text, Html } from '@react-three/drei';
import * as THREE from 'three';

interface ElementSpiralProps {
  onElementClick: (el: ElementData & Position3D) => void;
  activeIsotopes: Record<number, number>;
}

export const ElementSpiral: React.FC<ElementSpiralProps> = ({ onElementClick, activeIsotopes }) => {
  const positionedElements = useMemo(() => calculateConicalHelix(elements), []);
  
  // Extract continuous line points for the spiral ribbon
  const linePoints = useMemo(() => {
    return positionedElements.map(el => new THREE.Vector3(el.x, el.y, el.z));
  }, [positionedElements]);

  return (
    <group>
      {/* The Continuous Ribbon connecting the elements */}
      <Line
        points={linePoints}
        color="white"
        opacity={0.15}
        transparent
        lineWidth={1}
      />
      
      {/* The High-Performance Nucleon Renderer */}
      <NucleusParticles elements={positionedElements} activeIsotopes={activeIsotopes} />
      
      {/* The Interactive Node Hover/Click Hitboxes & Labels */}
      {positionedElements.map((el) => (
        <ElementNode 
          key={el.atomicNumber} 
          element={el} 
          onClick={() => onElementClick(el)} 
        />
      ))}
    </group>
  );
};

interface ElementNodeProps {
  element: ElementData & Position3D;
  onClick: () => void;
}

const sliceShader = (shader: any) => {
  shader.vertexShader = `
    varying vec3 vLocalPos;
    ${shader.vertexShader}
  `.replace(
    '#include <begin_vertex>',
    `
    #include <begin_vertex>
    vLocalPos = position;
    `
  );

  shader.fragmentShader = `
    varying vec3 vLocalPos;
    ${shader.fragmentShader}
  `.replace(
    '#include <dithering_fragment>',
    `
    #include <dithering_fragment>
    // 90 degree wedge cut: discard fragments in the +X, +Z quadrant
    if (vLocalPos.x > 0.0 && vLocalPos.z > 0.0) discard;
    `
  );
};

const ElementNode: React.FC<ElementNodeProps> = ({ element, onClick }) => {
  const [hovered, setHover] = React.useState(false);

  // We scale the visual sphere by its atomic radius property.
  const visualScale = element.radius * 0.8;

  // Calculate nested radii for each electron shell
  const shellsCount = Math.max(element.shells.length, 1);
  const shellRadii: number[] = [];
  for (let i = 1; i <= shellsCount; i++) {
    shellRadii.push((visualScale / shellsCount) * i);
  }

  return (
    <group position={[element.x, element.y, element.z]}>
      {/* Nested Shells with Slice Shader */}
      {shellRadii.map((r, idx) => (
        <mesh
          key={idx}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          onPointerOver={(e) => { e.stopPropagation(); setHover(true); }}
          onPointerOut={() => setHover(false)}
        >
          <sphereGeometry args={[r, 32, 32]} />
          <meshPhysicalMaterial 
            color={element.color} 
            emissive={element.color}
            emissiveIntensity={hovered ? 0.3 : 0.05}
            roughness={0.1}
            metalness={0.9}
            clearcoat={1}
            transparent
            opacity={0.3} // highly translucent to see inside
            side={THREE.DoubleSide} // vital for cross-section internal faces
            onBeforeCompile={sliceShader}
          />
        </mesh>
      ))}

      {/* 3D Label */}
      <Text
        position={[0, visualScale + 0.4, 0]}
        fontSize={0.8}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#000000"
      >
        {element.symbol}
      </Text>
      
      {hovered && (
        <Html position={[0, visualScale + 1.2, 0]} center style={{ pointerEvents: 'none' }}>
          <div style={{
            background: 'rgba(0,0,0,0.8)',
            padding: '4px 8px',
            borderRadius: '4px',
            color: 'white',
            fontFamily: 'sans-serif',
            fontSize: '12px',
            border: `1px solid ${element.color}`,
            whiteSpace: 'nowrap'
          }}>
            {element.atomicNumber} - {element.name}
          </div>
        </Html>
      )}
    </group>
  );
};
