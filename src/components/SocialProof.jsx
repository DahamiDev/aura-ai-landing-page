import React from 'react';
import { ShieldCheck, Flame, Cpu, Compass, Layers, Zap, Hexagon } from 'lucide-react';

export default function SocialProof() {
  const logos = [
    { name: "AURANCE", icon: Hexagon },
    { name: "PromptPilot", icon: Flame },
    { name: "Screen", icon: Layers },
    { name: "LiveMid", icon: Zap },
    { name: "Trinity", icon: Compass },
    { name: "Vortex", icon: Cpu }
  ];

  return (
    <section className="py-12 relative border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <p className="text-center text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-8">
          Trusted by <span className="text-amber-400 font-mono">100+</span> High-Growth Web3 & AI SaaS Founders
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-2 text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer group"
              >
                <Icon className="w-5 h-5 text-amber-500/70 group-hover:text-amber-400 group-hover:scale-110 transition-all" />
                <span className="font-bold tracking-wider text-sm sm:text-base font-mono uppercase group-hover:text-white">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
