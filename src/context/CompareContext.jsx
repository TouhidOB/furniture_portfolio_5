import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCMS } from './CMSContext';

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const { products } = useCMS();
  const [comparedIds, setComparedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('mono_compared_ids');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Normalize to primitive IDs if objects were saved
          return parsed.map(item => (typeof item === 'object' && item !== null ? item.id : item)).filter(Boolean);
        }
      }
      return [1, 2]; // Default: MONO 001 and MONO 002
    } catch {
      return [1, 2];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mono_compared_ids', JSON.stringify(comparedIds));
    } catch (e) {
      console.warn('Compare localStorage error:', e);
    }
  }, [comparedIds]);

  const addToCompare = (item) => {
    const id = typeof item === 'object' && item !== null ? item.id : item;
    if (!id) return;
    setComparedIds((prev) => {
      if (prev.includes(id)) return prev;
      if (prev.length >= 3) {
        // Shift oldest and append new
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  const removeFromCompare = (item) => {
    const id = typeof item === 'object' && item !== null ? item.id : item;
    setComparedIds((prev) => prev.filter(i => i !== id));
  };

  const clearCompare = () => {
    setComparedIds([]);
  };

  const isCompared = (item) => {
    const id = typeof item === 'object' && item !== null ? item.id : item;
    return comparedIds.includes(id);
  };

  const isProductCompared = isCompared;

  // Resolve compared objects
  const comparedProducts = comparedIds
    .map(id => products.find(p => p.id === id || p.slug === id))
    .filter(Boolean);

  return (
    <CompareContext.Provider
      value={{
        comparedIds,
        comparedProducts,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isCompared,
        isProductCompared,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);
export default CompareContext;
