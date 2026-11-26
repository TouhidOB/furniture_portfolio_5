import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  Plus, 
  Check, 
  Scale, 
  Maximize2, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  SlidersHorizontal,
  ShieldCheck
} from 'lucide-react';
import { useCompare } from '../../context/CompareContext';
import { useCMS } from '../../context/CMSContext';

export const ProductComparisonStudio = () => {
  const { comparedProducts, removeFromCompare, clearCompare, addToCompare } = useCompare();
  const { products } = useCMS();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Available products to add (not currently compared)
  const availableToAdd = products.filter(
    (p) => !comparedProducts.some((cp) => cp.id === p.id)
  );

  return (
    <div className="w-full">
      {/* 1. Comparison Matrix Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#D8D4CE]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A14F39] mb-1">
            <Scale className="w-3.5 h-3.5" />
            <span>OBJECT COMPARATIVE ANALYSIS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
            Design Object Comparison Studio
          </h2>
          <p className="text-sm text-[#74716C] mt-1">
            Comparing {comparedProducts.length} of 3 collectible pieces across physical & architectural specifications.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {comparedProducts.length < 3 && availableToAdd.length > 0 && (
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#171717] text-white text-xs font-medium hover:bg-black transition-all shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Object to Compare</span>
            </button>
          )}

          {comparedProducts.length > 0 && (
            <button
              type="button"
              onClick={clearCompare}
              className="px-4 py-2 rounded-full border border-[#D8D4CE] text-xs font-medium text-[#74716C] hover:text-[#171717] hover:border-[#171717] transition-all"
            >
              Clear Comparison
            </button>
          )}
        </div>
      </div>

      {comparedProducts.length === 0 ? (
        <div className="py-20 text-center rounded-3xl bg-[#F4F2EE] border border-dashed border-[#D8D4CE] p-8">
          <Scale className="w-10 h-10 text-[#A14F39] mx-auto mb-3" />
          <h3 className="text-xl font-bold text-[#171717]">No Objects Selected for Comparison</h3>
          <p className="text-sm text-[#74716C] max-w-md mx-auto mt-2">
            Select up to 3 objects from the collection to examine dimensional tolerances, materials, and structural compositions side by side.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              to="/objects"
              className="px-5 py-2.5 rounded-full bg-[#171717] text-white text-xs font-medium hover:bg-black transition-all shadow-sm"
            >
              Browse Objects Archive
            </Link>
          </div>
        </div>
      ) : (
        /* 2. Side-by-Side Comparison Table */
        <div className="overflow-x-auto rounded-3xl border border-[#D8D4CE] bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#D8D4CE] bg-[#F4F2EE]/60">
                <th className="p-6 text-xs font-mono uppercase tracking-wider text-[#74716C] w-48 sm:w-64">
                  Specification
                </th>
                {comparedProducts.map((p) => (
                  <th key={p.id} className="p-6 relative align-top min-w-[280px]">
                    <button
                      type="button"
                      onClick={() => removeFromCompare(p.id)}
                      className="absolute top-4 right-4 p-1.5 rounded-full bg-white border border-[#D8D4CE] text-[#74716C] hover:text-[#171717] hover:border-[#171717] shadow-sm transition-all"
                      title="Remove from comparison"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>

                    {/* Object Image Preview */}
                    <div className="aspect-[4/3] rounded-2xl bg-[#F4F2EE] overflow-hidden mb-4 p-4 flex items-center justify-center border border-[#D8D4CE]/60">
                      <img
                        src={p.primary_image || 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80'}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A14F39] block">
                      {p.category} · {p.edition_year || '2026'}
                    </span>
                    <h3 className="text-lg font-bold text-[#171717] mt-0.5">
                      {p.name}
                    </h3>
                    <p className="text-xs text-[#74716C] mt-1 font-mono">
                      Ref. {p.sku || 'MONO-001'}
                    </p>
                    <div className="mt-3">
                      <strong className="text-lg font-bold text-[#171717]">
                        ${p.price?.toLocaleString()}
                      </strong>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <Link
                        to={`/products/${p.slug}`}
                        className="flex-1 text-center py-2 px-3 rounded-full bg-[#171717] text-white text-xs font-medium hover:bg-black transition-all"
                      >
                        Inspect 3D
                      </Link>
                      <Link
                        to="/contact"
                        className="py-2 px-3 rounded-full border border-[#D8D4CE] text-[#171717] text-xs font-medium hover:border-[#171717] transition-all"
                      >
                        Inquire
                      </Link>
                    </div>
                  </th>
                ))}

                {/* Empty Slot if less than 3 */}
                {comparedProducts.length < 3 && (
                  <th className="p-6 align-middle min-w-[280px] bg-[#F4F2EE]/30 text-center border-l border-[#D8D4CE]">
                    <div className="p-8 flex flex-col items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setIsAddModalOpen(true)}
                        className="w-12 h-12 rounded-full border border-dashed border-[#D8D4CE] text-[#74716C] hover:text-[#171717] hover:border-[#171717] flex items-center justify-center transition-all"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                      <span className="text-xs font-mono text-[#74716C] mt-3 block">
                        Add Another Object
                      </span>
                    </div>
                  </th>
                )}
              </tr>
            </thead>

            <tbody className="divide-y divide-[#D8D4CE] text-xs">
              {/* Dimensions */}
              <tr>
                <td className="p-6 font-mono text-[#74716C] font-semibold bg-[#F4F2EE]/40">
                  DIMENSIONS (W × D × H)
                </td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-6 font-mono text-[#171717]">
                    {p.dimensions?.width || '88'} × {p.dimensions?.depth || '92'} × {p.dimensions?.height || '76'} cm
                  </td>
                ))}
                {comparedProducts.length < 3 && <td className="bg-[#F4F2EE]/10" />}
              </tr>

              {/* Seat Height */}
              <tr>
                <td className="p-6 font-mono text-[#74716C] font-semibold bg-[#F4F2EE]/40">
                  SEAT HEIGHT / PROFILE
                </td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-6 font-mono text-[#171717]">
                    {p.dimensions?.seat_height || '41'} cm (Low-slung lounge)
                  </td>
                ))}
                {comparedProducts.length < 3 && <td className="bg-[#F4F2EE]/10" />}
              </tr>

              {/* Primary Material */}
              <tr>
                <td className="p-6 font-mono text-[#74716C] font-semibold bg-[#F4F2EE]/40">
                  PRIMARY MATERIAL
                </td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-6 text-[#171717]">
                    <span className="font-semibold block">{p.primary_material || 'American Black Walnut'}</span>
                    <span className="text-[#74716C] text-[11px] block mt-0.5">FSC 100% Certified Hardwood</span>
                  </td>
                ))}
                {comparedProducts.length < 3 && <td className="bg-[#F4F2EE]/10" />}
              </tr>

              {/* Upholstery Finishes */}
              <tr>
                <td className="p-6 font-mono text-[#74716C] font-semibold bg-[#F4F2EE]/40">
                  UPHOLSTERY / LEATHER
                </td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-6 text-[#171717]">
                    Tuscan Full-Grain Aniline Leather or Heavy Bouclé Cloth
                  </td>
                ))}
                {comparedProducts.length < 3 && <td className="bg-[#F4F2EE]/10" />}
              </tr>

              {/* Base Construction */}
              <tr>
                <td className="p-6 font-mono text-[#74716C] font-semibold bg-[#F4F2EE]/40">
                  BASE FOUNDATION
                </td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-6 text-[#171717]">
                    Monolithic Cast Bronze / Architectural Concrete Plinth
                  </td>
                ))}
                {comparedProducts.length < 3 && <td className="bg-[#F4F2EE]/10" />}
              </tr>

              {/* Weight */}
              <tr>
                <td className="p-6 font-mono text-[#74716C] font-semibold bg-[#F4F2EE]/40">
                  NET WEIGHT
                </td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-6 font-mono text-[#171717]">
                    {p.dimensions?.weight || '28.5'} kg
                  </td>
                ))}
                {comparedProducts.length < 3 && <td className="bg-[#F4F2EE]/10" />}
              </tr>

              {/* Exploded View Support */}
              <tr>
                <td className="p-6 font-mono text-[#74716C] font-semibold bg-[#F4F2EE]/40">
                  EXPLODED 3D ANALYSIS
                </td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-6 text-[#171717]">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>5 Separable Sub-Assemblies</span>
                    </div>
                  </td>
                ))}
                {comparedProducts.length < 3 && <td className="bg-[#F4F2EE]/10" />}
              </tr>

              {/* Edition Run */}
              <tr>
                <td className="p-6 font-mono text-[#74716C] font-semibold bg-[#F4F2EE]/40">
                  EDITION RUN
                </td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-6 font-mono text-[#171717]">
                    Numbered Limited Edition (50 Units Global)
                  </td>
                ))}
                {comparedProducts.length < 3 && <td className="bg-[#F4F2EE]/10" />}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Add Object Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#D8D4CE] max-w-xl w-full p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#D8D4CE]">
              <h3 className="text-xl font-bold text-[#171717]">
                Select Object to Compare
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-full text-[#74716C] hover:text-[#171717]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-3 max-h-96 overflow-y-auto">
              {availableToAdd.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-[#D8D4CE] hover:border-[#A14F39] transition-all bg-[#F4F2EE]/50 hover:bg-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white border border-[#D8D4CE]/60 p-1 flex items-center justify-center">
                      <img
                        src={p.primary_image || 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=400&q=80'}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#171717]">{p.name}</h4>
                      <span className="text-xs font-mono text-[#74716C]">
                        {p.category} · ${p.price?.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      addToCompare(p);
                      setIsAddModalOpen(false);
                    }}
                    className="px-4 py-1.5 rounded-full bg-[#171717] text-white text-xs font-medium hover:bg-black transition-all"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductComparisonStudio;
