export interface Isotope {
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

export const elements: ElementData[] = [
  {
    "atomicNumber": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "atomicMass": 1.008,
    "group": 1,
    "period": 1,
    "category": "diatomic nonmetal",
    "radius": 1.5,
    "color": "#ff3333",
    "electronConfiguration": "1s1",
    "summary": "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
    "protons": 1,
    "baseNeutrons": 0,
    "isotopes": [
      {
        "massNumber": 1,
        "neutrons": 0,
        "abundance": 80
      },
      {
        "massNumber": 2,
        "neutrons": 1,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 2,
    "symbol": "He",
    "name": "Helium",
    "atomicMass": 4.0026022,
    "group": 18,
    "period": 1,
    "category": "noble gas",
    "radius": 1.5,
    "color": "#cc33ff",
    "electronConfiguration": "1s2",
    "summary": "Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements.",
    "protons": 2,
    "baseNeutrons": 2,
    "isotopes": [
      {
        "massNumber": 3,
        "neutrons": 1,
        "abundance": 10
      },
      {
        "massNumber": 4,
        "neutrons": 2,
        "abundance": 80
      },
      {
        "massNumber": 5,
        "neutrons": 3,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 3,
    "symbol": "Li",
    "name": "Lithium",
    "atomicMass": 6.94,
    "group": 1,
    "period": 2,
    "category": "alkali metal",
    "radius": 1.5,
    "color": "#3333ff",
    "electronConfiguration": "1s2 2s1",
    "summary": "Lithium (from Greek:λίθος lithos, \"stone\") is a chemical element with the symbol Li and atomic number 3. It is a soft, silver-white metal belonging to the alkali metal group of chemical elements. Under standard conditions it is the lightest metal and the least dense solid element.",
    "protons": 3,
    "baseNeutrons": 4,
    "isotopes": [
      {
        "massNumber": 6,
        "neutrons": 3,
        "abundance": 10
      },
      {
        "massNumber": 7,
        "neutrons": 4,
        "abundance": 80
      },
      {
        "massNumber": 8,
        "neutrons": 5,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 4,
    "symbol": "Be",
    "name": "Beryllium",
    "atomicMass": 9.01218315,
    "group": 2,
    "period": 2,
    "category": "alkaline earth metal",
    "radius": 1.5,
    "color": "#33ccff",
    "electronConfiguration": "1s2 2s2",
    "summary": "Beryllium is a chemical element with symbol Be and atomic number 4. It is created through stellar nucleosynthesis and is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements in minerals.",
    "protons": 4,
    "baseNeutrons": 5,
    "isotopes": [
      {
        "massNumber": 8,
        "neutrons": 4,
        "abundance": 10
      },
      {
        "massNumber": 9,
        "neutrons": 5,
        "abundance": 80
      },
      {
        "massNumber": 10,
        "neutrons": 6,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 5,
    "symbol": "B",
    "name": "Boron",
    "atomicMass": 10.81,
    "group": 13,
    "period": 2,
    "category": "metalloid",
    "radius": 1.5,
    "color": "#33ff33",
    "electronConfiguration": "1s2 2s2 2p1",
    "summary": "Boron is a metalloid chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in both the Solar system and the Earth's crust. Boron is concentrated on Earth by the water-solubility of its more common naturally occurring compounds, the borate minerals.",
    "protons": 5,
    "baseNeutrons": 6,
    "isotopes": [
      {
        "massNumber": 10,
        "neutrons": 5,
        "abundance": 10
      },
      {
        "massNumber": 11,
        "neutrons": 6,
        "abundance": 80
      },
      {
        "massNumber": 12,
        "neutrons": 7,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 6,
    "symbol": "C",
    "name": "Carbon",
    "atomicMass": 12.011,
    "group": 14,
    "period": 2,
    "category": "polyatomic nonmetal",
    "radius": 1.5,
    "color": "#99ff33",
    "electronConfiguration": "1s2 2s2 2p2",
    "summary": "Carbon (from Latin:carbo \"coal\") is a chemical element with symbol C and atomic number 6. On the periodic table, it is the first (row 2) of six elements in column (group) 14, which have in common the composition of their outer electron shell. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds.",
    "protons": 6,
    "baseNeutrons": 6,
    "isotopes": [
      {
        "massNumber": 11,
        "neutrons": 5,
        "abundance": 10
      },
      {
        "massNumber": 12,
        "neutrons": 6,
        "abundance": 80
      },
      {
        "massNumber": 13,
        "neutrons": 7,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 7,
    "symbol": "N",
    "name": "Nitrogen",
    "atomicMass": 14.007,
    "group": 15,
    "period": 2,
    "category": "diatomic nonmetal",
    "radius": 1.5,
    "color": "#ff3333",
    "electronConfiguration": "1s2 2s2 2p3",
    "summary": "Nitrogen is a chemical element with symbol N and atomic number 7. It is the lightest pnictogen and at room temperature, it is a transparent, odorless diatomic gas. Nitrogen is a common element in the universe, estimated at about seventh in total abundance in the Milky Way and the Solar System.",
    "protons": 7,
    "baseNeutrons": 7,
    "isotopes": [
      {
        "massNumber": 13,
        "neutrons": 6,
        "abundance": 10
      },
      {
        "massNumber": 14,
        "neutrons": 7,
        "abundance": 80
      },
      {
        "massNumber": 15,
        "neutrons": 8,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 8,
    "symbol": "O",
    "name": "Oxygen",
    "atomicMass": 15.999,
    "group": 16,
    "period": 2,
    "category": "diatomic nonmetal",
    "radius": 1.5,
    "color": "#ff3333",
    "electronConfiguration": "1s2 2s2 2p4",
    "summary": "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium.",
    "protons": 8,
    "baseNeutrons": 8,
    "isotopes": [
      {
        "massNumber": 15,
        "neutrons": 7,
        "abundance": 10
      },
      {
        "massNumber": 16,
        "neutrons": 8,
        "abundance": 80
      },
      {
        "massNumber": 17,
        "neutrons": 9,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 9,
    "symbol": "F",
    "name": "Fluorine",
    "atomicMass": 18.9984031636,
    "group": 17,
    "period": 2,
    "category": "diatomic nonmetal",
    "radius": 1.5,
    "color": "#ff3333",
    "electronConfiguration": "1s2 2s2 2p5",
    "summary": "Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive:almost all other elements, including some noble gases, form compounds with fluorine.",
    "protons": 9,
    "baseNeutrons": 10,
    "isotopes": [
      {
        "massNumber": 18,
        "neutrons": 9,
        "abundance": 10
      },
      {
        "massNumber": 19,
        "neutrons": 10,
        "abundance": 80
      },
      {
        "massNumber": 20,
        "neutrons": 11,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 10,
    "symbol": "Ne",
    "name": "Neon",
    "atomicMass": 20.17976,
    "group": 18,
    "period": 2,
    "category": "noble gas",
    "radius": 1.5,
    "color": "#cc33ff",
    "electronConfiguration": "1s2 2s2 2p6",
    "summary": "Neon is a chemical element with symbol Ne and atomic number 10. It is in group 18 (noble gases) of the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.",
    "protons": 10,
    "baseNeutrons": 10,
    "isotopes": [
      {
        "massNumber": 19,
        "neutrons": 9,
        "abundance": 10
      },
      {
        "massNumber": 20,
        "neutrons": 10,
        "abundance": 80
      },
      {
        "massNumber": 21,
        "neutrons": 11,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 11,
    "symbol": "Na",
    "name": "Sodium",
    "atomicMass": 22.989769282,
    "group": 1,
    "period": 3,
    "category": "alkali metal",
    "radius": 1.5,
    "color": "#3333ff",
    "electronConfiguration": "1s2 2s2 2p6 3s1",
    "summary": "Sodium /ˈsoʊdiəm/ is a chemical element with symbol Na (from Ancient Greek Νάτριο) and atomic number 11. It is a soft, silver-white, highly reactive metal. In the Periodic table it is in column 1 (alkali metals), and shares with the other six elements in that column that it has a single electron in its outer shell, which it readily donates, creating a positively charged atom - a cation.",
    "protons": 11,
    "baseNeutrons": 12,
    "isotopes": [
      {
        "massNumber": 22,
        "neutrons": 11,
        "abundance": 10
      },
      {
        "massNumber": 23,
        "neutrons": 12,
        "abundance": 80
      },
      {
        "massNumber": 24,
        "neutrons": 13,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 12,
    "symbol": "Mg",
    "name": "Magnesium",
    "atomicMass": 24.305,
    "group": 2,
    "period": 3,
    "category": "alkaline earth metal",
    "radius": 1.5,
    "color": "#33ccff",
    "electronConfiguration": "1s2 2s2 2p6 3s2",
    "summary": "Magnesium is a chemical element with symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (Group 2, or alkaline earth metals) of the periodic table:they each have the same electron configuration in their outer electron shell producing a similar crystal structure. Magnesium is the ninth most abundant element in the universe.",
    "protons": 12,
    "baseNeutrons": 12,
    "isotopes": [
      {
        "massNumber": 23,
        "neutrons": 11,
        "abundance": 10
      },
      {
        "massNumber": 24,
        "neutrons": 12,
        "abundance": 80
      },
      {
        "massNumber": 25,
        "neutrons": 13,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 13,
    "symbol": "Al",
    "name": "Aluminium",
    "atomicMass": 26.98153857,
    "group": 13,
    "period": 3,
    "category": "post-transition metal",
    "radius": 1.5,
    "color": "#ffcc33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p1",
    "summary": "Aluminium (or aluminum; see different endings) is a chemical element in the boron group with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic, ductile metal. Aluminium is the third most abundant element (after oxygen and silicon), and the most abundant metal, in the Earth's crust.",
    "protons": 13,
    "baseNeutrons": 14,
    "isotopes": [
      {
        "massNumber": 26,
        "neutrons": 13,
        "abundance": 10
      },
      {
        "massNumber": 27,
        "neutrons": 14,
        "abundance": 80
      },
      {
        "massNumber": 28,
        "neutrons": 15,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 14,
    "symbol": "Si",
    "name": "Silicon",
    "atomicMass": 28.085,
    "group": 14,
    "period": 3,
    "category": "metalloid",
    "radius": 1.5,
    "color": "#33ff33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p2",
    "summary": "Silicon is a chemical element with symbol Si and atomic number 14. It is a tetravalent metalloid, more reactive than germanium, the metalloid directly below it in the table. Controversy about silicon's character dates to its discovery.",
    "protons": 14,
    "baseNeutrons": 14,
    "isotopes": [
      {
        "massNumber": 27,
        "neutrons": 13,
        "abundance": 10
      },
      {
        "massNumber": 28,
        "neutrons": 14,
        "abundance": 80
      },
      {
        "massNumber": 29,
        "neutrons": 15,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 15,
    "symbol": "P",
    "name": "Phosphorus",
    "atomicMass": 30.9737619985,
    "group": 15,
    "period": 3,
    "category": "polyatomic nonmetal",
    "radius": 1.5,
    "color": "#99ff33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p3",
    "summary": "Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms—white phosphorus and red phosphorus—but due to its high reactivity, phosphorus is never found as a free element on Earth. Instead phosphorus-containing minerals are almost always present in their maximally oxidised state, as inorganic phosphate rocks.",
    "protons": 15,
    "baseNeutrons": 16,
    "isotopes": [
      {
        "massNumber": 30,
        "neutrons": 15,
        "abundance": 10
      },
      {
        "massNumber": 31,
        "neutrons": 16,
        "abundance": 80
      },
      {
        "massNumber": 32,
        "neutrons": 17,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 16,
    "symbol": "S",
    "name": "Sulfur",
    "atomicMass": 32.06,
    "group": 16,
    "period": 3,
    "category": "polyatomic nonmetal",
    "radius": 1.5,
    "color": "#99ff33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p4",
    "summary": "Sulfur or sulphur (see spelling differences) is a chemical element with symbol S and atomic number 16. It is an abundant, multivalent non-metal. Under normal conditions, sulfur atoms form cyclic octatomic molecules with chemical formula S8.",
    "protons": 16,
    "baseNeutrons": 16,
    "isotopes": [
      {
        "massNumber": 31,
        "neutrons": 15,
        "abundance": 10
      },
      {
        "massNumber": 32,
        "neutrons": 16,
        "abundance": 80
      },
      {
        "massNumber": 33,
        "neutrons": 17,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 17,
    "symbol": "Cl",
    "name": "Chlorine",
    "atomicMass": 35.45,
    "group": 17,
    "period": 3,
    "category": "diatomic nonmetal",
    "radius": 1.5,
    "color": "#ff3333",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p5",
    "summary": "Chlorine is a chemical element with symbol Cl and atomic number 17. It also has a relative atomic mass of 35.5. Chlorine is in the halogen group (17) and is the second lightest halogen following fluorine.",
    "protons": 17,
    "baseNeutrons": 18,
    "isotopes": [
      {
        "massNumber": 34,
        "neutrons": 17,
        "abundance": 10
      },
      {
        "massNumber": 35,
        "neutrons": 18,
        "abundance": 80
      },
      {
        "massNumber": 36,
        "neutrons": 19,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 18,
    "symbol": "Ar",
    "name": "Argon",
    "atomicMass": 39.9481,
    "group": 18,
    "period": 3,
    "category": "noble gas",
    "radius": 1.5,
    "color": "#cc33ff",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6",
    "summary": "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third most common gas in the Earth's atmosphere, at 0.934% (9,340 ppmv), making it over twice as abundant as the next most common atmospheric gas, water vapor (which averages about 4000 ppmv, but varies greatly), and 23 times as abundant as the next most common non-condensing atmospheric gas, carbon dioxide (400 ppmv), and more than 500 times as abundant as the next most common noble gas, neon (18 ppmv).",
    "protons": 18,
    "baseNeutrons": 22,
    "isotopes": [
      {
        "massNumber": 39,
        "neutrons": 21,
        "abundance": 10
      },
      {
        "massNumber": 40,
        "neutrons": 22,
        "abundance": 80
      },
      {
        "massNumber": 41,
        "neutrons": 23,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 19,
    "symbol": "K",
    "name": "Potassium",
    "atomicMass": 39.09831,
    "group": 1,
    "period": 4,
    "category": "alkali metal",
    "radius": 1.5,
    "color": "#3333ff",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s1",
    "summary": "Potassium is a chemical element with symbol K (derived from Neo-Latin, kalium) and atomic number 19. It was first isolated from potash, the ashes of plants, from which its name is derived. In the Periodic table, potassium is one of seven elements in column (group) 1 (alkali metals):they all have a single valence electron in their outer electron shell, which they readily give up to create an atom with a positive charge - a cation, and combine with anions to form salts.",
    "protons": 19,
    "baseNeutrons": 20,
    "isotopes": [
      {
        "massNumber": 38,
        "neutrons": 19,
        "abundance": 10
      },
      {
        "massNumber": 39,
        "neutrons": 20,
        "abundance": 80
      },
      {
        "massNumber": 40,
        "neutrons": 21,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 20,
    "symbol": "Ca",
    "name": "Calcium",
    "atomicMass": 40.0784,
    "group": 2,
    "period": 4,
    "category": "alkaline earth metal",
    "radius": 1.5,
    "color": "#33ccff",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2",
    "summary": "Calcium is a chemical element with symbol Ca and atomic number 20. Calcium is a soft gray alkaline earth metal, fifth-most-abundant element by mass in the Earth's crust. The ion Ca2+ is also the fifth-most-abundant dissolved ion in seawater by both molarity and mass, after sodium, chloride, magnesium, and sulfate.",
    "protons": 20,
    "baseNeutrons": 20,
    "isotopes": [
      {
        "massNumber": 39,
        "neutrons": 19,
        "abundance": 10
      },
      {
        "massNumber": 40,
        "neutrons": 20,
        "abundance": 80
      },
      {
        "massNumber": 41,
        "neutrons": 21,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 21,
    "symbol": "Sc",
    "name": "Scandium",
    "atomicMass": 44.9559085,
    "group": 3,
    "period": 4,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d1",
    "summary": "Scandium is a chemical element with symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been sometimes classified as a rare earth element, together with yttrium and the lanthanoids. It was discovered in 1879 by spectral analysis of the minerals euxenite and gadolinite from Scandinavia.",
    "protons": 21,
    "baseNeutrons": 24,
    "isotopes": [
      {
        "massNumber": 44,
        "neutrons": 23,
        "abundance": 10
      },
      {
        "massNumber": 45,
        "neutrons": 24,
        "abundance": 80
      },
      {
        "massNumber": 46,
        "neutrons": 25,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 22,
    "symbol": "Ti",
    "name": "Titanium",
    "atomicMass": 47.8671,
    "group": 4,
    "period": 4,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d2",
    "summary": "Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density and high strength. It is highly resistant to corrosion in sea water, aqua regia and chlorine.",
    "protons": 22,
    "baseNeutrons": 26,
    "isotopes": [
      {
        "massNumber": 47,
        "neutrons": 25,
        "abundance": 10
      },
      {
        "massNumber": 48,
        "neutrons": 26,
        "abundance": 80
      },
      {
        "massNumber": 49,
        "neutrons": 27,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 23,
    "symbol": "V",
    "name": "Vanadium",
    "atomicMass": 50.94151,
    "group": 5,
    "period": 4,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d3",
    "summary": "Vanadium is a chemical element with symbol V and atomic number 23. It is a hard, silvery grey, ductile and malleable transition metal. The element is found only in chemically combined form in nature, but once isolated artificially, the formation of an oxide layer stabilizes the free metal somewhat against further oxidation.",
    "protons": 23,
    "baseNeutrons": 28,
    "isotopes": [
      {
        "massNumber": 50,
        "neutrons": 27,
        "abundance": 10
      },
      {
        "massNumber": 51,
        "neutrons": 28,
        "abundance": 80
      },
      {
        "massNumber": 52,
        "neutrons": 29,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 24,
    "symbol": "Cr",
    "name": "Chromium",
    "atomicMass": 51.99616,
    "group": 6,
    "period": 4,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s1 3d5",
    "summary": "Chromium is a chemical element with symbol Cr and atomic number 24. It is the first element in Group 6. It is a steely-gray, lustrous, hard and brittle metal which takes a high polish, resists tarnishing, and has a high melting point.",
    "protons": 24,
    "baseNeutrons": 28,
    "isotopes": [
      {
        "massNumber": 51,
        "neutrons": 27,
        "abundance": 10
      },
      {
        "massNumber": 52,
        "neutrons": 28,
        "abundance": 80
      },
      {
        "massNumber": 53,
        "neutrons": 29,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 25,
    "symbol": "Mn",
    "name": "Manganese",
    "atomicMass": 54.9380443,
    "group": 7,
    "period": 4,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d5",
    "summary": "Manganese is a chemical element with symbol Mn and atomic number 25. It is not found as a free element in nature; it is often found in combination with iron, and in many minerals. Manganese is a metal with important industrial metal alloy uses, particularly in stainless steels.",
    "protons": 25,
    "baseNeutrons": 30,
    "isotopes": [
      {
        "massNumber": 54,
        "neutrons": 29,
        "abundance": 10
      },
      {
        "massNumber": 55,
        "neutrons": 30,
        "abundance": 80
      },
      {
        "massNumber": 56,
        "neutrons": 31,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 26,
    "symbol": "Fe",
    "name": "Iron",
    "atomicMass": 55.8452,
    "group": 8,
    "period": 4,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d6",
    "summary": "Iron is a chemical element with symbol Fe (from Latin:ferrum) and atomic number 26. It is a metal in the first transition series. It is by mass the most common element on Earth, forming much of Earth's outer and inner core.",
    "protons": 26,
    "baseNeutrons": 30,
    "isotopes": [
      {
        "massNumber": 55,
        "neutrons": 29,
        "abundance": 10
      },
      {
        "massNumber": 56,
        "neutrons": 30,
        "abundance": 80
      },
      {
        "massNumber": 57,
        "neutrons": 31,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 27,
    "symbol": "Co",
    "name": "Cobalt",
    "atomicMass": 58.9331944,
    "group": 9,
    "period": 4,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d7",
    "summary": "Cobalt is a chemical element with symbol Co and atomic number 27. Like nickel, cobalt in the Earth's crust is found only in chemically combined form, save for small deposits found in alloys of natural meteoric iron. The free element, produced by reductive smelting, is a hard, lustrous, silver-gray metal.",
    "protons": 27,
    "baseNeutrons": 32,
    "isotopes": [
      {
        "massNumber": 58,
        "neutrons": 31,
        "abundance": 10
      },
      {
        "massNumber": 59,
        "neutrons": 32,
        "abundance": 80
      },
      {
        "massNumber": 60,
        "neutrons": 33,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 28,
    "symbol": "Ni",
    "name": "Nickel",
    "atomicMass": 58.69344,
    "group": 10,
    "period": 4,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d8",
    "summary": "Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.",
    "protons": 28,
    "baseNeutrons": 31,
    "isotopes": [
      {
        "massNumber": 58,
        "neutrons": 30,
        "abundance": 10
      },
      {
        "massNumber": 59,
        "neutrons": 31,
        "abundance": 80
      },
      {
        "massNumber": 60,
        "neutrons": 32,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 29,
    "symbol": "Cu",
    "name": "Copper",
    "atomicMass": 63.5463,
    "group": 11,
    "period": 4,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s1 3d10",
    "summary": "Copper is a chemical element with symbol Cu (from Latin:cuprum) and atomic number 29. It is a soft, malleable and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a reddish-orange color.",
    "protons": 29,
    "baseNeutrons": 35,
    "isotopes": [
      {
        "massNumber": 63,
        "neutrons": 34,
        "abundance": 10
      },
      {
        "massNumber": 64,
        "neutrons": 35,
        "abundance": 80
      },
      {
        "massNumber": 65,
        "neutrons": 36,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "atomicMass": 65.382,
    "group": 12,
    "period": 4,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10",
    "summary": "Zinc, in commerce also spelter, is a chemical element with symbol Zn and atomic number 30. It is the first element of group 12 of the periodic table. In some respects zinc is chemically similar to magnesium:its ion is of similar size and its only common oxidation state is +2.",
    "protons": 30,
    "baseNeutrons": 35,
    "isotopes": [
      {
        "massNumber": 64,
        "neutrons": 34,
        "abundance": 10
      },
      {
        "massNumber": 65,
        "neutrons": 35,
        "abundance": 80
      },
      {
        "massNumber": 66,
        "neutrons": 36,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 31,
    "symbol": "Ga",
    "name": "Gallium",
    "atomicMass": 69.7231,
    "group": 13,
    "period": 4,
    "category": "post-transition metal",
    "radius": 1.5,
    "color": "#ffcc33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1",
    "summary": "Gallium is a chemical element with symbol Ga and atomic number 31. Elemental gallium does not occur in free form in nature, but as the gallium(III) compounds that are in trace amounts in zinc ores and in bauxite. Gallium is a soft, silvery metal, and elemental gallium is a brittle solid at low temperatures, and melts at 29.76 °C (85.57 °F) (slightly above room temperature).",
    "protons": 31,
    "baseNeutrons": 39,
    "isotopes": [
      {
        "massNumber": 69,
        "neutrons": 38,
        "abundance": 10
      },
      {
        "massNumber": 70,
        "neutrons": 39,
        "abundance": 80
      },
      {
        "massNumber": 71,
        "neutrons": 40,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 32,
    "symbol": "Ge",
    "name": "Germanium",
    "atomicMass": 72.6308,
    "group": 14,
    "period": 4,
    "category": "metalloid",
    "radius": 1.5,
    "color": "#33ff33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2",
    "summary": "Germanium is a chemical element with symbol Ge and atomic number 32. It is a lustrous, hard, grayish-white metalloid in the carbon group, chemically similar to its group neighbors tin and silicon. Purified germanium is a semiconductor, with an appearance most similar to elemental silicon.",
    "protons": 32,
    "baseNeutrons": 41,
    "isotopes": [
      {
        "massNumber": 72,
        "neutrons": 40,
        "abundance": 10
      },
      {
        "massNumber": 73,
        "neutrons": 41,
        "abundance": 80
      },
      {
        "massNumber": 74,
        "neutrons": 42,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 33,
    "symbol": "As",
    "name": "Arsenic",
    "atomicMass": 74.9215956,
    "group": 15,
    "period": 4,
    "category": "metalloid",
    "radius": 1.5,
    "color": "#33ff33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3",
    "summary": "Arsenic is a chemical element with symbol As and atomic number 33. Arsenic occurs in many minerals, usually in conjunction with sulfur and metals, and also as a pure elemental crystal. Arsenic is a metalloid.",
    "protons": 33,
    "baseNeutrons": 42,
    "isotopes": [
      {
        "massNumber": 74,
        "neutrons": 41,
        "abundance": 10
      },
      {
        "massNumber": 75,
        "neutrons": 42,
        "abundance": 80
      },
      {
        "massNumber": 76,
        "neutrons": 43,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 34,
    "symbol": "Se",
    "name": "Selenium",
    "atomicMass": 78.9718,
    "group": 16,
    "period": 4,
    "category": "polyatomic nonmetal",
    "radius": 1.5,
    "color": "#99ff33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4",
    "summary": "Selenium is a chemical element with symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between those of its periodic table column-adjacent chalcogen elements sulfur and tellurium. It rarely occurs in its elemental state in nature, or as pure ore compounds.",
    "protons": 34,
    "baseNeutrons": 45,
    "isotopes": [
      {
        "massNumber": 78,
        "neutrons": 44,
        "abundance": 10
      },
      {
        "massNumber": 79,
        "neutrons": 45,
        "abundance": 80
      },
      {
        "massNumber": 80,
        "neutrons": 46,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 35,
    "symbol": "Br",
    "name": "Bromine",
    "atomicMass": 79.904,
    "group": 17,
    "period": 4,
    "category": "diatomic nonmetal",
    "radius": 1.5,
    "color": "#ff3333",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5",
    "summary": "Bromine (from Ancient Greek:βρῶμος, brómos, meaning \"stench\") is a chemical element with symbol Br, and atomic number 35. It is a halogen. The element was isolated independently by two chemists, Carl Jacob Löwig and Antoine Jerome Balard, in 1825–1826.",
    "protons": 35,
    "baseNeutrons": 45,
    "isotopes": [
      {
        "massNumber": 79,
        "neutrons": 44,
        "abundance": 10
      },
      {
        "massNumber": 80,
        "neutrons": 45,
        "abundance": 80
      },
      {
        "massNumber": 81,
        "neutrons": 46,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 36,
    "symbol": "Kr",
    "name": "Krypton",
    "atomicMass": 83.7982,
    "group": 18,
    "period": 4,
    "category": "noble gas",
    "radius": 1.5,
    "color": "#cc33ff",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
    "summary": "Krypton (from Greek:κρυπτός kryptos \"the hidden one\") is a chemical element with symbol Kr and atomic number 36. It is a member of group 18 (noble gases) elements. A colorless, odorless, tasteless noble gas, krypton occurs in trace amounts in the atmosphere, is isolated by fractionally distilling liquefied air, and is often used with other rare gases in fluorescent lamps.",
    "protons": 36,
    "baseNeutrons": 48,
    "isotopes": [
      {
        "massNumber": 83,
        "neutrons": 47,
        "abundance": 10
      },
      {
        "massNumber": 84,
        "neutrons": 48,
        "abundance": 80
      },
      {
        "massNumber": 85,
        "neutrons": 49,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 37,
    "symbol": "Rb",
    "name": "Rubidium",
    "atomicMass": 85.46783,
    "group": 1,
    "period": 5,
    "category": "alkali metal",
    "radius": 1.5,
    "color": "#3333ff",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
    "summary": "Rubidium is a chemical element with symbol Rb and atomic number 37. Rubidium is a soft, silvery-white metallic element of the alkali metal group, with an atomic mass of 85.4678. Elemental rubidium is highly reactive, with properties similar to those of other alkali metals, such as very rapid oxidation in air.",
    "protons": 37,
    "baseNeutrons": 48,
    "isotopes": [
      {
        "massNumber": 84,
        "neutrons": 47,
        "abundance": 10
      },
      {
        "massNumber": 85,
        "neutrons": 48,
        "abundance": 80
      },
      {
        "massNumber": 86,
        "neutrons": 49,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "atomicMass": 87.621,
    "group": 2,
    "period": 5,
    "category": "alkaline earth metal",
    "radius": 1.5,
    "color": "#33ccff",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2",
    "summary": "Strontium is a chemical element with symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white or yellowish metallic element that is highly reactive chemically. The metal turns yellow when it is exposed to air.",
    "protons": 38,
    "baseNeutrons": 50,
    "isotopes": [
      {
        "massNumber": 87,
        "neutrons": 49,
        "abundance": 10
      },
      {
        "massNumber": 88,
        "neutrons": 50,
        "abundance": 80
      },
      {
        "massNumber": 89,
        "neutrons": 51,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 39,
    "symbol": "Y",
    "name": "Yttrium",
    "atomicMass": 88.905842,
    "group": 3,
    "period": 5,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
    "summary": "Yttrium is a chemical element with symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and it has often been classified as a \"rare earth element\". Yttrium is almost always found combined with the lanthanides in rare earth minerals and is never found in nature as a free element.",
    "protons": 39,
    "baseNeutrons": 50,
    "isotopes": [
      {
        "massNumber": 88,
        "neutrons": 49,
        "abundance": 10
      },
      {
        "massNumber": 89,
        "neutrons": 50,
        "abundance": 80
      },
      {
        "massNumber": 90,
        "neutrons": 51,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 40,
    "symbol": "Zr",
    "name": "Zirconium",
    "atomicMass": 91.2242,
    "group": 4,
    "period": 5,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2",
    "summary": "Zirconium is a chemical element with symbol Zr and atomic number 40. The name of zirconium is taken from the name of the mineral zircon, the most important source of zirconium. The word zircon comes from the Persian word zargun زرگون, meaning \"gold-colored\".",
    "protons": 40,
    "baseNeutrons": 51,
    "isotopes": [
      {
        "massNumber": 90,
        "neutrons": 50,
        "abundance": 10
      },
      {
        "massNumber": 91,
        "neutrons": 51,
        "abundance": 80
      },
      {
        "massNumber": 92,
        "neutrons": 52,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 41,
    "symbol": "Nb",
    "name": "Niobium",
    "atomicMass": 92.906372,
    "group": 5,
    "period": 5,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4",
    "summary": "Niobium, formerly columbium, is a chemical element with symbol Nb (formerly Cb) and atomic number 41. It is a soft, grey, ductile transition metal, which is often found in the pyrochlore mineral, the main commercial source for niobium, and columbite. The name comes from Greek mythology:Niobe, daughter of Tantalus since it is so similar to tantalum.",
    "protons": 41,
    "baseNeutrons": 52,
    "isotopes": [
      {
        "massNumber": 92,
        "neutrons": 51,
        "abundance": 10
      },
      {
        "massNumber": 93,
        "neutrons": 52,
        "abundance": 80
      },
      {
        "massNumber": 94,
        "neutrons": 53,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 42,
    "symbol": "Mo",
    "name": "Molybdenum",
    "atomicMass": 95.951,
    "group": 6,
    "period": 5,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
    "summary": "Molybdenum is a chemical element with symbol Mo and atomic number 42. The name is from Neo-Latin molybdaenum, from Ancient Greek Μόλυβδος molybdos, meaning lead, since its ores were confused with lead ores. Molybdenum minerals have been known throughout history, but the element was discovered (in the sense of differentiating it as a new entity from the mineral salts of other metals) in 1778 by Carl Wilhelm Scheele.",
    "protons": 42,
    "baseNeutrons": 54,
    "isotopes": [
      {
        "massNumber": 95,
        "neutrons": 53,
        "abundance": 10
      },
      {
        "massNumber": 96,
        "neutrons": 54,
        "abundance": 80
      },
      {
        "massNumber": 97,
        "neutrons": 55,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 43,
    "symbol": "Tc",
    "name": "Technetium",
    "atomicMass": 98,
    "group": 7,
    "period": 5,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5",
    "summary": "Technetium (/tɛkˈniːʃiəm/) is a chemical element with symbol Tc and atomic number 43. It is the element with the lowest atomic number in the periodic table that has no stable isotopes:every form of it is radioactive. Nearly all technetium is produced synthetically, and only minute amounts are found in nature.",
    "protons": 43,
    "baseNeutrons": 55,
    "isotopes": [
      {
        "massNumber": 97,
        "neutrons": 54,
        "abundance": 10
      },
      {
        "massNumber": 98,
        "neutrons": 55,
        "abundance": 80
      },
      {
        "massNumber": 99,
        "neutrons": 56,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 44,
    "symbol": "Ru",
    "name": "Ruthenium",
    "atomicMass": 101.072,
    "group": 8,
    "period": 5,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7",
    "summary": "Ruthenium is a chemical element with symbol Ru and atomic number 44. It is a rare transition metal belonging to the platinum group of the periodic table. Like the other metals of the platinum group, ruthenium is inert to most other chemicals.",
    "protons": 44,
    "baseNeutrons": 57,
    "isotopes": [
      {
        "massNumber": 100,
        "neutrons": 56,
        "abundance": 10
      },
      {
        "massNumber": 101,
        "neutrons": 57,
        "abundance": 80
      },
      {
        "massNumber": 102,
        "neutrons": 58,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 45,
    "symbol": "Rh",
    "name": "Rhodium",
    "atomicMass": 102.905502,
    "group": 9,
    "period": 5,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8",
    "summary": "Rhodium is a chemical element with symbol Rh and atomic number 45. It is a rare, silvery-white, hard, and chemically inert transition metal. It is a member of the platinum group.",
    "protons": 45,
    "baseNeutrons": 58,
    "isotopes": [
      {
        "massNumber": 102,
        "neutrons": 57,
        "abundance": 10
      },
      {
        "massNumber": 103,
        "neutrons": 58,
        "abundance": 80
      },
      {
        "massNumber": 104,
        "neutrons": 59,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 46,
    "symbol": "Pd",
    "name": "Palladium",
    "atomicMass": 106.421,
    "group": 10,
    "period": 5,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10",
    "summary": "Palladium is a chemical element with symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by William Hyde Wollaston. He named it after the asteroid Pallas, which was itself named after the epithet of the Greek goddess Athena, acquired by her when she slew Pallas.",
    "protons": 46,
    "baseNeutrons": 60,
    "isotopes": [
      {
        "massNumber": 105,
        "neutrons": 59,
        "abundance": 10
      },
      {
        "massNumber": 106,
        "neutrons": 60,
        "abundance": 80
      },
      {
        "massNumber": 107,
        "neutrons": 61,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 47,
    "symbol": "Ag",
    "name": "Silver",
    "atomicMass": 107.86822,
    "group": 11,
    "period": 5,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10",
    "summary": "Silver is a chemical element with symbol Ag (Greek:άργυρος árguros, Latin:argentum, both from the Indo-European root *h₂erǵ- for \"grey\" or \"shining\") and atomic number 47. A soft, white, lustrous transition metal, it possesses the highest electrical conductivity, thermal conductivity and reflectivity of any metal. The metal occurs naturally in its pure, free form (native silver), as an alloy with gold and other metals, and in minerals such as argentite and chlorargyrite.",
    "protons": 47,
    "baseNeutrons": 61,
    "isotopes": [
      {
        "massNumber": 107,
        "neutrons": 60,
        "abundance": 10
      },
      {
        "massNumber": 108,
        "neutrons": 61,
        "abundance": 80
      },
      {
        "massNumber": 109,
        "neutrons": 62,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 48,
    "symbol": "Cd",
    "name": "Cadmium",
    "atomicMass": 112.4144,
    "group": 12,
    "period": 5,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10",
    "summary": "Cadmium is a chemical element with symbol Cd and atomic number 48. This soft, bluish-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury. Like zinc, it prefers oxidation state +2 in most of its compounds and like mercury it shows a low melting point compared to transition metals.",
    "protons": 48,
    "baseNeutrons": 64,
    "isotopes": [
      {
        "massNumber": 111,
        "neutrons": 63,
        "abundance": 10
      },
      {
        "massNumber": 112,
        "neutrons": 64,
        "abundance": 80
      },
      {
        "massNumber": 113,
        "neutrons": 65,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 49,
    "symbol": "In",
    "name": "Indium",
    "atomicMass": 114.8181,
    "group": 13,
    "period": 5,
    "category": "post-transition metal",
    "radius": 1.5,
    "color": "#ffcc33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1",
    "summary": "Indium is a chemical element with symbol In and atomic number 49. It is a post-transition metallic element that is rare in Earth's crust. The metal is very soft, malleable and easily fusible, with a melting point higher than sodium, but lower than lithium or tin.",
    "protons": 49,
    "baseNeutrons": 66,
    "isotopes": [
      {
        "massNumber": 114,
        "neutrons": 65,
        "abundance": 10
      },
      {
        "massNumber": 115,
        "neutrons": 66,
        "abundance": 80
      },
      {
        "massNumber": 116,
        "neutrons": 67,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 50,
    "symbol": "Sn",
    "name": "Tin",
    "atomicMass": 118.7107,
    "group": 14,
    "period": 5,
    "category": "post-transition metal",
    "radius": 1.5,
    "color": "#ffcc33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2",
    "summary": "Tin is a chemical element with the symbol Sn (for Latin:stannum) and atomic number 50. It is a main group metal in group 14 of the periodic table. Tin shows a chemical similarity to both neighboring group-14 elements, germanium and lead, and has two possible oxidation states, +2 and the slightly more stable +4.",
    "protons": 50,
    "baseNeutrons": 69,
    "isotopes": [
      {
        "massNumber": 118,
        "neutrons": 68,
        "abundance": 10
      },
      {
        "massNumber": 119,
        "neutrons": 69,
        "abundance": 80
      },
      {
        "massNumber": 120,
        "neutrons": 70,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 51,
    "symbol": "Sb",
    "name": "Antimony",
    "atomicMass": 121.7601,
    "group": 15,
    "period": 5,
    "category": "metalloid",
    "radius": 1.5,
    "color": "#33ff33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3",
    "summary": "Antimony is a chemical element with symbol Sb (from Latin:stibium) and atomic number 51. A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite (Sb2S3). Antimony compounds have been known since ancient times and were used for cosmetics; metallic antimony was also known, but it was erroneously identified as lead upon its discovery.",
    "protons": 51,
    "baseNeutrons": 71,
    "isotopes": [
      {
        "massNumber": 121,
        "neutrons": 70,
        "abundance": 10
      },
      {
        "massNumber": 122,
        "neutrons": 71,
        "abundance": 80
      },
      {
        "massNumber": 123,
        "neutrons": 72,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 52,
    "symbol": "Te",
    "name": "Tellurium",
    "atomicMass": 127.603,
    "group": 16,
    "period": 5,
    "category": "metalloid",
    "radius": 1.5,
    "color": "#33ff33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4",
    "summary": "Tellurium is a chemical element with symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metalloid. Tellurium is chemically related to selenium and sulfur.",
    "protons": 52,
    "baseNeutrons": 76,
    "isotopes": [
      {
        "massNumber": 127,
        "neutrons": 75,
        "abundance": 10
      },
      {
        "massNumber": 128,
        "neutrons": 76,
        "abundance": 80
      },
      {
        "massNumber": 129,
        "neutrons": 77,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 53,
    "symbol": "I",
    "name": "Iodine",
    "atomicMass": 126.904473,
    "group": 17,
    "period": 5,
    "category": "diatomic nonmetal",
    "radius": 1.5,
    "color": "#ff3333",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5",
    "summary": "Iodine is a chemical element with symbol I and atomic number 53. The name is from Greek ἰοειδής ioeidēs, meaning violet or purple, due to the color of iodine vapor. Iodine and its compounds are primarily used in nutrition, and industrially in the production of acetic acid and certain polymers.",
    "protons": 53,
    "baseNeutrons": 74,
    "isotopes": [
      {
        "massNumber": 126,
        "neutrons": 73,
        "abundance": 10
      },
      {
        "massNumber": 127,
        "neutrons": 74,
        "abundance": 80
      },
      {
        "massNumber": 128,
        "neutrons": 75,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 54,
    "symbol": "Xe",
    "name": "Xenon",
    "atomicMass": 131.2936,
    "group": 18,
    "period": 5,
    "category": "noble gas",
    "radius": 1.5,
    "color": "#cc33ff",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6",
    "summary": "Xenon is a chemical element with symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas, that occurs in the Earth's atmosphere in trace amounts. Although generally unreactive, xenon can undergo a few chemical reactions such as the formation of xenon hexafluoroplatinate, the first noble gas compound to be synthesized.",
    "protons": 54,
    "baseNeutrons": 77,
    "isotopes": [
      {
        "massNumber": 130,
        "neutrons": 76,
        "abundance": 10
      },
      {
        "massNumber": 131,
        "neutrons": 77,
        "abundance": 80
      },
      {
        "massNumber": 132,
        "neutrons": 78,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 55,
    "symbol": "Cs",
    "name": "Cesium",
    "atomicMass": 132.905451966,
    "group": 1,
    "period": 6,
    "category": "alkali metal",
    "radius": 1.5,
    "color": "#3333ff",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1",
    "summary": "Caesium or cesium is a chemical element with symbol Cs and atomic number 55. It is a soft, silvery-gold alkali metal with a melting point of 28 °C (82 °F), which makes it one of only five elemental metals that are liquid at or near room temperature. Caesium is an alkali metal and has physical and chemical properties similar to those of rubidium and potassium.",
    "protons": 55,
    "baseNeutrons": 78,
    "isotopes": [
      {
        "massNumber": 132,
        "neutrons": 77,
        "abundance": 10
      },
      {
        "massNumber": 133,
        "neutrons": 78,
        "abundance": 80
      },
      {
        "massNumber": 134,
        "neutrons": 79,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 56,
    "symbol": "Ba",
    "name": "Barium",
    "atomicMass": 137.3277,
    "group": 2,
    "period": 6,
    "category": "alkaline earth metal",
    "radius": 1.5,
    "color": "#33ccff",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2",
    "summary": "Barium is a chemical element with symbol Ba and atomic number 56. It is the fifth element in Group 2, a soft silvery metallic alkaline earth metal. Because of its high chemical reactivity barium is never found in nature as a free element.",
    "protons": 56,
    "baseNeutrons": 81,
    "isotopes": [
      {
        "massNumber": 136,
        "neutrons": 80,
        "abundance": 10
      },
      {
        "massNumber": 137,
        "neutrons": 81,
        "abundance": 80
      },
      {
        "massNumber": 138,
        "neutrons": 82,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 57,
    "symbol": "La",
    "name": "Lanthanum",
    "atomicMass": 138.905477,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1",
    "summary": "Lanthanum is a soft, ductile, silvery-white metallic chemical element with symbol La and atomic number 57. It tarnishes rapidly when exposed to air and is soft enough to be cut with a knife. It gave its name to the lanthanide series, a group of 15 similar elements between lanthanum and lutetium in the periodic table:it is also sometimes considered the first element of the 6th-period transition metals.",
    "protons": 57,
    "baseNeutrons": 82,
    "isotopes": [
      {
        "massNumber": 138,
        "neutrons": 81,
        "abundance": 10
      },
      {
        "massNumber": 139,
        "neutrons": 82,
        "abundance": 80
      },
      {
        "massNumber": 140,
        "neutrons": 83,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 58,
    "symbol": "Ce",
    "name": "Cerium",
    "atomicMass": 140.1161,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1 4f1",
    "summary": "Cerium is a chemical element with symbol Ce and atomic number 58. It is a soft, silvery, ductile metal which easily oxidizes in air. Cerium was named after the dwarf planet Ceres (itself named after the Roman goddess of agriculture).",
    "protons": 58,
    "baseNeutrons": 82,
    "isotopes": [
      {
        "massNumber": 139,
        "neutrons": 81,
        "abundance": 10
      },
      {
        "massNumber": 140,
        "neutrons": 82,
        "abundance": 80
      },
      {
        "massNumber": 141,
        "neutrons": 83,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 59,
    "symbol": "Pr",
    "name": "Praseodymium",
    "atomicMass": 140.907662,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3",
    "summary": "Praseodymium is a chemical element with symbol Pr and atomic number 59. Praseodymium is a soft, silvery, malleable and ductile metal in the lanthanide group. It is valued for its magnetic, electrical, chemical, and optical properties.",
    "protons": 59,
    "baseNeutrons": 82,
    "isotopes": [
      {
        "massNumber": 140,
        "neutrons": 81,
        "abundance": 10
      },
      {
        "massNumber": 141,
        "neutrons": 82,
        "abundance": 80
      },
      {
        "massNumber": 142,
        "neutrons": 83,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 60,
    "symbol": "Nd",
    "name": "Neodymium",
    "atomicMass": 144.2423,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4",
    "summary": "Neodymium is a chemical element with symbol Nd and atomic number 60. It is a soft silvery metal that tarnishes in air. Neodymium was discovered in 1885 by the Austrian chemist Carl Auer von Welsbach.",
    "protons": 60,
    "baseNeutrons": 84,
    "isotopes": [
      {
        "massNumber": 143,
        "neutrons": 83,
        "abundance": 10
      },
      {
        "massNumber": 144,
        "neutrons": 84,
        "abundance": 80
      },
      {
        "massNumber": 145,
        "neutrons": 85,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 61,
    "symbol": "Pm",
    "name": "Promethium",
    "atomicMass": 145,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5",
    "summary": "Promethium, originally prometheum, is a chemical element with the symbol Pm and atomic number 61. All of its isotopes are radioactive; it is one of only two such elements that are followed in the periodic table by elements with stable forms, a distinction shared with technetium. Chemically, promethium is a lanthanide, which forms salts when combined with other elements.",
    "protons": 61,
    "baseNeutrons": 84,
    "isotopes": [
      {
        "massNumber": 144,
        "neutrons": 83,
        "abundance": 10
      },
      {
        "massNumber": 145,
        "neutrons": 84,
        "abundance": 80
      },
      {
        "massNumber": 146,
        "neutrons": 85,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 62,
    "symbol": "Sm",
    "name": "Samarium",
    "atomicMass": 150.362,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6",
    "summary": "Samarium is a chemical element with symbol Sm and atomic number 62. It is a moderately hard silvery metal that readily oxidizes in air. Being a typical member of the lanthanide series, samarium usually assumes the oxidation state +3.",
    "protons": 62,
    "baseNeutrons": 88,
    "isotopes": [
      {
        "massNumber": 149,
        "neutrons": 87,
        "abundance": 10
      },
      {
        "massNumber": 150,
        "neutrons": 88,
        "abundance": 80
      },
      {
        "massNumber": 151,
        "neutrons": 89,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 63,
    "symbol": "Eu",
    "name": "Europium",
    "atomicMass": 151.9641,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7",
    "summary": "Europium is a chemical element with symbol Eu and atomic number 63. It was isolated in 1901 and is named after the continent of Europe. It is a moderately hard, silvery metal which readily oxidizes in air and water.",
    "protons": 63,
    "baseNeutrons": 89,
    "isotopes": [
      {
        "massNumber": 151,
        "neutrons": 88,
        "abundance": 10
      },
      {
        "massNumber": 152,
        "neutrons": 89,
        "abundance": 80
      },
      {
        "massNumber": 153,
        "neutrons": 90,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 64,
    "symbol": "Gd",
    "name": "Gadolinium",
    "atomicMass": 157.253,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1",
    "summary": "Gadolinium is a chemical element with symbol Gd and atomic number 64. It is a silvery-white, malleable and ductile rare-earth metal. It is found in nature only in combined (salt) form.",
    "protons": 64,
    "baseNeutrons": 93,
    "isotopes": [
      {
        "massNumber": 156,
        "neutrons": 92,
        "abundance": 10
      },
      {
        "massNumber": 157,
        "neutrons": 93,
        "abundance": 80
      },
      {
        "massNumber": 158,
        "neutrons": 94,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 65,
    "symbol": "Tb",
    "name": "Terbium",
    "atomicMass": 158.925352,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9",
    "summary": "Terbium is a chemical element with symbol Tb and atomic number 65. It is a silvery-white rare earth metal that is malleable, ductile and soft enough to be cut with a knife. Terbium is never found in nature as a free element, but it is contained in many minerals, including cerite, gadolinite, monazite, xenotime and euxenite.",
    "protons": 65,
    "baseNeutrons": 94,
    "isotopes": [
      {
        "massNumber": 158,
        "neutrons": 93,
        "abundance": 10
      },
      {
        "massNumber": 159,
        "neutrons": 94,
        "abundance": 80
      },
      {
        "massNumber": 160,
        "neutrons": 95,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 66,
    "symbol": "Dy",
    "name": "Dysprosium",
    "atomicMass": 162.5001,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10",
    "summary": "Dysprosium is a chemical element with the symbol Dy and atomic number 66. It is a rare earth element with a metallic silver luster. Dysprosium is never found in nature as a free element, though it is found in various minerals, such as xenotime.",
    "protons": 66,
    "baseNeutrons": 97,
    "isotopes": [
      {
        "massNumber": 162,
        "neutrons": 96,
        "abundance": 10
      },
      {
        "massNumber": 163,
        "neutrons": 97,
        "abundance": 80
      },
      {
        "massNumber": 164,
        "neutrons": 98,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 67,
    "symbol": "Ho",
    "name": "Holmium",
    "atomicMass": 164.930332,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11",
    "summary": "Holmium is a chemical element with symbol Ho and atomic number 67. Part of the lanthanide series, holmium is a rare earth element. Holmium was discovered by Swedish chemist Per Theodor Cleve.",
    "protons": 67,
    "baseNeutrons": 98,
    "isotopes": [
      {
        "massNumber": 164,
        "neutrons": 97,
        "abundance": 10
      },
      {
        "massNumber": 165,
        "neutrons": 98,
        "abundance": 80
      },
      {
        "massNumber": 166,
        "neutrons": 99,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 68,
    "symbol": "Er",
    "name": "Erbium",
    "atomicMass": 167.2593,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12",
    "summary": "Erbium is a chemical element in the lanthanide series, with symbol Er and atomic number 68. A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements on Earth. As such, it is a rare earth element which is associated with several other rare elements in the mineral gadolinite from Ytterby in Sweden, where yttrium, ytterbium, and terbium were discovered.",
    "protons": 68,
    "baseNeutrons": 99,
    "isotopes": [
      {
        "massNumber": 166,
        "neutrons": 98,
        "abundance": 10
      },
      {
        "massNumber": 167,
        "neutrons": 99,
        "abundance": 80
      },
      {
        "massNumber": 168,
        "neutrons": 100,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 69,
    "symbol": "Tm",
    "name": "Thulium",
    "atomicMass": 168.934222,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13",
    "summary": "Thulium is a chemical element with symbol Tm and atomic number 69. It is the thirteenth and antepenultimate (third-last) element in the lanthanide series. Like the other lanthanides, the most common oxidation state is +3, seen in its oxide, halides and other compounds.",
    "protons": 69,
    "baseNeutrons": 100,
    "isotopes": [
      {
        "massNumber": 168,
        "neutrons": 99,
        "abundance": 10
      },
      {
        "massNumber": 169,
        "neutrons": 100,
        "abundance": 80
      },
      {
        "massNumber": 170,
        "neutrons": 101,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 70,
    "symbol": "Yb",
    "name": "Ytterbium",
    "atomicMass": 173.0451,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14",
    "summary": "Ytterbium is a chemical element with symbol Yb and atomic number 70. It is the fourteenth and penultimate element in the lanthanide series, which is the basis of the relative stability of its +2 oxidation state. However, like the other lanthanides, its most common oxidation state is +3, seen in its oxide, halides and other compounds.",
    "protons": 70,
    "baseNeutrons": 103,
    "isotopes": [
      {
        "massNumber": 172,
        "neutrons": 102,
        "abundance": 10
      },
      {
        "massNumber": 173,
        "neutrons": 103,
        "abundance": 80
      },
      {
        "massNumber": 174,
        "neutrons": 104,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 71,
    "symbol": "Lu",
    "name": "Lutetium",
    "atomicMass": 174.96681,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "radius": 1.5,
    "color": "#ff66b2",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1",
    "summary": "Lutetium is a chemical element with symbol Lu and atomic number 71. It is a silvery white metal, which resists corrosion in dry, but not in moist air. It is considered the first element of the 6th-period transition metals and the last element in the lanthanide series, and is traditionally counted among the rare earths.",
    "protons": 71,
    "baseNeutrons": 104,
    "isotopes": [
      {
        "massNumber": 174,
        "neutrons": 103,
        "abundance": 10
      },
      {
        "massNumber": 175,
        "neutrons": 104,
        "abundance": 80
      },
      {
        "massNumber": 176,
        "neutrons": 105,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 72,
    "symbol": "Hf",
    "name": "Hafnium",
    "atomicMass": 178.492,
    "group": 4,
    "period": 6,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2",
    "summary": "Hafnium is a chemical element with symbol Hf and atomic number 72. A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in zirconium minerals. Its existence was predicted by Dmitri Mendeleev in 1869, though it was not identified until 1923, making it the penultimate stable element to be discovered (rhenium was identified two years later).",
    "protons": 72,
    "baseNeutrons": 106,
    "isotopes": [
      {
        "massNumber": 177,
        "neutrons": 105,
        "abundance": 10
      },
      {
        "massNumber": 178,
        "neutrons": 106,
        "abundance": 80
      },
      {
        "massNumber": 179,
        "neutrons": 107,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 73,
    "symbol": "Ta",
    "name": "Tantalum",
    "atomicMass": 180.947882,
    "group": 5,
    "period": 6,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3",
    "summary": "Tantalum is a chemical element with symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, an antihero from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.",
    "protons": 73,
    "baseNeutrons": 108,
    "isotopes": [
      {
        "massNumber": 180,
        "neutrons": 107,
        "abundance": 10
      },
      {
        "massNumber": 181,
        "neutrons": 108,
        "abundance": 80
      },
      {
        "massNumber": 182,
        "neutrons": 109,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 74,
    "symbol": "W",
    "name": "Tungsten",
    "atomicMass": 183.841,
    "group": 6,
    "period": 6,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4",
    "summary": "Tungsten, also known as wolfram, is a chemical element with symbol W and atomic number 74. The word tungsten comes from the Swedish language tung sten, which directly translates to heavy stone. Its name in Swedish is volfram, however, in order to distinguish it from scheelite, which in Swedish is alternatively named tungsten.",
    "protons": 74,
    "baseNeutrons": 110,
    "isotopes": [
      {
        "massNumber": 183,
        "neutrons": 109,
        "abundance": 10
      },
      {
        "massNumber": 184,
        "neutrons": 110,
        "abundance": 80
      },
      {
        "massNumber": 185,
        "neutrons": 111,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 75,
    "symbol": "Re",
    "name": "Rhenium",
    "atomicMass": 186.2071,
    "group": 7,
    "period": 6,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5",
    "summary": "Rhenium is a chemical element with symbol Re and atomic number 75. It is a silvery-white, heavy, third-row transition metal in group 7 of the periodic table. With an estimated average concentration of 1 part per billion (ppb), rhenium is one of the rarest elements in the Earth's crust.",
    "protons": 75,
    "baseNeutrons": 111,
    "isotopes": [
      {
        "massNumber": 185,
        "neutrons": 110,
        "abundance": 10
      },
      {
        "massNumber": 186,
        "neutrons": 111,
        "abundance": 80
      },
      {
        "massNumber": 187,
        "neutrons": 112,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 76,
    "symbol": "Os",
    "name": "Osmium",
    "atomicMass": 190.233,
    "group": 8,
    "period": 6,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6",
    "summary": "Osmium (from Greek osme (ὀσμή) meaning \"smell\") is a chemical element with symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores. Osmium is the densest naturally occurring element, with a density of 22.59 g/cm3.",
    "protons": 76,
    "baseNeutrons": 114,
    "isotopes": [
      {
        "massNumber": 189,
        "neutrons": 113,
        "abundance": 10
      },
      {
        "massNumber": 190,
        "neutrons": 114,
        "abundance": 80
      },
      {
        "massNumber": 191,
        "neutrons": 115,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 77,
    "symbol": "Ir",
    "name": "Iridium",
    "atomicMass": 192.2173,
    "group": 9,
    "period": 6,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7",
    "summary": "Iridium is a chemical element with symbol Ir and atomic number 77. A very hard, brittle, silvery-white transition metal of the platinum group, iridium is generally credited with being the second densest element (after osmium) based on measured density, although calculations involving the space lattices of the elements show that iridium is denser. It is also the most corrosion-resistant metal, even at temperatures as high as 2000 °C. Although only certain molten salts and halogens are corrosive to solid iridium, finely divided iridium dust is much more reactive and can be flammable.",
    "protons": 77,
    "baseNeutrons": 115,
    "isotopes": [
      {
        "massNumber": 191,
        "neutrons": 114,
        "abundance": 10
      },
      {
        "massNumber": 192,
        "neutrons": 115,
        "abundance": 80
      },
      {
        "massNumber": 193,
        "neutrons": 116,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 78,
    "symbol": "Pt",
    "name": "Platinum",
    "atomicMass": 195.0849,
    "group": 10,
    "period": 6,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d9",
    "summary": "Platinum is a chemical element with symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, gray-white transition metal. Its name is derived from the Spanish term platina, which is literally translated into \"little silver\".",
    "protons": 78,
    "baseNeutrons": 117,
    "isotopes": [
      {
        "massNumber": 194,
        "neutrons": 116,
        "abundance": 10
      },
      {
        "massNumber": 195,
        "neutrons": 117,
        "abundance": 80
      },
      {
        "massNumber": 196,
        "neutrons": 118,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 79,
    "symbol": "Au",
    "name": "Gold",
    "atomicMass": 196.9665695,
    "group": 11,
    "period": 6,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d10",
    "summary": "Gold is a chemical element with symbol Au (from Latin:aurum) and atomic number 79. In its purest form, it is a bright, slightly reddish yellow, dense, soft, malleable and ductile metal. Chemically, gold is a transition metal and a group 11 element.",
    "protons": 79,
    "baseNeutrons": 118,
    "isotopes": [
      {
        "massNumber": 196,
        "neutrons": 117,
        "abundance": 10
      },
      {
        "massNumber": 197,
        "neutrons": 118,
        "abundance": 80
      },
      {
        "massNumber": 198,
        "neutrons": 119,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 80,
    "symbol": "Hg",
    "name": "Mercury",
    "atomicMass": 200.5923,
    "group": 12,
    "period": 6,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10",
    "summary": "Mercury is a chemical element with symbol Hg and atomic number 80. It is commonly known as quicksilver and was formerly named hydrargyrum (/haɪˈdrɑːrdʒərəm/). A heavy, silvery d-block element, mercury is the only metallic element that is liquid at standard conditions for temperature and pressure; the only other element that is liquid under these conditions is bromine, though metals such as caesium, gallium, and rubidium melt just above room temperature.",
    "protons": 80,
    "baseNeutrons": 121,
    "isotopes": [
      {
        "massNumber": 200,
        "neutrons": 120,
        "abundance": 10
      },
      {
        "massNumber": 201,
        "neutrons": 121,
        "abundance": 80
      },
      {
        "massNumber": 202,
        "neutrons": 122,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 81,
    "symbol": "Tl",
    "name": "Thallium",
    "atomicMass": 204.38,
    "group": 13,
    "period": 6,
    "category": "post-transition metal",
    "radius": 1.5,
    "color": "#ffcc33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1",
    "summary": "Thallium is a chemical element with symbol Tl and atomic number 81. This soft gray post-transition metal is not found free in nature. When isolated, it resembles tin, but discolors when exposed to air.",
    "protons": 81,
    "baseNeutrons": 123,
    "isotopes": [
      {
        "massNumber": 203,
        "neutrons": 122,
        "abundance": 10
      },
      {
        "massNumber": 204,
        "neutrons": 123,
        "abundance": 80
      },
      {
        "massNumber": 205,
        "neutrons": 124,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 82,
    "symbol": "Pb",
    "name": "Lead",
    "atomicMass": 207.21,
    "group": 14,
    "period": 6,
    "category": "post-transition metal",
    "radius": 1.5,
    "color": "#ffcc33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2",
    "summary": "Lead (/lɛd/) is a chemical element in the carbon group with symbol Pb (from Latin:plumbum) and atomic number 82. Lead is a soft, malleable and heavy post-transition metal. Metallic lead has a bluish-white color after being freshly cut, but it soon tarnishes to a dull grayish color when exposed to air.",
    "protons": 82,
    "baseNeutrons": 125,
    "isotopes": [
      {
        "massNumber": 206,
        "neutrons": 124,
        "abundance": 10
      },
      {
        "massNumber": 207,
        "neutrons": 125,
        "abundance": 80
      },
      {
        "massNumber": 208,
        "neutrons": 126,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 83,
    "symbol": "Bi",
    "name": "Bismuth",
    "atomicMass": 208.980401,
    "group": 15,
    "period": 6,
    "category": "post-transition metal",
    "radius": 1.5,
    "color": "#ffcc33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3",
    "summary": "Bismuth is a chemical element with symbol Bi and atomic number 83. Bismuth, a pentavalent post-transition metal, chemically resembles arsenic and antimony. Elemental bismuth may occur naturally, although its sulfide and oxide form important commercial ores.",
    "protons": 83,
    "baseNeutrons": 126,
    "isotopes": [
      {
        "massNumber": 208,
        "neutrons": 125,
        "abundance": 10
      },
      {
        "massNumber": 209,
        "neutrons": 126,
        "abundance": 80
      },
      {
        "massNumber": 210,
        "neutrons": 127,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 84,
    "symbol": "Po",
    "name": "Polonium",
    "atomicMass": 209,
    "group": 16,
    "period": 6,
    "category": "post-transition metal",
    "radius": 1.5,
    "color": "#ffcc33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4",
    "summary": "Polonium is a chemical element with symbol Po and atomic number 84, discovered in 1898 by Marie Curie and Pierre Curie. A rare and highly radioactive element with no stable isotopes, polonium is chemically similar to bismuth and tellurium, and it occurs in uranium ores. Applications of polonium are few.",
    "protons": 84,
    "baseNeutrons": 125,
    "isotopes": [
      {
        "massNumber": 208,
        "neutrons": 124,
        "abundance": 10
      },
      {
        "massNumber": 209,
        "neutrons": 125,
        "abundance": 80
      },
      {
        "massNumber": 210,
        "neutrons": 126,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 85,
    "symbol": "At",
    "name": "Astatine",
    "atomicMass": 210,
    "group": 17,
    "period": 6,
    "category": "metalloid",
    "radius": 1.5,
    "color": "#33ff33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5",
    "summary": "Astatine is a very rare radioactive chemical element with the chemical symbol At and atomic number 85. It occurs on Earth as the decay product of various heavier elements. All its isotopes are short-lived; the most stable is astatine-210, with a half-life of 8.1 hours.",
    "protons": 85,
    "baseNeutrons": 125,
    "isotopes": [
      {
        "massNumber": 209,
        "neutrons": 124,
        "abundance": 10
      },
      {
        "massNumber": 210,
        "neutrons": 125,
        "abundance": 80
      },
      {
        "massNumber": 211,
        "neutrons": 126,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 86,
    "symbol": "Rn",
    "name": "Radon",
    "atomicMass": 222,
    "group": 18,
    "period": 6,
    "category": "noble gas",
    "radius": 1.5,
    "color": "#cc33ff",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6",
    "summary": "Radon is a chemical element with symbol Rn and atomic number 86. It is a radioactive, colorless, odorless, tasteless noble gas, occurring naturally as a decay product of radium. Its most stable isotope, 222Rn, has a half-life of 3.8 days.",
    "protons": 86,
    "baseNeutrons": 136,
    "isotopes": [
      {
        "massNumber": 221,
        "neutrons": 135,
        "abundance": 10
      },
      {
        "massNumber": 222,
        "neutrons": 136,
        "abundance": 80
      },
      {
        "massNumber": 223,
        "neutrons": 137,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 87,
    "symbol": "Fr",
    "name": "Francium",
    "atomicMass": 223,
    "group": 1,
    "period": 7,
    "category": "alkali metal",
    "radius": 1.5,
    "color": "#3333ff",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1",
    "summary": "Francium is a chemical element with symbol Fr and atomic number 87. It used to be known as eka-caesium and actinium K. It is the second-least electronegative element, behind only caesium. Francium is a highly radioactive metal that decays into astatine, radium, and radon.",
    "protons": 87,
    "baseNeutrons": 136,
    "isotopes": [
      {
        "massNumber": 222,
        "neutrons": 135,
        "abundance": 10
      },
      {
        "massNumber": 223,
        "neutrons": 136,
        "abundance": 80
      },
      {
        "massNumber": 224,
        "neutrons": 137,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 88,
    "symbol": "Ra",
    "name": "Radium",
    "atomicMass": 226,
    "group": 2,
    "period": 7,
    "category": "alkaline earth metal",
    "radius": 1.5,
    "color": "#33ccff",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2",
    "summary": "Radium is a chemical element with symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals. Pure radium is almost colorless, but it readily combines with nitrogen (rather than oxygen) on exposure to air, forming a black surface layer of radium nitride (Ra3N2).",
    "protons": 88,
    "baseNeutrons": 138,
    "isotopes": [
      {
        "massNumber": 225,
        "neutrons": 137,
        "abundance": 10
      },
      {
        "massNumber": 226,
        "neutrons": 138,
        "abundance": 80
      },
      {
        "massNumber": 227,
        "neutrons": 139,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 89,
    "symbol": "Ac",
    "name": "Actinium",
    "atomicMass": 227,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    "summary": "Actinium is a radioactive chemical element with symbol Ac (not to be confused with the abbreviation for an acetyl group) and atomic number 89, which was discovered in 1899. It was the first non-primordial radioactive element to be isolated. Polonium, radium and radon were observed before actinium, but they were not isolated until 1902.",
    "protons": 89,
    "baseNeutrons": 138,
    "isotopes": [
      {
        "massNumber": 226,
        "neutrons": 137,
        "abundance": 10
      },
      {
        "massNumber": 227,
        "neutrons": 138,
        "abundance": 80
      },
      {
        "massNumber": 228,
        "neutrons": 139,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 90,
    "symbol": "Th",
    "name": "Thorium",
    "atomicMass": 232.03774,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    "summary": "Thorium is a chemical element with symbol Th and atomic number 90. A radioactive actinide metal, thorium is one of only two significantly radioactive elements that still occur naturally in large quantities as a primordial element (the other being uranium). It was discovered in 1828 by the Norwegian Reverend and amateur mineralogist Morten Thrane Esmark and identified by the Swedish chemist Jöns Jakob Berzelius, who named it after Thor, the Norse god of thunder.",
    "protons": 90,
    "baseNeutrons": 142,
    "isotopes": [
      {
        "massNumber": 231,
        "neutrons": 141,
        "abundance": 10
      },
      {
        "massNumber": 232,
        "neutrons": 142,
        "abundance": 80
      },
      {
        "massNumber": 233,
        "neutrons": 143,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 91,
    "symbol": "Pa",
    "name": "Protactinium",
    "atomicMass": 231.035882,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2 6d1",
    "summary": "Protactinium is a chemical element with symbol Pa and atomic number 91. It is a dense, silvery-gray metal which readily reacts with oxygen, water vapor and inorganic acids. It forms various chemical compounds where protactinium is usually present in the oxidation state +5, but can also assume +4 and even +2 or +3 states.",
    "protons": 91,
    "baseNeutrons": 140,
    "isotopes": [
      {
        "massNumber": 230,
        "neutrons": 139,
        "abundance": 10
      },
      {
        "massNumber": 231,
        "neutrons": 140,
        "abundance": 80
      },
      {
        "massNumber": 232,
        "neutrons": 141,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 92,
    "symbol": "U",
    "name": "Uranium",
    "atomicMass": 238.028913,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3 6d1",
    "summary": "Uranium is a chemical element with symbol U and atomic number 92. It is a silvery-white metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons.",
    "protons": 92,
    "baseNeutrons": 146,
    "isotopes": [
      {
        "massNumber": 237,
        "neutrons": 145,
        "abundance": 10
      },
      {
        "massNumber": 238,
        "neutrons": 146,
        "abundance": 80
      },
      {
        "massNumber": 239,
        "neutrons": 147,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 93,
    "symbol": "Np",
    "name": "Neptunium",
    "atomicMass": 237,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4 6d1",
    "summary": "Neptunium is a chemical element with symbol Np and atomic number 93. A radioactive actinide metal, neptunium is the first transuranic element. Its position in the periodic table just after uranium, named after the planet Uranus, led to it being named after Neptune, the next planet beyond Uranus.",
    "protons": 93,
    "baseNeutrons": 144,
    "isotopes": [
      {
        "massNumber": 236,
        "neutrons": 143,
        "abundance": 10
      },
      {
        "massNumber": 237,
        "neutrons": 144,
        "abundance": 80
      },
      {
        "massNumber": 238,
        "neutrons": 145,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 94,
    "symbol": "Pu",
    "name": "Plutonium",
    "atomicMass": 244,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6",
    "summary": "Plutonium is a transuranic radioactive chemical element with symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance that tarnishes when exposed to air, and forms a dull coating when oxidized. The element normally exhibits six allotropes and four oxidation states.",
    "protons": 94,
    "baseNeutrons": 150,
    "isotopes": [
      {
        "massNumber": 243,
        "neutrons": 149,
        "abundance": 10
      },
      {
        "massNumber": 244,
        "neutrons": 150,
        "abundance": 80
      },
      {
        "massNumber": 245,
        "neutrons": 151,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 95,
    "symbol": "Am",
    "name": "Americium",
    "atomicMass": 243,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7",
    "summary": "Americium is a radioactive transuranic chemical element with symbol Am and atomic number 95. This member of the actinide series is located in the periodic table under the lanthanide element europium, and thus by analogy was named after the Americas. Americium was first produced in 1944 by the group of Glenn T.Seaborg from Berkeley, California, at the metallurgical laboratory of University of Chicago.",
    "protons": 95,
    "baseNeutrons": 148,
    "isotopes": [
      {
        "massNumber": 242,
        "neutrons": 147,
        "abundance": 10
      },
      {
        "massNumber": 243,
        "neutrons": 148,
        "abundance": 80
      },
      {
        "massNumber": 244,
        "neutrons": 149,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 96,
    "symbol": "Cm",
    "name": "Curium",
    "atomicMass": 247,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1",
    "summary": "Curium is a transuranic radioactive chemical element with symbol Cm and atomic number 96. This element of the actinide series was named after Marie and Pierre Curie – both were known for their research on radioactivity. Curium was first intentionally produced and identified in July 1944 by the group of Glenn T. Seaborg at the University of California, Berkeley.",
    "protons": 96,
    "baseNeutrons": 151,
    "isotopes": [
      {
        "massNumber": 246,
        "neutrons": 150,
        "abundance": 10
      },
      {
        "massNumber": 247,
        "neutrons": 151,
        "abundance": 80
      },
      {
        "massNumber": 248,
        "neutrons": 152,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 97,
    "symbol": "Bk",
    "name": "Berkelium",
    "atomicMass": 247,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9",
    "summary": "Berkelium is a transuranic radioactive chemical element with symbol Bk and atomic number 97. It is a member of the actinide and transuranium element series. It is named after the city of Berkeley, California, the location of the University of California Radiation Laboratory where it was discovered in December 1949.",
    "protons": 97,
    "baseNeutrons": 150,
    "isotopes": [
      {
        "massNumber": 246,
        "neutrons": 149,
        "abundance": 10
      },
      {
        "massNumber": 247,
        "neutrons": 150,
        "abundance": 80
      },
      {
        "massNumber": 248,
        "neutrons": 151,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 98,
    "symbol": "Cf",
    "name": "Californium",
    "atomicMass": 251,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10",
    "summary": "Californium is a radioactive metallic chemical element with symbol Cf and atomic number 98. The element was first made in 1950 at the University of California Radiation Laboratory in Berkeley, by bombarding curium with alpha particles (helium-4 ions). It is an actinide element, the sixth transuranium element to be synthesized, and has the second-highest atomic mass of all the elements that have been produced in amounts large enough to see with the unaided eye (after einsteinium).",
    "protons": 98,
    "baseNeutrons": 153,
    "isotopes": [
      {
        "massNumber": 250,
        "neutrons": 152,
        "abundance": 10
      },
      {
        "massNumber": 251,
        "neutrons": 153,
        "abundance": 80
      },
      {
        "massNumber": 252,
        "neutrons": 154,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 99,
    "symbol": "Es",
    "name": "Einsteinium",
    "atomicMass": 252,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11",
    "summary": "Einsteinium is a synthetic element with symbol Es and atomic number 99. It is the seventh transuranic element, and an actinide. Einsteinium was discovered as a component of the debris of the first hydrogen bomb explosion in 1952, and named after Albert Einstein.",
    "protons": 99,
    "baseNeutrons": 153,
    "isotopes": [
      {
        "massNumber": 251,
        "neutrons": 152,
        "abundance": 10
      },
      {
        "massNumber": 252,
        "neutrons": 153,
        "abundance": 80
      },
      {
        "massNumber": 253,
        "neutrons": 154,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 100,
    "symbol": "Fm",
    "name": "Fermium",
    "atomicMass": 257,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12",
    "summary": "Fermium is a synthetic element with symbol Fm and atomic number 100. It is a member of the actinide series. It is the heaviest element that can be formed by neutron bombardment of lighter elements, and hence the last element that can be prepared in macroscopic quantities, although pure fermium metal has not yet been prepared.",
    "protons": 100,
    "baseNeutrons": 157,
    "isotopes": [
      {
        "massNumber": 256,
        "neutrons": 156,
        "abundance": 10
      },
      {
        "massNumber": 257,
        "neutrons": 157,
        "abundance": 80
      },
      {
        "massNumber": 258,
        "neutrons": 158,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 101,
    "symbol": "Md",
    "name": "Mendelevium",
    "atomicMass": 258,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13",
    "summary": "Mendelevium is a synthetic element with chemical symbol Md (formerly Mv) and atomic number 101. A metallic radioactive transuranic element in the actinide series, it is the first element that currently cannot be produced in macroscopic quantities through neutron bombardment of lighter elements. It is the antepenultimate actinide and the ninth transuranic element.",
    "protons": 101,
    "baseNeutrons": 157,
    "isotopes": [
      {
        "massNumber": 257,
        "neutrons": 156,
        "abundance": 10
      },
      {
        "massNumber": 258,
        "neutrons": 157,
        "abundance": 80
      },
      {
        "massNumber": 259,
        "neutrons": 158,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 102,
    "symbol": "No",
    "name": "Nobelium",
    "atomicMass": 259,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
    "summary": "Nobelium is a synthetic chemical element with symbol No and atomic number 102. It is named in honor of Alfred Nobel, the inventor of dynamite and benefactor of science. A radioactive metal, it is the tenth transuranic element and is the penultimate member of the actinide series.",
    "protons": 102,
    "baseNeutrons": 157,
    "isotopes": [
      {
        "massNumber": 258,
        "neutrons": 156,
        "abundance": 10
      },
      {
        "massNumber": 259,
        "neutrons": 157,
        "abundance": 80
      },
      {
        "massNumber": 260,
        "neutrons": 158,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 103,
    "symbol": "Lr",
    "name": "Lawrencium",
    "atomicMass": 266,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "radius": 1.5,
    "color": "#ff3385",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1",
    "summary": "Lawrencium is a synthetic chemical element with chemical symbol Lr (formerly Lw) and atomic number 103. It is named in honor of Ernest Lawrence, inventor of the cyclotron, a device that was used to discover many artificial radioactive elements. A radioactive metal, lawrencium is the eleventh transuranic element and is also the final member of the actinide series.",
    "protons": 103,
    "baseNeutrons": 163,
    "isotopes": [
      {
        "massNumber": 265,
        "neutrons": 162,
        "abundance": 10
      },
      {
        "massNumber": 266,
        "neutrons": 163,
        "abundance": 80
      },
      {
        "massNumber": 267,
        "neutrons": 164,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 104,
    "symbol": "Rf",
    "name": "Rutherfordium",
    "atomicMass": 267,
    "group": 4,
    "period": 7,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2",
    "summary": "Rutherfordium is a chemical element with symbol Rf and atomic number 104, named in honor of physicist Ernest Rutherford. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 267Rf, has a half-life of approximately 1.3 hours. In the periodic table of the elements, it is a d - block element and the second of the fourth - row transition elements.",
    "protons": 104,
    "baseNeutrons": 163,
    "isotopes": [
      {
        "massNumber": 266,
        "neutrons": 162,
        "abundance": 10
      },
      {
        "massNumber": 267,
        "neutrons": 163,
        "abundance": 80
      },
      {
        "massNumber": 268,
        "neutrons": 164,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 105,
    "symbol": "Db",
    "name": "Dubnium",
    "atomicMass": 268,
    "group": 5,
    "period": 7,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3",
    "summary": "Dubnium is a chemical element with symbol Db and atomic number 105. It is named after the town of Dubna in Russia (north of Moscow), where it was first produced. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, dubnium-268, has a half-life of approximately 28 hours.",
    "protons": 105,
    "baseNeutrons": 163,
    "isotopes": [
      {
        "massNumber": 267,
        "neutrons": 162,
        "abundance": 10
      },
      {
        "massNumber": 268,
        "neutrons": 163,
        "abundance": 80
      },
      {
        "massNumber": 269,
        "neutrons": 164,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 106,
    "symbol": "Sg",
    "name": "Seaborgium",
    "atomicMass": 269,
    "group": 6,
    "period": 7,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4",
    "summary": "Seaborgium is a synthetic element with symbol Sg and atomic number 106. Its most stable isotope 271Sg has a half-life of 1.9 minutes. A more recently discovered isotope 269Sg has a potentially slightly longer half-life (ca.",
    "protons": 106,
    "baseNeutrons": 163,
    "isotopes": [
      {
        "massNumber": 268,
        "neutrons": 162,
        "abundance": 10
      },
      {
        "massNumber": 269,
        "neutrons": 163,
        "abundance": 80
      },
      {
        "massNumber": 270,
        "neutrons": 164,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 107,
    "symbol": "Bh",
    "name": "Bohrium",
    "atomicMass": 270,
    "group": 7,
    "period": 7,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5",
    "summary": "Bohrium is a chemical element with symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 270Bh, has a half-life of approximately 61 seconds.",
    "protons": 107,
    "baseNeutrons": 163,
    "isotopes": [
      {
        "massNumber": 269,
        "neutrons": 162,
        "abundance": 10
      },
      {
        "massNumber": 270,
        "neutrons": 163,
        "abundance": 80
      },
      {
        "massNumber": 271,
        "neutrons": 164,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 108,
    "symbol": "Hs",
    "name": "Hassium",
    "atomicMass": 269,
    "group": 8,
    "period": 7,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6",
    "summary": "Hassium is a chemical element with symbol Hs and atomic number 108, named after the German state of Hesse. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 269Hs, has a half-life of approximately 9.7 seconds, although an unconfirmed metastable state, 277mHs, may have a longer half-life of about 130 seconds. More than 100 atoms of hassium have been synthesized to date.",
    "protons": 108,
    "baseNeutrons": 161,
    "isotopes": [
      {
        "massNumber": 268,
        "neutrons": 160,
        "abundance": 10
      },
      {
        "massNumber": 269,
        "neutrons": 161,
        "abundance": 80
      },
      {
        "massNumber": 270,
        "neutrons": 162,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 109,
    "symbol": "Mt",
    "name": "Meitnerium",
    "atomicMass": 278,
    "group": 9,
    "period": 7,
    "category": "unknown, probably transition metal",
    "radius": 1.5,
    "color": "#cccccc",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7",
    "summary": "Meitnerium is a chemical element with symbol Mt and atomic number 109. It is an extremely radioactive synthetic element (an element not found in nature that can be created in a laboratory). The most stable known isotope, meitnerium-278, has a half-life of 7.6 seconds.",
    "protons": 109,
    "baseNeutrons": 169,
    "isotopes": [
      {
        "massNumber": 277,
        "neutrons": 168,
        "abundance": 10
      },
      {
        "massNumber": 278,
        "neutrons": 169,
        "abundance": 80
      },
      {
        "massNumber": 279,
        "neutrons": 170,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "atomicMass": 281,
    "group": 10,
    "period": 7,
    "category": "unknown, probably transition metal",
    "radius": 1.5,
    "color": "#cccccc",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d8",
    "summary": "Darmstadtium is a chemical element with symbol Ds and atomic number 110. It is an extremely radioactive synthetic element. The most stable known isotope, darmstadtium-281, has a half-life of approximately 10 seconds.",
    "protons": 110,
    "baseNeutrons": 171,
    "isotopes": [
      {
        "massNumber": 280,
        "neutrons": 170,
        "abundance": 10
      },
      {
        "massNumber": 281,
        "neutrons": 171,
        "abundance": 80
      },
      {
        "massNumber": 282,
        "neutrons": 172,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 111,
    "symbol": "Rg",
    "name": "Roentgenium",
    "atomicMass": 282,
    "group": 11,
    "period": 7,
    "category": "unknown, probably transition metal",
    "radius": 1.5,
    "color": "#cccccc",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d9",
    "summary": "Roentgenium is a chemical element with symbol Rg and atomic number 111. It is an extremely radioactive synthetic element (an element that can be created in a laboratory but is not found in nature); the most stable known isotope, roentgenium-282, has a half-life of 2.1 minutes. Roentgenium was first created in 1994 by the GSI Helmholtz Centre for Heavy Ion Research near Darmstadt, Germany.",
    "protons": 111,
    "baseNeutrons": 171,
    "isotopes": [
      {
        "massNumber": 281,
        "neutrons": 170,
        "abundance": 10
      },
      {
        "massNumber": 282,
        "neutrons": 171,
        "abundance": 80
      },
      {
        "massNumber": 283,
        "neutrons": 172,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 112,
    "symbol": "Cn",
    "name": "Copernicium",
    "atomicMass": 285,
    "group": 12,
    "period": 7,
    "category": "transition metal",
    "radius": 1.5,
    "color": "#ff9933",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10",
    "summary": "Copernicium is a chemical element with symbol Cn and atomic number 112. It is an extremely radioactive synthetic element that can only be created in a laboratory. The most stable known isotope, copernicium-285, has a half-life of approximately 29 seconds, but it is possible that this copernicium isotope may have a nuclear isomer with a longer half-life, 8.9 min.",
    "protons": 112,
    "baseNeutrons": 173,
    "isotopes": [
      {
        "massNumber": 284,
        "neutrons": 172,
        "abundance": 10
      },
      {
        "massNumber": 285,
        "neutrons": 173,
        "abundance": 80
      },
      {
        "massNumber": 286,
        "neutrons": 174,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 113,
    "symbol": "Nh",
    "name": "Nihonium",
    "atomicMass": 286,
    "group": 13,
    "period": 7,
    "category": "unknown, probably transition metal",
    "radius": 1.5,
    "color": "#cccccc",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
    "summary": "Nihonium is a chemical element with atomic number 113. It has a symbol Nh. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and is extremely radioactive; its most stable known isotope, nihonium-286, has a half-life of 20 seconds.",
    "protons": 113,
    "baseNeutrons": 173,
    "isotopes": [
      {
        "massNumber": 285,
        "neutrons": 172,
        "abundance": 10
      },
      {
        "massNumber": 286,
        "neutrons": 173,
        "abundance": 80
      },
      {
        "massNumber": 287,
        "neutrons": 174,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 114,
    "symbol": "Fl",
    "name": "Flerovium",
    "atomicMass": 289,
    "group": 14,
    "period": 7,
    "category": "post-transition metal",
    "radius": 1.5,
    "color": "#ffcc33",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2",
    "summary": "Flerovium is a superheavy artificial chemical element with symbol Fl and atomic number 114. It is an extremely radioactive synthetic element. The element is named after the Flerov Laboratory of Nuclear Reactions of the Joint Institute for Nuclear Research in Dubna, Russia, where the element was discovered in 1998.",
    "protons": 114,
    "baseNeutrons": 175,
    "isotopes": [
      {
        "massNumber": 288,
        "neutrons": 174,
        "abundance": 10
      },
      {
        "massNumber": 289,
        "neutrons": 175,
        "abundance": 80
      },
      {
        "massNumber": 290,
        "neutrons": 176,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 115,
    "symbol": "Mc",
    "name": "Moscovium",
    "atomicMass": 289,
    "group": 15,
    "period": 7,
    "category": "unknown, probably post-transition metal",
    "radius": 1.5,
    "color": "#cccccc",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3",
    "summary": "Moscovium is the name of a synthetic superheavy element in the periodic table that has the symbol Mc and has the atomic number 115. It is an extremely radioactive element; its most stable known isotope, moscovium-289, has a half-life of only 220 milliseconds. It is also known as eka-bismuth or simply element 115.",
    "protons": 115,
    "baseNeutrons": 174,
    "isotopes": [
      {
        "massNumber": 288,
        "neutrons": 173,
        "abundance": 10
      },
      {
        "massNumber": 289,
        "neutrons": 174,
        "abundance": 80
      },
      {
        "massNumber": 290,
        "neutrons": 175,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 116,
    "symbol": "Lv",
    "name": "Livermorium",
    "atomicMass": 293,
    "group": 16,
    "period": 7,
    "category": "unknown, probably post-transition metal",
    "radius": 1.5,
    "color": "#cccccc",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4",
    "summary": "Livermorium is a synthetic superheavy element with symbol Lv and atomic number 116. It is an extremely radioactive element that has only been created in the laboratory and has not been observed in nature. The element is named after the Lawrence Livermore National Laboratory in the United States, which collaborated with the Joint Institute for Nuclear Research in Dubna, Russia to discover livermorium in 2000.",
    "protons": 116,
    "baseNeutrons": 177,
    "isotopes": [
      {
        "massNumber": 292,
        "neutrons": 176,
        "abundance": 10
      },
      {
        "massNumber": 293,
        "neutrons": 177,
        "abundance": 80
      },
      {
        "massNumber": 294,
        "neutrons": 178,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 117,
    "symbol": "Ts",
    "name": "Tennessine",
    "atomicMass": 294,
    "group": 17,
    "period": 7,
    "category": "unknown, probably metalloid",
    "radius": 1.5,
    "color": "#cccccc",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5",
    "summary": "Tennessine is a superheavy artificial chemical element with an atomic number of 117 and a symbol of Ts. Also known as eka-astatine or element 117, it is the second-heaviest known element and penultimate element of the 7th period of the periodic table. As of 2016, fifteen tennessine atoms have been observed: six when it was first synthesized in 2010, seven in 2012, and two in 2014.",
    "protons": 117,
    "baseNeutrons": 177,
    "isotopes": [
      {
        "massNumber": 293,
        "neutrons": 176,
        "abundance": 10
      },
      {
        "massNumber": 294,
        "neutrons": 177,
        "abundance": 80
      },
      {
        "massNumber": 295,
        "neutrons": 178,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 118,
    "symbol": "Og",
    "name": "Oganesson",
    "atomicMass": 294,
    "group": 18,
    "period": 7,
    "category": "unknown, predicted to be noble gas",
    "radius": 1.5,
    "color": "#cccccc",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6",
    "summary": "Oganesson is IUPAC's name for the transactinide element with the atomic number 118 and element symbol Og. It is also known as eka-radon or element 118, and on the periodic table of the elements it is a p-block element and the last one of the 7th period. Oganesson is currently the only synthetic member of group 18.",
    "protons": 118,
    "baseNeutrons": 176,
    "isotopes": [
      {
        "massNumber": 293,
        "neutrons": 175,
        "abundance": 10
      },
      {
        "massNumber": 294,
        "neutrons": 176,
        "abundance": 80
      },
      {
        "massNumber": 295,
        "neutrons": 177,
        "abundance": 10
      }
    ]
  },
  {
    "atomicNumber": 119,
    "symbol": "Uue",
    "name": "Ununennium",
    "atomicMass": 315,
    "group": 1,
    "period": 8,
    "category": "unknown, but predicted to be an alkali metal",
    "radius": 1.5,
    "color": "#cccccc",
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6 8s1",
    "summary": "Ununennium, also known as eka-francium or simply element 119, is the hypothetical chemical element with symbol Uue and atomic number 119. Ununennium and Uue are the temporary systematic IUPAC name and symbol respectively, until a permanent name is decided upon. In the periodic table of the elements, it is expected to be an s-block element, an alkali metal, and the first element in the eighth period.",
    "protons": 119,
    "baseNeutrons": 196,
    "isotopes": [
      {
        "massNumber": 314,
        "neutrons": 195,
        "abundance": 10
      },
      {
        "massNumber": 315,
        "neutrons": 196,
        "abundance": 80
      },
      {
        "massNumber": 316,
        "neutrons": 197,
        "abundance": 10
      }
    ]
  }
];
