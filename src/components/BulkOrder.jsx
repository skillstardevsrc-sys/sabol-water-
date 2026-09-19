import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, Building, Phone, MapPin, Package, Check, Sparkles } from 'lucide-react';
import Button from './ui/Button';

export const BulkOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    requirement: '20L Water Cans (Regular Supply)',
    quantity: '',
    location: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    if (!formData.quantity.trim()) errs.quantity = 'Please specify quantity';
    if (!formData.location.trim()) errs.location = 'Location is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="bulk-orders" className="py-20 lg:py-28 bg-gradient-to-b from-white via-sabol-ice-50/70 to-white relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-sabol-aqua/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sabol-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Content & Value Propositions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sabol-ice-100 border border-sabol-aqua/30 text-sabol-blue text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm">
              <Building className="w-4 h-4 text-sabol-aqua" />
              <span>COMMERCIAL & INSTITUTIONAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sabol-navy-900 tracking-tight leading-tight font-display">
              Need Water <span className="text-gradient">in Bulk?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether it's an office, hotel, event or business, SABOL can handle your regular water requirements with prompt schedules and flexible delivery terms.
            </p>

            {/* Feature Check Points */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-sabol-navy-900">Competitive Pricing</h4>
                  <p className="text-sm text-slate-500">Tiered pricing tailored for high-volume enterprise and event requirements.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-sabol-ice-100 text-sabol-blue flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-sabol-navy-900">On-Time Delivery</h4>
                  <p className="text-sm text-slate-500">Reliable morning and evening delivery windows to ensure zero downtime.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-cyan-100 text-sabol-aqua flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-sabol-navy-900">Dedicated Support</h4>
                  <p className="text-sm text-slate-500">A personal relationship manager to coordinate custom deliveries and invoice handling.</p>
                </div>
              </div>
            </div>

            {/* Direct Phone / Contact prompt */}
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">Urgent Requirement?</p>
                <p className="text-sm font-bold text-sabol-navy-900">Call our bulk corporate desk</p>
              </div>
              <a
                href="tel:+919876543210"
                className="px-4 py-2 rounded-xl bg-sabol-navy-900 text-white font-semibold text-xs sm:text-sm hover:bg-sabol-blue transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Modern Glassmorphism Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative glass-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-water-lg border border-white/80">
              {/* Form Card Accent */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/60">
                <div>
                  <h3 className="text-2xl font-bold text-sabol-navy-900 font-display">
                    Bulk Enquiry Form
                  </h3>
                  <p className="text-xs text-slate-500">Get customized quote in under 15 minutes</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sabol-blue to-sabol-aqua text-white flex items-center justify-center shadow-water">
                  <Package className="w-5 h-5" />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-sabol-navy-900 font-display">
                      Thank you! We’ll contact you shortly.
                    </h4>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                      Our corporate team is reviewing your requirements for <strong className="text-sabol-navy-900">{formData.quantity}</strong> of {formData.requirement}.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            companyName: '',
                            phone: '',
                            requirement: '20L Water Cans (Regular Supply)',
                            quantity: '',
                            location: '',
                          });
                        }}
                        className="text-xs font-bold text-sabol-blue hover:underline"
                      >
                        Submit another request
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`w-full px-4 py-2.5 text-sm bg-white/90 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-sabol-blue/30 transition-all ${
                            errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                          }`}
                        />
                        {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Company / Organization Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Acme Hospitality"
                          className="w-full px-4 py-2.5 text-sm bg-white/90 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sabol-blue/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone & Requirement */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          className={`w-full px-4 py-2.5 text-sm bg-white/90 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-sabol-blue/30 transition-all ${
                            errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                          }`}
                        />
                        {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Requirement
                        </label>
                        <select
                          name="requirement"
                          value={formData.requirement}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-sm bg-white/90 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sabol-blue/30 text-slate-700"
                        >
                          <option value="20L Water Cans (Regular Supply)">20L Water Cans (Daily / Weekly)</option>
                          <option value="Bottles Pack (1 Litre)">1 Litre Bottles Pack</option>
                          <option value="Bottles Pack (500ml / 250ml)">500ml / 250ml Bottles Pack</option>
                          <option value="Event Bulk Hydration">Wedding / Corporate Event Supply</option>
                          <option value="Custom Bulk Requirement">Custom Enterprise Solution</option>
                        </select>
                      </div>
                    </div>

                    {/* Quantity & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Estimated Quantity *
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 50 cans/day or 100 cases"
                          className={`w-full px-4 py-2.5 text-sm bg-white/90 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-sabol-blue/30 transition-all ${
                            errors.quantity ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                          }`}
                        />
                        {errors.quantity && <p className="text-[11px] text-rose-500 mt-1">{errors.quantity}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Location / Area *
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Tech Park / Gandhipuram"
                          className={`w-full px-4 py-2.5 text-sm bg-white/90 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-sabol-blue/30 transition-all ${
                            errors.location ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                          }`}
                        />
                        {errors.location && <p className="text-[11px] text-rose-500 mt-1">{errors.location}</p>}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full justify-center shadow-water-lg font-bold"
                        icon={Send}
                        iconPosition="right"
                      >
                        Submit Request
                      </Button>
                    </div>

                    <p className="text-center text-xs text-slate-500 pt-1">
                      🛡️ Strict privacy guaranteed. No spam, only genuine quotation.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrder;
