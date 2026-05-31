import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, Mail, User, CheckCircle, ChevronRight, MessageSquare, ShieldCheck, ArrowLeft, ClipboardCopy, Send } from 'lucide-react';

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    treatmentType: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const treatments = [
    'General Sanitation & Checkup',
    'Porcelain Veneers & Smile Design',
    '3D Guided Dental Implants',
    'Zoom Laser Teeth Whitening',
    'Invisalign Clear Aligners',
    'Microscope-Assisted Root Canal'
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field when user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  // Step 1 Validation
  const validateStep1 = () => {
    const step1Errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      step1Errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      step1Errors.name = 'Name must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@s]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      step1Errors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      step1Errors.email = 'Please provide a valid email format';
    }

    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/;
    if (!formData.phone.trim()) {
      step1Errors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 9) {
      step1Errors.phone = 'Please enter a valid phone number';
    }

    setErrors(step1Errors);
    return Object.keys(step1Errors).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = () => {
    const step2Errors: Record<string, string> = {};
    if (!formData.preferredDate) {
      step2Errors.preferredDate = 'Appointment date is required';
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        step2Errors.preferredDate = 'Please select a date in the future';
      }
    }

    if (!formData.treatmentType) {
      step2Errors.treatmentType = 'Please select a treatment specialization';
    }

    setErrors(step2Errors);
    return Object.keys(step2Errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
    setErrors({});
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    
    // Simulate API save block
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Generate randomized premium voucher reference
      const refCode = 'SC-' + Math.floor(1000 + Math.random() * 9000);
      setBookingRef(refCode);
    }, 1500);
  };

  return (
    <section id="booking" className="relative py-24 bg-brand-primary overflow-hidden text-white">
      {/* Visual glowing geometry background elements */}
      <div className="absolute top-[-5%] left-[-10%] w-[450px] h-[450px] bg-brand-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Conversion Highlights */}
          <div className="lg:col-span-5 space-y-8" id="booking-copy">
            <div className="inline-flex items-center space-x-1 px-3 py-1 bg-white/10 text-brand-accent font-mono tracking-widest uppercase text-[10px] font-bold rounded-md border border-brand-accent/25">
              <span>Concierge Direct Intake</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Begin Your Premium <br className="hidden sm:block" />
              <span className="font-serif italic font-light text-brand-accent">Smile Journey Today</span>
            </h2>

            <p className="text-slate-300 font-light text-base leading-relaxed">
              Book your complimentary consultations, complete oral hygiene digital scans, 
              and 3D smile alignment models in one relaxed concierge booking session. 
              Our treatment coordinators will reach out inside 2 business hours.
            </p>

            {/* Direct Value Badges */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-3.5">
                <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <span className="text-sm text-slate-300 font-light">Zero Obligation, Complimentry Dental Mapping</span>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <span className="text-sm text-slate-300 font-light">Direct HIPPA-Compliant Secure Systems</span>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <span className="text-sm text-slate-300 font-light">Flexible Interest-Free In-House Payments</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Wizard Card */}
          <div className="lg:col-span-7" id="booking-stage">
            <div className="bg-white text-gray-900 rounded-[2rem] p-6 sm:p-10 shadow-2xl border border-slate-100 relative min-h-[460px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="booking-form-box"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    {/* Header Step Progress Indicators */}
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-mono text-[10px] font-bold text-brand-secondary uppercase tracking-widest">
                          STEP {step} OF 2
                        </span>
                        <h3 className="font-serif font-bold text-[#0A4D68] text-lg sm:text-xl">
                          {step === 1 ? 'Personal Contact Information' : 'Appointment Specifications'}
                        </h3>
                      </div>
                      
                      {/* Visual Line Metric */}
                      <div className="flex items-center space-x-1">
                        <span className={`h-2 rounded-full transition-all duration-300 ${step === 1 ? 'w-6 bg-brand-secondary' : 'w-2 bg-slate-200'}`} />
                        <span className={`h-2 rounded-full transition-all duration-300 ${step === 2 ? 'w-6 bg-brand-secondary' : 'w-2 bg-slate-200'}`} />
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <AnimatePresence mode="wait">
                        {step === 1 ? (
                          /* STEP 1: CONTACT INFRASTRUCTURE */
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 15 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-4"
                          >
                            {/* Full Name */}
                            <div className="space-y-1.5">
                              <label htmlFor="name" className="text-xs font-semibold text-gray-700 block">
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                                  <User className="h-4 w-4" />
                                </span>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Dr. Alexander Thorne"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 text-sm focus:bg-white focus:outline-none transition-all ${
                                    errors.name ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-brand-secondary'
                                  }`}
                                />
                              </div>
                              {errors.name && <p className="text-[11px] text-red-500 font-light">{errors.name}</p>}
                            </div>

                            {/* Email Address */}
                            <div className="space-y-1.5">
                              <label htmlFor="email" className="text-xs font-semibold text-gray-700 block">
                                Email Address <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                                  <Mail className="h-4 w-4" />
                                </span>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="alexander@domain.com"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 text-sm focus:bg-white focus:outline-none transition-all ${
                                    errors.email ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-brand-secondary'
                                  }`}
                                />
                              </div>
                              {errors.email && <p className="text-[11px] text-red-500 font-light">{errors.email}</p>}
                            </div>

                            {/* Telephone Number */}
                            <div className="space-y-1.5">
                              <label htmlFor="phone" className="text-xs font-semibold text-gray-700 block">
                                Direct Contact Phone <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                                  <Phone className="h-4 w-4" />
                                </span>
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  placeholder="+1 (800) 555-7645"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 text-sm focus:bg-white focus:outline-none transition-all ${
                                    errors.phone ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-brand-secondary'
                                  }`}
                                />
                              </div>
                              {errors.phone && <p className="text-[11px] text-red-500 font-light">{errors.phone}</p>}
                            </div>
                          </motion.div>
                        ) : (
                          /* STEP 2: CLINICAL TREATMENT SELECTION */
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-4"
                          >
                            {/* Preferred Date */}
                            <div className="space-y-1.5">
                              <label htmlFor="preferredDate" className="text-xs font-semibold text-gray-700 block">
                                Preferred Date <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                                  <Calendar className="h-4 w-4" />
                                </span>
                                <input
                                  type="date"
                                  id="preferredDate"
                                  name="preferredDate"
                                  value={formData.preferredDate}
                                  onChange={handleInputChange}
                                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 text-sm focus:bg-white focus:outline-none transition-all ${
                                    errors.preferredDate ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-brand-secondary'
                                  }`}
                                />
                              </div>
                              {errors.preferredDate && <p className="text-[11px] text-red-500 font-light">{errors.preferredDate}</p>}
                            </div>

                            {/* Treatment Specialization */}
                            <div className="space-y-1.5">
                              <label htmlFor="treatmentType" className="text-xs font-semibold text-gray-700 block">
                                Treatment Domain <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <select
                                  id="treatmentType"
                                  name="treatmentType"
                                  value={formData.treatmentType}
                                  onChange={handleInputChange}
                                  className={`w-full pl-4 pr-10 py-3 rounded-xl border bg-slate-50 text-sm focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer ${
                                    errors.treatmentType ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-brand-secondary'
                                  }`}
                                >
                                  <option value="">-- Choose Specialization --</option>
                                  {treatments.map((treatment, i) => (
                                    <option key={i} value={treatment}>{treatment}</option>
                                  ))}
                                </select>
                                <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 pointer-events-none">
                                  <ChevronRight className="h-4 w-4 rotate-90" />
                                </span>
                              </div>
                              {errors.treatmentType && <p className="text-[11px] text-red-500 font-light">{errors.treatmentType}</p>}
                            </div>

                            {/* Optional Remarks Message */}
                            <div className="space-y-1.5">
                              <label htmlFor="message" className="text-xs font-semibold text-gray-700 block">
                                Additional Notes or Symptoms <span className="text-gray-400 text-[10px] font-normal">(Optional)</span>
                              </label>
                              <div className="relative">
                                <span className="absolute top-3 left-3.5 text-gray-400">
                                  <MessageSquare className="h-4 w-4" />
                                </span>
                                <textarea
                                  id="message"
                                  name="message"
                                  rows={2}
                                  placeholder="I am looking to closing spaces on upper central teeth gaps..."
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  className="w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 text-sm focus:bg-white focus:outline-none transition-all border-slate-200 focus:ring-1 focus:ring-brand-secondary resize-none"
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Control Trigger Keys */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                        {step === 2 && (
                          <button
                            type="button"
                            onClick={handleBack}
                            className="px-5 py-3 rounded-xl border border-slate-200 text-gray-600 hover:bg-slate-50 transition-colors font-semibold text-sm flex items-center space-x-2 cursor-pointer"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back</span>
                          </button>
                        )}

                        {step === 1 ? (
                          <button
                            type="button"
                            onClick={handleNext}
                            className="w-full sm:w-auto ml-auto px-6 py-3.5 rounded-xl bg-gradient-brand text-white font-semibold text-sm flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-brand-secondary/20 transition-all cursor-pointer"
                            id="btn-booking-next"
                          >
                            <span>Continue to Specification</span>
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto ml-auto px-8 py-3.5 rounded-xl bg-gradient-brand text-white font-semibold text-sm flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-brand-secondary/25 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                            id="btn-booking-submit"
                          >
                            {isSubmitting ? (
                              <>
                                <Send className="h-4 w-4 animate-bounce" />
                                <span>Securing Slot...</span>
                              </>
                            ) : (
                              <>
                                <CheckCircle className="h-4 w-4" />
                                <span>Confirm Appointment</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  /* HIGH CONVERSION IMMERSIVE SUCCESS METRIC DOCKET */
                  <motion.div
                    key="booking-success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-6"
                    id="booking-success-indicator"
                  >
                    <div className="inline-flex p-4 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 animate-bounce">
                      <CheckCircle className="h-10 w-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif font-extrabold text-[#0A4D68] text-2xl">
                        Aesthetic Slot Secured Successfully!
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto font-light leading-relaxed">
                        Thank you, <strong className="font-semibold text-gray-800">{formData.name}</strong>. 
                        Your priority ticket is locked in. Our aesthetic coordinator will speak with you 
                        by phone within 2 hours to confirm your precise slot on <strong className="font-semibold text-gray-800">{formData.preferredDate}</strong>.
                      </p>
                    </div>

                    {/* Booking metadata display container */}
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-150 max-w-sm mx-auto space-y-3.5 text-left">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Queue Confirmation Reference:</span>
                        <span className="font-mono font-bold text-gray-800 tracking-wide text-sm underline select-all flex items-center space-x-1">
                          <span>{bookingRef}</span>
                        </span>
                      </div>

                      <div className="border-t border-slate-200/50 pt-2.5 space-y-1.5 text-xs">
                        <p className="text-gray-600">
                          <strong className="font-semibold">Treatment Mode:</strong> {formData.treatmentType}
                        </p>
                        <p className="text-gray-600">
                          <strong className="font-semibold">Target Contact Email:</strong> {formData.email}
                        </p>
                      </div>
                    </div>

                    {/* Reset Button */}
                    <button
                      onClick={() => {
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          preferredDate: '',
                          treatmentType: '',
                          message: ''
                        });
                        setStep(1);
                        setIsSuccess(false);
                      }}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-gray-500 hover:text-brand-secondary hover:bg-slate-50 transition-colors cursor-pointer inline-flex items-center space-x-1.5"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Submit Another Reservation</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
