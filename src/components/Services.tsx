import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';
import * as Icons from 'lucide-react';

interface ServicesProps {
  onBookClick: () => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Dynamic Lucide icon renderer
  const renderIcon = (name: string, className: string) => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.Sparkles className={className} />;
  };

  return (
    <section id="services" className="relative py-24 bg-brand-bg">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-l from-brand-secondary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="services-header">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-brand-secondary/10 text-brand-secondary font-mono tracking-widest uppercase text-[10px] font-bold rounded-md">
            <span>Specialized Clinical Offerings</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A4D68] tracking-tight leading-tight">
            Comprehensive Digital Dentistry, <br className="hidden sm:block" />
            <span className="font-serif italic font-light text-[#088395]">Designed For Your Life</span>
          </h2>
          <p className="text-slate-500 font-light text-base max-w-2xl mx-auto leading-relaxed">
            Our treatment models use state-of-the-art biocompatible supplies and computer-guided 
            technologies to achieve flawless anatomical results and completely stress-free comfort.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              className="relative group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-secondary/20 shadow-xs hover:shadow-xl hover:shadow-brand-primary/[0.03] transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              id={`service-card-${service.id}`}
            >
              {/* Subtle top-right accent glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-secondary/10 to-transparent rounded-tr-3xl transition-all group-hover:scale-125 duration-500 pointer-events-none" />

              <div className="space-y-5">
                {/* Custom Icon */}
                <div className="inline-flex p-4 rounded-2xl bg-slate-50 text-brand-secondary group-hover:bg-gradient-brand group-hover:text-white group-hover:scale-110 transition-all duration-300 shrink-0">
                  {renderIcon(service.iconName, 'h-6 w-6')}
                </div>

                {/* Service Details */}
                <div className="space-y-2">
                  <h3 className="font-serif font-semibold text-[#0A4D68] text-lg sm:text-xl group-hover:text-brand-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed min-h-[72px]">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="font-mono text-[10px] font-semibold text-gray-400">
                  Est: {service.duration}
                </span>

                <button
                  onClick={() => setSelectedService(service)}
                  className="font-sans font-semibold text-xs tracking-wide text-brand-secondary group-hover:text-brand-primary flex items-center space-x-1 group-hover:translate-x-1 transition-all duration-300 cursor-pointer"
                  id={`btn-learn-more-${service.id}`}
                >
                  <span>Learn More</span>
                  <Icons.ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learn More Interactive Modal Dialog */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            />

            {/* Modal Box */}
            <motion.div
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative z-10 shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              id="service-detail-modal"
            >
              {/* Inner Circle Glow Decorations */}
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-brand-secondary/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 bg-brand-secondary/5 text-brand-secondary rounded-xl">
                      {renderIcon(selectedService.iconName, 'h-6 w-6')}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-gray-900 text-xl sm:text-2xl">
                        {selectedService.title}
                      </h3>
                      <p className="font-mono text-xs text-brand-secondary">
                        Standard treatment: {selectedService.duration}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    <Icons.X className="h-5 w-5" />
                  </button>
                </div>

                {/* Content Panel */}
                <div className="space-y-6 overflow-y-auto pr-1 max-h-[50vh]">
                  <div>
                    <h4 className="font-display font-semibold text-brand-primary text-sm mb-2">
                      Clinical Overview
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display font-semibold text-brand-primary text-sm mb-3">
                      Core Treatment Benefits
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-xs text-gray-600">
                          <Icons.CheckSquare className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" />
                          <span className="leading-tight">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="pt-6 mt-8 border-t border-slate-100 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onBookClick();
                  }}
                  className="flex-1 py-3 text-center rounded-xl text-sm font-semibold bg-gradient-brand text-white shadow-md hover:opacity-95 active:scale-95 transition-all cursor-pointer"
                  id="modal-cta-book"
                >
                  Book Priority Consultation
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 text-center rounded-xl text-sm font-semibold border border-slate-200 text-gray-600 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Back to Services
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
