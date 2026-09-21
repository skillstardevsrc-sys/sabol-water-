import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Leaf, ShieldCheck, Home, Sparkles, CheckCircle2, ArrowRight, Award } from 'lucide-react';
import aboutImg from '../assets/about-balice.png';

const coreValues = [
  {
    id: 'pure',
    title: 'Pure',
    subtitle: 'Quality-Controlled',
    desc: 'Multi-stage purification removes impurities while preserving refreshing minerals.',
    icon: Droplets,
    color: 'text-sabol-blue',
    bg: 'bg-blue-50/90',
  },
  {
    id: 'fresh',
    title: 'Fresh',
    subtitle: 'Freshly Bottled',
    desc: 'Bottled in sterile, automated facilities and dispatched promptly for crisp taste.',
    icon: Leaf,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50/90',
  },
  {
    id: 'reliable',
    title: 'Reliable',
    subtitle: 'On-Schedule Supply',
    desc: 'Dependable recurring routines for families, corporate floors, and busy kitchens.',
    icon: ShieldCheck,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50/90',
  },
  {
    id: 'convenient',
    title: 'Convenient',
    subtitle: 'Doorstep Drop',
    desc: 'Effortless ordering via WhatsApp, call, or web with on-time doorstep drops.',
    icon: Home,
    color: 'text-sabol-aqua',
    bg: 'bg-cyan-50/90',
  },
];

export const WhySabol = ({ onOpenOrderModal }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-white via-sabol-ice-50/70 to-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-sabol-aqua/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-sabol-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: About Us Content & Core Pillars (Animates FIRST) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sabol-blue/10 border border-sabol-blue/20 text-sabol-blue text-xs font-extrabold uppercase tracking-wider mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-sabol-aqua" />
              <span>ABOUT US • OUR MISSION</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sabol-navy-900 tracking-tight leading-[1.15] font-display mb-4"
            >
              Pure Water. <br className="hidden sm:block" />
              <span className="text-sabol-blue">A Healthier Tomorrow.</span>
            </motion.h2>

            {/* Subtitle / Story Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-8"
            >
              At <strong className="text-sabol-navy-900 font-bold">BALICE</strong>, we bring you pure, safe, and refreshing drinking water — processed through certified multi-stage purification and delivered with uncompromising care and consistency directly to your doorstep.
            </motion.p>

            {/* 4 Core Pillars Grid (Staggered Entrance) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                    className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-sabol-aqua/40 transition-all duration-300 flex items-start gap-3.5"
                  >
                    <div className={`w-10 h-10 rounded-xl ${val.bg} ${val.color} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="text-base font-bold text-sabol-navy-900 font-display">
                          {val.title}
                        </h4>
                        <span className="text-[10px] font-bold text-sabol-blue uppercase">
                          • {val.subtitle}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => onOpenOrderModal ? onOpenOrderModal('all') : null}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0066d6] hover:bg-[#0052b3] text-white font-bold text-sm shadow-water hover:shadow-water-lg transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5"
              >
                <span>Order Pure Water</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Quality & Hygiene Guaranteed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: About BALICE Image (Animates AFTER content finishes) */}
          <motion.div
            initial={{ opacity: 0, x: 70, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[480px] lg:max-w-none">
              <img
                src={aboutImg}
                alt="About BALICE Pure Water - A Healthier Tomorrow"
                className="w-full h-auto drop-shadow-2xl select-none pointer-events-none transition-all duration-300 hover:drop-shadow-[0_25px_40px_rgba(0,102,214,0.3)]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhySabol;
