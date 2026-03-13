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

const ElementNode: React.FC<ElementNodeProps> = ({ element, onClick }) => {
  const [hovered, setHover] = React.useState(false);

  // We scale the visual sphere by its atomic radius property.
  // The calculated .radius falls roughly between 0.3 and 3
  const visualScale = element.radius * 0.8;

  return (
    <group position={[element.x, element.y, element.z]}>
      {/* The Nucleus/Orb */}
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => { e.stopPropagation(); setHover(true); }}
        onPointerOut={() => setHover(false)}
      >
        <sphereGeometry args={[visualScale, 32, 32]} />
        <meshPhysicalMaterial 
          color={element.color} 
          emissive={element.color}
          emissiveIntensity={hovered ? 0.8 : 0.2}
          roughness={0.2}
          metalness={0.8}
          clearcoat={1}
          transparent
          opacity={0.9}
        />
      </mesh>

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
