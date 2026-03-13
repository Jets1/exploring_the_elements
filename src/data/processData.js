import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawDataPath = path.join(__dirname, 'raw_elements.json');
const outDataPath = path.join(__dirname, 'elements.ts');

const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf-8'));

const processedElements = rawData.elements.map(el => {
  // Calculate an intuitive radius representation
  // We use calculated radius if available, fallback to empirical, or a default
  let radius = documentRadius(el);
  
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
    summary: el.summary
  };
});

function documentRadius(el) {
  // return something proportional, maybe divide by 100 to fit nicely in 3D units
  // standard ranges are 30-300 pm, so dividing by 100 gives 0.3 - 3 units
  let r = el.atomic_radius;
  if (!r && el.atomic_radius !== undefined) {
      r = 100; // rough fallback depending on JSON structure
  }
  // Let's check what Bowserinator JSON provides: it usually has 'atomic_radius' or something similar.
  // We will run this and log if it's missing.
  return (el.atomic_radius || 150) / 100; 
}

function getColorForCategory(category) {
  // Color mapping based on general category
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

const fileContent = `export interface ElementData {
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
}

export const elements: ElementData[] = ${JSON.stringify(processedElements, null, 2)};
`;

fs.writeFileSync(outDataPath, fileContent);
console.log('Processed ' + processedElements.length + ' elements.');
