import React from 'react';
import { Eye, Palette, Rocket, ArrowRight, Sparkles } from 'lucide-react';

export default function Process({ onOpenModal }) {
  const steps = [
    {
      number: "01",
      title: "Share Your Vision",
      subtitle: "The AI analyzes your prompt, target audience, brand aesthetic, and core product offering.",
      icon: Eye,
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      badge: "Step 1"
    },
    {
      number: "02",
      title: "We Design It",
      subtitle: "We sprint to craft custom glassmorphic components, pixel-perfect copy, and high-converting UX flow.",
      icon: Palette,
      gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
      badge: "Step 2"
    },
    {
      number: "03",
      title: "Ready to Launch",
      subtitle: "We deploy your conversion engine directly to your domain, optimized for lightning load times & scale.",
      icon: Rocket,
      gradient: "from-amber-400/20 via-orange-600/10 to-transparent",
      badge: "Step 3"
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-white/[0.01]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-gradient-to-l from-orange-600/15 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Process <span className="text-gradient-amber">Fast, Clear, Done</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            No endless revisions. No messy handoffs. Just a streamlined 3-step process that delivers fast.
          </p>
        </div>

        {/* 3-Step Process Flow Cards with Connecting Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Desktop Connecting Glow Line behind Cards */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-amber-500/10 via-amber-500/60 to-amber-500/10 -translate-y-6 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="relative z-10 group rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-amber-500/50 p-8 transition-all duration-300 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                {/* Background glow on hover */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-b ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10`} />

                <div>
                  {/* Top Step Header */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-extrabold text-amber-500/40 group-hover:text-amber-400 transition-colors">
                      {step.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon Container with glowing aura */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-[1px] mb-6 shadow-[0_0_25px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] transition-all">
                    <div className="w-full h-full bg-[#09090b] rounded-[15px] flex items-center justify-center">
                      <Icon className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500">
                  <span className="group-hover:text-amber-400 transition-colors">Phase {step.number} Completed</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA below process */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => onOpenModal('process')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors border-b border-amber-500/30 hover:border-amber-400 pb-0.5"
          >
            <span>Want to see a live build walkthrough?</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
