import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, Check, SlidersHorizontal } from 'lucide-react';

export const ComparisonIntroduction = ({ sectionData }) => {
  return (
    <section 
      id="compare_intro"
      className="w-full py-28 sm:py-36 bg-[#171717] text-[#F4F2EE] border-b border-white/10"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Curatorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#A14F39]">
              <Scale className="w-3.5 h-3.5 text-[#A14F39]" />
              <span>COMPARATIVE ANALYSIS ENGINE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-[1.04]">
              {sectionData?.title || 'Precision Comparison. Choose With Conviction.'}
            </h2>

            <p className="text-base sm:text-lg text-[#A8A7A4] leading-relaxed">
              {sectionData?.description || 'Select any two or three objects from our collection to analyze dimensions, seating angles, material masses, and fabrication tolerances side by side.'}
            </p>

            <ul className="space-y-3 pt-2 text-xs font-mono text-[#A8A7A4]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#A14F39]" />
                <span>Millimeter-exact spatial footprint & clearance verification</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#A14F39]" />
                <span>Side-by-side material provenance & weight balancing</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#A14F39]" />
                <span>Direct export of architectural CAD / BIM specification files</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                to="/compare"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A14F39] text-white text-xs font-medium hover:bg-[#8D4431] transition-all shadow-lg"
              >
                <span>Launch Comparison Studio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Visual Side-by-Side Silhouette Teaser */}
          <div className="lg:col-span-6 rounded-3xl bg-white/5 border border-white/10 p-8 relative overflow-hidden backdrop-blur-md">
            <div className="grid grid-cols-2 gap-4">
              {/* Silhouette 1 */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="aspect-square flex items-center justify-center p-4">
                  <img
                    src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=400&q=80"
                    alt="MONO 001"
                    className="max-h-full max-w-full object-contain filter invert contrast-125"
                  />
                </div>
                <strong className="block text-sm font-bold text-white mt-2">MONO 001</strong>
                <span className="text-[11px] font-mono text-[#A8A7A4]">Lounge Profile · 88cm</span>
              </div>

              {/* Silhouette 2 */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="aspect-square flex items-center justify-center p-4">
                  <img
                    src="https://images.unsplash.com/photo-1580481077195-c3a821452605?auto=format&fit=crop&w=400&q=80"
                    alt="MONO 002"
                    className="max-h-full max-w-full object-contain filter invert contrast-125"
                  />
                </div>
                <strong className="block text-sm font-bold text-white mt-2">MONO 002</strong>
                <span className="text-[11px] font-mono text-[#A8A7A4]">Accent Profile · 74cm</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A8A7A4]">
              <span>Matrix Tolerance: ±0.1mm</span>
              <span className="text-[#A14F39]">Live Studio Ready</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ComparisonIntroduction;
