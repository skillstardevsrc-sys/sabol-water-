import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Leaf, ShieldCheck, Home, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const features = [
  {
    id: 'pure',
    title: 'Pure',
    subtitle: 'Quality-controlled drinking water',
    description: 'Multi-stage purification removes impurities while preserving essential refreshing minerals.',
    icon: Droplets,
    color: 'from-blue-500 to-cyan-400',
    lightBg: 'bg-blue-50/80',
    iconColor: 'text-sabol-blue',
  },
  {
    id: 'fresh',
    title: 'Fresh',
    subtitle: 'Freshly packed & delivered',
    description: 'Bottled in clean, automated facilities and delivered promptly to ensure crisp, crisp taste.',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-400',
    lightBg: 'bg-emerald-50/80',
    iconColor: 'text-emerald-600',
  },
  {
    id: 'reliable',
    title: 'Reliable',
    subtitle: 'Regular supply when you need it',
    description: 'Dependable recurring delivery routines for families, corporate floors, and busy kitchens.',
    icon: ShieldCheck,
    color: 'from-blue-600 to-indigo-500',
    lightBg: 'bg-indigo-50/80',
    iconColor: 'text-sabol-navy-700',
  },
  {
    id: 'convenient',
    title: 'Convenient',
    subtitle: 'Bottle & can delivery at your doorstep',
    description: 'Effortless ordering via call, WhatsApp, or web with on-time doorstep drops.',
    icon: Home,
    color: 'from-cyan-500 to-sky-400',
    lightBg: 'bg-cyan-50/80',
    iconColor: 'text-sabol-aqua',
  },
];

export const WhySabol = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-white via-sabol-ice-50/60 to-white relative overflow-hidden">
      {/* Subtle background ambient blob */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-sabol-aqua/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-sabol-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="WHY CHOOSE SABOL"
          title="Because You Deserve The Best Water"
          subtitle="At SABOL, we bring you pure, safe and refreshing drinking water — delivered with care and consistency."
        />

        {/* 4 Feature Cards Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-water-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top glow hover effect */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-sabol-aqua to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

                <div>
                  {/* Icon container */}
                  <div className={`w-14 h-14 rounded-2xl ${feature.lightBg} border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <IconComponent className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-sabol-navy-900 font-display mb-1 group-hover:text-sabol-blue transition-colors">
                    {feature.title}
                  </h3>

                  {/* Highlight Subtitle */}
                  <p className="text-xs font-bold text-sabol-blue uppercase tracking-wider mb-3">
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom subtle indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-sabol-aqua transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>SABOL Promise</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySabol;
