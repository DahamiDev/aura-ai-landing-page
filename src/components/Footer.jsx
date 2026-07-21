import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, ShieldCheck, Heart, Globe, Share2 } from 'lucide-react';

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

export default function Footer({ onOpenModal }) {
  return (
    <footer className="relative bg-[#09090b] text-zinc-400 overflow-hidden pt-20 pb-12 border-t border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-t from-amber-600/20 via-orange-600/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Pre-Footer CTA Banner matching reference image */}
        <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-2xl border border-white/15 p-10 sm:p-16 text-center mb-24 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          
          {/* Internal Glow Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/20 blur-3xl pointer-events-none rounded-full" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Center Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-[1px] mx-auto mb-6 shadow-[0_0_30px_rgba(249,115,22,0.5)]">
              <div className="w-full h-full bg-[#09090b] rounded-[15px] flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Ready to launch something spectial. <br />
              <span className="text-gradient-amber">that actually works?</span>
            </h2>
            
            <p className="text-zinc-300 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Let industry leaders design your SaaS landing page. Clear strategy, clean glass aesthetics, and ready to convert.
            </p>

            <button 
              onClick={() => onOpenModal('footer-cta')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold text-base shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:shadow-[0_0_50px_rgba(249,115,22,0.9)] hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                AURA <span className="text-amber-500 font-mono text-xs px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">AI</span>
              </span>
            </a>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Helping founders launch faster with high-converting, dark glassmorphism landing pages and automated conversion strategy.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Menu Col 1 */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">Product</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#features" className="hover:text-amber-400 transition-colors">Features</a></li>
              <li><a href="#process" className="hover:text-amber-400 transition-colors">Process Engine</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Menu Col 2 */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Conversion Guide</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Glassmorphism UI</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">API Doc</a></li>
            </ul>
          </div>

          {/* Menu Col 3 */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} AURA AI Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-amber-500/20 hover:text-amber-400 transition-colors" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-amber-500/20 hover:text-amber-400 transition-colors" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-amber-500/20 hover:text-amber-400 transition-colors" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-amber-500/20 hover:text-amber-400 transition-colors" aria-label="Discord">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
