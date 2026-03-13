import React, { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';
import type { ElementData } from '../data/elements';
import type { Position3D } from '../math/conicalHelix';
import { packNucleus } from '../math/nucleonPacking';

interface NucleusParticlesProps {
  elements: (ElementData & Position3D)[];
  activeIsotopes: Record<number, number>; // maps atomicNumber -> requested neutrons
}

export const NucleusParticles: React.FC<NucleusParticlesProps> = ({ elements, activeIsotopes }) => {
  const protonMeshRef = useRef<THREE.InstancedMesh>(null);
  const neutronMeshRef = useRef<THREE.InstancedMesh>(null);

  // Constants
  const NUCLEON_RADIUS = 0.08;
  const PROTON_COLOR = '#ff2a2a';  // Vibrant Red
  const NEUTRON_COLOR = '#2a66ff'; // Vibrant Blue

  // We pre-calculate all nucleon positions across the entire vortex
  const { protonCount, neutronCount, protonPositions, neutronPositions } = useMemo(() => {
    let pCount = 0;
    let nCount = 0;
    const pPos: {x: number, y: number, z: number}[] = [];
    const nPos: {x: number, y: number, z: number}[] = [];

    elements.forEach(el => {
      // Determine how many neutrons to use (user selected Isotope OR base default)
      const currentNeutrons = activeIsotopes[el.atomicNumber] !== undefined 
          ? activeIsotopes[el.atomicNumber] 
          : el.baseNeutrons;
      
      // The radius of the nucleus scales slightly with atomic mass so it fits inside the element sphere
      const scaleArg = el.radius * 0.4;
      
      // Calculate local arrangement
      const nucleons = packNucleus(el.protons, currentNeutrons, scaleArg);

      // Translate local arrangement to the element's actual XYZ position in the vortex
      nucleons.forEach(n => {
        const globalPos = {
          x: el.x + n.position.x,
          y: el.y + n.position.y,
          z: el.z + n.position.z
        };
        
        if (n.type === 'proton') {
          pCount++;
          pPos.push(globalPos);
        } else {
          nCount++;
          nPos.push(globalPos);
        }
      });
    });

    return { protonCount: pCount, neutronCount: nCount, protonPositions: pPos, neutronPositions: nPos };
  }, [elements, activeIsotopes]);

  // Update instance matrices when counts or positions change
  useEffect(() => {
    if (protonMeshRef.current) {
      const dummyObj = new THREE.Object3D();
      protonPositions.forEach((pos, i) => {
        dummyObj.position.set(pos.x, pos.y, pos.z);
        dummyObj.updateMatrix();
        protonMeshRef.current!.setMatrixAt(i, dummyObj.matrix);
      });
      protonMeshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [protonPositions]);

  useEffect(() => {
    if (neutronMeshRef.current) {
      const dummyObj = new THREE.Object3D();
      neutronPositions.forEach((pos, i) => {
        dummyObj.position.set(pos.x, pos.y, pos.z);
        dummyObj.updateMatrix();
        neutronMeshRef.current!.setMatrixAt(i, dummyObj.matrix);
      });
      neutronMeshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [neutronPositions]);

  return (
    <group>
      {/* All Protons in the universe drawn in one pass */}
      {protonCount > 0 && (
          <instancedMesh ref={protonMeshRef} args={[undefined, undefined, protonCount]}>
            <sphereGeometry args={[NUCLEON_RADIUS, 16, 16]} />
            <meshPhysicalMaterial 
               color={PROTON_COLOR}
               emissive={PROTON_COLOR}
               emissiveIntensity={0.5}
               roughness={0.4}
               metalness={0.2}
            />
          </instancedMesh>
      )}

      {/* All Neutrons in the universe drawn in one pass */}
      {neutronCount > 0 && (
          <instancedMesh ref={neutronMeshRef} args={[undefined, undefined, neutronCount]}>
            <sphereGeometry args={[NUCLEON_RADIUS, 16, 16]} />
            <meshPhysicalMaterial 
               color={NEUTRON_COLOR}
               emissive={NEUTRON_COLOR}
               emissiveIntensity={0.2}
               roughness={0.6}
               metalness={0.1}
            />
          </instancedMesh>
      )}
    </group>
  );
};
