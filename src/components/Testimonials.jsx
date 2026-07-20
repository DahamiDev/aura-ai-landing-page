import React from 'react';
import { Star, Quote, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael K.",
      role: "Co-founder at PromptFlow",
      quote: "We saw our conversion rate jump from 1.8% to 5.4% within 72 hours of launching our Aura landing page. The ROI was instant.",
      metric: "+200% Conv. Rate",
      highlight: false,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Jason L.",
      role: "Founder at SyncPulse",
      quote: "Visually stunner and insanely fast. Aura didn't just build a landing page, they completely transformed how we tell our product story.",
      metric: "$420k ARR Generated",
      highlight: true, // Central card glowing amber accent matching reference image
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emily R.",
      role: "Head of Growth at LiveMid",
      quote: "The glassmorphic aesthetic combined with high-converting copy is a cheat code. Best design agency experience we've ever had.",
      metric: "14.2s Avg Time Saved",
      highlight: false,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white/[0.01]">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            What Founders <span className="text-gradient-amber">Are Saying</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Startup founders trust Aura because we don't just design landing pages—we help founders turn visitors into customers with real impact.
          </p>
        </div>

        {/* Testimonials Cards Grid matching reference top cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                t.highlight 
                  ? 'bg-gradient-to-b from-amber-500/20 via-orange-600/10 to-white/[0.02] backdrop-blur-2xl border-2 border-amber-500/60 shadow-[0_0_40px_rgba(249,115,22,0.3)] md:-translate-y-3' 
                  : 'bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-amber-500/30 hover:-translate-y-1'
              }`}
            >
              {/* Highlight Badge for Center Card */}
              {t.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-[11px] uppercase tracking-wider shadow-[0_0_15px_rgba(249,115,22,0.6)] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Featured Case Study</span>
                </div>
              )}

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-zinc-200 text-sm sm:text-base leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>

              {/* Metric Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold mb-6">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{t.metric}</span>
              </div>

              {/* Founder Details */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-amber-500 to-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)] overflow-hidden">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{t.name}</h3>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
