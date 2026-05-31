import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS_DATA } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQs() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="relative py-24 bg-brand-bg">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="faqs-header">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-brand-secondary/10 text-brand-secondary font-mono tracking-widest uppercase text-[10px] font-bold rounded-md border border-brand-secondary/20">
            <span>Patient Curated Inquiries</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A4D68] tracking-tight leading-tight">
            Frequently Asked <br className="hidden sm:block" />
            <span className="font-serif italic font-light text-[#088395]">Clinical Questions</span>
          </h2>
          <p className="text-slate-500 font-light text-sm max-w-xl mx-auto leading-relaxed">
            Review detailed, clear answers compiled by our chief medical board to align your standard clinical queries.
          </p>
        </div>

        {/* FAQs Accordion Cards Stack */}
        <div className="space-y-4" id="faqs-accordion-stack">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-brand-secondary/20 shadow-md shadow-brand-secondary/[0.02]'
                    : 'border-slate-100 hover:border-slate-200'
                }`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion Trigger Button Bar */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${faq.id}`}
                >
                  <div className="flex items-center space-x-3.5 text-slate-800">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? 'text-brand-secondary' : 'text-slate-400'}`} />
                    <span className="font-serif font-semibold text-[#0A4D68] text-sm sm:text-base leading-tight">
                      {faq.question}
                    </span>
                  </div>

                  <span className={`p-1.5 rounded-lg bg-slate-50 text-gray-500 transition-all duration-300 ${isOpen ? 'rotate-180 bg-brand-secondary/10 text-brand-secondary' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {/* Animated Accordion Body Text Block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 font-light text-xs sm:text-sm leading-relaxed border-t border-slate-50/50 pl-14 select-text">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
