import { useState } from 'react';
import { VortexScene } from './components/VortexScene';
import { OverlayUI } from './components/OverlayUI';
import type { ElementData } from './data/elements';

function App() {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);

  return (
    <div className="app-container">
      {/* 3D Canvas Layer */}
      <div className="canvas-wrapper">
        <VortexScene onSelectElement={setSelectedElement} />
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
          <OverlayUI element={selectedElement} />
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
