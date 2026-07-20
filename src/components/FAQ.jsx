import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default matching reference image

  const faqs = [
    {
      q: "How long does it take to deliver my landing page?",
      a: "We typically deliver your landing page within 5 to 7 business days, depending on the plan you choose. If you're on the Velocity+ plan, you get priority delivery in just 3 to 4 days—perfect if you're moving fast and need to go live ASAP."
    },
    {
      q: "What if I don't like the initial design concepts?",
      a: "We work closely with you during the strategy phase to align on vision before building. If the initial draft doesn't hit the mark, we offer iterative revisions until you are 100% satisfied with the outcome."
    },
    {
      q: "Can I request revisions after delivery?",
      a: "Yes! All plans include a revision window post-launch to ensure everything runs smoothly, graphics fit properly, and conversion tracking is working flawlessly."
    },
    {
      q: "Do you help with supporting copywriting and messaging?",
      a: "Absolutely. We craft high-converting hero headlines, subheads, feature bullet points, call-to-action buttons, and value propositions driven by conversion psychology."
    },
    {
      q: "Is full React + Tailwind code included in the pricing?",
      a: "Yes, 100%. You receive clean, production-ready React + Tailwind CSS code or clean HTML/CSS components with full ownership and documentation."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white/[0.01]">
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Questions? <span className="text-gradient-amber">We've got answers.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            We've answered the most common questions below. If you still need help, our team is right here for you.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-gradient-to-r from-amber-500/10 via-white/[0.03] to-white/[0.02] backdrop-blur-xl border border-amber-500/50 shadow-[0_0_25px_rgba(249,115,22,0.15)]' 
                    : 'bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-semibold text-base sm:text-lg text-white hover:text-amber-300 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? 'text-amber-400' : 'text-zinc-500'}`} />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-400' : 'text-zinc-400'}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
