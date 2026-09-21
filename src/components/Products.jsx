import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Droplets } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import productsBg from '../assets/products-bg.png';
import bottlesImg from '../assets/products-bottles.png';
import canCardImg from '../assets/products-cancard.png';

const bottleFeatures = [
  '250ml, 500ml, 1L Packs',
  'Home & Travel Use',
  'Hotel & Event Supply',
  'Bulk Requirements',
];

export const Products = ({ onOpenOrderModal }) => {
  return (
    <section
      id="products"
      className="py-20 lg:py-28 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${productsBg})` }}
    >
      {/* Soft atmospheric overlay for readability & natural water ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/45 to-white/70 backdrop-blur-[1px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OUR PRODUCTS"
          title="Fresh Choices for Every Need"
          subtitle="From daily hydration to bulk supply, SABOL offers a complete range of water bottles and cans."
        />

        {/* 2 Main Product Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* CARD 1: Bottles with Image on left & Content/Button on right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Bottles Image on Left */}
              <div className="sm:col-span-6 flex items-center justify-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={bottlesImg}
                  alt="BALICE Packaged Water Bottles"
                  className="w-full max-h-[280px] sm:max-h-[320px] object-contain drop-shadow-xl select-none pointer-events-none"
                />
              </div>

              {/* Content on Right */}
              <div className="sm:col-span-6 flex flex-col justify-center">
                {/* Top Icon */}
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0066d6] mb-3 shadow-sm">
                  <Droplets className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#072147] font-display tracking-tight leading-tight mb-1">
                  Water Bottles
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-5">
                  For Home & Business Solutions
                </p>

                {/* Checklist */}
                <div className="space-y-3 mb-6">
                  {bottleFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-[#d0e8ff] text-[#0066d6] flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <span className="text-sm font-bold text-[#072147]">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Order Now Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => onOpenOrderModal ? onOpenOrderModal('bottles') : null}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#0052cc] to-[#0088ff] hover:from-[#0040a8] hover:to-[#0070d6] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Can Card Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            onClick={() => onOpenOrderModal ? onOpenOrderModal('can') : null}
            className="group relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden"
          >
            <img
              src={canCardImg}
              alt="BALICE 20L Water Can with Delivery Options"
              className="w-full h-auto object-contain max-h-[380px] drop-shadow-xl select-none pointer-events-none group-hover:scale-[1.02] transition-transform duration-300"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Products;
