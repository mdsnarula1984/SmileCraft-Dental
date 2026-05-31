import { motion } from 'motion/react';
import { Calendar, ShieldAlert, Star, Shield, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export default function Hero({ onBookClick, onServicesClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] xl:min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-radial from-slate-100/40 via-white/40 to-slate-50/20"
    >
      {/* Dynamic Aesthetic Background Blobs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-200/20 to-teal-100/30 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand-secondary/5 to-cyan-300/10 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Copy */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            id="hero-content"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded-md border border-brand-accent/20">
                Digital Dentistry Elite
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-md border border-slate-200">
                Est. 2008
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-5xl sm:text-6xl xl:text-7.5xl text-[#0A4D68] leading-[0.95] tracking-tighter">
              Transform Your <br />
              <span className="italic font-light font-serif text-[#088395] pr-1">Smile</span> With <br />
              Advanced Care
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-600 text-[17px] sm:text-lg leading-relaxed max-w-lg font-light">
              Experience the intersection of luxury hospitality and surgical precision. Our world-class clinical team utilizes AI-driven diagnostics for results that redefine confidence.
            </p>

            {/* CTA controls */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={onServicesClick}
                className="px-8 py-3.5 bg-[#088395] text-white font-bold rounded-xl shadow-md shadow-[#088395]/20 uppercase text-xs tracking-widest hover:bg-[#0A4D68] active:scale-95 duration-300 transition-all cursor-pointer"
                id="hero-cta-services"
              >
                View Services
              </button>

              <button
                onClick={onBookClick}
                className="px-8 py-3.5 bg-white text-slate-850 hover:bg-slate-50 border border-slate-300/80 font-bold rounded-xl uppercase text-xs tracking-widest shadow-xs active:scale-95 duration-300 transition-all cursor-pointer flex items-center space-x-1.5"
                id="hero-cta-book"
              >
                <Calendar className="h-4 w-4 text-brand-secondary" />
                <span>Book Request</span>
              </button>
            </div>

            {/* Trust User Avatars & Text Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden shadow-xs">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400 overflow-hidden shadow-xs">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-500 overflow-hidden shadow-xs">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-brand-primary text-white text-[10px] font-bold shadow-xs">
                  +10k
                </div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#088395]">
                Trusted Globally & ADA Certified
              </span>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-200/60 max-w-xl">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-start space-x-2.5">
                  <div className="pt-1 text-brand-secondary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-gray-900 text-sm">10,000+</h4>
                    <p className="text-xs text-gray-500 leading-snug">Sustained Patient Success</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <div className="pt-1 text-brand-secondary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-gray-900 text-sm">15+ Years</h4>
                    <p className="text-xs text-gray-500 leading-snug">Elite Clinical Pedigree</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <div className="pt-1 text-brand-secondary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-gray-900 text-sm">3D Imaging</h4>
                    <p className="text-xs text-gray-500 leading-snug">Pain-Free Digital Bio-Design</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Interactive Doctor Visual */}
          <motion.div
            className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            id="hero-visual-panel"
          >
            {/* Visual Frame */}
            <div className="relative w-full max-w-[380px] lg:max-w-none aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/60">
              <img
                src="https://images.unsplash.com/photo-1594824813573-246434ded83f?auto=format&fit=crop&q=80&w=800"
                alt="Dr. Sarah Jenkins smiling warmly in her premier dental clinic"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              {/* Soft overlay gradient shielding color contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Overlay Card 1: Rating */}
            <div
              className="absolute -top-3 left-[-15px] sm:-left-6 glass px-5 py-3 rounded-2xl shadow-xl flex items-center space-x-3 border border-white/40 animate-float"
              style={{ animationDelay: '0s' }}
              id="hero-float-reviews"
            >
              <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200">
                <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-display font-extrabold text-gray-900 text-sm">4.9</span>
                  <span className="text-[10px] text-gray-400 font-medium">/ 5.0 Rating</span>
                </div>
                <p className="text-[10px] text-gray-500 font-sans tracking-wide">2,400+ Verified Reviews</p>
              </div>
            </div>

            {/* Floating Overlay Card 2: Consultation */}
            <div
              className="absolute top-1/2 -right-6 sm:-right-8 glass px-5 py-3.5 rounded-2xl shadow-xl flex items-center space-x-3 border border-white/40 animate-float-slow"
              style={{ animationDelay: '1.5s' }}
              id="hero-float-consult"
            >
              <div className="h-10 w-10 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-200 text-brand-secondary">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display font-semibold text-gray-900 text-xs">Same-Day Booking</p>
                <p className="text-[10px] text-gray-500 font-sans">Immediate Diagnostics</p>
              </div>
            </div>

            {/* Floating Overlay Card 3: Smile Design */}
            <div
              className="absolute bottom-6 -left-4 sm:-left-8 glass px-5 py-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-white/40 animate-float"
              style={{ animationDelay: '3s' }}
              id="hero-float-smile"
            >
              <div className="h-10 w-10 rounded-xl bg-cyan-50 flex items-center justify-center border border-cyan-200 text-cyan-500">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display font-bold text-gray-900 text-xs tracking-tight">Digital Smile Design</p>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  <p className="text-[9px] text-gray-400 font-mono">3D Outcome Preview Ready</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
