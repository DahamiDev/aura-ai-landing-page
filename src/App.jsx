import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Process from './components/Process';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import GetStartedModal from './components/GetStartedModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('cta');

  const handleOpenModal = (type = 'cta') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-['Plus_Jakarta_Sans',sans-serif] relative selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      
      {/* Top Floating Glass Header */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Page Layout Sections */}
      <main>
        {/* Hero Section with Glass Dashboard Preview */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Translucent Brand Logo Bar */}
        <SocialProof />

        {/* Why Choose Us Feature Grid */}
        <Features onOpenModal={handleOpenModal} />

        {/* 3-Step Process Section */}
        <Process onOpenModal={handleOpenModal} />

        {/* Showcase Deep Dive */}
        <Showcase onOpenModal={handleOpenModal} />

        {/* Founders Testimonials Section */}
        <Testimonials />

        {/* 3-Tier Glass Pricing Cards */}
        <Pricing onOpenModal={handleOpenModal} />

        {/* Clean Expandable FAQ Accordion */}
        <FAQ />
      </main>

      {/* Footer Banner & Links */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Modal */}
      <GetStartedModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        defaultType={modalType} 
      />

    </div>
  );
}
