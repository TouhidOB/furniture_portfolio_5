import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

export const JournalPage = () => {
  const { articles } = useCMS();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayArticles = articles.length > 0 ? articles : [
    {
      id: 1,
      title: 'In Defense of Spatial Silence: Why Furniture Must Speak in Whispers',
      slug: 'in-defense-of-spatial-silence',
      category: 'Design Philosophy',
      read_time: '6 Min Read',
      published_date: 'October 2026',
      hero_image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'In an era dominated by visual hyper-stimulation, reducing the physical presence of everyday objects becomes a radical act of psychological restoration.'
    },
    {
      id: 2,
      title: 'The Lost Art of Patina: Living With Vegetable-Tanned Tuscan Aniline',
      slug: 'the-lost-art-of-patina',
      category: 'Material Culture',
      read_time: '5 Min Read',
      published_date: 'September 2026',
      hero_image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Unlike synthetic polymers that deteriorate with age, unsealed vegetable hides absorb the sunlight, touch, and stories of a home.'
    },
    {
      id: 3,
      title: 'Monolithic Cantilever: Structural Engineering of the MONO 004 Table',
      slug: 'monolithic-cantilever-engineering',
      category: 'Engineering Dossier',
      read_time: '8 Min Read',
      published_date: 'August 2026',
      hero_image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'How our aerospace engineering team eliminated cross-bracing and visible gussets using cast bronze counterbalance anchors.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#F4F2EE] text-[#171717] pt-32 pb-24 border-b border-[#D8D4CE]">
      <div className="max-w-content mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 pb-8 border-b border-[#D8D4CE]">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#A14F39] block mb-2">
            THEORY & CRITICISM
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-[#171717]">
            MONO Journal.
          </h1>
          <p className="mt-3 text-base text-[#74716C]">
            Essays on architectural discipline, material permanence, and the psychological impact of reduced living environments.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-12">
          {displayArticles.map((art) => (
            <article
              key={art.id}
              className="rounded-3xl bg-white border border-[#D8D4CE] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm"
            >
              <div className="lg:col-span-5 aspect-[16/10] bg-[#F4F2EE] overflow-hidden">
                <img
                  src={art.hero_image}
                  alt={art.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#74716C] mb-3">
                    <span className="text-[#A14F39] uppercase font-bold">{art.category}</span>
                    <span>·</span>
                    <span>{art.read_time}</span>
                    <span>·</span>
                    <span>{art.published_date}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] leading-snug">
                    {art.title}
                  </h2>

                  <p className="text-sm text-[#74716C] mt-4 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#D8D4CE] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#74716C]">
                    Published by Curatorial Desk
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#171717] hover:text-[#A14F39]">
                    <span>Read Monograph</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default JournalPage;
