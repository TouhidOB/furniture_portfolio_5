import React, { useState, useEffect, useRef } from 'react';
import { RotateCw, Play, Pause, RotateCcw, MoveHorizontal, Compass, Sparkles } from 'lucide-react';

export const Product360Viewer = ({
  images = [],
  productName = 'MONO 001 Lounge Chair',
  className = ''
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const totalFrames = images.length > 0 ? images.length : 24;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % totalFrames);
    }, 90);
    return () => clearInterval(interval);
  }, [isPlaying, totalFrames]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    if (Math.abs(deltaX) > 12) {
      const step = deltaX > 0 ? 1 : -1;
      setCurrentFrame((prev) => (prev + step + totalFrames) % totalFrames);
      startXRef.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const currentDegrees = Math.round((currentFrame / totalFrames) * 360);

  return (
    <div 
      className={`relative w-full rounded-3xl overflow-hidden bg-[#F4F2EE] border border-[#D8D4CE] flex flex-col justify-between select-none ${className}`}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* 1. Header with Angle Gauge */}
      <div className="p-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8D4CE] text-xs font-mono text-[#171717] shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#A14F39]" />
            <span>AZIMUTH: {currentDegrees}°</span>
          </div>
          <span className="text-xs font-mono text-[#74716C] hidden sm:inline">
            Frame {currentFrame + 1} of {totalFrames}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#D8D4CE] text-xs font-medium text-[#171717] hover:border-[#171717] shadow-sm transition-all"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#A14F39]" /> : <Play className="w-3.5 h-3.5 text-[#A14F39]" />}
            <span>{isPlaying ? 'Pause' : 'Auto Turntable'}</span>
          </button>
          <button
            type="button"
            onClick={() => setCurrentFrame(0)}
            className="p-1.5 rounded-full bg-white border border-[#D8D4CE] text-[#74716C] hover:text-[#171717] shadow-sm transition-all"
            title="Reset to 0° Front Angle"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Interactive Turntable Viewport (Drag to Scrub) */}
      <div 
        className="relative w-full h-[54vh] min-h-[380px] flex items-center justify-center cursor-grab active:cursor-grabbing px-6"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        {/* Dynamic Image Display or High-Quality Procedural Studio Turntable Silhouette */}
        {images.length > 0 && images[currentFrame] ? (
          <img
            src={images[currentFrame]}
            alt={`${productName} turntable frame ${currentFrame}`}
            className="max-h-full max-w-full object-contain pointer-events-none drop-shadow-2xl"
          />
        ) : (
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Visual Turntable Silhouette Stage */}
            <div 
              className="w-72 sm:w-88 aspect-square rounded-full border border-[#D8D4CE] absolute transition-transform duration-150"
              style={{ transform: `scaleY(0.4) rotate(${currentDegrees}deg)` }}
            >
              <div className="w-full h-full rounded-full border border-dashed border-[#A14F39]/40 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A14F39] absolute -top-1" />
              </div>
            </div>

            {/* Stylized Architectural Object Display */}
            <div 
              className="relative z-10 transition-transform duration-200 flex flex-col items-center"
              style={{ transform: `rotateY(${currentDegrees}deg)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80"
                alt={productName}
                className="w-64 sm:w-80 object-contain drop-shadow-2xl pointer-events-none"
              />
            </div>
          </div>
        )}

        {/* Floating Drag Hint Pill */}
        <div className="absolute bottom-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-mono pointer-events-none">
          <MoveHorizontal className="w-3.5 h-3.5 text-[#A14F39]" />
          <span>Click & Drag to Scrub Turntable</span>
        </div>
      </div>

      {/* 3. Scrub Range Bar */}
      <div className="p-6 border-t border-[#D8D4CE] bg-white/60 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[#74716C]">0°</span>
          <input
            type="range"
            min="0"
            max={totalFrames - 1}
            value={currentFrame}
            onChange={(e) => setCurrentFrame(parseInt(e.target.value))}
            className="w-full h-1.5 bg-[#D8D4CE] rounded-lg appearance-none cursor-pointer accent-[#A14F39]"
          />
          <span className="text-xs font-mono text-[#74716C]">360°</span>
        </div>
      </div>
    </div>
  );
};

export default Product360Viewer;
