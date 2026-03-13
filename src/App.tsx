import { useState } from 'react';
import { VortexScene } from './components/VortexScene';
import { OverlayUI } from './components/OverlayUI';
import type { ElementData } from './data/elements';

function App() {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  
  // Tracks which isotope is actively selected for a given element.
  // Maps atomicNumber -> selected neutron count. If undefined, the component falls back to baseNeutrons.
  const [activeIsotopes, setActiveIsotopes] = useState<Record<number, number>>({});

  const handleIsotopeChange = (atomicNumber: number, neutrons: number) => {
    setActiveIsotopes(prev => ({
      ...prev,
      [atomicNumber]: neutrons
    }));
  };

  return (
    <div className="app-container">
      {/* 3D Canvas Layer */}
      <div className="canvas-wrapper">
        <VortexScene onSelectElement={setSelectedElement} activeIsotopes={activeIsotopes} />
      </div>

      {/* 2D HTML UI Layer */}
      <div className="ui-wrapper pointer-events-none">
        
        {/* Title Header */}
        <header className="main-header">
          <div className="logo">Periodic Vortex</div>
          <div className="subtitle">Interactive Spatial Element Architecture</div>
        </header>

        {/* Selected Element Dashboard */}
        <div className="dashboard-container">
          <OverlayUI 
             element={selectedElement} 
             activeIsotopeNeutrons={
                 selectedElement 
                     ? (activeIsotopes[selectedElement.atomicNumber] !== undefined ? activeIsotopes[selectedElement.atomicNumber] : selectedElement.baseNeutrons)
                     : undefined
             }
             onIsotopeSelect={handleIsotopeChange}
           />
        </div>
        
        {/* Helper text */}
        {!selectedElement && (
            <div className="helper-text">
                <p>Drag to orbit &bull; Scroll to zoom &bull; Click any element to focus</p>
            </div>
        )}
      </div>
    </div>
  );
}

export default App;
