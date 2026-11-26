import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Eye, ArrowRight, Check } from 'lucide-react';
import ObjectScene from './ObjectScene';

const STATES = [
  { id: 'INITIAL', label: 'Blackout Gallery', desc: 'Pre-reveal stage in complete silence', bg: '#0A0A0A' },
  { id: 'DARK_REVEAL', label: 'Narrow Key Spotlight', desc: 'High-angle beam reveals sculptural silhouette', bg: '#111111' },
  { id: 'CAMERA_APPROACH', label: 'Architectural Approach', desc: 'Optics glide towards anatomical seat angle', bg: '#141414' },
  { id: 'LIGHT_TRANSITION', label: 'Warm Fill Illumination', desc: 'Tuscan warmth washes over walnut woodgrain', bg: '#1A1817' },
  { id: 'OBJECT_ROTATION', label: '360° Volumetric Rotation', desc: 'Full architectural silhouette turns in space', bg: '#22201D' },
  { id: 'STUDIO_REVEAL', label: 'Gallery Transition', desc: 'Stage fades into bright museum gallery white', bg: '#EAE6DF' },
  { id: 'INTERACTIVE', label: 'Inspection Mode', desc: 'User full 3D orbital inspection active', bg: '#F4F2EE' },
  { id: 'COMPLETE', label: 'Acquisition Ready', desc: 'Story complete, custom specifications unlocked', bg: '#F4F2EE' }
];

export const ObjectRevealEngine = ({
  product,
  onComplete,
  className = ''
}) => {
  const [stateIndex, setStateIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0.2);

  const currentState = STATES[stateIndex];
  const isDarkStage = stateIndex <= 4;

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setStateIndex((prev) => {
        if (prev < STATES.length - 1) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          if (onComplete) onComplete();
          return prev;
        }
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isPlaying, onComplete]);

  // Handle continuous rotation during rotation phase
  useEffect(() => {
    if (currentState.id === 'OBJECT_ROTATION') {
      const rotInterval = setInterval(() => {
        setRotationAngle((prev) => prev + 0.05);
      }, 50);
      return () => clearInterval(rotInterval);
    }
  }, [currentState.id]);

  const handleRestart = () => {
    setStateIndex(0);
    setIsPlaying(true);
    setRotationAngle(0.2);
  };

  const handleSkipToInteractive = () => {
    setStateIndex(6); // INTERACTIVE
    setIsPlaying(false);
  };

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden border border-[#D8D4CE]/60 transition-colors duration-1000 ${className}`}
      style={{ backgroundColor: currentState.bg }}
    >
      {/* 1. Reveal HUD Top Bar */}
      <div className="absolute top-0 inset-x-0 z-20 p-6 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-white">
            <span className="w-2 h-2 rounded-full bg-[#A14F39] animate-pulse" />
            <span>PHASE 0{stateIndex + 1} / 0{STATES.length}: {currentState.label}</span>
          </div>
          <span className="text-xs font-mono text-[#A8A7A4] hidden md:inline">
            {currentState.desc}
          </span>
        </div>

        {/* Reveal Playback Controls */}
        <div className="pointer-events-auto flex items-center gap-2 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/10">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-full text-white hover:bg-white/10 transition-colors"
            title={isPlaying ? 'Pause Sequence' : 'Play Sequence'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={handleRestart}
            className="p-1.5 rounded-full text-white hover:bg-white/10 transition-colors"
            title="Replay Reveal Sequence"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleSkipToInteractive}
            className="px-3 py-1 rounded-full text-xs font-mono text-[#A14F39] bg-white/10 hover:bg-white/20 transition-colors"
          >
            Skip to 3D Inspect
          </button>
        </div>
      </div>

      {/* 2. 3D Scene Viewport */}
      <div className="relative w-full h-[64vh] min-h-[480px] sm:h-[72vh] flex items-center justify-center">
        <ObjectScene
          color={product?.color || '#634735'}
          roughness={0.5}
          metalness={0.05}
          rotationY={rotationAngle}
          explodedProgress={0.0}
          isDarkStage={isDarkStage}
          enableOrbit={stateIndex >= 6}
          cameraPosition={
            stateIndex === 0 ? [0, 1.8, 5.2] :
            stateIndex === 1 ? [0, 1.6, 4.6] :
            stateIndex === 2 ? [0, 1.3, 3.4] :
            [0, 1.4, 3.8]
          }
        />
      </div>

      {/* 3. Reveal Stepper Indicator Strip */}
      <div className="p-6 border-t border-black/10 bg-black/30 backdrop-blur-md">
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {STATES.map((st, sIdx) => {
            const isPassed = sIdx <= stateIndex;
            const isCurrent = sIdx === stateIndex;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => {
                  setStateIndex(sIdx);
                  setIsPlaying(false);
                }}
                className={`p-2 rounded-xl text-left border transition-all ${
                  isCurrent
                    ? 'bg-[#A14F39] text-white border-[#A14F39] shadow-md ring-2 ring-[#A14F39]/20'
                    : isPassed
                    ? 'bg-white/10 text-white/90 border-white/20'
                    : 'bg-white/5 text-white/40 border-white/5 hover:bg-white/10'
                }`}
              >
                <span className="block text-[10px] font-mono opacity-80">
                  0{sIdx + 1}
                </span>
                <strong className="block text-[11px] font-medium truncate mt-0.5">
                  {st.label}
                </strong>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default ObjectRevealEngine;
