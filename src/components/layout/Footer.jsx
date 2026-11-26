import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Scale, ShieldCheck, Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#171717] text-[#F4F2EE] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                MONO
              </span>
              <span className="w-2 h-2 rounded-full bg-[#A14F39]" />
              <span className="font-mono text-xs tracking-widest text-[#A8A7A4] uppercase">
                OBJECTS
              </span>
            </div>
            <p className="text-sm text-[#A8A7A4] max-w-sm leading-relaxed">
              The Art of Less. Museum-grade collectible furniture designed for permanent living spaces. Monolithic proportions, material honesty, and precision engineering.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#A14F39]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COLLECTIBLE EDITION 2026</span>
            </div>
          </div>

          {/* Column 1: Objects Archive */}
          <div className="space-y-3">
            <span className="block text-xs font-mono uppercase tracking-widest text-[#74716C]">
              OBJECT ARCHIVE
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#A8A7A4]">
              <li><Link to="/products/mono-001-lounge-chair" className="hover:text-white transition-colors">MONO 001 Lounge</Link></li>
              <li><Link to="/products/mono-002-accent-chair" className="hover:text-white transition-colors">MONO 002 Accent</Link></li>
              <li><Link to="/products/mono-003-dining-chair" className="hover:text-white transition-colors">MONO 003 Dining</Link></li>
              <li><Link to="/products/mono-004-dining-table" className="hover:text-white transition-colors">MONO 004 Table</Link></li>
              <li><Link to="/products/mono-005-bench" className="hover:text-white transition-colors">MONO 005 Bench</Link></li>
              <li><Link to="/products/mono-006-console" className="hover:text-white transition-colors">MONO 006 Console</Link></li>
            </ul>
          </div>

          {/* Column 2: Exploration & Tools */}
          <div className="space-y-3">
            <span className="block text-xs font-mono uppercase tracking-widest text-[#74716C]">
              EXPLORATION
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#A8A7A4]">
              <li><Link to="/#exploded" className="hover:text-white transition-colors">Exploded View Engine</Link></li>
              <li><Link to="/compare" className="hover:text-white transition-colors">Comparison Studio</Link></li>
              <li><Link to="/materials" className="hover:text-white transition-colors">Tactile Material Library</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Curated Collections</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Design Journal</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">CMS Studio (Admin)</Link></li>
            </ul>
          </div>

          {/* Column 3: Atelier & Gallery */}
          <div className="space-y-3">
            <span className="block text-xs font-mono uppercase tracking-widest text-[#74716C]">
              GALLERIES
            </span>
            <div className="space-y-3 text-xs text-[#A8A7A4]">
              <div>
                <strong className="block text-white font-mono">Copenhagen Gallery</strong>
                <span className="text-[11px] text-[#74716C]">Bredgade 42, 1260 København</span>
              </div>
              <div>
                <strong className="block text-white font-mono">Tokyo Atelier</strong>
                <span className="text-[11px] text-[#74716C]">5-7-22 Minamiaoyama, Minato-ku</span>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-1 text-[#A14F39] text-xs font-mono hover:underline pt-1"
              >
                <span>Private Viewing Inquiry</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#74716C]">
          <p>© 2026 MONO OBJECTS. All rights reserved. Registered collectible design archive.</p>
          <div className="flex items-center gap-6">
            <span>ISO 9001 Structural Standard</span>
            <span className="w-1 h-1 rounded-full bg-[#74716C]" />
            <span>FSC Certified Timber</span>
            <span className="w-1 h-1 rounded-full bg-[#74716C]" />
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
