import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Scale } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export const CollectionPage = () => {
  const { collections, products } = useCMS();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayCollections = collections.length > 0 ? collections : [
    {
      id: 1,
      name: 'The Seating Monoliths',
      slug: 'the-seating-monoliths',
      subtitle: 'Contemplative Ergonomics',
      description: 'Sculptural lounge, accent, and dining chairs carved from continuous steam-bent American black walnut shells with cast bronze counter-weights.',
      hero_image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
      curatorial_notes: 'All pieces produced in strictly limited editions of 50 serialized units.'
    },
    {
      id: 2,
      name: 'Architectural Tables & Surfaces',
      slug: 'architectural-tables-surfaces',
      subtitle: 'Gathering Volumes',
      description: 'Cantilevered dining tables, monolithic reception consoles, and low low-slung coffee volumes that anchor open-plan architectural spaces.',
      hero_image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
      curatorial_notes: 'Engineered with zero deflection across 300cm unsupported spans.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#F4F2EE] text-[#171717] pt-32 pb-24 border-b border-[#D8D4CE]">
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-16 pb-8 border-b border-[#D8D4CE]">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#A14F39] block mb-2">
            CURATED BODIES OF WORK
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-[#171717]">
            The Collections.
          </h1>
          <p className="mt-3 text-base text-[#74716C]">
            Explore furniture grouped by curatorial lineage, spatial intention, and structural disciplines.
          </p>
        </div>

        {/* Collections Stack */}
        <div className="space-y-16">
          {displayCollections.map((col, idx) => (
            <div
              key={col.id}
              className="rounded-3xl bg-white border border-[#D8D4CE] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm"
            >
              <div className="lg:col-span-7 aspect-[16/10] bg-[#F4F2EE] overflow-hidden">
                <img
                  src={col.hero_image}
                  alt={col.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A14F39] block mb-1">
                    Collection Series 0{idx + 1} · {col.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] mt-1">
                    {col.name}
                  </h2>
                  <p className="text-sm text-[#74716C] mt-4 leading-relaxed">
                    {col.description}
                  </p>
                  <p className="text-xs font-mono text-[#171717] mt-6 p-4 rounded-xl bg-[#F4F2EE] border border-[#D8D4CE]">
                    {col.curatorial_notes}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#D8D4CE] flex items-center justify-between">
                  <Link
                    to="/objects"
                    className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#171717] hover:text-[#A14F39] transition-colors"
                  >
                    <span>View Objects in Series</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/compare"
                    className="flex items-center gap-1.5 text-xs font-mono text-[#A14F39] hover:underline"
                  >
                    <Scale className="w-3.5 h-3.5" />
                    <span>Compare in Studio</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CollectionPage;
