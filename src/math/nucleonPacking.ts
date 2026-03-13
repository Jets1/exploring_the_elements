import * as THREE from 'three';

export interface Nucleon {
  id: string;
  type: 'proton' | 'neutron';
  position: THREE.Vector3;
}

/**
 * Distributes a specific number of protons and neutrons into a densely packed
 * roughly spherical shape to simulate an atomic nucleus.
 * Uses realistic physical packing where Volume ~ A.
 */
export function packNucleus(protons: number, neutrons: number, nucleonRadius: number): Nucleon[] {
  const total = protons + neutrons;
  if (total === 0) return [];
  
  const nucleons: Nucleon[] = [];
  
  const types: ('proton' | 'neutron')[] = [];
  for(let i=0; i < protons; i++) types.push('proton');
  for(let i=0; i < neutrons; i++) types.push('neutron');
  
  // Simple deterministic shuffle to mix protons/neutrons
  for (let i = types.length - 1; i > 0; i--) {
      const j = (i * 9301 + 49297) % 233280 % (i + 1); // Simple seeded PRNG
      const temp = types[i];
      types[i] = types[j];
      types[j] = temp;
  }

  // Golden ratio angle for Fibonacci sphere distribution
  const phi = Math.PI * (3 - Math.sqrt(5));
  
  // The actual packed geometric radius of the entire nucleus.
  // V_nucleus = A * V_nucleon -> R_nucleus^3 = A * R_nucleon^3 -> R_nucleus = R_nucleon * A^(1/3)
  // We add a tiny 15% padding factor so spheres aren't perfectly intersecting
  const nuclearRadius = nucleonRadius * Math.pow(total, 1/3) * 1.15;

  for (let i = 0; i < total; i++) {
    // Determine the distance from the center. 
    // We use a cube root distribution so the volume fills uniformly.
    const volumeIndex = (i + 0.5) / total;
    const r = Math.pow(volumeIndex, 1/3) * nuclearRadius;

    // Fibonacci sphere angular distribution
    const y = 1 - (i / (total - 1 || 1)) * 2; // y goes from 1 to -1. Handle total=1 case.
    const radiusAtY = Math.sqrt(1 - y * y); // radius at y

    const theta = phi * i; // golden angle increment

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    // Apply the volume-filling radius
    const position = new THREE.Vector3(x * r, y * r, z * r);

    // Apply a tiny bit of random jitter so it doesn't look perfectly algorithmic
    const jitter = nucleonRadius * 0.1;
    position.x += (Math.random() - 0.5) * jitter;
    position.y += (Math.random() - 0.5) * jitter;
    position.z += (Math.random() - 0.5) * jitter;

    nucleons.push({
      id: `nucleon-${i}`,
      type: types[i],
      position
    });
  }

  return nucleons;
}
