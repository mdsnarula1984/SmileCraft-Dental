import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DOCTORS_DATA } from '../data';
import { Doctor } from '../types';
import { Linkedin, Twitter, Mail, Award, CheckSquare, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

export default function Doctors() {
  const [activeTab, setActiveTab] = useState('All');
  const [expandedDoctorId, setExpandedDoctorId] = useState<string | null>(null);

  const tabs = ['All', 'Cosmetic', 'Implants', 'Orthodontics', 'Endodontics'];

  // Map tabs to logical categorization filters
  const filterDoctors = (doctors: Doctor[]) => {
    if (activeTab === 'All') return doctors;
    if (activeTab === 'Cosmetic') {
      return doctors.filter(doc => doc.specialization.toLowerCase().includes('cosmetic'));
    }
    if (activeTab === 'Implants') {
      return doctors.filter(doc => doc.specialization.toLowerCase().includes('implant') || doc.role.toLowerCase().includes('implants'));
    }
    if (activeTab === 'Orthodontics') {
      return doctors.filter(doc => doc.specialization.toLowerCase().includes('ortho'));
    }
    if (activeTab === 'Endodontics') {
      return doctors.filter(doc => doc.specialization.toLowerCase().includes('endodontic') || doc.role.toLowerCase().includes('endodontist'));
    }
    return doctors;
  };

  const filteredDoctors = filterDoctors(DOCTORS_DATA);

  return (
    <section id="doctors" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="doctors-header">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-brand-secondary/10 text-brand-secondary font-mono tracking-widest uppercase text-[10px] font-bold rounded-md border border-brand-secondary/20">
            <span>Our Dental Board Leaders</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A4D68] tracking-tight leading-tight">
            Meet Our World-Class <br className="hidden sm:block" />
            <span className="font-serif italic font-light text-[#088395]">Specialist Directors</span>
          </h2>
          <p className="text-slate-500 font-light text-base max-w-2xl mx-auto leading-relaxed">
            Our clinicians are board-certified leaders, clinical instructors, and researchers 
            holding postgraduate credentials from the world’s most prestigious universities.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-16" id="doctors-filter-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setExpandedDoctorId(null); // Close any active bio to prevent layout confusion
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'bg-slate-150/50 text-slate-600 border border-slate-200/55 hover:bg-slate-100 hover:text-brand-primary'
              }`}
            >
              {tab === 'All' ? 'All Directors' : `${tab}`}
            </button>
          ))}
        </div>

        {/* Doctors Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="doctors-grid">
          <AnimatePresence mode="popLayout">
            {filteredDoctors.map((doc, idx) => {
              const isExpanded = expandedDoctorId === doc.id;
              
              return (
                <motion.div
                  layout
                  key={doc.id}
                  className="rounded-3xl bg-slate-50/50 border border-slate-100 p-5 shadow-xs hover:shadow-xl hover:bg-white hover:border-brand-secondary/15 transition-all duration-300 flex flex-col justify-between"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  id={`doctor-card-${doc.id}`}
                >
                  <div className="space-y-4">
                    {/* Portrait Frame */}
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group/image border border-slate-200">
                      <img
                        src={doc.imageUrl}
                        alt={`Portrait of ${doc.name}`}
                        className="w-full h-full object-cover object-center group-hover/image:scale-[1.03] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Interactive Float Tag */}
                      <span className="absolute bottom-3 left-3 px-3 py-1 bg-brand-primary/95 backdrop-blur-xs text-white text-[9px] font-mono tracking-widest font-bold uppercase rounded-lg">
                        {doc.experience}
                      </span>
                    </div>

                    {/* Basic Clinician Info */}
                    <div className="space-y-1">
                      <span className="text-brand-secondary font-display font-semibold text-xs tracking-wider uppercase block">
                        {doc.specialization}
                      </span>
                      <h3 className="font-serif font-bold text-[#0A4D68] text-base sm:text-lg">
                        {doc.name}
                      </h3>
                      <p className="text-gray-500 text-xs font-light leading-normal min-h-[32px]">
                        {doc.role}
                      </p>
                    </div>

                    {/* Custom Expanding Bio Drawer */}
                    <div className="pt-3 border-t border-slate-100 flex flex-col">
                      <button
                        onClick={() => setExpandedDoctorId(isExpanded ? null : doc.id)}
                        className="inline-flex items-center space-x-1.5 self-start text-xs font-semibold text-brand-primary/80 hover:text-brand-secondary transition-colors cursor-pointer"
                        id={`btn-doctor-bio-${doc.id}`}
                      >
                        <span>{isExpanded ? 'Hide Credentials' : 'View Credentials'}</span>
                        {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-3 text-xs text-gray-600 space-y-3"
                          >
                            <div className="flex items-start space-x-1.5 pt-2 border-t border-slate-100/60">
                              <GraduationCap className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" />
                              <p className="font-light leading-normal">
                                <strong className="font-semibold text-gray-800">Alumnus:</strong> {doc.qualification}
                              </p>
                            </div>
                            <div className="flex items-start space-x-1.5">
                              <Award className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" />
                              <p className="font-light leading-normal">
                                {doc.bio}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Clinician Direct Social Contacts */}
                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      {doc.socials.linkedin && (
                        <a
                          href={doc.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-brand-primary hover:text-white text-gray-500 transition-all duration-300"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {doc.socials.twitter && (
                        <a
                          href={doc.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-brand-primary hover:text-white text-gray-500 transition-all duration-300"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {doc.socials.email && (
                        <a
                          href={`mailto:${doc.socials.email}`}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-brand-primary hover:text-white text-gray-500 transition-all duration-300"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    <span className="font-mono text-[9px] font-bold text-gray-450 tracking-wider">
                      BOARD ELIGIBLE
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
