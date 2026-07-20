import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Zap, Flame } from 'lucide-react';

export default function Pricing({ onOpenModal }) {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      id: "starter",
      name: "Starter Plan",
      desc: "Ideal for validating your first idea or scaling your MVP launch fast.",
      priceMonthly: 1080,
      priceAnnual: 864,
      popular: false,
      features: [
        "1 High-Converting Landing Page",
        "React + Tailwind Code Hand-off",
        "Mobile & Desktop Responsive",
        "Basic Conversion Copywriting",
        "5-7 Business Days Delivery",
        "1 Round of Design Revisions"
      ],
      ctaText: "Choose Starter Plan",
      badge: "MVP Ready"
    },
    {
      id: "pro",
      name: "Pro Plan",
      desc: "Our most popular tier. Perfect for serious SaaS founders scaling ARR.",
      priceMonthly: 2800,
      priceAnnual: 2240,
      popular: true, // Glowing Amber Border + Badge + Hex background
      features: [
        "Full Custom High-Converting Page",
        "A/B Testing & Copy Strategy",
        "Animated Glass Components",
        "SEO + LCP Speed Optimization",
        "3-5 Business Days Express Delivery",
        "Unlimited Revisions until Launch",
        "Direct Slack Channel Support"
      ],
      ctaText: "Choose Pro Plan",
      badge: "Most Popular"
    },
    {
      id: "velocity",
      name: "Velocity+ Plan",
      desc: "For high-scale startups needing dedicated design engineering sprint.",
      priceMonthly: 4020,
      priceAnnual: 3216,
      popular: false,
      features: [
        "Complete Multi-Page SaaS Funnel",
        "Interactive Dashboard Preview Mockups",
        "Custom SVG Micro-animations",
        "Full Design System & Component Library",
        "Priority 48-Hour Rush Delivery",
        "Dedicated Senior UX Designer",
        "Post-Launch Conversion Analytics"
      ],
      ctaText: "Choose Velocity Plan",
      badge: "Enterprise Scale"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      
      {/* Background radial glow behind Pro Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-r from-amber-600/20 to-orange-600/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Straightforward pricing <span className="text-gradient-amber">that fits</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Whether you're launching your first idea or scaling your metrics, Aura has support that fits your pace.
          </p>
        </div>

        {/* Monthly / Annual Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium ${!annual ? 'text-white font-semibold' : 'text-zinc-400'}`}>Monthly</span>
          
          <button 
            onClick={() => setAnnual(!annual)}
            className="w-14 h-8 rounded-full bg-white/10 p-1 relative border border-white/15 transition-colors cursor-pointer"
            aria-label="Toggle annual billing"
          >
            <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-md transition-transform duration-300 ${
              annual ? 'translate-x-6' : 'translate-x-0'
            }`} />
          </button>

          <span className={`text-sm font-medium flex items-center gap-2 ${annual ? 'text-white font-semibold' : 'text-zinc-400'}`}>
            <span>Annual</span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold">
              Save 20%
            </span>
          </span>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = annual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular 
                    ? 'glass-card-amber border-2 border-amber-500/80 shadow-[0_0_50px_rgba(249,115,22,0.35)] lg:-translate-y-4 z-10' 
                    : 'bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-amber-500/30 hover:-translate-y-1'
                }`}
              >
                {/* Honeycomb pattern overlay for Pro tier matching reference image */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-hex-pattern opacity-25 rounded-3xl pointer-events-none" />
                )}

                <div className="relative z-10">
                  
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{plan.badge}</span>
                    {plan.popular && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                        <Flame className="w-3.5 h-3.5" />
                        <span>Most Popular</span>
                      </span>
                    )}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  {/* Pricing Display */}
                  <div className="mb-8 pt-4 border-t border-white/10 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">USD / mo</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.popular ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-white/5 text-zinc-400 border border-white/10'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* CTA Button */}
                <div className="relative z-10 pt-4">
                  <button 
                    onClick={() => onOpenModal(`plan-${plan.id}`)}
                    className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] hover:scale-[1.02]' 
                        : 'bg-white/[0.05] border border-white/15 text-white hover:bg-white/10 hover:border-amber-500/40'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
