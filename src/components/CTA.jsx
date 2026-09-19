import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, MessageCircle, ArrowRight, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import Button from './ui/Button';
import WaterParticles from './ui/WaterParticles';

export const CTA = ({ onOpenOrderModal }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello SABOL! I would like to order pure water bottles/cans for my location.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section className="relative py-20 lg:py-28 bg-navy-gradient text-white overflow-hidden">
      {/* Subtle background animated water light rays and particles */}
      <WaterParticles count={10} className="opacity-40" />
      
      <div className="absolute top-0 right-10 w-96 h-96 bg-sabol-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-sabol-aqua/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-sabol-aqua">
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Mini Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sabol-aqua/15 border border-sabol-aqua/30 text-sabol-aqua-light text-xs sm:text-sm font-bold tracking-wider uppercase mb-6"
        >
          <Droplets className="w-4 h-4" />
          <span>FAST & SAFE WATER SUPPLY</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight font-display mb-4"
        >
          Stay Hydrated.{' '}
          <span className="block text-gradient-cyan">
            Stay Fresh.
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-sabol-ice-200 font-medium max-w-xl mx-auto mb-10"
        >
          Order SABOL Water Today
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => onOpenOrderModal('all')}
            icon={ArrowRight}
            iconPosition="right"
            className="w-full sm:w-auto shadow-glow text-base px-9 py-4"
          >
            Order Now
          </Button>

          <Button
            variant="whatsapp"
            size="lg"
            onClick={handleWhatsApp}
            icon={MessageCircle}
            iconPosition="left"
            className="w-full sm:w-auto text-base px-9 py-4 font-bold"
          >
            WhatsApp Us
          </Button>
        </motion.div>

        {/* Support subtitle */}
        <p className="mt-8 text-xs text-sabol-ice-300 flex items-center justify-center gap-2">
          <span>📞 Instant dispatch hotline:</span>
          <a href="tel:+919876543210" className="font-bold text-white hover:text-sabol-aqua underline">
            +91 98765 43210
          </a>
        </p>
      </div>
    </section>
  );
};

export default CTA;
