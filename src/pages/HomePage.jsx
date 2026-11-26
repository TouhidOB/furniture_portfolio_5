import React, { useEffect } from 'react';
import { useCMS } from '../context/CMSContext';

// 15 Curated Gallery Sections
import ObjectRevealHero from '../sections/home/ObjectRevealHero';
import ObjectIntroduction from '../sections/home/ObjectIntroduction';
import SilhouetteStudy from '../sections/home/SilhouetteStudy';
import MaterialCloseup from '../sections/home/MaterialCloseup';
import ExplodedObjectStory from '../sections/home/ExplodedObjectStory';
import ChairCollection from '../sections/home/ChairCollection';
import TableStudy from '../sections/home/TableStudy';
import MaterialLibrary from '../sections/home/MaterialLibrary';
import InspectionStudio from '../sections/home/InspectionStudio';
import ObjectsInContext from '../sections/home/ObjectsInContext';
import ComparisonIntroduction from '../sections/home/ComparisonIntroduction';
import CollectionArchive from '../sections/home/CollectionArchive';
import MakingOfMono from '../sections/home/MakingOfMono';
import MonoJournal from '../sections/home/MonoJournal';
import FinalObjectInvitation from '../sections/home/FinalObjectInvitation';

export const HomePage = () => {
  const { products, getSection } = useCMS();

  const heroProduct = products.find(p => p.slug === 'mono-001-lounge-chair') || products[0];
  const tableProduct = products.find(p => p.slug === 'mono-004-dining-table') || products[3];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* S01: Signature 8-State Object Reveal Hero */}
      <ObjectRevealHero 
        sectionData={getSection('hero')} 
        product={heroProduct} 
      />

      {/* S02: Curatorial Introduction (Object No. 001) */}
      <ObjectIntroduction 
        sectionData={getSection('intro')} 
      />

      {/* S03: Architectural Silhouette & Dimension Study */}
      <SilhouetteStudy 
        sectionData={getSection('silhouette')} 
      />

      {/* S04: Macro Tactile Photography & Material Honesty */}
      <MaterialCloseup 
        sectionData={getSection('materials_macro')} 
      />

      {/* S05: Dissected Architecture: Exploded-View Product Engine */}
      <ExplodedObjectStory 
        sectionData={getSection('exploded')} 
      />

      {/* S06: Seating Typologies: The Three Chairs */}
      <ChairCollection 
        sectionData={getSection('chairs')} 
      />

      {/* S07: MONO 004 Dining Table Monolith Study */}
      <TableStudy 
        sectionData={getSection('table_study')} 
        product={tableProduct} 
      />

      {/* S08: Tactile Archive: Six Noble Substances */}
      <MaterialLibrary 
        sectionData={getSection('materials')} 
      />

      {/* S09: Real-time 3D Inspection Studio */}
      <InspectionStudio 
        sectionData={getSection('studio')} 
      />

      {/* S10: Objects in Architectural Living Context */}
      <ObjectsInContext 
        sectionData={getSection('context')} 
      />

      {/* S11: Comparative Analysis Engine Teaser */}
      <ComparisonIntroduction 
        sectionData={getSection('compare_intro')} 
      />

      {/* S12: The Permanent Collection Archive */}
      <CollectionArchive 
        sectionData={getSection('archive')} 
      />

      {/* S13: Atelier Craftsmanship Chapters */}
      <MakingOfMono 
        sectionData={getSection('making')} 
      />

      {/* S14: Curatorial Essays on Reduced Living */}
      <MonoJournal 
        sectionData={getSection('journal')} 
      />

      {/* S15: Acquisition & Private Commission Invitation */}
      <FinalObjectInvitation 
        sectionData={getSection('invitation')} 
      />
    </div>
  );
};

export default HomePage;
