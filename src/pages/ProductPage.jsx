import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Scale, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Eye, 
  Layers, 
  RotateCw, 
  Compass, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { useCompare } from '../context/CompareContext';
import ObjectScene from '../components/three/ObjectScene';
import ExplodedProductViewer from '../components/three/ExplodedProductViewer';
import Product360Viewer from '../components/ui/Product360Viewer';

export const ProductPage = () => {
  const { slug } = useParams();
  const { products, submitInquiry } = useCMS();
  const { addToCompare, isProductCompared } = useCompare();

  const [activeTab, setActiveTab] = useState('3d'); // '3d', 'exploded', '360'
  const [selectedFinish, setSelectedFinish] = useState('#634735');
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const product = products.find(p => p.slug === slug) || products[0] || {
    id: 1,
    name: 'MONO 001 Lounge Chair',
    slug: 'mono-001-lounge-chair',
    category: 'Chairs',
    price: 3650,
    edition_year: '2026',
    sku: 'MONO-001',
    primary_material: 'American Black Walnut & Tuscan Leather',
    primary_image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
    description: 'Sculptural steam-bent American black walnut shell anchored by cast architectural bronze. Hand-stitched full-grain Tuscan saddle leather seat cushion. Produced in limited serialized editions.'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const isCompared = isProductCompared(product.id);

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    await submitInquiry({
      name: formData.name,
      email: formData.email,
      interest: `Acquisition of ${product.name}`,
      message: formData.message || `I would like to inquire about commissioning or acquiring ${product.name} (Ref: ${product.sku}).`
    });

    setInquirySent(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#F4F2EE] text-[#171717] pt-28 pb-24 border-b border-[#D8D4CE]">
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#74716C] mb-8">
          <Link to="/" className="hover:text-[#171717]">Index</Link>
          <span>/</span>
          <Link to="/objects" className="hover:text-[#171717]">Objects</Link>
          <span>/</span>
          <span className="text-[#A14F39] font-semibold">{product.name}</span>
        </div>

        {/* Top Product Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#D8D4CE] mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A14F39]">
                {product.category} · REF. {product.sku || 'MONO-001'}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-black/5 text-[#74716C]">
                Edition {product.edition_year || '2026'}
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-[#171717]">
              {product.name}
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-left sm:text-right">
              <span className="text-[11px] font-mono text-[#74716C] uppercase block">Acquisition Price</span>
              <strong className="text-2xl font-bold font-mono text-[#171717]">
                ${product.price?.toLocaleString()}
              </strong>
            </div>

            <button
              type="button"
              onClick={() => addToCompare(product)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-mono transition-all ${
                isCompared
                  ? 'bg-[#A14F39] text-white border-[#A14F39]'
                  : 'bg-white border-[#D8D4CE] text-[#171717] hover:border-[#171717]'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>{isCompared ? 'In Comparison Matrix' : 'Add to Compare'}</span>
            </button>
          </div>
        </div>

        {/* View Mode Switcher Pills (3D Studio, Exploded View, 360 Turntable) */}
        <div className="flex flex-wrap items-center gap-2 mb-6 p-1.5 rounded-full bg-white border border-[#D8D4CE] w-fit shadow-sm">
          <button
            type="button"
            onClick={() => setActiveTab('3d')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono transition-all ${
              activeTab === '3d'
                ? 'bg-[#171717] text-white font-medium shadow-sm'
                : 'text-[#74716C] hover:text-[#171717]'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-[#A14F39]" />
            <span>3D Interactive Studio</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('exploded')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono transition-all ${
              activeTab === 'exploded'
                ? 'bg-[#171717] text-white font-medium shadow-sm'
                : 'text-[#74716C] hover:text-[#171717]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#A14F39]" />
            <span>Exploded View Architecture</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('360')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono transition-all ${
              activeTab === '360'
                ? 'bg-[#171717] text-white font-medium shadow-sm'
                : 'text-[#74716C] hover:text-[#171717]'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5 text-[#A14F39]" />
            <span>360° Studio Turntable</span>
          </button>
        </div>

        {/* Primary Interactive Viewer Area */}
        <div className="mb-16">
          {activeTab === '3d' && (
            <div className="relative aspect-[16/10] sm:aspect-[21/9] min-h-[480px] rounded-3xl bg-white border border-[#D8D4CE] overflow-hidden shadow-sm">
              <ObjectScene
                color={selectedFinish}
                roughness={0.5}
                metalness={0.05}
                rotationY={0.4}
                explodedProgress={0.0}
                isDarkStage={false}
                enableOrbit={true}
              />
              <div className="absolute bottom-6 left-6 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-mono">
                <RotateCw className="w-3.5 h-3.5 text-[#A14F39]" />
                <span>Drag to Orbit 360°</span>
              </div>
            </div>
          )}

          {activeTab === 'exploded' && (
            <ExplodedProductViewer
              color={selectedFinish}
              roughness={0.5}
              metalness={0.05}
              isDarkStage={true}
            />
          )}

          {activeTab === '360' && (
            <Product360Viewer
              productName={product.name}
            />
          )}
        </div>

        {/* Specifications & Acquisition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Specifications Dossier (Left) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-display text-[#171717]">
                Curatorial Monograph
              </h3>
              <p className="mt-4 text-base text-[#74716C] leading-relaxed">
                {product.description || 'Sculptural seating carved from solid sustainable timber with custom cast hardware. Engineered for spinal neutralization and lifetime structural permanence.'}
              </p>
            </div>

            <div className="pt-6 border-t border-[#D8D4CE] space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#171717]">
                Dimensional Blueprint
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-white border border-[#D8D4CE]">
                  <span className="text-[#74716C] block">Width × Depth × Height</span>
                  <strong className="text-[#171717] block mt-1">88 × 92 × 76 cm</strong>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#D8D4CE]">
                  <span className="text-[#74716C] block">Seat Height / Angle</span>
                  <strong className="text-[#171717] block mt-1">41 cm · 105° Recline</strong>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#D8D4CE]">
                  <span className="text-[#74716C] block">Net Mass Weight</span>
                  <strong className="text-[#171717] block mt-1">28.5 kg Cast Solid</strong>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#D8D4CE] space-y-3 text-xs font-mono text-[#74716C]">
              <div className="flex justify-between py-2 border-b border-[#D8D4CE]/60">
                <span>Primary Structure:</span>
                <strong className="text-[#171717]">Appalachian Solid American Black Walnut</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-[#D8D4CE]/60">
                <span>Upholstery:</span>
                <strong className="text-[#171717]">2.2mm Full-Grain Tuscan Saddle Leather</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-[#D8D4CE]/60">
                <span>Sub-Pan:</span>
                <strong className="text-[#171717]">Aircraft-Grade 6061-T6 Laser-Cut Aluminum</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-[#D8D4CE]/60">
                <span>Foundry Base:</span>
                <strong className="text-[#171717]">Lost-Wax Cast Architectural Bronze Monolith</strong>
              </div>
            </div>
          </div>

          {/* Acquisition & Commission Inquiry (Right) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-[#D8D4CE] p-8 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A14F39] block mb-1">
                PRIVATE ACQUISITION
              </span>
              <h3 className="text-xl font-bold text-[#171717]">
                Commission Object
              </h3>
              <p className="text-xs text-[#74716C] mt-1">
                Each piece is serialized, signed by the atelier master, and shipped in custom museum crates.
              </p>

              {inquirySent ? (
                <div className="mt-6 p-6 rounded-2xl bg-[#F4F2EE] border border-[#D8D4CE] text-center">
                  <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-[#171717]">Inquiry Dispatched to Atelier</h4>
                  <p className="text-xs text-[#74716C] mt-1">
                    Our curatorial team will contact you within 24 hours with allocation details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-[#74716C] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Henrik Lindqvist"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8D4CE] text-xs font-mono bg-[#F4F2EE] focus:bg-white focus:outline-none focus:border-[#A14F39]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#74716C] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="henrik@architecture.dk"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8D4CE] text-xs font-mono bg-[#F4F2EE] focus:bg-white focus:outline-none focus:border-[#A14F39]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#74716C] mb-1">
                      Architectural Notes / Shipping Location
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Residence location, preferred delivery quarter..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8D4CE] text-xs font-mono bg-[#F4F2EE] focus:bg-white focus:outline-none focus:border-[#A14F39]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#171717] text-white text-xs font-medium hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Submit Acquisition Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductPage;
