import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Layers, Zap, Lightbulb } from 'lucide-react';

export default function Showcase({ onOpenModal }) {
  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-amber-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Feature Card: Don't settle for template-looking pages */}
          <div className="group rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-amber-500/40 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Layers className="w-3.5 h-3.5" />
                <span>Custom Architecture</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                Don't settle for <br />
                <span className="text-gradient-amber">template-looking pages</span>
              </h2>

              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                We design every page from scratch to match your brand identity, your offer, and your specific growth goals. So it doesn't just look good; it converts.
              </p>

              <button 
                onClick={() => onOpenModal('custom-design')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] transition-all flex items-center gap-2"
              >
                <span>Start Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Custom Visual Mockup inside card */}
            <div className="mt-10 relative">
              <div className="w-full h-48 rounded-2xl bg-[#09090b]/90 border border-white/10 p-4 relative overflow-hidden flex items-center justify-center group-hover:border-amber-500/30 transition-all shadow-inner">
                
                {/* Floating mini glass cards showing custom layout elements */}
                <div className="absolute inset-0 bg-hex-pattern opacity-40" />
                
                <div className="relative z-10 flex gap-3 items-center justify-center">
                  <div className="w-24 h-28 rounded-xl bg-white/[0.04] border border-white/10 p-2.5 flex flex-col gap-2 shadow-lg">
                    <div className="w-8 h-2 rounded bg-amber-500/60" />
                    <div className="w-full h-1.5 rounded bg-white/20" />
                    <div className="w-3/4 h-1.5 rounded bg-white/15" />
                    <div className="mt-auto w-full h-5 rounded bg-amber-500/30 flex items-center justify-center">
                      <span className="text-[8px] font-mono text-amber-300">CTA</span>
                    </div>
                  </div>

                  <div className="w-28 h-32 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/40 p-3 flex flex-col gap-2 shadow-2xl scale-105">
                    <div className="w-10 h-2.5 rounded bg-amber-400" />
                    <div className="w-full h-2 rounded bg-white/30" />
                    <div className="w-4/5 h-2 rounded bg-white/20" />
                    <div className="mt-auto w-full h-6 rounded bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-[9px]">
                      AURA AI 2.0
                    </div>
                  </div>

                  <div className="w-24 h-28 rounded-xl bg-white/[0.04] border border-white/10 p-2.5 flex flex-col gap-2 shadow-lg">
                    <div className="w-6 h-2 rounded bg-white/30" />
                    <div className="w-full h-1.5 rounded bg-white/20" />
                    <div className="w-1/2 h-1.5 rounded bg-white/15" />
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Feature Card: We think deeply before we design */}
          <div className="group rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-amber-500/40 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Strategic Mindset</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                We <span className="text-gradient-amber">think deeply</span> <br />
                before we design
              </h2>

              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                Strategy comes before style. We use first-principles positioning, message matching, and behavioral psychology to build software interfaces that convert.
              </p>

              <button 
                onClick={() => onOpenModal('strategy')}
                className="px-6 py-3 rounded-full bg-white/[0.05] border border-white/15 text-white font-bold text-xs tracking-wider uppercase hover:bg-white/10 hover:border-amber-500/40 transition-all flex items-center gap-2"
              >
                <span>Explore Strategy</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Custom Interactive Floating Nodes Mockup */}
            <div className="mt-10 relative">
              <div className="w-full h-48 rounded-2xl bg-[#09090b]/90 border border-white/10 p-4 relative overflow-hidden flex items-center justify-center group-hover:border-amber-500/30 transition-all shadow-inner">
                
                {/* Glowing Nodes Network */}
                <div className="relative w-full h-full flex items-center justify-around">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                      <span className="text-amber-400 font-bold text-xs">Idea</span>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">Value Prop</span>
                  </div>

                  <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 relative">
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white animate-ping"></span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 p-[1px] shadow-[0_0_25px_rgba(249,115,22,0.6)]">
                      <div className="w-full h-full bg-[#09090b] rounded-full flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-amber-400" />
                      </div>
                    </div>
                    <span className="text-[10px] text-amber-400 font-mono font-bold">Aura Strategy</span>
                  </div>

                  <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-emerald-500 relative" />

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                      <span className="text-emerald-400 font-bold text-xs">Scale</span>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">+240% MRR</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
