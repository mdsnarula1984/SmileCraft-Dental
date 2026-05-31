import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { motion } from 'motion/react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';
import { Sparkles, Eye, ArrowLeftRight, MoveHorizontal, RefreshCw } from 'lucide-react';

export default function SmileGallery() {
  const [selectedCase, setSelectedCase] = useState<GalleryItem>(GALLERY_DATA[0]);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle slide movement for the compare frame
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isResizing) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsResizing(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="gallery" className="relative py-24 bg-brand-bg overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[240px] h-[240px] bg-brand-primary/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="gallery-header">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-brand-secondary/10 text-brand-secondary font-mono tracking-widest uppercase text-[10px] font-bold rounded-md border border-brand-secondary/20">
            <span>Dynamic Smile Makeovers</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A4D68] tracking-tight leading-tight">
            Before & After <br className="hidden sm:block" />
            <span className="font-serif italic font-light text-[#088395]">Smile Gallery</span>
          </h2>
          <p className="text-slate-500 font-light text-base max-w-2xl mx-auto leading-relaxed">
            Witness the immaculate biological transformations achieved by our clinical directors. 
            Drag the gold central slider to see the transition of real teeth makeovers.
          </p>
        </div>

        {/* Case Toggle Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12" id="gallery-case-selectors">
          {GALLERY_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedCase(item);
                setSliderPosition(50); // Reset position
              }}
              className={`px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                selectedCase.id === item.id
                  ? 'bg-brand-secondary text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-brand-primary border border-slate-200/60'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-3xl mx-auto relative px-2" id="gallery-slider-stage">
          
          {/* Main Comparison Sandbox */}
          <div
            ref={containerRef}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-200 border border-white/60 select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsResizing(true)}
            onTouchStart={() => setIsResizing(true)}
            id="comparison-container"
          >
            
            {/* 1. Before Image (Strictly Base Behind) */}
            <img
              src={selectedCase.beforeUrl}
              alt="Before Treatment state"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none filter saturate-[0.8]"
              referrerPolicy="no-referrer"
            />
            {/* Label Badge Before */}
            <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-brand-primary/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider rounded-lg pointer-events-none">
              Initial State
            </span>

            {/* 2. After Image (Cover Layer Positioned Absolutely) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img
                src={selectedCase.afterUrl}
                alt="After Treatment state"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[1.03] saturate-[1.1]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Label Badge After */}
            <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-brand-secondary/90 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider rounded-lg pointer-events-none">
              Smile Crafted
            </span>

            {/* 3. Central Interactive Divider Handle Column */}
            <div
              className="absolute inset-y-0 w-1 bg-white z-30 transition-shadow duration-250 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Gold Pill Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-brand-primary shadow-xl border-2 border-brand-accent flex items-center justify-center before-after-handle z-40 active:scale-110 transition-transform">
                <ArrowLeftRight className="h-4 w-4 text-brand-secondary" />
              </div>
            </div>

            {/* Hint overlay to user (diminishes after first interaction) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-slate-900/40 backdrop-blur-xs text-white text-[10px] font-medium tracking-wide flex items-center space-x-1.5 px-3 py-1.5 rounded-full pointer-events-none">
              <MoveHorizontal className="h-3 w-3 text-brand-accent" />
              <span>Drag handle or hover to compare</span>
            </div>

          </div>

          {/* Subtitle details under block */}
          <div className="text-center mt-5 space-y-1.5">
            <h4 className="font-serif font-extrabold text-brand-primary text-md">
              {selectedCase.title}
            </h4>
            <p className="text-xs text-gray-500 font-light flex items-center justify-center space-x-1">
              <Sparkles className="h-3 w-3 text-brand-secondary inline-block" />
              <span>{selectedCase.subtitle}</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
