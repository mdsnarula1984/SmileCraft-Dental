import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Calendar } from 'lucide-react';

interface NavigationProps {
  onBookClick: () => void;
}

export default function Navigation({ onBookClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Technology', id: 'technology' },
    { label: 'Doctors', id: 'doctors' },
    { label: 'Smile Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'FAQs', id: 'faqs' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection based on section top offsets
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out h-20 flex items-center ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
            id="logo-container"
          >
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-5 w-5 text-white animate-pulse-glow" />
            </div>
            <div>
              <span className="font-display font-bold text-2xl tracking-tight text-brand-primary">
                SmileCraft<span className="font-light text-brand-secondary">Dental</span>
              </span>
              <span className="font-serif italic font-light text-[10px] block -mt-1.5 opacity-90 tracking-widest text-[#088395]">
                Digital Dental Artistry
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2" id="desktop-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-brand-primary border-b-2 border-brand-primary font-bold'
                    : 'text-slate-500 hover:text-brand-primary hover:border-b-2 hover:border-brand-primary/40 border-b-2 border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href="tel:+18005557645"
              className="text-xs font-mono font-medium text-slate-500 hover:text-brand-secondary transition-colors"
            >
              +1 (800) 555-SMILE
            </a>
            <button
              onClick={onBookClick}
              className="bg-brand-primary text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors shadow-sm active:scale-95 duration-300 cursor-pointer flex items-center space-x-2"
              id="cta-booking-nav"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-600 hover:text-brand-primary hover:bg-white/50 transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[70px] glass border-b border-gray-200/50 shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]"
          id="mobile-drawer"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-white bg-brand-primary shadow-sm'
                    : 'text-gray-700 hover:text-brand-primary hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200/50 flex flex-col space-y-3">
              <a
                href="tel:+18005557645"
                className="text-center py-2 text-sm font-mono font-semibold text-brand-secondary hover:underline"
              >
                +1 (800) 555-SMILE
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full text-center py-3 rounded-xl text-base font-bold bg-gradient-brand text-white hover:opacity-90 active:scale-95 transition-all"
                id="cta-booking-mobile"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
