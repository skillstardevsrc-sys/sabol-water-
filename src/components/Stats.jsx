import React from 'react';
import { motion } from 'framer-motion';
import { Users, Truck, Award, Sparkles } from 'lucide-react';

// EDITABLE PLACEHOLDER STATS
// Replace these with actual business milestone metrics when verified
const statsData = [
  {
    id: 'customers',
    value: '500+',
    label: 'Happy Customers',
    subtext: 'Homes & Corporate clients',
    icon: Users,
    color: 'text-sabol-blue',
    bg: 'bg-blue-50',
  },
  {
    id: 'deliveries',
    value: '1000+',
    label: 'Deliveries',
    subtext: 'Punctual doorstep drops',
    icon: Truck,
    color: 'text-sabol-aqua',
    bg: 'bg-cyan-50',
  },
  {
    id: 'trust',
    value: '5+ Years',
    label: 'Years of Trust',
    subtext: 'Serving pure drinking water',
    icon: Award,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    id: 'purity',
    value: '100%',
    label: 'Hygienic Assurance',
    subtext: 'Multi-stage quality checks',
    icon: Sparkles,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
];

export const Stats = () => {
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-sabol-ice-50/60 rounded-3xl p-5 sm:p-6 border border-slate-100 hover:border-sabol-aqua/30 transition-all duration-300 text-center flex flex-col items-center justify-center shadow-sm"
              >
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-3 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <span className="text-3xl sm:text-4xl font-extrabold text-sabol-navy-900 font-display tracking-tight mb-1">
                  {stat.value}
                </span>
                
                <h4 className="text-sm font-bold text-slate-800 font-display">
                  {stat.label}
                </h4>
                
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
