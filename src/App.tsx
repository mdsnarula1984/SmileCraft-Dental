import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Technology from './components/Technology';
import Doctors from './components/Doctors';
import SmileGallery from './components/SmileGallery';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll progress indicator width
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Toggle Back-To-Top float bubble visibility
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-secondary/20 selection:text-brand-primary relative antialiased scroll-smooth">
      
      {/* 1. Scroll Progress Bar Indicator */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-brand-secondary via-brand-accent to-teal-400 z-[60] transition-all duration-100 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        id="scroll-progress-indicator"
      />

      {/* 2. Primary Navigation */}
      <Navigation onBookClick={() => handleScrollToSection('booking')} />

      {/* 3. Main Sections Layout */}
      <main>
        {/* Hero Banner Section */}
        <Hero
          onBookClick={() => handleScrollToSection('booking')}
          onServicesClick={() => handleScrollToSection('services')}
        />

        {/* Counter Stats Division */}
        <Stats />

        {/* Services / Dental Specializations */}
        <Services onBookClick={() => handleScrollToSection('booking')} />

        {/* Core Value Virtues & Merits */}
        <WhyChooseUs />

        {/* Dark Tech Laboratory Grid section */}
        <Technology />

        {/* Dental Board Specialists filtrations */}
        <Doctors />

        {/* Teeth Before & After interactive Compare slider */}
        <SmileGallery />

        {/* Testimonials Slide Carousel */}
        <Testimonials />

        {/* Booking intake reservation Form validation wizard */}
        <BookingForm />

        {/* FAQs Accordion */}
        <FAQs />

        {/* Contact coordinates & satellite map */}
        <Contact />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Floating Back to Top Button bubble */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 p-3.5 rounded-full bg-white text-brand-primary border border-slate-100 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 hover:text-brand-secondary transition-all cursor-pointer z-50 flex items-center justify-center group"
          aria-label="Scroll back to top"
          id="scroll-to-top-bubble"
        >
          <ChevronUp className="h-5 w-5 group-hover:animate-bounce-slow" />
        </button>
      )}

    </div>
  );
}
