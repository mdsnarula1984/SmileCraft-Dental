import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, CalendarDays, Award, Milestone } from 'lucide-react';

interface StatCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function StatCounter({ target, suffix = '', duration = 1200 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = target;
    const range = end - start;
    if (range === 0) return;

    let current = start;
    const increment = end > start ? Math.ceil(range / (duration / 16)) : -1;
    const stepTime = 16; // approx 60fps

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="font-serif font-semibold text-4xl sm:text-5xl text-brand-primary tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const statsList = [
    {
      id: 'stat1',
      icon: Users,
      value: 10000,
      suffix: '+',
      title: 'Patients Treated',
      desc: 'Lifelong structural therapies completed'
    },
    {
      id: 'stat2',
      icon: CalendarDays,
      value: 15,
      suffix: '+',
      title: 'Years Experience',
      desc: 'Continuous metropolitan dental excellence'
    },
    {
      id: 'stat3',
      icon: Award,
      value: 25,
      suffix: '+',
      title: 'Dental Specialists',
      desc: 'Board-certified surgeons & designers'
    },
    {
      id: 'stat4',
      icon: Milestone,
      value: 98,
      suffix: '%',
      title: 'Patient Satisfaction',
      desc: 'Based on independent clinical surveys'
    }
  ];

  return (
    <section className="relative py-12 bg-white border-y border-slate-100" id="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                className="flex flex-col items-center text-center space-y-2 p-4 rounded-2xl hover:bg-slate-50/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                id={`stat-card-${idx}`}
              >
                {/* Visual Circle Holder */}
                <div className="p-3.5 rounded-2xl bg-brand-secondary/5 text-brand-secondary mb-2 border border-brand-secondary/10">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Animated Number Counter Component */}
                <div id={`stat-value-${idx}`}>
                  <StatCounter target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label Title */}
                <h3 className="font-display font-bold text-gray-900 text-sm tracking-tight">
                  {stat.title}
                </h3>

                {/* Short Subtitle */}
                <p className="text-xs text-gray-500 max-w-[180px] leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
