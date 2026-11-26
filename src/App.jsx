import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CMSProvider } from './context/CMSContext';
import { CompareProvider } from './context/CompareContext';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CompareFloatingBar from './components/layout/CompareFloatingBar';

// Pages
import HomePage from './pages/HomePage';
import ObjectsPage from './pages/ObjectsPage';
import CollectionPage from './pages/CollectionPage';
import ProductPage from './pages/ProductPage';
import ComparePage from './pages/ComparePage';
import MaterialsPage from './pages/MaterialsPage';
import JournalPage from './pages/JournalPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';

export function App() {
  return (
    <AuthProvider>
      <CMSProvider>
        <CompareProvider>
          <HashRouter>
            <div className="min-h-screen bg-[#F4F2EE] text-[#171717] font-sans flex flex-col selection:bg-[#A14F39] selection:text-white">
              {/* Global Navigation Header */}
              <Header />

              {/* Main Routing Viewport */}
              <main className="flex-1 w-full">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/objects" element={<ObjectsPage />} />
                  <Route path="/collections" element={<CollectionPage />} />
                  <Route path="/products/:slug" element={<ProductPage />} />
                  <Route path="/compare" element={<ComparePage />} />
                  <Route path="/materials" element={<MaterialsPage />} />
                  <Route path="/journal" element={<JournalPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                </Routes>
              </main>

              {/* Persistent Floating Compare Pill / Drawer */}
              <CompareFloatingBar />

              {/* Museum Archive Footer */}
              <Footer />
            </div>
          </HashRouter>
        </CompareProvider>
      </CMSProvider>
    </AuthProvider>
  );
}

export default App;

