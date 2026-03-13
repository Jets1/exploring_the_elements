import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls, Stars } from '@react-three/drei';
import { ElementSpiral } from './ElementSpiral';
import type { ElementData } from '../data/elements';
import type { Position3D } from '../math/conicalHelix';

interface VortexSceneProps {
  onSelectElement: (el: ElementData | null) => void;
}

export const VortexScene: React.FC<VortexSceneProps> = ({ onSelectElement }) => {
  const cameraControlsRef = useRef<CameraControls | null>(null);

  const handleElementClick = (el: ElementData & Position3D) => {
    onSelectElement(el);
    
    // Fly the camera to look at the element.
    if (cameraControlsRef.current) {
      // We calculate a position perfectly distanced outside the vortex looking inward
      // Distance from element based roughly on its scale
      const dist = 5 + el.radius * 2;
      
      // Calculate a vector outward from the origin through the element
      const length = Math.sqrt(el.x * el.x + el.z * el.z);
      const nx = el.x / length;
      const nz = el.z / length;
      
      // Position the camera outside looking at the element
      const camX = el.x + nx * dist;
      const camY = el.y + 2; // slightly above
      const camZ = el.z + nz * dist;
      
      cameraControlsRef.current.setLookAt(
        camX, camY, camZ, // camera position
        el.x, el.y, el.z, // look at target
        true // enable transition
      );
    }
  };

  const handlePointerMissed = () => {
    onSelectElement(null);
    if (cameraControlsRef.current) {
      // Zoom out to see the whole vortex
      cameraControlsRef.current.setLookAt(
        30, 20, 30, // camera position
        0, 0, 0,    // look at target
        true
      );
    }
  };

  return (
    <Canvas 
      camera={{ position: [30, 20, 30], fov: 45 }}
      onPointerMissed={handlePointerMissed}
    >
      <color attach="background" args={['#050510']} />
      
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, 0, -10]} intensity={0.5} color="#44aaff" />
      
      {/* Environment */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <fog attach="fog" args={['#050510', 20, 100]} />
      
      {/* Controls */}
      <CameraControls ref={cameraControlsRef} makeDefault />
      
      {/* Core Math / Physics */}
      <ElementSpiral onElementClick={handleElementClick} />
      
    </Canvas>
  );
};
