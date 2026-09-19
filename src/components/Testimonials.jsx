import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

// EDITABLE PLACEHOLDER TESTIMONIAL DATA
// Replace these with actual verified client testimonials when available
const testimonialsData = [
  {
    id: 1,
    name: "Arun Krishnan",
    role: "Resident / Home Customer",
    quote: "Switching to SABOL for our home 20L cans was the best decision. The water tastes crisp and clean, and their delivery team delivers right outside our doorstep every single Tuesday without fail.",
    rating: 5,
    location: "Coimbatore",
  },
  {
    id: 2,
    name: "Pooja Venkatesh",
    role: "Operations Manager, TechSpire Solutions",
    quote: "We require over 30 cans every week for our 200-member office. SABOL's consistency, sanitized jars, and quick responsive billing support have made managing office hydration seamless.",
    rating: 5,
    location: "Bengaluru",
  },
  {
    id: 3,
    name: "Chef Rajesh Pillai",
    role: "Head Chef & Banquet Lead",
    quote: "For high-end events and banquet dining, packaging aesthetics and pure water quality are paramount. SABOL's packaged mineral bottles receive compliments from our guests constantly.",
    rating: 5,
    location: "Chennai",
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TRUSTED BY THOUSANDS"
          title="What Our Customers Say"
          subtitle="Real experiences from homes, offices, and businesses enjoying pure SABOL water every day."
        />

        {/* Carousel & Cards Layout */}
        <div className="mt-14 sm:mt-16">
          {/* Desktop 3-Card Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {testimonialsData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-sabol-ice-50/70 border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-water-lg transition-all duration-300 relative group"
              >
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-2xl bg-white text-sabol-blue shadow-sm flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 fill-sabol-blue/20" />
                </div>

                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>

                {/* Author Details */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sabol-navy-900 font-display">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-sabol-blue bg-sabol-ice-100 px-2.5 py-1 rounded-full">
                    {item.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile & Tablet Slider */}
          <div className="lg:hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-sabol-ice-50/80 border border-slate-200 rounded-3xl p-7 shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white text-sabol-blue shadow-sm flex items-center justify-center">
                    <Quote className="w-5 h-5 fill-sabol-blue/20" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: testimonialsData[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-base leading-relaxed mb-6 italic">
                  "{testimonialsData[currentIndex].quote}"
                </p>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sabol-navy-900 font-display">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="text-xs text-slate-500">{testimonialsData[currentIndex].role}</p>
                  </div>
                  <span className="text-xs font-semibold text-sabol-blue bg-sabol-ice-100 px-2.5 py-1 rounded-full">
                    {testimonialsData[currentIndex].location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-1.5">
                {testimonialsData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === i ? 'w-6 bg-sabol-blue' : 'w-2 bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-sabol-ice-100 flex items-center justify-center shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-sabol-ice-100 flex items-center justify-center shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
