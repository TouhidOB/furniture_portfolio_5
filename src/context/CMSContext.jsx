import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FALLBACK_PRODUCTS, 
  FALLBACK_MATERIALS, 
  FALLBACK_COLLECTIONS 
} from '../data/fallbackData';

const FALLBACK_ARTICLES = [
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

const CMSContext = createContext();

export const CMSProvider = ({ children }) => {
  const [products, setProducts] = useState(FALLBACK_PRODUCTS);
  const [collections, setCollections] = useState(FALLBACK_COLLECTIONS);
  const [materials, setMaterials] = useState(FALLBACK_MATERIALS);
  const [sections, setSections] = useState([]);
  const [articles, setArticles] = useState(FALLBACK_ARTICLES);
  const [inquiries, setInquiries] = useState([]);
  const [theme, setTheme] = useState({
    brand_name: 'MONO OBJECTS',
    tagline: 'The Art of Less.',
    primary_bg: '#F4F2EE',
    secondary_bg: '#D9D6D0',
    accent_color: '#A14F39',
    text_color: '#171717',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const [prodRes, colRes, matRes, secRes, artRes, inqRes, themeRes] = await Promise.allSettled([
        axios.get('/api/products/'),
        axios.get('/api/collections/'),
        axios.get('/api/materials/'),
        axios.get('/api/cms/sections/'),
        axios.get('/api/articles/'),
        axios.get('/api/inquiries/'),
        axios.get('/api/cms/theme/'),
      ]);

      if (prodRes.status === 'fulfilled' && Array.isArray(prodRes.value?.data) && prodRes.value.data.length > 0) {
        setProducts(prodRes.value.data.map(p => ({
          ...p,
          primary_image: p.primary_image || p.images?.primary || p.image_url || 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80'
        })));
      }
      if (colRes.status === 'fulfilled' && Array.isArray(colRes.value?.data) && colRes.value.data.length > 0) {
        setCollections(colRes.value.data);
      }
      if (matRes.status === 'fulfilled' && Array.isArray(matRes.value?.data) && matRes.value.data.length > 0) {
        setMaterials(matRes.value.data);
      }
      if (secRes.status === 'fulfilled' && Array.isArray(secRes.value?.data) && secRes.value.data.length > 0) {
        setSections(secRes.value.data);
      }
      if (artRes.status === 'fulfilled' && Array.isArray(artRes.value?.data) && artRes.value.data.length > 0) {
        setArticles(artRes.value.data);
      }
      if (inqRes.status === 'fulfilled' && Array.isArray(inqRes.value?.data)) {
        setInquiries(inqRes.value.data);
      }
      if (themeRes.status === 'fulfilled' && themeRes.value?.data) {
        setTheme(themeRes.value.data);
      }
    } catch (err) {
      console.warn('Backend loading fallback:', err);
    } finally {
      setLoading(false);
    }
  };

  const getSection = (key, fallback = {}) => {
    if (!sections || !Array.isArray(sections)) return fallback;
    const found = sections.find(s => s.section_id === key || s.section_key === key);
    if (!found) return fallback;
    return {
      ...found,
      title: found.headline || found.title || fallback.title,
      subtitle: found.subheadline || found.subtitle || fallback.subtitle,
      description: found.body_text || found.description || fallback.description,
      eyebrow: found.eyebrow || fallback.eyebrow
    };
  };

  const updateSectionLive = (sectionId, updatedFields) => {
    setSections(prev =>
      prev.map(s => ((s.section_id === sectionId || s.section_key === sectionId) ? { ...s, ...updatedFields } : s))
    );
  };

  const submitInquiry = async (data) => {
    try {
      const res = await axios.post('/api/inquiries/', data);
      setInquiries(prev => [res.data, ...prev]);
      return res.data;
    } catch (err) {
      console.warn('Inquiry submit fallback:', err);
      const fallback = { id: Date.now(), ...data, created_at: new Date().toISOString() };
      setInquiries(prev => [fallback, ...prev]);
      return fallback;
    }
  };

  const updateProduct = async (id, data) => {
    try {
      const res = await axios.patch(`/api/products/${id}/`, data);
      setProducts(prev => prev.map(p => p.id === id ? res.data : p));
      return res.data;
    } catch (err) {
      setProducts(prev => prev.map(p => p.id === id ? { ...p, ...data } : p));
    }
  };

  const createProduct = async (data) => {
    try {
      const res = await axios.post('/api/products/', data);
      setProducts(prev => [res.data, ...prev]);
      return res.data;
    } catch (err) {
      const fallback = { id: Date.now(), ...data };
      setProducts(prev => [fallback, ...prev]);
      return fallback;
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}/`);
    } catch (err) {
      console.warn('Delete product fallback:', err);
    }
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const updateSection = async (key, data) => {
    try {
      const res = await axios.patch(`/api/cms/sections/${key}/`, data);
      setSections(prev => prev.map(s => (s.section_id === key || s.section_key === key) ? res.data : s));
      return res.data;
    } catch (err) {
      setSections(prev => prev.map(s => (s.section_id === key || s.section_key === key) ? { ...s, ...data } : s));
    }
  };

  return (
    <CMSContext.Provider
      value={{
        products: products || [],
        collections: collections || [],
        materials: materials || [],
        sections: sections || [],
        siteSections: sections || [], // Expose alias for DashboardPage!
        articles: articles || [],     // Expose articles for MonoJournal!
        inquiries: inquiries || [],   // Expose inquiries for DashboardPage!
        theme,
        loading,
        getSection,
        updateSectionLive,
        submitInquiry,
        updateProduct,
        createProduct,
        deleteProduct,
        updateSection,
        refreshData: fetchInitialData,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => useContext(CMSContext);
export default CMSContext;
