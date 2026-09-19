import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Filter, ShieldCheck, Truck, Home, ArrowRight, Calendar } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

const steps = [
  {
    step: '01',
    title: 'Order',
    desc: 'Place your order in minutes via web, call, or WhatsApp',
    icon: ShoppingCart,
  },
  {
    step: '02',
    title: 'Purification',
    desc: 'Advanced multi-stage filtration ensures peak safety',
    icon: Filter,
  },
  {
    step: '03',
    title: 'Packing',
    desc: 'Hygienic, automated, tamper-proof packaging',
    icon: ShieldCheck,
  },
  {
    step: '04',
    title: 'Dispatch',
    desc: 'Optimized fleet ensures prompt on-time delivery',
    icon: Truck,
  },
  {
    step: '05',
    title: 'Your Door',
    desc: 'Fresh, safe water delivered right to your home or office',
    icon: Home,
  },
];

export const DeliveryProcess = ({ onOpenOrderModal }) => {
  return (
    <section id="delivery" className="py-20 lg:py-28 bg-gradient-to-br from-sabol-navy-900 via-sabol-navy-800 to-sabol-blue text-white relative overflow-hidden">
      {/* Background ambient water glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sabol-aqua/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sabol-blue/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="SEAMLESS DISPATCH"
          title="Water When You Need It."
          subtitle="From our facility to your doorstep — fresh water at every step."
          dark={true}
        />

        {/* Timeline Container */}
        <div className="mt-16 lg:mt-20">
          {/* Desktop & Tablet Horizontal Flow */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 relative">
            {/* Animated Connecting Line */}
            <div className="absolute top-1/4 left-10 right-10 h-0.5 bg-gradient-to-r from-sabol-aqua/30 via-sabol-aqua to-sabol-aqua/30 -translate-y-1/2 z-0" />

            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  {/* Step Icon Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-sabol-navy-900/90 border-2 border-sabol-aqua/50 flex items-center justify-center text-sabol-aqua shadow-glow group-hover:scale-110 group-hover:border-sabol-aqua group-hover:bg-sabol-blue transition-all duration-300 mb-5">
                    <Icon className="w-7 h-7 text-sabol-aqua-light group-hover:text-white transition-colors" />
                  </div>

                  {/* Step Number */}
                  <span className="text-xs font-black tracking-widest text-sabol-aqua uppercase mb-1">
                    Step {item.step}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-sabol-ice-200/80 leading-relaxed max-w-[180px]">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Vertical Flow */}
          <div className="md:hidden space-y-6 relative pl-6 border-l-2 border-sabol-aqua/30 ml-4">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex items-start gap-4"
                >
                  {/* Left Step Dot */}
                  <div className="absolute -left-[33px] top-1 w-6 h-6 rounded-full bg-sabol-aqua text-sabol-navy-900 font-bold text-xs flex items-center justify-center shadow-glow">
                    {index + 1}
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex-1">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Icon className="w-5 h-5 text-sabol-aqua" />
                      <h4 className="text-base font-bold text-white font-display">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-sabol-ice-100/90 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <Button
            variant="white"
            size="lg"
            onClick={() => onOpenOrderModal('schedule')}
            icon={Calendar}
            iconPosition="left"
            className="shadow-2xl"
          >
            Schedule Your Delivery
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryProcess;
