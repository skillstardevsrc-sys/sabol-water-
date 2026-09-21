import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Phone, Menu, X, ArrowRight, Home, Info, Package, ShieldCheck, Truck, Building2, MessageCircle, Sparkles } from 'lucide-react';
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
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Products', href: '#products', icon: Package },
    { name: 'Quality', href: '#quality', icon: ShieldCheck },
    { name: 'Delivery', href: '#delivery', icon: Truck },
    { name: 'Bulk Orders', href: '#bulk-orders', icon: Building2 },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-100/80'
          : 'bg-white/70 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-sabol-aqua rounded-lg active:scale-95 transition-transform"
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

          {/* Mobile Action & Menu Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenOrderModal('can')}
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sabol-blue to-sabol-aqua text-white text-xs font-extrabold shadow-sm active:scale-95 transition-transform"
            >
              Quick Order
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-sabol-blue hover:bg-sabol-ice-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sabol-aqua active:scale-90"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-down Mobile App Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
              {/* App Status Card */}
              <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-sabol-navy-900">
                    Live Doorstep Delivery Active
                  </span>
                </div>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 text-sabol-blue">
                  Same Day
                </span>
              </div>

              {/* Navigation Grid / List */}
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold text-slate-800 hover:bg-sabol-ice-100/70 hover:text-sabol-blue transition-colors active:scale-98"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{link.name}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </a>
                  );
                })}
              </div>

              {/* Quick Actions Footer in Drawer */}
              <div className="pt-3 border-t border-slate-100 space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-100 text-sabol-navy-900 text-xs font-bold active:scale-95 transition-transform"
                  >
                    <Phone className="w-4 h-4 text-sabol-blue" />
                    <span>Direct Call</span>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-emerald-50 text-emerald-700 text-xs font-bold active:scale-95 transition-transform"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrderModal('all');
                  }}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0052cc] to-cyan-500 text-white font-extrabold text-sm shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2"
                >
                  <Droplets className="w-4 h-4" />
                  <span>Order Sabol Water Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
