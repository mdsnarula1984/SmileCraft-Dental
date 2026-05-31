import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Navigation, Star, Compass } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Studio Location',
      details: '350 Fifth Ave, Suite 7600',
      subDetails: 'New York, NY 10118',
      actionLabel: 'Get Directions',
      actionUrl: 'https://maps.google.com/?q=Empire+State+Building'
    },
    {
      icon: Phone,
      title: 'Consultation hotline',
      details: '+1 (800) 555-SMILE',
      subDetails: 'Concierge Direct Booking',
      actionLabel: 'Call Now',
      actionUrl: 'tel:+18005557645'
    },
    {
      icon: Mail,
      title: 'Digital Inquiries',
      details: 'concierge@smilecraft.com',
      subDetails: 'Clinical Treatment Board',
      actionLabel: 'Email Us',
      actionUrl: 'mailto:concierge@smilecraft.com'
    }
  ];

  const workingHours = [
    { days: 'Monday - Friday', hours: '8:00 AM - 7:00 PM', status: 'Optimal Hours' },
    { days: 'Saturday', hours: '9:00 AM - 4:00 PM', status: 'Weekend Slots' },
    { days: 'Sunday', hours: 'Emergency Slots Only', status: 'On-Call Onsite Support' }
  ];

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="contact-header">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-brand-secondary/10 text-brand-secondary font-mono tracking-wider uppercase text-[10px] font-bold rounded-full">
            <span>Corporate Coordinates</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
            Connect With Our{' '}
            <span className="text-gradient">Metropolitan Practice</span>
          </h2>
          <p className="text-gray-550 font-light text-base max-w-2xl mx-auto">
            Our luxury dental office resides in the heart of midtown. Step into a safe, 
            calm sensory lounge curated specifically to eliminate treatment anxiety.
          </p>
        </div>

        {/* Info & Map Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch" id="contact-dashboard">
          
          {/* Left Panel: Contacts and Working Hours */}
          <div className="lg:col-span-5 space-y-10 flex flex-col justify-between" id="contact-details">
            {/* Direct Cards Lists */}
            <div className="space-y-6">
              {contactInfo.map((info, idx) => {
                const ContactIcon = info.icon;
                return (
                  <motion.div
                    key={idx}
                    className="flex p-5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-brand-secondary/20 hover:bg-white transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    id={`contact-card-${idx}`}
                  >
                    <div className="p-3 bg-brand-secondary/5 text-brand-secondary rounded-xl h-fit shrink-0 mr-4">
                      <ContactIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-gray-900 text-sm">{info.title}</h4>
                      <p className="text-slate-800 text-sm font-semibold mt-1">{info.details}</p>
                      <p className="text-xs text-slate-400 font-light">{info.subDetails}</p>
                      <a
                        href={info.actionUrl}
                        target={info.actionUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="text-[11px] font-semibold text-brand-secondary hover:text-brand-primary mt-1.5 inline-block hover:underline"
                      >
                        {info.actionLabel} &rarr;
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Structured Working Hours Card */}
            <motion.div
              className="p-6 bg-slate-900 text-white rounded-3xl space-y-4 border border-slate-800 relative overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              id="working-hours"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-secondary/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center space-x-2 pb-3 border-b border-white/5">
                <Clock className="h-4.5 w-4.5 text-brand-accent animate-pulse-glow" />
                <h4 className="font-display font-bold text-sm tracking-tight text-white">Office Access Schedule</h4>
              </div>

              <div className="space-y-3">
                {workingHours.map((row, i) => (
                  <div key={i} className="flex justify-between items-center text-xs">
                    <div className="space-y-0.5">
                      <p className="font-semibold text-slate-300">{row.days}</p>
                      <span className={`text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded-sm ${i === 2 ? 'bg-red-400/10 text-red-400' : 'bg-cyan-400/10 text-cyan-400'}`}>
                        {row.status}
                      </span>
                    </div>
                    <span className="font-mono text-slate-100 font-medium">{row.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Panel: Immersive Customized Map Block */}
          <motion.div
            className="lg:col-span-7 relative flex min-h-[380px] lg:min-h-0 rounded-[2rem] overflow-hidden border border-slate-150 shadow-2xl bg-slate-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            id="map-container"
          >
            {/* Highly interactive styled vector/svg map background overlay */}
            <div className="absolute inset-0 bg-slate-950 p-6 flex flex-col justify-between text-slate-400 overflow-hidden font-mono text-[10px]">
              {/* Graphic Starfield and grids representing streets virtually */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Virtual Landmarks lines */}
                  <line x1="20%" y1="0%" x2="20%" y2="100%" stroke="white" strokeWidth="3" />
                  <line x1="0%" y1="60%" x2="100%" y2="60%" stroke="white" strokeWidth="4" />
                  <circle cx="50%" cy="50%" r="90" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
                </svg>
              </div>

              {/* Minimalist interactive control dashboard widgets */}
              <div className="relative z-10 flex justify-between items-center bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-xs select-none">
                <div className="flex items-center space-x-2">
                  <Compass className="h-4 w-4 text-brand-accent animate-spin" style={{ animationDuration: '4s' }} />
                  <span className="text-white text-[9px] font-bold tracking-wider uppercase">SmileCraft Satellite Radar</span>
                </div>
                <div className="space-x-1">
                  <span className="bg-emerald-400/25 text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded-md text-[8px] font-bold tracking-wide">METRO HUB READY</span>
                </div>
              </div>

              {/* Central Map Pin Pointer Box */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[62%] z-10 text-center flex flex-col items-center select-none">
                {/* Ping rings */}
                <div className="relative h-14 w-14 flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-30"></span>
                  <div className="h-6 w-6 rounded-full bg-brand-secondary text-white border-2 border-white shadow-xl flex items-center justify-center z-20">
                    <MapPin className="h-3.5 w-3.5 text-white animate-bounce" />
                  </div>
                </div>
                <div className="mt-2 glass px-3.5 py-1.5 rounded-xl shadow-xl border border-white/20 backdrop-blur-md max-w-[160px]">
                  <p className="text-white font-display font-semibold text-[9px] tracking-tight whitespace-nowrap">SmileCraft Dental Studio</p>
                  <p className="text-[8px] text-gray-300 font-light mt-0.5">350 Fifth Ave Suite 7600</p>
                </div>
              </div>

              {/* Bottom satellite metadata readout parameters */}
              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-stretch sm:items-center bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-xs gap-3">
                <div className="space-y-0.5">
                  <p className="text-white text-[9px] font-bold">LAT: 40.7484° N | LON: 73.9857° W</p>
                  <p className="text-slate-400 text-[8px] font-light">Midtown Manhattan Regional Coordination Point</p>
                </div>
                <a
                  href="https://maps.apple.com/?q=350+Fifth+Ave+New+York+NY"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gradient-brand text-white font-mono text-[9px] font-bold tracking-widest uppercase rounded-lg shadow-sm hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center space-x-1.5"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Launch Maps Navigation</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
