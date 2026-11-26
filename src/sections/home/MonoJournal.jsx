import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export const MonoJournal = ({ sectionData }) => {
  const { articles } = useCMS();

  const displayArticles = articles.length > 0 ? articles : [
    {
      id: 1,
      title: 'In Defense of Spatial Silence: Why Furniture Must Speak in Whispers',
      slug: 'in-defense-of-spatial-silence',
      category: 'Design Philosophy',
      read_time: '6 Min Read',
      published_date: 'October 2026',
      hero_image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      excerpt: 'In an era dominated by visual hyper-stimulation, reducing the physical presence of everyday objects becomes a radical act of psychological restoration.'
    },
    {
      id: 2,
      title: 'The Lost Art of Patina: Living With Vegetable-Tanned Tuscan Aniline',
      slug: 'the-lost-art-of-patina',
      category: 'Material Culture',
      read_time: '5 Min Read',
      published_date: 'September 2026',
      hero_image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Unlike synthetic polymers that deteriorate with age, unsealed vegetable hides absorb the sunlight, touch, and stories of a home.'
    },
    {
      id: 3,
      title: 'Monolithic Cantilever: Structural Engineering of the MONO 004 Table',
      slug: 'monolithic-cantilever-engineering',
      category: 'Engineering Dossier',
      read_time: '8 Min Read',
      published_date: 'August 2026',
      hero_image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
      excerpt: 'How our aerospace engineering team eliminated cross-bracing and visible gussets using cast bronze counterbalance anchors.'
    }
  ];

  return (
    <section 
      id="journal"
      className="w-full py-28 sm:py-36 bg-white text-[#171717] border-b border-[#D8D4CE]"
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A14F39] block mb-2">
              CURATORIAL ESSAYS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#171717]">
              {sectionData?.title || 'MONO Journal: Design Theory.'}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#74716C] leading-relaxed">
              {sectionData?.description || 'Reflections on architectural proportion, material longevity, and the psychological impact of reduced living environments.'}
            </p>
          </div>

          <Link
            to="/journal"
            className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#A14F39] hover:text-[#8D4431] group self-start md:self-auto"
          >
            <span>Explore All Essays</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayArticles.map((art) => (
            <Link
              key={art.id}
              to={`/journal`}
              className="group flex flex-col justify-between rounded-3xl bg-[#F4F2EE] border border-[#D8D4CE] overflow-hidden hover:border-[#171717]/40 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden bg-white">
                <img
                  src={art.hero_image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#74716C] mb-2">
                    <span className="text-[#A14F39] uppercase font-bold">{art.category}</span>
                    <span>{art.read_time}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#171717] group-hover:text-[#A14F39] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#74716C] mt-2 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D8D4CE] flex items-center justify-between text-xs font-mono text-[#74716C]">
                  <span>{art.published_date}</span>
                  <span className="inline-flex items-center gap-1 text-[#171717] font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MonoJournal;
