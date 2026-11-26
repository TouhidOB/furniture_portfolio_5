import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, RotateCw, ArrowRight, Check, Sliders, Sun, Moon } from 'lucide-react';
import ObjectScene from '../../components/three/ObjectScene';

const FINISHES = [
  { id: 'walnut', name: 'American Walnut', hex: '#634735', roughness: 0.5, metalness: 0.04 },
  { id: 'oak', name: 'European Smoked Oak', hex: '#4A4139', roughness: 0.65, metalness: 0.04 },
  { id: 'leather', name: 'Tuscan Saddle Leather', hex: '#8B5135', roughness: 0.7, metalness: 0.05 },
  { id: 'bronze', name: 'Cast Architectural Bronze', hex: '#584C3E', roughness: 0.45, metalness: 0.25 }
];

export const InspectionStudio = ({ sectionData }) => {
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]);
  const [isDarkStage, setIsDarkStage] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0.4);

  return (
    <section 
      id="studio"
      className={`w-full py-28 sm:py-36 border-b transition-colors duration-700 ${
        isDarkStage 
          ? 'bg-[#171717] text-[#F4F2EE] border-white/10' 
          : 'bg-white text-[#171717] border-[#D8D4CE]'
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono uppercase tracking-widest mb-3 ${
              isDarkStage ? 'bg-white/10 border-white/10 text-[#A14F39]' : 'bg-[#F4F2EE] border-[#D8D4CE] text-[#A14F39]'
            }`}>
              <Eye className="w-3.5 h-3.5 text-[#A14F39]" />
              <span>3D ORBITAL INSPECTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">
              {sectionData?.title || 'Interactive Inspection Studio.'}
            </h2>
            <p className={`mt-3 text-base sm:text-lg leading-relaxed ${isDarkStage ? 'text-[#A8A7A4]' : 'text-[#74716C]'}`}>
              {sectionData?.description || 'Rotate, orbit, and toggle finishes in real-time WebGL. Examine the junction points and chamfers from every angle.'}
            </p>
          </div>

          {/* Stage Controls: Day/Night Studio Toggle */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setIsDarkStage(!isDarkStage)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono transition-all ${
                isDarkStage
                  ? 'bg-white text-[#171717] border-white'
                  : 'bg-[#171717] text-white border-[#171717]'
              }`}
            >
              {isDarkStage ? <Sun className="w-3.5 h-3.5 text-[#A14F39]" /> : <Moon className="w-3.5 h-3.5 text-[#A14F39]" />}
              <span>{isDarkStage ? 'Gallery White Stage' : 'Carbon Dark Stage'}</span>
            </button>
          </div>
        </div>

        {/* 3D Scene Stage Box */}
        <div className={`relative w-full aspect-[16/10] sm:aspect-[21/9] min-h-[480px] rounded-3xl overflow-hidden border transition-all ${
          isDarkStage ? 'bg-[#111111] border-white/10' : 'bg-[#F4F2EE] border-[#D8D4CE]'
        }`}>
          <ObjectScene
            color={selectedFinish.hex}
            roughness={selectedFinish.roughness}
            metalness={selectedFinish.metalness}
            rotationY={rotationAngle}
            explodedProgress={0.0}
            isDarkStage={isDarkStage}
            enableOrbit={true}
            cameraPosition={[0, 1.4, 3.8]}
          />

          {/* Floating Orbit Cue */}
          <div className="absolute bottom-6 left-6 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono">
            <RotateCw className="w-3.5 h-3.5 text-[#A14F39]" />
            <span>Click & Drag to Orbit 360°</span>
          </div>

          {/* Floating Finish Selector (Top Right) */}
          <div className="absolute top-6 right-6 flex items-center gap-2 p-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
            {FINISHES.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedFinish(f)}
                className={`w-7 h-7 rounded-full border transition-all flex items-center justify-center ${
                  selectedFinish.id === f.id
                    ? 'border-[#A14F39] ring-2 ring-[#A14F39]/30 scale-110 shadow-md'
                    : 'border-white/20 hover:scale-105'
                }`}
                style={{ backgroundColor: f.hex }}
                title={f.name}
              >
                {selectedFinish.id === f.id && <Check className="w-3 h-3 text-white" />}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InspectionStudio;
