import React from 'react';
import { Layers, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import ExplodedProductViewer from '../../components/three/ExplodedProductViewer';

export const ExplodedObjectStory = ({ sectionData }) => {
  return (
    <section 
      id="exploded"
      className="w-full py-28 sm:py-36 bg-[#171717] text-[#F4F2EE] border-b border-white/10"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#A14F39] mb-3">
            <Layers className="w-3.5 h-3.5 text-[#A14F39]" />
            <span>DISSECTED ARCHITECTURE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.04]">
            {sectionData?.title || 'Nothing to Hide. The Exploded View.'}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#A8A7A4] leading-relaxed">
            {sectionData?.description || 'True luxury is structural integrity that welcomes forensic inspection. Scrub the vector slider below to separate MONO 001 into its five primary engineering sub-assemblies.'}
          </p>
        </div>

        {/* Dedicated Exploded Product Viewer Studio */}
        <div className="w-full">
          <ExplodedProductViewer
            color="#634735"
            roughness={0.5}
            metalness={0.05}
            isDarkStage={true}
          />
        </div>

        {/* Engineering Philosophy Footnote */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-mono text-[#A8A7A4]">
          <div>
            <strong className="block text-white mb-1">01 / Demountable Architecture</strong>
            <span>Every sub-assembly is engineered for non-destructive maintenance, refurbishment, or reupholstery after decades of living.</span>
          </div>
          <div>
            <strong className="block text-white mb-1">02 / Thermal Material Symbiosis</strong>
            <span>Differential expansion coefficients between cast bronze, aluminum, and timber are buffered by elastomeric titanium isolators.</span>
          </div>
          <div>
            <strong className="block text-white mb-1">03 / Zero-Landfill Lifecycle</strong>
            <span>100% noble materials: unblended wood, pure brass, aerospace aluminum, and biodegradable vegetable-tanned hide.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExplodedObjectStory;
