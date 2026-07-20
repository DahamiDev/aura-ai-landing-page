import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

export default function GetStartedModal({ isOpen, onClose, defaultType = 'Get Started' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: 'SaaS Landing Page',
    timeline: 'ASAP (Next 7 Days)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 2.5s on success
    }, 2500);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Backdrop overlay */}
      <div 
        onClick={resetAndClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#09090b]/95 backdrop-blur-2xl border border-white/15 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 animate-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Top Radial Glow inside Modal */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 blur-3xl pointer-events-none rounded-full" />

        {/* Close Button */}
        <button 
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">Aura AI 2.0 Access</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Start Your <span className="text-gradient-amber">Design Sprint</span>
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">
              Fill out this quick form and our strategy team will reach out within 2 hours with custom wireframes.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Elon Musk"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Work Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Project Type</label>
                  <select 
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                    className="w-full px-3 py-3 rounded-xl bg-[#121215] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500/60 transition-all"
                  >
                    <option value="SaaS Landing Page">SaaS Landing Page</option>
                    <option value="Multi-Page Web App">Multi-Page Web App</option>
                    <option value="AI Dashboard UI">AI Dashboard UI</option>
                    <option value="Full Rebrand">Full Rebrand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Launch Timeline</label>
                  <select 
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full px-3 py-3 rounded-xl bg-[#121215] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500/60 transition-all"
                  >
                    <option value="ASAP (Next 7 Days)">ASAP (Next 7 Days)</option>
                    <option value="Within 2 Weeks">Within 2 Weeks</option>
                    <option value="1 Month Out">1 Month Out</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold text-sm shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Priority Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[10px] text-zinc-500 text-center flex items-center justify-center gap-1">
                <Shield className="w-3 h-3 text-amber-500" />
                <span>100% confidential. No spam ever.</span>
              </p>

            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You're On The Priority List!</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Thanks {formData.name || 'Founder'}! Our design lead will contact you at <span className="text-amber-400 font-mono">{formData.email}</span> shortly with your preview wireframes.
            </p>
            <button 
              onClick={resetAndClose}
              className="px-6 py-2.5 rounded-full bg-white/10 border border-white/15 text-white font-semibold text-xs hover:bg-white/20 transition-all"
            >
              Back to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
