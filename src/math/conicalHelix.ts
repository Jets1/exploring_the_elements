import type { ElementData } from '../data/elements';

export interface Position3D {
  x: number;
  y: number;
  z: number;
}

export function calculateConicalHelix(elements: ElementData[]): (ElementData & Position3D)[] {
    return elements.map(el => {
        const slot = getSlotIndex(el.atomicNumber);
        
        // 32 slots range from 0 to 31.
        // We distribute them around 360 degrees (2 * PI)
        const theta = (slot / 32) * Math.PI * 2;
        
        const period = el.period;
        
        // The radius expands by shell to prevent overlapping and create the conical vortex
        const radius = 2 + period * 3.5;
        
        // Y descends primarily by period, but also subtly sweeps downward by slot
        // so that the line connecting them resembles a continuous corkscrew.
        const y = 15 - (period * 4.5) - (slot / 32) * 4.5;
        
        const x = Math.cos(theta) * radius;
        const z = -Math.sin(theta) * radius; // Negative to spiral conventionally
        
        return { ...el, x, y, z };
    });
}

function getSlotIndex(atomicNumber: number): number {
    // 32 Slots mapping chemical groups to an angular position
    // Slot 0: Group 1
    // Slot 1: Group 2
    // Slots 2 to 15: f-block (14 elements)
    // Slots 16 to 25: d-block (10 elements)
    // Slots 26 to 31: p-block (6 elements)
    
    // Group 1
    if ([1, 3, 11, 19, 37, 55, 87].includes(atomicNumber)) return 0;
    // Group 2
    if ([4, 12, 20, 38, 56, 88].includes(atomicNumber)) return 1;
    
    // f-block Period 6 (Ce-Lu 58-71)
    if (atomicNumber >= 58 && atomicNumber <= 71) return 2 + (atomicNumber - 58);
    // f-block Period 7 (Th-Lr 90-103)
    if (atomicNumber >= 90 && atomicNumber <= 103) return 2 + (atomicNumber - 90);
    
    // d-block Period 4 (Sc-Zn 21-30)
    if (atomicNumber >= 21 && atomicNumber <= 30) return 16 + (atomicNumber - 21);
    // d-block Period 5 (Y-Cd 39-48)
    if (atomicNumber >= 39 && atomicNumber <= 48) return 16 + (atomicNumber - 39);
    // d-block Period 6 (La 57, Hf-Hg 72-80)
    if (atomicNumber === 57) return 16;
    if (atomicNumber >= 72 && atomicNumber <= 80) return 17 + (atomicNumber - 72);
    // d-block Period 7 (Ac 89, Rf-Cn 104-112)
    if (atomicNumber === 89) return 16;
    if (atomicNumber >= 104 && atomicNumber <= 112) return 17 + (atomicNumber - 104);
    
    // p-block Period 2 (B-Ne 5-10)
    if (atomicNumber >= 5 && atomicNumber <= 10) return 26 + (atomicNumber - 5);
    // p-block Period 3 (Al-Ar 13-18)
    if (atomicNumber >= 13 && atomicNumber <= 18) return 26 + (atomicNumber - 13);
    // p-block Period 4 (Ga-Kr 31-36)
    if (atomicNumber >= 31 && atomicNumber <= 36) return 26 + (atomicNumber - 31);
    // p-block Period 5 (In-Xe 49-54)
    if (atomicNumber >= 49 && atomicNumber <= 54) return 26 + (atomicNumber - 49);
    // p-block Period 6 (Tl-Rn 81-86)
    if (atomicNumber >= 81 && atomicNumber <= 86) return 26 + (atomicNumber - 81);
    // p-block Period 7 (Nh-Og 113-118)
    if (atomicNumber >= 113 && atomicNumber <= 118) return 26 + (atomicNumber - 113);
    
    // He edge case: Group 18, so it belongs in the last p-block slot (31)
    if (atomicNumber === 2) return 31;
    
    return 0; // Fallback
}
