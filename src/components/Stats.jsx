import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import bannerBg from '../assets/section-bg.png';
import pureCard from '../assets/pure-card.png';
import freshCard from '../assets/fresh-card.png';
import reliableCard from '../assets/reliable-card.png';
import convenientCard from '../assets/convenient-card.png';

const featureCards = [
  { id: 'pure', img: pureCard, alt: 'Pure - Quality-controlled drinking water' },
  { id: 'fresh', img: freshCard, alt: 'Fresh - Freshly packed & delivered' },
  { id: 'reliable', img: reliableCard, alt: 'Reliable - Regular supply when you need it' },
  { id: 'convenient', img: convenientCard, alt: 'Convenient - Bottle & can delivery at your doorstep' },
];

const highlights = [
  'Multi-stage filtration with essential mineral balance',
  'Prompt & scheduled doorstep delivery routines',
  '100% food-grade, hygienically sealed containers',
];

export const Stats = ({ onOpenOrderModal }) => {
  return (
    <section
      className="w-full relative overflow-hidden bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-28 flex items-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      {/* Soft atmospheric gradient for crisp text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent lg:w-3/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sabol-blue/10 border border-sabol-blue/20 text-sabol-blue text-xs font-extrabold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sabol-aqua" />
              <span>Why Choose SABOL</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sabol-navy-900 tracking-tight leading-[1.15] font-display mb-4">
              Because You Deserve The Best Water
            </h2>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-6">
              At SABOL, we bring you pure, safe, and refreshing drinking water — delivered with uncompromising care and consistency.
            </p>

            {/* Key Benefit Points */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-sabol-navy-900">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenOrderModal ? onOpenOrderModal('all') : null}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066d6] hover:bg-[#0052b3] text-white font-bold text-sm shadow-water hover:shadow-water-lg transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5"
              >
                <span>Order Water Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#about"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/80 hover:bg-white text-sabol-navy-900 border border-slate-200 text-sm font-bold shadow-sm transition-all duration-300 hover:border-sabol-aqua"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right Side: 4 Feature Images Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center justify-items-center">
              {featureCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[270px] lg:max-w-[290px] cursor-pointer transition-transform"
                >
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-auto drop-shadow-2xl select-none pointer-events-none transition-all duration-300 hover:drop-shadow-[0_20px_30px_rgba(0,102,214,0.35)]"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
