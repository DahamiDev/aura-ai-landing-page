import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)] py-2.5 px-6' 
          : 'bg-white/[0.02] backdrop-blur-md border border-white/10 py-3.5 px-6'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-[1px] shadow-[0_0_20px_rgba(249,115,22,0.4)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] transition-all">
              <div className="w-full h-full bg-[#09090b] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                AURA <span className="text-amber-500 font-mono text-xs px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">AI</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#features" className="hover:text-amber-400 transition-colors">Features</a>
            <a href="#process" className="hover:text-amber-400 transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-amber-400 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => onOpenModal('login')}
              className="text-xs font-semibold text-zinc-300 hover:text-white px-4 py-2 rounded-full transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => onOpenModal('signup')}
              className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs transition-all duration-300 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-full animate-pulse-glow"></span>
              <span className="relative px-5 py-2.5 rounded-full bg-[#09090b] group-hover:bg-transparent transition-all duration-300 text-white flex items-center gap-2">
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-[#09090b]/95 backdrop-blur-2xl border border-white/10 p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 text-base font-medium text-zinc-300">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-amber-400"
            >
              Features
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-amber-400"
            >
              Process
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-amber-400"
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-amber-400"
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-amber-400"
            >
              FAQ
            </a>
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenModal('login'); }}
              className="w-full py-2.5 rounded-xl text-sm font-semibold text-zinc-300 hover:bg-white/5 text-center border border-white/10"
            >
              Sign In
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenModal('signup'); }}
              className="w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] text-center flex items-center justify-center gap-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
