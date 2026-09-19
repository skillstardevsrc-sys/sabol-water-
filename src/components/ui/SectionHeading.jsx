import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  center = true,
  dark = false,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? 'text-center mx-auto' : ''} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4 shadow-sm ${
          dark 
            ? 'bg-sabol-aqua/15 text-sabol-aqua-light border border-sabol-aqua/30' 
            : 'bg-sabol-ice-100 text-sabol-blue border border-sabol-aqua/25'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-sabol-aqua animate-ping" />
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-4 ${
        dark ? 'text-white' : 'text-sabol-navy-900'
      }`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
export default SectionHeading;
