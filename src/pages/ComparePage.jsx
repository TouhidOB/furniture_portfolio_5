import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';
import ProductComparisonStudio from '../components/comparison/ProductComparisonStudio';

export const ComparePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F4F2EE] text-[#171717] pt-32 pb-24 border-b border-[#D8D4CE]">
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#74716C] mb-8">
          <Link to="/" className="hover:text-[#171717]">Index</Link>
          <span>/</span>
          <span className="text-[#A14F39] font-semibold">Object Comparison Studio</span>
        </div>

        {/* Studio Matrix Component */}
        <ProductComparisonStudio />

      </div>
    </div>
  );
};

export default ComparePage;
