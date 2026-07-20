import React, { useState } from 'react';
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap, CheckCircle2, ChevronRight, Activity, Layers, BarChart3, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-amber-600/20 via-orange-500/15 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[250px] bg-amber-500/25 blur-[100px] pointer-events-none rounded-full animate-pulse-glow" />

      {/* Grid Pattern Background Accent */}
      <div className="absolute inset-0 bg-hex-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-8 hover:border-amber-500/60 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.15)] cursor-pointer" onClick={() => onOpenModal('badge')}>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span>Introducing Aura 2.0</span>
          <span className="text-zinc-500">|</span>
          <span className="flex items-center gap-1 text-white font-semibold group">
            See What's New <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-amber-400" />
          </span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
          Launch faster. <br className="hidden sm:block" />
          <span className="text-gradient-amber drop-shadow-[0_10px_20px_rgba(249,115,22,0.2)]">
            Convert better.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-400 font-normal mb-10 leading-relaxed">
          We design AI-driven SaaS landing pages that turn cold visitors into high-intent customers. Powered by first-principles design and deep conversion psychology.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={() => onOpenModal('cta')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold text-base shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_45px_rgba(249,115,22,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 text-zinc-950 bg-white rounded-full p-1 font-bold" />
          </button>
          
          <button 
            onClick={() => onOpenModal('demo')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/15 text-white font-semibold text-base hover:bg-white/[0.08] hover:border-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center">
              <Play className="w-3 h-3 text-amber-400 fill-amber-400 ml-0.5" />
            </div>
            <span>See Features</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 text-xs text-zinc-400 mb-16">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-500" />
            <span>Deploy in 5 minut esily eas</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-500" />
            <span>99.99% Uptime SLA</span>
          </div>
        </div>

        {/* Central Visual Mock: Floating Glass Dashboard Preview Card */}
        <div className="relative max-w-5xl mx-auto">
          {/* Outer Ambient Glow behind Mockup */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-orange-600/20 to-amber-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000" />
          
          {/* Main Glass Mockup Container */}
          <div className="relative rounded-2xl bg-[#09090b]/80 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
            
            {/* Mockup Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-4 text-xs font-mono text-zinc-500">app.aura.ai/dashboard/analytics</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  AI Engine Live
                </span>
              </div>
            </div>

            {/* Dashboard Sub-Header / Tab Navigation */}
            <div className="px-6 py-3 border-b border-white/10 flex items-center justify-between flex-wrap gap-3 bg-white/[0.01]">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setActiveTab('analytics')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === 'analytics' 
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Conversion Insights
                </button>
                <button 
                  onClick={() => setActiveTab('ab')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === 'ab' 
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  A/B Engine
                </button>
                <button 
                  onClick={() => setActiveTab('realtime')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === 'realtime' 
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Live Traffic
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="font-mono text-amber-400">⚡ +34.2% Conv. Lift</span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
              
              {/* Stat Card 1 */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                  <span>Total Revenue Lift</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">$148,290.00</div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span>+42.8% vs last month</span>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                  <span>Avg. Conversion Rate</span>
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl font-bold text-amber-400 mb-1">8.94%</div>
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium">
                  <span>Industry Avg: 2.3%</span>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                  <span>AI Automated Prompts</span>
                  <Activity className="w-4 h-4 text-orange-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">1,420 / sec</div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
                  <span>Active optimization</span>
                </div>
              </div>

              {/* Main Visual Chart Simulation */}
              <div className="md:col-span-2 p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between min-h-[220px]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-semibold text-zinc-200">Conversion Funnel Growth (Real-Time)</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">Updated 2s ago</span>
                </div>

                {/* Bars Graphic */}
                <div className="flex items-end justify-between gap-3 h-32 pt-4 border-b border-white/10 pb-2">
                  {[
                    { day: 'Mon', val: '40%', val2: '65%' },
                    { day: 'Tue', val: '55%', val2: '80%' },
                    { day: 'Wed', val: '48%', val2: '72%' },
                    { day: 'Thu', val: '70%', val2: '92%' },
                    { day: 'Fri', val: '65%', val2: '88%' },
                    { day: 'Sat', val: '85%', val2: '98%' },
                    { day: 'Sun', val: '95%', val2: '100%' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 group/bar">
                      <div className="w-full flex items-end justify-center gap-1 h-full">
                        <div 
                          className="w-1/2 bg-white/10 rounded-t group-hover/bar:bg-white/20 transition-all" 
                          style={{ height: item.val }} 
                        />
                        <div 
                          className="w-1/2 bg-gradient-to-t from-orange-600 to-amber-400 rounded-t shadow-[0_0_12px_rgba(249,115,22,0.6)] group-hover/bar:brightness-125 transition-all" 
                          style={{ height: item.val2 }} 
                        />
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono">{item.day}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-3">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded bg-white/20"></span> Standard SaaS
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded bg-amber-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span> Aura AI Engine
                    </span>
                  </div>
                  <span className="text-amber-400 font-medium">+184% Performance Improvement</span>
                </div>
              </div>

              {/* Side Live Feed Widget */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col gap-3">
                <div className="text-xs font-semibold text-zinc-200 border-b border-white/10 pb-2 flex items-center justify-between">
                  <span>Live Action Stream</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </div>

                <div className="flex flex-col gap-2.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px]">AI</div>
                    <div>
                      <div className="text-zinc-200 font-medium text-[11px]">Headline A/B Test Won</div>
                      <div className="text-zinc-500 text-[10px]">+14.2% CTR Boost</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">💰</div>
                    <div>
                      <div className="text-zinc-200 font-medium text-[11px]">New Enterprise Signup</div>
                      <div className="text-zinc-500 text-[10px]">$2,800/mo Plan booked</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[10px]">⚡</div>
                    <div>
                      <div className="text-zinc-200 font-medium text-[11px]">Page Load Optimized</div>
                      <div className="text-zinc-500 text-[10px]">0.34s Global LCP</div>
                    </div>
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
