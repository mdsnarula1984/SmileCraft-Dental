import { motion } from 'motion/react';
import { Cpu, HeartHandshake, Award, ShieldCheck, Clock, ShieldAlert, Check } from 'lucide-react';

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: Cpu,
      title: 'Advanced Equipment',
      desc: 'Featuring state-of-the-art 3D CBCT imaging, Zeiss microscopes, and WaterLase lasers for absolute bio-precision.',
      color: 'bg-cyan-50 text-cyan-600 border-cyan-100'
    },
    {
      icon: ShieldCheck,
      title: 'Pain-Free Procedures',
      desc: 'Advanced computer-controlled anesthesia dose injection and laser dentistry to render drills and discomfort obsolete.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      icon: Award,
      title: 'Experienced Specialists',
      desc: 'Our staff comprises board-certified clinicians trained at Ivy League institutions, commanding decades of combined expertise.',
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Treatment Plans',
      desc: 'Every smile is biologically unique. We craft individualized Digital Smile Designs to harmonize with your facial structures.',
      color: 'bg-amber-50 text-amber-600 border-amber-100'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      desc: 'Accommodating executive calendars with smooth appointment protocols, evening slots, and immediate digital check-ins.',
      color: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      icon: ShieldAlert,
      title: '24/7 Emergency Care',
      desc: 'Same-day direct priority slots for severe acute trauma, tooth structural fractures, and urgent root block relief.',
      color: 'bg-rose-50 text-rose-600 border-rose-100'
    }
  ];

  return (
    <section id="why-us" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Large Professional Interior Showcase */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            id="why-us-visual"
          >
            {/* Ambient Background Glow Behind Image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-secondary/10 to-brand-accent/10 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                alt="A luxury reception and treatment room at SmileCraft Dental clinic"
                className="w-full h-full object-cover aspect-[4/5] object-center select-none"
                referrerPolicy="no-referrer"
              />
              {/* Overlay card reflecting prestige index */}
              <div className="absolute bottom-6 inset-x-6 glass p-5 rounded-2xl border border-white/40 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-brand-primary uppercase tracking-wider">
                    ISO-9001 Gold Certified Clinic
                  </span>
                </div>
                <h4 className="font-display font-bold text-gray-900 text-sm mt-1">
                  Metropolitan Clinical Benchmark
                </h4>
                <p className="text-xs text-gray-500 font-light mt-0.5">
                  Audited annually for clinical safety, hygiene, and outstanding technological integration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Features Grid */}
          <div className="lg:col-span-7 space-y-10" id="why-us-details">
            {/* Section Headings */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1 px-3 py-1 bg-brand-secondary/10 text-brand-secondary font-mono tracking-widest uppercase text-[10px] font-bold rounded-md border border-brand-secondary/20">
                <span>The SmileCraft Paradigm</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A4D68] tracking-tight leading-tight">
                Crafting Exceptional Experiences, <br className="hidden sm:block" />
                <span className="font-serif italic font-light text-[#088395]">Not Just Smile Treatment</span>
              </h2>
              <p className="text-slate-500 font-light text-base leading-relaxed">
                By removing conventional patient friction and marrying diagnostic laser engineering 
                with board-certified artistry, we represent the vanguard of preventative and cosmetic medicine.
              </p>
            </div>

            {/* Feature Blocks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-start p-5 rounded-2xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50/40 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    id={`why-highlight-${idx}`}
                  >
                    {/* Icon Base */}
                    <div className={`p-2.5 rounded-xl border ${item.color} group-hover:scale-105 transition-transform duration-300 mb-3`}>
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <h3 className="font-serif font-semibold text-[#0A4D68] text-sm tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
