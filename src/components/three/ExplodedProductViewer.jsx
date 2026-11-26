import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  Maximize2, 
  RotateCcw, 
  Sliders, 
  Check, 
  Sparkles, 
  Info, 
  Eye, 
  ShieldCheck,
  Cpu
} from 'lucide-react';
import ObjectScene from './ObjectScene';

const COMPONENTS = [
  {
    key: 'backrest',
    label: 'Back Shell',
    subTitle: 'Component No. 01',
    material: 'American Black Walnut',
    spec: 'Steam-bent 18-ply veneer, hand-rubbed organic oil finish',
    tolerance: '±0.25 mm CNC Mill',
    weight: '4.8 kg',
    beaconPos: { top: '24%', left: '46%' }
  },
  {
    key: 'seat_cushion',
    label: 'Anatomical Cushion',
    subTitle: 'Component No. 02',
    material: 'Full-Grain Tuscan Aniline Leather',
    spec: 'Dual-density bio-polyurethane core (52 kg/m³) with goose down cap',
    tolerance: 'Hand-stretched & saddle stitched',
    weight: '3.2 kg',
    beaconPos: { top: '48%', left: '52%' }
  },
  {
    key: 'seat_pan',
    label: 'Structural Sub-Pan',
    subTitle: 'Component No. 03',
    material: 'Aircraft-Grade 6061-T6 Aluminum',
    spec: '5-axis precision machined with ribbed stress dissipation channels',
    tolerance: '±0.05 mm aerospace tolerance',
    weight: '2.6 kg',
    beaconPos: { top: '62%', left: '48%' }
  },
  {
    key: 'pedestal',
    label: 'Cast Quad Pedestal',
    subTitle: 'Component No. 04',
    material: 'Lost-Wax Cast Bronze / Architectural Concrete',
    spec: 'Monolithic cruciform base with concealed 360° fluid-damped bearing',
    tolerance: 'Counter-weighted stability center',
    weight: '14.5 kg',
    beaconPos: { top: '82%', left: '50%' }
  },
  {
    key: 'hardware',
    label: 'Titanium Hardware',
    subTitle: 'Component No. 05',
    material: 'Grade 5 Ti-6Al-4V Titanium',
    spec: 'Custom captive M8 hex fasteners with self-lubricating bronze sleeves',
    tolerance: 'Zero-creak acoustic isolation',
    weight: '0.4 kg',
    beaconPos: { top: '68%', left: '62%' }
  }
];

export const ExplodedProductViewer = ({
  color = '#634735',
  roughness = 0.5,
  metalness = 0.05,
  isDarkStage = true,
  className = ''
}) => {
  const [explodedProgress, setExplodedProgress] = useState(0.85); // start partially exploded for immediate visual excitement
  const [selectedKey, setSelectedKey] = useState('backrest');
  const [rotationAngle, setRotationAngle] = useState(0.45);
  const [isAutoRotate, setIsAutoRotate] = useState(false);

  const activeComponent = COMPONENTS.find(c => c.key === selectedKey) || COMPONENTS[0];

  const handleToggleExplode = () => {
    setExplodedProgress(prev => (prev > 0.4 ? 0.0 : 1.0));
  };

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden border border-[#D8D4CE]/60 ${
      isDarkStage ? 'bg-[#171717] text-[#F4F2EE]' : 'bg-[#F4F2EE] text-[#171717]'
    } ${className}`}>
      
      {/* 1. Header Bar with Mode and Status */}
      <div className="absolute top-0 inset-x-0 z-20 p-6 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-mono uppercase tracking-wider text-[#A14F39]">
            <Layers className="w-3.5 h-3.5 text-[#A14F39]" />
            <span>EXPLODED VIEW ARCHITECTURE</span>
          </div>
          <span className="text-xs font-mono text-[#A8A7A4] hidden sm:inline">
            Separated Sub-Assemblies ({Math.round(explodedProgress * 100)}% Vector Displacement)
          </span>
        </div>

        {/* Explode / Assemble Quick Toggle */}
        <div className="pointer-events-auto flex items-center gap-2 bg-black/50 backdrop-blur-md p-1 rounded-full border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setExplodedProgress(0.0)}
            className={`px-3.5 py-1 rounded-full transition-all ${
              explodedProgress === 0.0
                ? 'bg-[#A14F39] text-white font-medium shadow-sm'
                : 'text-[#A8A7A4] hover:text-white'
            }`}
          >
            Assembled
          </button>
          <button
            type="button"
            onClick={() => setExplodedProgress(1.0)}
            className={`px-3.5 py-1 rounded-full transition-all ${
              explodedProgress === 1.0
                ? 'bg-[#A14F39] text-white font-medium shadow-sm'
                : 'text-[#A8A7A4] hover:text-white'
            }`}
          >
            Exploded (100%)
          </button>
        </div>
      </div>

      {/* 2. Interactive 3D Canvas Stage */}
      <div className="relative w-full h-[62vh] min-h-[460px] sm:h-[68vh] flex items-center justify-center">
        <ObjectScene
          color={color}
          roughness={roughness}
          metalness={metalness}
          rotationY={rotationAngle}
          explodedProgress={explodedProgress}
          selectedComponentKey={selectedKey}
          isDarkStage={isDarkStage}
          enableOrbit={true}
          cameraPosition={[0, 1.4, 4.0]}
        />

        {/* 3. Interactive Floating Component Beacons (Visible when exploded > 0.25) */}
        {explodedProgress > 0.25 && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {COMPONENTS.map((comp) => {
              const isSelected = comp.key === selectedKey;
              return (
                <div
                  key={comp.key}
                  style={{ top: comp.beaconPos.top, left: comp.beaconPos.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-transform duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedKey(comp.key)}
                    className={`group relative flex items-center justify-center p-2 rounded-full backdrop-blur-md transition-all ${
                      isSelected
                        ? 'bg-[#A14F39] text-white ring-4 ring-[#A14F39]/30 scale-110 shadow-lg'
                        : 'bg-black/60 text-[#A8A7A4] hover:text-white hover:bg-black/80 border border-white/20'
                    }`}
                    title={comp.label}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-current block" />
                    
                    {/* Hover Tooltip Tag */}
                    <span className="absolute left-full ml-2.5 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border border-white/10 text-[11px] font-mono whitespace-nowrap text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                      {comp.label}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. Bottom Controls & Component Details Panel */}
      <div className="p-6 sm:p-8 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Slider & Scrub Bar (Left) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 text-[#A8A7A4]">
                <Sliders className="w-3.5 h-3.5 text-[#A14F39]" />
                <span>EXPLOSION VECTOR DISPLACEMENT</span>
              </span>
              <span className="font-semibold text-white">
                {Math.round(explodedProgress * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[11px] font-mono text-[#74716C]">0%</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={explodedProgress}
                onChange={(e) => setExplodedProgress(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#A14F39]"
              />
              <span className="text-[11px] font-mono text-[#74716C]">100%</span>
            </div>

            {/* Quick Component Selector Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {COMPONENTS.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setSelectedKey(c.key)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                    selectedKey === c.key
                      ? 'bg-[#A14F39] text-white font-medium shadow-sm'
                      : 'bg-white/5 text-[#A8A7A4] hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Component Technical Card (Right) */}
          <div className="lg:col-span-6 rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-md">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A14F39] block mb-0.5">
                  {activeComponent.subTitle} · Selected Assembly
                </span>
                <h4 className="text-lg font-bold text-white">
                  {activeComponent.label} — {activeComponent.material}
                </h4>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/10 text-[#A8A7A4]">
                {activeComponent.weight}
              </span>
            </div>

            <p className="mt-2 text-xs text-[#A8A7A4] leading-relaxed">
              {activeComponent.spec}
            </p>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-[#74716C]">Precision Standard:</span>
              <span className="text-emerald-400 font-semibold">{activeComponent.tolerance}</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ExplodedProductViewer;
