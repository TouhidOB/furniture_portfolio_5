import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar, Mail, MapPin } from 'lucide-react';

export const FinalObjectInvitation = ({ sectionData }) => {
  return (
    <section 
      id="invitation"
      className="w-full py-32 sm:py-44 bg-[#171717] text-[#F4F2EE] relative overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A14F39]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-content mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-mono uppercase tracking-widest text-[#A14F39] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#A14F39]" />
          <span>ACQUISITION & ATELIER COMMISSIONS</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.02]">
          {sectionData?.title || 'Live With Less. Feel More.'}
        </h2>

        <p className="mt-6 text-base sm:text-xl text-[#A8A7A4] font-normal max-w-xl mx-auto leading-relaxed">
          {sectionData?.description || 'Commission an archival piece from our Copenhagen or Tokyo ateliers. Each edition is crafted to order with serialized provenance.'}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#A14F39] text-white text-xs font-medium hover:bg-[#8D4431] transition-all shadow-xl shadow-[#A14F39]/20"
          >
            <span>Request Private Gallery Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/objects"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-all"
          >
            <span>Explore All 6 Objects</span>
          </Link>
        </div>

        {/* Gallery Locations Strip */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto gap-8 text-xs font-mono text-[#A8A7A4]">
          <div className="flex flex-col items-center">
            <span className="text-[#A14F39] font-bold mb-1">Copenhagen Gallery</span>
            <span>Bredgade 42 · Inner City</span>
            <span className="text-[11px] text-[#74716C] mt-0.5">By Private Appointment</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#A14F39] font-bold mb-1">Tokyo Atelier</span>
            <span>Minamiaoyama · Minato-ku</span>
            <span className="text-[11px] text-[#74716C] mt-0.5">By Private Appointment</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalObjectInvitation;
