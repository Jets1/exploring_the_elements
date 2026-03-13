import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawDataPath = path.join(__dirname, 'raw_elements.json');
const outDataPath = path.join(__dirname, 'elements.ts');

const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf-8'));

const processedElements = rawData.elements.map(el => {
  let radius = documentRadius(el);
  
  // Base isotope is the closest integer to the atomic mass.
  // We'll also provide +1 and +2 neutron variants as common isotopes for demonstration.
  const baseMassNumber = Math.round(el.atomic_mass);
  const protons = el.number;
  const baseNeutrons = baseMassNumber - protons;
  
  // Generate a small array of isotopes
  const isotopes = [
    { massNumber: baseMassNumber - 1, neutrons: baseNeutrons - 1, abundance: 10 },
    { massNumber: baseMassNumber, neutrons: baseNeutrons, abundance: 80 },
    { massNumber: baseMassNumber + 1, neutrons: baseNeutrons + 1, abundance: 10 }
  ].filter(iso => iso.neutrons >= 0); // Can't have negative neutrons
  
  return {
    atomicNumber: el.number,
    symbol: el.symbol,
    name: el.name,
    atomicMass: el.atomic_mass,
    group: el.group,
    period: el.period,
    category: el.category,
    radius: radius,
    color: getColorForCategory(el.category),
    electronConfiguration: el.electron_configuration,
    summary: el.summary,
    protons: protons,
    baseNeutrons: baseNeutrons,
    isotopes: isotopes
  };
});

function documentRadius(el) {
  return (el.atomic_radius || 150) / 100; 
}

function getColorForCategory(category) {
  const map = {
    'diatomic nonmetal': '#ff3333',
    'noble gas': '#cc33ff',
    'alkali metal': '#3333ff',
    'alkaline earth metal': '#33ccff',
    'metalloid': '#33ff33',
    'polyatomic nonmetal': '#99ff33',
    'post-transition metal': '#ffcc33',
    'transition metal': '#ff9933',
    'lanthanide': '#ff66b2',
    'actinide': '#ff3385',
    'unknown, probably transition metal': '#cccccc',
    'unknown, probably post-transition metal': '#cccccc',
    'unknown, probably metalloid': '#cccccc',
    'unknown, predicted to be noble gas': '#cccccc',
    'unknown, but predicted to be an alkali metal': '#cccccc'
  };
  return map[category] || '#ffffff';
}

const fileContent = `export interface Isotope {
  massNumber: number;
  neutrons: number;
  abundance: number;
}

export interface ElementData {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  group: number;
  period: number;
  category: string;
  radius: number;
  color: string;
  electronConfiguration: string;
  summary: string;
  protons: number;
  baseNeutrons: number;
  isotopes: Isotope[];
}

export const elements: ElementData[] = ${JSON.stringify(processedElements, null, 2)};
`;

fs.writeFileSync(outDataPath, fileContent);
console.log('Processed ' + processedElements.length + ' elements with isotope data.');
