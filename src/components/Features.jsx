import React from 'react';
import { Shield, Sparkles, TrendingUp, Layers, Cpu, Compass, ArrowUpRight, Zap, Target, Lock } from 'lucide-react';

export default function Features({ onOpenModal }) {
  const featureCards = [
    {
      title: "Implementation & Tools",
      desc: "Streamlined processes and modern tech stack tailored to your growth goals.",
      tag: "Built for speed",
      icon: Cpu,
      gradient: "from-amber-500/20 to-orange-500/5",
      badgeIcon: Zap,
      badgeText: "Instant Setup",
      mock: (
        <div className="w-full h-32 rounded-xl bg-white/[0.02] border border-white/10 p-3 flex flex-col justify-center items-center relative overflow-hidden group-hover:border-amber-500/30 transition-all">
          <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.4)]">
            <Cpu className="w-7 h-7 text-amber-400" />
          </div>
          <span className="text-[10px] text-zinc-400 mt-2 font-mono">React 19 + Tailwind CSS + AI</span>
        </div>
      )
    },
    {
      title: "High-Converting Design",
      desc: "We design landing pages that don't just look pretty—they turn visitors into buyers.",
      tag: "Psychology-driven",
      icon: Target,
      gradient: "from-orange-600/20 to-amber-500/5",
      badgeIcon: TrendingUp,
      badgeText: "+180% Conv.",
      mock: (
        <div className="w-full h-32 rounded-xl bg-white/[0.02] border border-white/10 p-3 flex items-center justify-around relative overflow-hidden group-hover:border-amber-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-extrabold text-amber-400 text-lg">
            F
          </div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 relative">
            <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-[1px] flex items-center justify-center font-extrabold text-white text-lg shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            ⚡
          </div>
        </div>
      )
    },
    {
      title: "Maximum Return on ROI",
      desc: "Every design decision is tied to direct revenue lift and conversion metric optimization.",
      tag: "Data proven",
      icon: TrendingUp,
      gradient: "from-amber-500/20 to-orange-600/10",
      badgeIcon: ArrowUpRight,
      badgeText: "136% Avg Lift",
      mock: (
        <div className="w-full h-32 rounded-xl bg-white/[0.02] border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-amber-500/30 transition-all">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400">Return on Spend</span>
            <span className="text-emerald-400 font-bold font-mono">136% Average</span>
          </div>
          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full w-[84%] shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
          </div>
          <div className="text-[10px] text-zinc-500 font-mono flex items-center justify-between">
            <span>Before: $12k MRR</span>
            <span className="text-amber-400">After: $38k MRR</span>
          </div>
        </div>
      )
    },
    {
      title: "Clear Steps & Trust",
      desc: "Zero clutter, no confusing navigation. Only crisp narrative flow that builds founder credibility.",
      tag: "Conversion architecture",
      icon: Shield,
      gradient: "from-orange-500/20 to-amber-600/5",
      badgeIcon: Lock,
      badgeText: "99.9% Trust Score",
      mock: (
        <div className="w-full h-32 rounded-xl bg-white/[0.02] border border-white/10 p-3 flex flex-col justify-center items-center gap-2 relative overflow-hidden group-hover:border-amber-500/30 transition-all">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((step) => (
              <div key={step} className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs flex items-center justify-center font-bold">
                {step}
              </div>
            ))}
          </div>
          <div className="w-3/4 h-1 bg-amber-500/30 rounded-full" />
          <span className="text-[10px] text-zinc-400 font-mono">Frictionless User Journey</span>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Clients <span className="text-gradient-amber">Stick With Us</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            We combine clarity, trust, and high-performing design to deliver results that actually matter to your bottom line.
          </p>
        </div>

        {/* Feature Cards 2x2 Grid matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            const BadgeIcon = card.badgeIcon;
            return (
              <div 
                key={idx}
                className="group relative rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-amber-500/40 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.5)] overflow-hidden flex flex-col justify-between"
              >
                {/* Internal card ambient radial glow on hover */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${card.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-full`} />

                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-amber-500/50 flex items-center justify-center transition-all group-hover:scale-105">
                      <Icon className="w-6 h-6 text-amber-400 group-hover:rotate-6 transition-transform" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
                      <BadgeIcon className="w-3.5 h-3.5 text-amber-400" />
                      {card.badgeText}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                {/* Card Custom Visual Mockup */}
                <div className="mt-2">
                  {card.mock}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
