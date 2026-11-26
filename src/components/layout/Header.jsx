import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X, ArrowRight, Sliders, Shield } from 'lucide-react';
import { useCompare } from '../../context/CompareContext';
import { useCMS } from '../../context/CMSContext';

export const Header = () => {
  const location = useLocation();
  const { comparedProducts } = useCompare();
  const { theme } = useCMS();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Objects', path: '/objects' },
    { label: 'Collections', path: '/collections' },
    { label: 'Exploded View', path: '/#exploded' },
    { label: 'Comparison', path: '/compare' },
    { label: 'Materials', path: '/materials' },
    { label: 'Journal', path: '/journal' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#F4F2EE]/90 backdrop-blur-md border-b border-[#D8D4CE]/80 transition-all">
      <div className="max-w-content mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Wordmark (Space Grotesk Bold, Minimal Museum Typography) */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
        >
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#171717] group-hover:text-[#A14F39] transition-colors">
            MONO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#A14F39] inline-block" />
          <span className="font-mono text-xs tracking-widest text-[#74716C] uppercase">
            OBJECTS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'text-[#A14F39] font-semibold'
                    : 'text-[#74716C] hover:text-[#171717]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Compare Badge, CMS Studio, Inquire */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Comparison Quick Link with Badge */}
          <Link
            to="/compare"
            className="relative p-2 rounded-full border border-[#D8D4CE] bg-white text-[#171717] hover:border-[#171717] transition-all shadow-sm"
            title="Comparison Studio"
          >
            <Scale className="w-4 h-4 text-[#171717]" />
            {comparedProducts.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#A14F39] text-white text-[10px] font-mono font-bold flex items-center justify-center">
                {comparedProducts.length}
              </span>
            )}
          </Link>

          {/* CMS Studio Dashboard Button */}
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D8D4CE] bg-white text-xs font-mono text-[#171717] hover:border-[#171717] transition-all"
          >
            <Sliders className="w-3.5 h-3.5 text-[#A14F39]" />
            <span>CMS Studio</span>
          </Link>

          {/* Inquire CTA */}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-[#171717] text-white text-xs font-medium hover:bg-black transition-all shadow-sm flex items-center gap-1.5"
          >
            <span>Inquire</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            to="/compare"
            className="relative p-2 rounded-full border border-[#D8D4CE] bg-white text-[#171717]"
          >
            <Scale className="w-4 h-4" />
            {comparedProducts.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#A14F39] text-white text-[9px] font-bold flex items-center justify-center">
                {comparedProducts.length}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-[#D8D4CE] bg-white text-[#171717]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F4F2EE] border-b border-[#D8D4CE] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-[#171717] py-1 border-b border-[#D8D4CE]/40"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 flex flex-col gap-2">
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-full border border-[#D8D4CE] bg-white text-xs font-mono text-[#171717]"
            >
              CMS Studio Dashboard
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-full bg-[#171717] text-white text-xs font-medium"
            >
              Inquire / Acquire Object
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
