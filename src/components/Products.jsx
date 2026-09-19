import React from 'react';
import { motion } from 'framer-motion';
import { Check, Droplets, Sparkles, ArrowRight, ShieldCheck, Box, PackageCheck } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import bottlesImg from '../assets/bottles.jpg';
import waterCanImg from '../assets/water-can.jpg';

export const Products = ({ onOpenOrderModal }) => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-sabol-ice-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR PRODUCTS"
          title="Fresh Choices for Every Need"
          subtitle="From daily hydration to bulk supply, SABOL offers a complete range of water bottles and cans."
        />

        {/* 2 Main Product Cards Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* PRODUCT 1: Water Bottles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-water-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Product Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sabol-ice-100 text-sabol-blue border border-sabol-aqua/30">
                  <PackageCheck className="w-3.5 h-3.5" /> Packaged Mineral Water
                </span>
                <span className="text-xs font-semibold text-slate-400">Multiple Pack Sizes</span>
              </div>

              {/* Product Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-sabol-navy-900 font-display mb-2">
                SABOL Water Bottles
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Pristine, refreshing bottled mineral water crafted for on-the-go hydration, hospitality, conferences, and retail.
              </p>

              {/* Product Image Box with smooth scale effect */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-sabol-ice-50 to-sabol-ice-100/50 mb-8 border border-slate-100 aspect-[4/3] flex items-center justify-center">
                <img
                  src={bottlesImg}
                  alt="SABOL Packaged Water Bottles 250ml 500ml 1L"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white text-xs font-bold text-sabol-navy-900 shadow-sm flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-sabol-aqua" />
                  <span>Crystal Pure Taste</span>
                </div>
              </div>

              {/* Available Sizes List */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Available Capacities:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 rounded-2xl bg-sabol-ice-50/70 border border-slate-200/80 text-center hover:border-sabol-aqua transition-colors">
                    <span className="block text-lg font-extrabold text-sabol-navy-900 font-display">250 ml</span>
                    <span className="text-[11px] text-slate-500">Events & Guests</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-sabol-ice-50/70 border border-slate-200/80 text-center hover:border-sabol-aqua transition-colors">
                    <span className="block text-lg font-extrabold text-sabol-navy-900 font-display">500 ml</span>
                    <span className="text-[11px] text-slate-500">Daily Travel</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-sabol-ice-50/70 border border-slate-200/80 text-center hover:border-sabol-aqua transition-colors">
                    <span className="block text-lg font-extrabold text-sabol-navy-900 font-display">1 Litre</span>
                    <span className="text-[11px] text-slate-500">Standard Pack</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-sabol-ice-50/70 border border-slate-200/80 text-center hover:border-sabol-aqua transition-colors">
                    <span className="block text-lg font-extrabold text-sabol-navy-900 font-display">Custom</span>
                    <span className="text-[11px] text-slate-500">Bulk & Events</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">Box & Case orders</p>
                <p className="text-sm font-bold text-sabol-navy-900">Doorstep delivery available</p>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenOrderModal('bottles')}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Order Bottles
              </Button>
            </div>
          </motion.div>

          {/* PRODUCT 2: Water Cans */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="group bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-water-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Product Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" /> High Demand Favorite
                </span>
                <span className="text-xs font-semibold text-slate-400">Doorstep Dispatch</span>
              </div>

              {/* Product Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-sabol-navy-900 font-display mb-2">
                SABOL 20L Water Cans
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Food-grade, tamper-proof, sanitized 20 Litre water jars designed for dispensers in residences, corporate offices, and institutions.
              </p>

              {/* Product Image Box with smooth scale effect */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-sabol-ice-50 to-sabol-ice-100/50 mb-8 border border-slate-100 aspect-[4/3] flex items-center justify-center">
                <img
                  src={waterCanImg}
                  alt="SABOL 20L Water Can Dispenser Jar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white text-xs font-bold text-sabol-navy-900 shadow-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sanitized & Tamper Sealed</span>
                </div>
              </div>

              {/* Delivery Service Use Cases */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Service Options:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 rounded-2xl bg-sabol-ice-50/70 border border-slate-200/80 text-center hover:border-sabol-aqua transition-colors">
                    <span className="block text-lg font-extrabold text-sabol-navy-900 font-display">20 L</span>
                    <span className="text-[11px] text-slate-500">Capacity Can</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-sabol-ice-50/70 border border-slate-200/80 text-center hover:border-sabol-aqua transition-colors">
                    <span className="block text-lg font-extrabold text-sabol-navy-900 font-display">Home</span>
                    <span className="text-[11px] text-slate-500">Door Delivery</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-sabol-ice-50/70 border border-slate-200/80 text-center hover:border-sabol-aqua transition-colors">
                    <span className="block text-lg font-extrabold text-sabol-navy-900 font-display">Office</span>
                    <span className="text-[11px] text-slate-500">Daily Supply</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-sabol-ice-50/70 border border-slate-200/80 text-center hover:border-sabol-aqua transition-colors">
                    <span className="block text-lg font-extrabold text-sabol-navy-900 font-display">Bulk</span>
                    <span className="text-[11px] text-slate-500">Commercial Plan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">Subscription or One-time</p>
                <p className="text-sm font-bold text-sabol-navy-900">Scheduled timely refills</p>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenOrderModal('can')}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Order 20L Cans
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
