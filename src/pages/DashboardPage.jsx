import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sliders, 
  Layers, 
  Package, 
  RotateCw, 
  Layout, 
  Inbox, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  Check, 
  AlertCircle,
  Eye,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCMS } from '../context/CMSContext';

export const DashboardPage = () => {
  const { user, login, logout, isAuthenticated } = useAuth();
  const { 
    products, 
    siteSections, 
    inquiries, 
    updateProduct, 
    createProduct, 
    deleteProduct, 
    updateSection 
  } = useCMS();

  // Login form state
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [loginError, setLoginError] = useState('');

  // Active dashboard tab
  const [activeTab, setActiveTab] = useState('overview'); // overview, products, exploded, sections, inquiries

  // Product edit state
  const [editingProduct, setEditingProduct] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    const success = await login(username, password);
    if (!success) {
      setLoginError('Invalid credentials. Use admin / admin123');
    }
  };

  // If not authenticated, render Luxury CMS Studio Login Form
  if (!isAuthenticated) {
    return (
      <div className="w-full min-h-screen bg-[#171717] text-[#F4F2EE] flex items-center justify-center p-6 pt-24">
        <div className="max-w-md w-full rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-mono text-[#A14F39] mb-3">
              <Sliders className="w-3.5 h-3.5 text-[#A14F39]" />
              <span>MONO ATELIER CMS STUDIO</span>
            </div>
            <h1 className="text-2xl font-bold font-display text-white">
              Curatorial Administration
            </h1>
            <p className="text-xs text-[#A8A7A4] mt-1">
              Sign in to manage limited editions, 3D exploded views, and private commissions.
            </p>
          </div>

          {loginError && (
            <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-[#A8A7A4] mb-1">
                Curator Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-white/10 text-xs font-mono bg-white/5 text-white focus:outline-none focus:border-[#A14F39]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#A8A7A4] mb-1">
                Security Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-white/10 text-xs font-mono bg-white/5 text-white focus:outline-none focus:border-[#A14F39]"
              />
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-[#A8A7A4]">
              Demo credentials: <strong className="text-white">admin</strong> / <strong className="text-white">admin123</strong>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#A14F39] text-white text-xs font-medium hover:bg-[#8D4431] transition-all shadow-md"
            >
              Authenticate & Enter Studio
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F4F2EE] text-[#171717] pt-28 pb-20">
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Top Studio Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D8D4CE] mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#A14F39] mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AUTHENTICATED AS {user?.username?.toUpperCase() || 'CURATOR'}</span>
            </div>
            <h1 className="text-3xl font-display font-bold text-[#171717]">
              MONO Objects CMS Studio
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="px-4 py-2 rounded-full border border-[#D8D4CE] bg-white text-xs font-mono text-[#171717] hover:border-[#171717] transition-all"
            >
              View Live Website
            </Link>
            <button
              type="button"
              onClick={logout}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#171717] text-white text-xs font-mono hover:bg-black transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-white border border-[#D8D4CE] shadow-sm w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'overview' ? 'bg-[#171717] text-white font-medium shadow-sm' : 'text-[#74716C] hover:text-[#171717]'
            }`}
          >
            Overview KPIs
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'products' ? 'bg-[#171717] text-white font-medium shadow-sm' : 'text-[#74716C] hover:text-[#171717]'
            }`}
          >
            Objects Catalog ({products.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('exploded')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'exploded' ? 'bg-[#171717] text-white font-medium shadow-sm' : 'text-[#74716C] hover:text-[#171717]'
            }`}
          >
            Exploded View Engine
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('sections')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'sections' ? 'bg-[#171717] text-white font-medium shadow-sm' : 'text-[#74716C] hover:text-[#171717]'
            }`}
          >
            15 Sections CMS ({siteSections.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('inquiries')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'inquiries' ? 'bg-[#171717] text-white font-medium shadow-sm' : 'text-[#74716C] hover:text-[#171717]'
            }`}
          >
            Acquisitions / Leads ({inquiries.length})
          </button>
        </div>

        {saveSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-mono flex items-center justify-between">
            <span>{saveSuccess}</span>
            <button onClick={() => setSaveSuccess('')}>Dismiss</button>
          </div>
        )}

        {/* Tab 1: Overview KPIs */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-[#D8D4CE] shadow-sm">
                <span className="text-xs font-mono text-[#74716C] uppercase block">Archived Pieces</span>
                <strong className="text-3xl font-bold font-mono text-[#171717] block mt-1">{products.length} Objects</strong>
                <span className="text-[11px] text-emerald-600 font-mono mt-2 block">100% 3D Interactive</span>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-[#D8D4CE] shadow-sm">
                <span className="text-xs font-mono text-[#74716C] uppercase block">Global Inquiries</span>
                <strong className="text-3xl font-bold font-mono text-[#171717] block mt-1">{inquiries.length} Inquiries</strong>
                <span className="text-[11px] text-[#A14F39] font-mono mt-2 block">Pending Curator Review</span>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-[#D8D4CE] shadow-sm">
                <span className="text-xs font-mono text-[#74716C] uppercase block">Sections Live</span>
                <strong className="text-3xl font-bold font-mono text-[#171717] block mt-1">{siteSections.length || 15} Sections</strong>
                <span className="text-[11px] text-[#74716C] font-mono mt-2 block">Continuous Scroll</span>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-[#D8D4CE] shadow-sm">
                <span className="text-xs font-mono text-[#74716C] uppercase block">Exploded Engine</span>
                <strong className="text-3xl font-bold font-mono text-[#171717] block mt-1">5 Sub-Assemblies</strong>
                <span className="text-[11px] text-emerald-600 font-mono mt-2 block">Vector Scrub Active</span>
              </div>
            </div>

            {/* Recent Inquiries Quick Table */}
            <div className="rounded-3xl bg-white border border-[#D8D4CE] p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#171717] mb-4">
                Recent Acquisition Requests
              </h3>
              {inquiries.length === 0 ? (
                <p className="text-xs text-[#74716C]">No inquiries recorded yet.</p>
              ) : (
                <div className="divide-y divide-[#D8D4CE]">
                  {inquiries.slice(0, 5).map((inq) => (
                    <div key={inq.id} className="py-3 flex items-center justify-between text-xs font-mono">
                      <div>
                        <strong className="text-[#171717] block">{inq.name} ({inq.email})</strong>
                        <span className="text-[#74716C] text-[11px]">{inq.interest}</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#F4F2EE] text-[#171717]">
                        {inq.status || 'Received'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Products Manager */}
        {activeTab === 'products' && (
          <div className="rounded-3xl bg-white border border-[#D8D4CE] p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D8D4CE]">
              <h3 className="text-xl font-bold text-[#171717]">
                Objects Catalog Archive
              </h3>
              <span className="text-xs font-mono text-[#74716C]">
                {products.length} Objects Total
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#D8D4CE] text-[#74716C]">
                    <th className="pb-3">Ref SKU</th>
                    <th className="pb-3">Object Name</th>
                    <th className="pb-3">Category</th>
                    <th className="pb-3">Price</th>
                    <th className="pb-3">Edition</th>
                    <th className="pb-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D8D4CE]">
                  {products.map((p) => (
                    <tr key={p.id} className="py-4">
                      <td className="py-3 font-bold text-[#A14F39]">{p.sku || `MONO-00${p.id}`}</td>
                      <td className="py-3 font-semibold text-[#171717]">{p.name}</td>
                      <td className="py-3 text-[#74716C]">{p.category}</td>
                      <td className="py-3 text-[#171717] font-bold">${p.price?.toLocaleString()}</td>
                      <td className="py-3 text-[#74716C]">{p.edition_year || '2026'}</td>
                      <td className="py-3 text-right">
                        <Link
                          to={`/products/${p.slug}`}
                          className="px-3 py-1 rounded-full bg-[#F4F2EE] text-[#171717] hover:bg-[#171717] hover:text-white transition-all inline-block mr-2"
                        >
                          View 3D
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Exploded View Studio */}
        {activeTab === 'exploded' && (
          <div className="rounded-3xl bg-white border border-[#D8D4CE] p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#171717]">
                Exploded View Sub-Assembly Studio
              </h3>
              <p className="text-xs text-[#74716C] mt-1">
                Configure separable 3D components for MONO 001. Each component is translated along custom 3D displacement vectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Backrest Shell', key: 'backrest', vector: '[0, +0.65, -0.45]', material: 'American Black Walnut', tolerance: '±0.25 mm' },
                { name: 'Seat Cushion', key: 'seat_cushion', vector: '[0, +0.38, +0.15]', material: 'Tuscan Saddle Leather', tolerance: 'Hand-Stitched' },
                { name: 'Structural Sub-Pan', key: 'seat_pan', vector: '[0, +0.12, 0.00]', material: '6061-T6 Aluminum', tolerance: '±0.05 mm' },
                { name: 'Cast Base Pedestal', key: 'pedestal', vector: '[0, -0.55, 0.00]', material: 'Architectural Bronze', tolerance: 'Counter-Weighted' },
                { name: 'Titanium Hardware', key: 'hardware', vector: '[+0.35, -0.15, +0.20]', material: 'Grade 5 Titanium', tolerance: 'M8 Metric' }
              ].map((c) => (
                <div key={c.key} className="p-5 rounded-2xl bg-[#F4F2EE] border border-[#D8D4CE] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <strong className="text-[#171717]">{c.name}</strong>
                    <span className="text-[#A14F39]">{c.key}</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#74716C] space-y-1">
                    <div>Vector: <code>{c.vector}</code></div>
                    <div>Material: {c.material}</div>
                    <div>Precision: {c.tolerance}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/#exploded"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-white text-xs font-mono hover:bg-black transition-all"
              >
                <span>Test Live Exploded Engine in S05</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Tab 4: 15 Sections Live Editor */}
        {activeTab === 'sections' && (
          <div className="rounded-3xl bg-white border border-[#D8D4CE] p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#171717]">
                15 Homepage Sections CMS
              </h3>
              <p className="text-xs text-[#74716C] mt-1">
                Curate headlines and curatorial monographs for all 15 gallery sections in real time.
              </p>
            </div>

            <div className="space-y-4">
              {siteSections.map((sec) => (
                <div key={sec.section_key} className="p-5 rounded-2xl bg-[#F4F2EE] border border-[#D8D4CE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#A14F39] uppercase font-bold">
                      Section Key: {sec.section_key}
                    </span>
                    <h4 className="text-base font-bold text-[#171717] mt-0.5">
                      {sec.title}
                    </h4>
                    <p className="text-xs text-[#74716C] mt-1 line-clamp-1">
                      {sec.description || sec.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white border border-[#D8D4CE] text-[#171717] self-start sm:self-auto shrink-0">
                    Live Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Inquiries & Leads */}
        {activeTab === 'inquiries' && (
          <div className="rounded-3xl bg-white border border-[#D8D4CE] p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#171717]">
                Acquisitions & Private Viewings ({inquiries.length})
              </h3>
              <p className="text-xs text-[#74716C] mt-1">
                Direct client inquiries submitted through the acquisition forms and contact dossier.
              </p>
            </div>

            {inquiries.length === 0 ? (
              <p className="text-xs font-mono text-[#74716C] py-8 text-center">No client inquiries recorded yet.</p>
            ) : (
              <div className="space-y-4">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="p-6 rounded-2xl bg-[#F4F2EE] border border-[#D8D4CE] space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <strong className="text-sm font-bold text-[#171717]">{inq.name}</strong>
                      <span className="text-[#A14F39]">{inq.email}</span>
                    </div>
                    <div className="text-xs font-mono text-[#74716C]">
                      Interest: <strong className="text-[#171717]">{inq.interest}</strong>
                    </div>
                    {inq.message && (
                      <p className="text-xs text-[#74716C] p-3 rounded-xl bg-white border border-[#D8D4CE]/60">
                        {inq.message}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default DashboardPage;
