import React from 'react';
import { Droplets, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, MessageCircle, Heart } from 'lucide-react';

export const Footer = ({ onOpenOrderModal }) => {
  return (
    <footer id="contact" className="bg-sabol-navy-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sabol-blue to-sabol-aqua flex items-center justify-center text-white shadow-water">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-wider text-white font-display">
                  SABOL
                </span>
                <span className="text-[10px] tracking-widest font-bold text-sabol-aqua uppercase -mt-1">
                  Pure Water
                </span>
              </div>
            </div>

            <p className="text-sm text-sabol-ice-300/80 leading-relaxed max-w-sm">
              “Pure Water. Reliable Delivery.”
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              SABOL supplies premium bottled drinking water and sanitized 20L water cans for homes, offices, hotels, events, and commercial establishments.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-sabol-blue border border-slate-800 hover:border-sabol-blue text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-pink-600 border border-slate-800 hover:border-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-[#0077b5] border border-slate-800 hover:border-[#0077b5] text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-[#25D366] border border-slate-800 hover:border-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white font-display uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-sabol-aqua transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-sabol-aqua transition-colors">About SABOL</a>
              </li>
              <li>
                <a href="#products" className="hover:text-sabol-aqua transition-colors">Products & 20L Cans</a>
              </li>
              <li>
                <a href="#quality" className="hover:text-sabol-aqua transition-colors">Purification & Quality</a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-sabol-aqua transition-colors">Delivery Timeline</a>
              </li>
              <li>
                <a href="#bulk-orders" className="hover:text-sabol-aqua transition-colors">Bulk Orders</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sabol-aqua transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-base font-bold text-white font-display uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-sabol-aqua flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Customer Helpline & Orders</p>
                  <a href="tel:+919876543210" className="text-white hover:text-sabol-aqua font-semibold">
                    +91 98765 43210
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-sabol-aqua flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Enquiries</p>
                  <a href="mailto:support@sabolwater.com" className="text-white hover:text-sabol-aqua font-semibold">
                    support@sabolwater.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-sabol-aqua flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Bottling & Delivery Hub</p>
                  <span className="text-slate-300 leading-snug block">
                    Plot No. 42, Pure Spring Industrial Zone, Coimbatore, Tamil Nadu, India.
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 SABOL. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
            <a href="#quality" className="hover:text-slate-300 transition-colors">Hygienic Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
