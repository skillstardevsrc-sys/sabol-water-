import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, ShieldCheck, Microscope, PackageCheck, ArrowRight, Droplets } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import qualityBg from '../assets/quality-water.jpg';

const qualitySteps = [
  {
    step: '01',
    title: 'Water Source',
    desc: 'Carefully selected source',
    detail: 'Procured from vetted and protected underground natural aquifers.',
    icon: Droplets,
  },
  {
    step: '02',
    title: 'Filtration',
    desc: 'Removal of impurities',
    detail: 'Multi-layer particulate and sand filtration removes suspended elements.',
    icon: Layers,
  },
  {
    step: '03',
    title: 'Purification',
    desc: 'Advanced purification technology',
    detail: 'High-precision membrane purification processes for maximum purity.',
    icon: Sparkles,
  },
  {
    step: '04',
    title: 'Quality Testing',
    desc: 'Strict checks & monitoring',
    detail: 'Continuous stage-wise parameter validation and taste testing.',
    icon: Microscope,
  },
  {
    step: '05',
    title: 'Hygienic Packaging',
    desc: 'Safe & sealed',
    detail: 'Touch-free bottling and airtight tamper-evident sealing.',
    icon: PackageCheck,
  },
];

export const Quality = ({ onOpenOrderModal }) => {
  return (
    <section
      id="quality"
      className="py-20 lg:py-28 text-white relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(4, 13, 26, 0.94), rgba(7, 22, 44, 0.96)), url(${qualityBg})`,
      }}
    >
      {/* Ambient glowing highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sabol-aqua/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OUR PURIFICATION STANDARD"
          title="Pure at Every Stage"
          subtitle="We follow a strict purification and quality control process to ensure you get safe and pure water."
          dark={true}
        />

        {/* 5 Quality Steps Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {qualitySteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-sabol-aqua/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-sabol-aqua font-display tracking-tighter">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-sabol-aqua/15 border border-sabol-aqua/30 flex items-center justify-center text-sabol-aqua group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-white font-display mb-1.5 group-hover:text-sabol-aqua-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-sabol-ice-300 mb-3">
                    {item.desc}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-sabol-aqua">
                  <span className="w-1.5 h-1.5 rounded-full bg-sabol-aqua animate-pulse" />
                  Strict Standards
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onOpenOrderModal('quality')}
            icon={ArrowRight}
            iconPosition="right"
          >
            Discover Our Quality
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Quality;
