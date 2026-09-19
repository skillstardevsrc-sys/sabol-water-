import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Droplets, CheckCircle, Phone, Send, MapPin, Package, Calendar } from 'lucide-react';
import Button from './ui/Button';

export const OrderModal = ({ isOpen, onClose, initialProduct = null }) => {
  const [productType, setProductType] = useState('20l-can');
  const [quantity, setQuantity] = useState(2);
  const [frequency, setFrequency] = useState('one-time');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialProduct) {
      if (initialProduct.toLowerCase().includes('bottle')) {
        setProductType('bottles-case');
      } else {
        setProductType('20l-can');
      }
    }
  }, [initialProduct]);

  useEffect(() => {
    if (!isOpen) {
      // Reset submission status after modal closes
      const timer = setTimeout(() => {
        setSubmitted(false);
        setErrors({});
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Please enter your name';
    if (!phone.trim() || !/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!address.trim()) errs.address = 'Please enter your delivery address';
    if (!pincode.trim()) errs.pincode = 'Please enter delivery pincode';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hello SABOL Water Team! 💧\nI would like to place an order:\n\n• Product: ${productType === '20l-can' ? '20L Water Can' : 'Bottled Water Case'}\n• Quantity: ${quantity}\n• Delivery Mode: ${frequency}\n• Name: ${name || 'Customer'}\n• Phone: ${phone || 'N/A'}\n• Address: ${address || 'N/A'}\n• Pincode: ${pincode || 'N/A'}\n\nPlease confirm delivery!`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-sabol-navy-950/70 backdrop-blur-sm"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 border border-slate-100"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-sabol-navy-900 via-sabol-navy-800 to-sabol-blue px-6 py-5 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sabol-aqua/20 border border-sabol-aqua/30 flex items-center justify-center text-sabol-aqua">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">Order SABOL Water</h3>
                    <p className="text-xs text-sabol-ice-200">Doorstep Delivery • Pure & Hygienic</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner"
                  >
                    <CheckCircle className="w-10 h-10" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-sabol-navy-900 font-display">
                    Order Received!
                  </h4>
                  <p className="text-slate-600 max-w-sm mx-auto text-sm leading-relaxed">
                    Thank you, <strong className="text-sabol-navy-900">{name}</strong>! We have received your order for {quantity} {productType === '20l-can' ? '20L Can(s)' : 'Bottle Case(s)'}. Our delivery executive will contact you shortly at {phone}.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      variant="whatsapp"
                      size="md"
                      onClick={handleWhatsAppOrder}
                    >
                      Instant WhatsApp Confirmation
                    </Button>
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={onClose}
                    >
                      Done
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Product Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Select Water Product
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setProductType('20l-can')}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                          productType === '20l-can'
                            ? 'border-sabol-blue bg-sabol-ice-50 ring-2 ring-sabol-blue/20 text-sabol-navy-900 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 text-slate-600'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className="font-bold text-sm">20L Water Can</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-sabol-aqua/20 text-sabol-blue font-semibold">Popular</span>
                        </div>
                        <span className="text-xs text-slate-500">Home & Office Jar</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setProductType('bottles-case')}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                          productType === 'bottles-case'
                            ? 'border-sabol-blue bg-sabol-ice-50 ring-2 ring-sabol-blue/20 text-sabol-navy-900 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 text-slate-600'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className="font-bold text-sm">Water Bottles Case</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">Pack</span>
                        </div>
                        <span className="text-xs text-slate-500">250ml / 500ml / 1L</span>
                      </button>
                    </div>
                  </div>

                  {/* Quantity & Frequency */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Quantity
                      </label>
                      <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                        <button
                          type="button"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3.5 py-2 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center font-bold text-slate-800 text-sm">
                          {quantity} {productType === '20l-can' ? 'Cans' : 'Cases'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3.5 py-2 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Delivery Schedule
                      </label>
                      <select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sabol-blue/30 focus:border-sabol-blue text-slate-700"
                      >
                        <option value="one-time">One-time Order</option>
                        <option value="daily">Daily Supply</option>
                        <option value="alternate-days">Alternate Days</option>
                        <option value="weekly">Weekly Supply</option>
                      </select>
                    </div>
                  </div>

                  {/* Customer Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 py-2 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sabol-blue/30 focus:bg-white transition-all ${
                          errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 mt-0.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        className={`w-full px-3.5 py-2 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sabol-blue/30 focus:bg-white transition-all ${
                          errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-500 mt-0.5">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Address & Pincode */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Delivery Address *
                    </label>
                    <textarea
                      rows="2"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="House/Flat No., Building, Street name"
                      className={`w-full px-3.5 py-2 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sabol-blue/30 focus:bg-white transition-all ${
                        errors.address ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                      }`}
                    />
                    {errors.address && <p className="text-[11px] text-rose-500 mt-0.5">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      maxLength="6"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="e.g. 560001 / 600001 / 641001"
                      className={`w-full px-3.5 py-2 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sabol-blue/30 focus:bg-white transition-all ${
                        errors.pincode ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                      }`}
                    />
                    {errors.pincode && <p className="text-[11px] text-rose-500 mt-0.5">{errors.pincode}</p>}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="flex-1"
                      icon={Send}
                      iconPosition="right"
                    >
                      Confirm Delivery Request
                    </Button>
                    <Button
                      type="button"
                      variant="whatsapp"
                      size="md"
                      onClick={handleWhatsAppOrder}
                    >
                      Order via WhatsApp
                    </Button>
                  </div>

                  <p className="text-center text-[11px] text-slate-400">
                    🔒 Cash on Delivery & UPI available upon delivery. Free doorstep dispatch.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
