import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Filter, ShieldCheck, Truck, Home, Calendar, ArrowRight, CheckCircle2, Sparkles, Droplets } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

const steps = [
  {
    step: '01',
    title: 'Easy & Instant Order',
    desc: 'Place your order in under 2 minutes via our web portal, direct phone call, or quick WhatsApp message.',
    icon: ShoppingCart,
    tag: 'Web • Call • WhatsApp',
    badge: 'Quick Booking',
    highlights: ['24/7 Instant Confirmation', 'Flexible Quantity & Frequency'],
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(6, 182, 212, 0.4)',
  },
  {
    step: '02',
    title: 'Multi-Stage Purification',
    desc: 'Advanced 8-stage purification combining RO, UV sterilization, and ozonation ensures peak crystal-clear purity.',
    icon: Filter,
    tag: '8-Stage Filtration',
    badge: 'Certified Safe',
    highlights: ['Essential Minerals Preserved', 'Zero Impurities & Pathogens'],
    color: 'from-blue-400 to-indigo-500',
    glow: 'rgba(59, 130, 246, 0.4)',
  },
  {
    step: '03',
    title: 'Automated Hygienic Packing',
    desc: 'Sanitized and sealed in automated cleanrooms using BPA-free food-grade bottles with tamper-proof locks.',
    icon: ShieldCheck,
    tag: 'Sanitized Bottling',
    badge: '100% Tamper Proof',
    highlights: ['BPA-Free Food Grade Jars', 'Zero Human Touch Sealing'],
    color: 'from-emerald-400 to-teal-500',
    glow: 'rgba(16, 185, 129, 0.4)',
  },
  {
    step: '04',
    title: 'Optimized Fleet Dispatch',
    desc: 'Dedicated delivery vehicles navigate route-optimized zones to ensure on-schedule, punctual dispatches.',
    icon: Truck,
    tag: 'Express Fleet',
    badge: 'On-Time Dispatch',
    highlights: ['Smart Route Navigation', 'Daily Scheduled Drops'],
    color: 'from-sky-400 to-cyan-500',
    glow: 'rgba(14, 165, 233, 0.4)',
  },
  {
    step: '05',
    title: 'Doorstep Handover',
    desc: 'Crisp, refreshing drinking water delivered directly to your doorstep, pantry, or corporate floor.',
    icon: Home,
    tag: 'Doorstep Delivery',
    badge: 'Hassle-Free',
    highlights: ['Home & Office Delivery', 'Empty Jar Exchange Program'],
    color: 'from-blue-500 to-teal-400',
    glow: 'rgba(20, 184, 166, 0.4)',
  },
];

export const DeliveryProcess = ({ onOpenOrderModal }) => {
  return (
    <section
      id="delivery"
      className="py-24 lg:py-32 bg-gradient-to-b from-[#061833] via-[#092247] to-[#041329] text-white relative overflow-hidden"
    >
      {/* Ambient Parallax Water Glow Orbs */}
      <div className="absolute top-1/6 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="SEAMLESS DISPATCH"
          title="Water When You Need It."
          subtitle="From our facility to your doorstep — fresh water at every step."
          dark={true}
        />

        {/* Central Zigzag Timeline Structure */}
        <div className="mt-20 lg:mt-24 relative">
          
          {/* Vertical Central Glowing Neon Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-8 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-400/20 via-cyan-400 to-cyan-400/20 shadow-[0_0_15px_rgba(6,182,212,0.6)] rounded-full z-0" />

          <div className="space-y-12 lg:space-y-20">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
                >
                  {/* Left Column (Content when Even, or Badge/Visual when Odd) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-3'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -60 : 60, scale: 0.95 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:border-cyan-400/50 hover:bg-white/[0.14] transition-all duration-300 group"
                    >
                      {/* Top Glowing Header */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                          <Sparkles className="w-3 h-3" /> {item.badge}
                        </span>
                        <span className="text-sm font-black font-display text-cyan-400/80">
                          STEP {item.step}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-3 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {item.desc}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-2 pt-4 border-t border-white/10">
                        {item.highlights.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node (Number & Glowing Icon Pulse) */}
                  <div className="lg:col-span-2 lg:order-2 flex justify-center items-center relative z-10">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="relative flex flex-col items-center group cursor-pointer"
                    >
                      {/* Pulsing Outer Aura */}
                      <div
                        className="absolute inset-0 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"
                        style={{ backgroundColor: item.glow }}
                      />

                      {/* Node Icon Box */}
                      <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#092247] border-2 border-cyan-400 flex flex-col items-center justify-center text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.5)] group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                        <Icon className="w-7 h-7" />
                        <span className="text-[10px] font-black tracking-widest uppercase mt-0.5 opacity-90">
                          {item.step}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column (Opposite Side Complementary Feature Card) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                      className="hidden lg:flex items-center gap-4 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-lg"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                        <Droplets className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-0.5">
                          {item.tag}
                        </span>
                        <p className="text-sm font-semibold text-white">
                          Guaranteed pure & fresh at stage {item.step}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Call to Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 lg:mt-24 text-center bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-teal-500/20 border border-cyan-400/30 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl max-w-3xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
            Ready for Pure & Regular Water Delivery?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-xl mx-auto">
            Book your regular scheduled supply or one-time refill today with doorstep assurance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenOrderModal ? onOpenOrderModal('schedule') : null}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-sabol-navy-950 font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Schedule Your Delivery</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DeliveryProcess;
