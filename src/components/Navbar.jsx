import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Phone, Menu, X, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export const Navbar = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Quality', href: '#quality' },
    { name: 'Delivery', href: '#delivery' },
    { name: 'Bulk Orders', href: '#bulk-orders' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-100/80'
          : 'bg-white/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-sabol-aqua rounded-lg"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sabol-blue to-sabol-aqua flex items-center justify-center text-white shadow-water group-hover:scale-105 transition-transform duration-300">
              <Droplets className="w-6 h-6 animate-pulse-subtle text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-wider text-sabol-navy-900 font-display">
                SABOL
              </span>
              <span className="text-[10px] tracking-widest font-bold text-sabol-blue uppercase -mt-1">
                Pure Water
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-sabol-blue rounded-full transition-colors hover:bg-sabol-ice-100/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-700 hover:text-sabol-blue transition-colors px-3 py-2 rounded-full hover:bg-slate-100/80"
            >
              <div className="w-8 h-8 rounded-full bg-sabol-ice-100 text-sabol-blue flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-display tracking-tight text-sabol-navy-900">+91 98765 43210</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenOrderModal('all')}
              className="shadow-water"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenOrderModal('all')}
              className="sm:hidden text-xs px-3 py-1.5"
            >
              Order Now
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-sabol-blue hover:bg-sabol-ice-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sabol-aqua"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-down Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-5 py-6 space-y-4">
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-sabol-ice-100 hover:text-sabol-blue transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 p-3 rounded-xl bg-sabol-ice-50 text-sabol-navy-900 text-sm font-semibold"
                >
                  <div className="w-9 h-9 rounded-full bg-sabol-blue text-white flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Need Immediate Delivery?</p>
                    <p className="font-bold">+91 98765 43210</p>
                  </div>
                </a>

                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrderModal('all');
                  }}
                >
                  Order Water Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
