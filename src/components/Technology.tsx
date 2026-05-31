import { motion } from 'motion/react';
import { TECHNOLOGY_DATA } from '../data';
import { Cpu, Eye, QrCode, ScanFace, Activity } from 'lucide-react';

export default function Technology() {
  const iconMap = [ScanFace, Eye, QrCode, Cpu];

  return (
    <section id="technology" className="relative py-28 bg-slate-950 text-white overflow-hidden">
      {/* Intense futuristic digital grid elements/glowing orbits */}
      <div className="absolute top-1/4 left-1/10 w-[400px] h-[400px] rounded-full bg-brand-primary/10 blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] rounded-full bg-brand-accent/5 blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDuration: '8s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Container */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4" id="tech-header">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-brand-accent/10 text-brand-accent font-mono tracking-widest uppercase text-[10px] font-bold rounded-md border border-brand-accent/20">
            <span>Futuristic Dental Laboratory Hub</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Digital Precision. <br className="hidden sm:block" />
            <span className="font-serif italic font-light text-[#05BFDB]">Biological Harmony.</span>
          </h2>
          <p className="text-slate-400 font-light text-base max-w-2xl mx-auto leading-relaxed">
            We reject obsolete dental mechanics. By automating microdiagnostic screening with 
            cloud AI engines and using soft-tissue photon lasers, we provide pain-free, instant-healing treatments.
          </p>
        </div>

        {/* Futuristic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="tech-grid">
          {TECHNOLOGY_DATA.map((tech, idx) => {
            const TechIcon = iconMap[idx] || Cpu;

            return (
              <motion.div
                key={tech.id}
                className="relative group p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[340px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                id={`tech-card-${tech.id}`}
              >
                {/* Colored Glow Circle on Hover */}
                <div className={`absolute -inset-px bg-gradient-to-br ${tech.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl`} />

                <div className="relative z-10 space-y-6">
                  {/* Technology Icon Wrapper */}
                  <div className="inline-flex p-3.5 rounded-2xl bg-white/5 text-cyan-400 border border-white/10 group-hover:bg-gradient-brand group-hover:text-white group-hover:border-transparent group-hover:scale-105 transition-all duration-300">
                    <TechIcon className="h-5 w-5" />
                  </div>

                  {/* Details Block */}
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] font-semibold text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-md tracking-wider uppercase inline-block">
                      {tech.tagline}
                    </span>
                    <h3 className="font-serif font-semibold text-gray-100 text-lg sm:text-xl group-hover:text-white transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-light leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>

                {/* Micro tech indicators */}
                <div className="relative z-10 pt-6 mt-6 border-t border-slate-900 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-mono text-[9px] text-slate-500 tracking-wider">
                      SYSTEM ONLINE
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-600 font-bold">
                    0{idx + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
