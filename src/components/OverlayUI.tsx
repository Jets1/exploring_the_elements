import React from 'react';
import type { ElementData } from '../data/elements';
import { motion, AnimatePresence } from 'framer-motion';

interface OverlayUIProps {
  element: ElementData | null;
}

export const OverlayUI: React.FC<OverlayUIProps> = ({ element }) => {
  return (
    <AnimatePresence>
      {element && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="element-dashboard"
        >
          <div className="card-header" style={{ borderColor: element.color }}>
             <h1 style={{ color: element.color }}>{element.symbol}</h1>
             <h2>{element.atomicNumber} - {element.name}</h2>
          </div>
          
          <div className="card-body">
             <div className="stat-row">
                 <span className="stat-label">Category</span>
                 <span className="stat-value" style={{ color: element.color }}>{element.category}</span>
             </div>
             <div className="stat-row">
                 <span className="stat-label">Atomic Mass</span>
                 <span className="stat-value">{element.atomicMass} u</span>
             </div>
             <div className="stat-row">
                 <span className="stat-label">Electron Config</span>
                 <span className="stat-value config">{element.electronConfiguration}</span>
             </div>
             
             <div className="summary-text">
                 {element.summary}
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
