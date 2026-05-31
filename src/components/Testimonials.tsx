import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const length = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + length) % length);
  };

  // Auto-scrolling slide trigger
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-white overflow-hidden">
      {/* Visual floating decoration blobs */}
      <div className="absolute top-[20%] right-[-100px] w-72 h-72 rounded-full bg-brand-secondary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="testimonials-header">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-brand-secondary/10 text-brand-secondary font-mono tracking-widest uppercase text-[10px] font-bold rounded-md border border-brand-secondary/20">
            <span>Genuine Clinical Endorsements</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A4D68] tracking-tight leading-tight">
            Loved By Patients, <br className="hidden sm:block" />
            <span className="font-serif italic font-light text-[#088395]">Trusted For Results</span>
          </h2>
          <p className="text-slate-500 font-light text-base max-w-2xl mx-auto leading-relaxed">
            Read first-hand accounts of specialized restorative, cosmetic, and surgical 
            dental procedures completed in our metropolitan studio.
          </p>
        </div>

        {/* Carousel Framework */}
        <div
          className="max-w-4xl mx-auto relative px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          id="testimonials-slider-box"
        >
          {/* Main Card Holder */}
          <div className="relative min-h-[360px] md:min-h-[280px] bg-slate-50/70 border border-slate-100 rounded-[2.5rem] p-8 sm:p-12 shadow-xl glass transition-all overflow-hidden flex flex-col justify-between">
            {/* Elegant Large Quote Signifier Background */}
            <div className="absolute top-6 right-8 text-neutral-200/50 pointer-events-none">
              <Quote className="h-28 w-28 rotate-180" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 md:space-y-8 relative z-10"
              >
                {/* Rating Bar */}
                <div className="flex items-center space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Patient Review Text */}
                <p className="text-gray-700 italic text-base sm:text-lg md:text-xl font-light leading-relaxed pr-6">
                  "{current.review}"
                </p>

                {/* Patient Author Signature Structure */}
                <div className="flex items-center space-x-4">
                  <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img
                      src={current.imageUrl}
                      alt={current.name}
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-sm">
                      {current.name}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {current.location}
                    </p>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-md bg-teal-50 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-secondary border border-teal-100">
                      {current.treatment}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Custom Navigation Controls */}
            <div className="flex items-center justify-between mt-8 border-t border-slate-100/80 pt-6 relative z-10">
              {/* Carousel Index Page indicator Dots */}
              <div className="flex space-x-2">
                {TESTIMONIALS_DATA.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === dotIdx ? 'w-6 bg-brand-secondary' : 'w-2 bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              {/* Back & Forward Action controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-gray-600 hover:text-brand-primary active:scale-95 transition-all cursor-pointer shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-gray-600 hover:text-brand-primary active:scale-95 transition-all cursor-pointer shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
