import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Package, Droplets, ShieldCheck, MessageCircle } from 'lucide-react';

export const MobileAppNav = ({ onOpenOrderModal }) => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'delivery', 'quality', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hello SABOL Pure Water! 💧 I would like to order water cans.');
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <nav aria-label="Mobile Navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl border-t border-slate-200/90 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] px-2 py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-around relative">
        
        {/* Tab 1: Home */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-all active:scale-90 ${
            activeTab === 'home' ? 'text-sabol-blue' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <div className="relative">
            <Home className="w-5 h-5 stroke-[2.2]" />
            {activeTab === 'home' && (
              <motion.div
                layoutId="activeDot"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sabol-blue rounded-full"
              />
            )}
          </div>
          <span className="text-[10px] font-bold mt-1 tracking-tight">Home</span>
        </button>

        {/* Tab 2: Products */}
        <button
          type="button"
          onClick={() => handleNavClick('products')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-all active:scale-90 ${
            activeTab === 'products' ? 'text-sabol-blue' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <div className="relative">
            <Package className="w-5 h-5 stroke-[2.2]" />
            {activeTab === 'products' && (
              <motion.div
                layoutId="activeDot"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sabol-blue rounded-full"
              />
            )}
          </div>
          <span className="text-[10px] font-bold mt-1 tracking-tight">Products</span>
        </button>

        {/* Center Prominent Floating Action Order Button */}
        <div className="flex-1 flex justify-center -mt-6">
          <button
            type="button"
            onClick={() => onOpenOrderModal ? onOpenOrderModal('can') : null}
            className="relative flex flex-col items-center group active:scale-90 transition-transform"
          >
            {/* Glowing Pulse Halo */}
            <div className="absolute inset-0 rounded-full bg-sabol-blue/30 blur-md animate-pulse" />
            
            {/* Action Circle */}
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#0052cc] via-[#0070e0] to-cyan-400 text-white flex items-center justify-center shadow-[0_6px_20px_rgba(0,102,214,0.5)] border-2 border-white ring-2 ring-sabol-blue/20">
              <Droplets className="w-6 h-6 animate-pulse-subtle" />
            </div>
            <span className="text-[10px] font-extrabold text-sabol-navy-900 mt-1 uppercase tracking-tight">
              Order
            </span>
          </button>
        </div>

        {/* Tab 4: Quality */}
        <button
          type="button"
          onClick={() => handleNavClick('quality')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-all active:scale-90 ${
            activeTab === 'quality' ? 'text-sabol-blue' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <div className="relative">
            <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            {activeTab === 'quality' && (
              <motion.div
                layoutId="activeDot"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sabol-blue rounded-full"
              />
            )}
          </div>
          <span className="text-[10px] font-bold mt-1 tracking-tight">Quality</span>
        </button>

        {/* Tab 5: WhatsApp Quick Help */}
        <button
          type="button"
          onClick={openWhatsApp}
          className="flex flex-col items-center justify-center flex-1 py-1 text-emerald-600 active:scale-90 transition-transform"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 stroke-[2.2]" />
          </div>
          <span className="text-[10px] font-bold mt-1 tracking-tight">WhatsApp</span>
        </button>

      </div>
    </nav>
  );
};

export default MobileAppNav;
