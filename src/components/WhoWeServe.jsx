import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, UtensilsCrossed, Sparkles, Briefcase, ArrowUpRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import homeImg from '../assets/serve-home.jpg';
import officeImg from '../assets/serve-office.jpg';
import hotelImg from '../assets/serve-hotel.jpg';
import eventImg from '../assets/serve-event.jpg';
import businessImg from '../assets/serve-business.jpg';

const serveItems = [
  {
    id: 'homes',
    title: 'Homes',
    subtitle: 'Daily drinking water supply',
    description: 'Safe, healthy hydration for your family with contactless regular refills.',
    image: homeImg,
    icon: Home,
    tag: 'Residential',
  },
  {
    id: 'offices',
    title: 'Offices',
    subtitle: 'Regular office water requirements',
    description: 'Reliable water dispenser supplies to keep your workplace team refreshed.',
    image: officeImg,
    icon: Building2,
    tag: 'Corporate',
  },
  {
    id: 'hotels',
    title: 'Hotels & Restaurants',
    subtitle: 'Bulk bottle & can supply',
    description: 'Premium bottled water presentations for dining tables, banquets and guest suites.',
    image: hotelImg,
    icon: UtensilsCrossed,
    tag: 'Hospitality',
  },
  {
    id: 'events',
    title: 'Events',
    subtitle: 'Wedding / Corporate / Functions',
    description: 'Custom bulk bottled water packages for gatherings, marriage halls & celebrations.',
    image: eventImg,
    icon: Sparkles,
    tag: 'Occasions',
  },
  {
    id: 'businesses',
    title: 'Businesses',
    subtitle: 'Regular bulk requirements',
    description: 'Scheduled institutional volume logistics for gyms, clinics, and commercial spaces.',
    image: businessImg,
    icon: Briefcase,
    tag: 'Commercial',
  },
];

export const WhoWeServe = ({ onOpenOrderModal }) => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="SECTORS WE CATER"
          title="For Every Space. Every Need"
          subtitle="Whether you need a single 20L can for home or daily truckloads for commercial hospitality, SABOL delivers."
        />

        {/* 5 Cards Layout (Top row 3, bottom row 2 or responsive flex/grid) */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serveItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => onOpenOrderModal(item.title)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-water-lg transition-all duration-300 bg-slate-900 aspect-[4/3] sm:aspect-[16/11]"
              >
                {/* Image with zoom effect */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-sabol-navy-950 via-sabol-navy-900/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-sabol-aqua group-hover:text-sabol-navy-900 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 p-2 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-5 h-5 text-sabol-aqua" />
                    <h3 className="text-xl font-bold font-display group-hover:text-sabol-aqua-light transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-sabol-ice-200 mb-1.5">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
