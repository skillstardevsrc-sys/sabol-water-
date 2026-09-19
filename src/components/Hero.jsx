import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Award, ArrowRight, Droplets } from 'lucide-react';
import Button from './ui/Button';
import heroSabolImg from '../assets/hero-sabol.png';
import WaterRippleBackground from './ui/WaterRippleBackground';

export const Hero = ({ onOpenOrderModal }) => {
  const rippleRef = useRef(null);

  const handleSectionPointerMove = (e) => {
    if (rippleRef.current) {
      rippleRef.current.addRipple(e.clientX, e.clientY, 1.0);
    }
  };

  const handleSectionClick = (e) => {
    if (rippleRef.current) {
      rippleRef.current.addRipple(e.clientX, e.clientY, 2.0);
    }
  };

  const handleSectionTouchMove = (e) => {
    if (rippleRef.current && e.touches && e.touches[0]) {
      rippleRef.current.addRipple(e.touches[0].clientX, e.touches[0].clientY, 1.3);
    }
  };

  return (
    <section
      id="home"
      onPointerMove={handleSectionPointerMove}
      onClick={handleSectionClick}
      onTouchMove={handleSectionTouchMove}
      className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px] flex items-center pt-24 pb-16 overflow-hidden bg-[#bde4f9]"
    >
      {/* Background Interactive Realistic Water Ripple Container */}
      <div className="absolute inset-0 z-0">
        <WaterRippleBackground
          ref={rippleRef}
          imageSrc={heroSabolImg}
          alignX={0.8}
          className="w-full h-full"
        />

        {/* Soft responsive overlay for mobile & tablet to guarantee crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent w-full md:w-3/5 lg:w-1/2 pointer-events-none" />
        
        {/* Mobile specific soft white backdrop */}
        <div className="absolute inset-0 bg-white/40 md:hidden pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl lg:max-w-lg xl:max-w-xl text-left">
          
          {/* Label: PREMIUM DRINKING WATER */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3 sm:mb-4"
          >
            <span className="text-xs sm:text-sm font-extrabold text-[#0284c7] tracking-[0.15em] uppercase font-display drop-shadow-sm">
              PREMIUM DRINKING WATER
            </span>
          </motion.div>

          {/* Headline: Pure Water. Delivered Fresh. */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#072147] tracking-tight leading-[1.08] mb-4 sm:mb-5 font-display"
          >
            Pure Water.<br />
            Delivered Fresh.
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-[#1e3a5f] font-medium leading-relaxed mb-6 sm:mb-8 max-w-md"
          >
            Quality drinking water for Homes, Offices, Hotels & Businesses.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {/* Primary Order Button */}
            <button
              type="button"
              onClick={() => onOpenOrderModal('all')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#0066d6] hover:bg-[#0052b3] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5"
            >
              <span>Order Water</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Secondary Get In Touch Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full bg-white/80 hover:bg-white text-[#0066d6] border border-[#0066d6]/40 hover:border-[#0066d6] font-bold text-sm sm:text-base shadow-sm hover:shadow-md backdrop-blur-md transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Trust Indicators Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
          >
            {/* 1. Hygienically Packed */}
            <div className="flex items-center gap-2 text-[#0c2f5e]">
              <div className="w-6 h-6 rounded-full bg-[#0284c7]/15 flex items-center justify-center text-[#0284c7]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight">
                Hygienically Packed
              </span>
            </div>

            {/* 2. Fast Delivery */}
            <div className="flex items-center gap-2 text-[#0c2f5e]">
              <div className="w-6 h-6 rounded-full bg-[#0284c7]/15 flex items-center justify-center text-[#0284c7]">
                <Truck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight">
                Fast Delivery
              </span>
            </div>

            {/* 3. Quality Assured */}
            <div className="flex items-center gap-2 text-[#0c2f5e]">
              <div className="w-6 h-6 rounded-full bg-[#0284c7]/15 flex items-center justify-center text-[#0284c7]">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight">
                Quality Assured
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
