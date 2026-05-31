import { useState, FormEvent } from 'react';
import { Sparkles, Send, Mail, CheckCircle2, Award, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;

    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const handleLinkClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 font-sans text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/5">
          {/* Column 1: Brand Info Block */}
          <div className="lg:col-span-4 space-y-6" id="footer-col-brand">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="p-2 rounded-xl bg-gradient-brand text-white shadow-md">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <span className="font-serif italic font-semibold text-lg tracking-tight text-white">
                  SmileCraft
                </span>
                <span className="font-sans font-light text-[9px] block -mt-1 uppercase tracking-widest text-[#05BFDB]">
                  Dental Artistry
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Providing modern, bioceramics aesthetic dental treatments and computer-guided implantology within Midtown Manhattan. Experience clinical medicine designed for life.
            </p>

            {/* Certifications icons list */}
            <div className="flex items-center space-x-3.5 pt-2">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0" />
                <span className="text-[10px] font-semibold text-slate-350 tracking-wider">ADA APPROVED</span>
              </div>
              <span className="text-slate-700">|</span>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0" />
                <span className="text-[10px] font-semibold text-slate-350 tracking-wider">AACD MEMBER</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links Maps */}
          <div className="lg:col-span-2 space-y-4" id="footer-col-nav">
            <h4 className="font-serif font-bold text-slate-100 tracking-wider text-xs uppercase text-white">Explore Portal</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Home Page', id: 'home' },
                { label: 'Our Specializations', id: 'services' },
                { label: 'The Paradigm', id: 'why-us' },
                { label: 'Tech Laboratory', id: 'technology' },
                { label: 'Specialist Directors', id: 'doctors' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className="hover:text-white transition-colors text-left focus:outline-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Clinical Offerings */}
          <div className="lg:col-span-3 space-y-4" id="footer-col-offerings">
            <h4 className="font-serif font-bold text-slate-100 tracking-wider text-xs uppercase text-white">Primary Specializations</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Diagnostic General Checkup', id: 'services' },
                { label: 'Porcelain Smile Reconstruction', id: 'services' },
                { label: 'Computer-Guided Implants', id: 'services' },
                { label: 'Laser Teeth Whitening LED', id: 'services' },
                { label: 'Orthodontics & Invisalign®', id: 'services' }
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className="hover:text-white transition-colors text-left focus:outline-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Box */}
          <div className="lg:col-span-3 space-y-4" id="footer-col-news">
            <h4 className="font-serif font-bold text-slate-100 tracking-wider text-xs uppercase text-white">Clinical Journal</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Subscribe to recieve our biological oral-health tips, schedule recalls, and periodic aesthetic updates.
            </p>

            {/* Form subscriber field */}
            <form onSubmit={handleSubscribe} className="space-y-2" noValidate>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="name@healthcare.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribed}
                  className="w-full bg-slate-900 border border-slate-800 text-xs px-3.5 py-2.5 pr-10 rounded-xl focus:outline-none focus:border-brand-accent focus:bg-slate-950 text-white placeholder-slate-500 disabled:opacity-40"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="absolute right-1 p-1.5 text-brand-accent bg-white/5 rounded-lg border border-white/5 hover:bg-brand-accent hover:text-slate-950 active:scale-95 transition-all text-xs cursor-pointer disabled:opacity-30"
                  aria-label="Send subscribe"
                >
                  <Send className="h-3 w-3" />
                </button>
              </div>

              {subscribed && (
                <p className="text-[10px] font-semibold text-emerald-400 flex items-center space-x-1 animate-pulse">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>Welcome to the SmileCraft Clinical Circle!</span>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Credits Panel */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 gap-4" id="footer-credits">
          <div>
            <p>&copy; {new Date().getFullYear()} SmileCraft Dental Studio. All clinical rights reserved.</p>
          </div>

          {/* Dynamic licensing disclaimer text block */}
          <div className="flex items-center space-x-1">
            <span>Designed in New York for elite aesthetic practices with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>by Creative Portfolios.</span>
          </div>

          {/* Core Terms */}
          <div className="flex space-x-4">
            <a href="#booking" className="hover:text-slate-350 transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#services" className="hover:text-slate-350 transition-colors">ADA compliance disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
