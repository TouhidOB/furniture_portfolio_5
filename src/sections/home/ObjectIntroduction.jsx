import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Maximize2, ShieldCheck } from 'lucide-react';

export const ObjectIntroduction = ({ sectionData }) => {
  return (
    <section 
      id="intro"
      className="w-full py-28 sm:py-36 bg-[#F4F2EE] text-[#171717] border-b border-[#D8D4CE]"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Oversized Gallery Numbering & Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Oversized Number "001" */}
          <div className="lg:col-span-4">
            <span className="font-display text-7xl sm:text-9xl font-extrabold tracking-tighter text-[#171717]/15 block leading-none select-none">
              001
            </span>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A14F39]">
              <span className="w-2 h-2 rounded-full bg-[#A14F39]" />
              <span>THE INAUGURAL SCULPTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#171717] mt-2 tracking-tight">
              An Exercise in Radical Restraint.
            </h2>
          </div>

          {/* Right: Curatorial Narrative & Architectural Photography */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-lg sm:text-2xl text-[#171717] font-normal leading-relaxed">
              MONO 001 was born from a singular question: <em className="italic font-serif">What is the absolute minimum geometry required to achieve profound anatomical comfort?</em>
            </p>
            <p className="text-base text-[#74716C] leading-relaxed">
              Every decorative flourish has been eliminated. The silhouette is defined entirely by three intersecting elements: a continuous steam-bent American black walnut shell, a hand-stitched full-grain Tuscan saddle leather seat cushion, and a monolithic cast bronze cruciform pedestal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#D8D4CE]">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#74716C] block">Architectural Radius</span>
                <strong className="text-xl font-bold text-[#171717] block mt-1">105° Lumbar Arc</strong>
                <span className="text-xs text-[#74716C] mt-0.5 block">Engineered for spinal neutralization</span>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[#74716C] block">Structural Integrity</span>
                <strong className="text-xl font-bold text-[#171717] block mt-1">Zero Hardware</strong>
                <span className="text-xs text-[#74716C] mt-0.5 block">Concealed mortise & internal dowels</span>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[#74716C] block">Edition Global</span>
                <strong className="text-xl font-bold text-[#171717] block mt-1">50 Examples</strong>
                <span className="text-xs text-[#74716C] mt-0.5 block">Signed & serialized museum archival</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/products/mono-001-lounge-chair"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#A14F39] hover:text-[#8D4431] group"
              >
                <span>Read Curatorial Monograph</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ObjectIntroduction;
