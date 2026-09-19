import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const faqs = [
  {
    q: "What sizes of water bottles do you supply?",
    a: "We supply packaged mineral water in 250 ml (ideal for corporate meetings and event catering), 500 ml (convenient on-the-go travel pack), 1 Litre (standard daily hydration pack), as well as custom event/function case packaging."
  },
  {
    q: "Do you provide 20L water cans?",
    a: "Yes, our 20 Litre sanitized water cans are our flagship product. They are made from high-grade BPA-free materials, sealed with tamper-proof hygienic caps, and fit all standard hot & cold water dispensers as well as manual top dispensers."
  },
  {
    q: "Do you deliver to homes?",
    a: "Absolutely! We provide convenient doorstep delivery for apartments, independent houses, and gated communities. You can order single cans on demand or set up a hassle-free weekly subscription."
  },
  {
    q: "Do you supply offices and businesses?",
    a: "Yes, we cater extensively to corporate offices, IT parks, co-working spaces, commercial establishments, clinics, and fitness centers with scheduled morning deliveries and monthly consolidated GST invoicing."
  },
  {
    q: "Can I place bulk orders?",
    a: "Yes, we handle large bulk orders for weddings, exhibitions, hotel banquets, and enterprise facilities. You can submit our Bulk Order enquiry form or reach our corporate sales team for customized volume pricing."
  },
  {
    q: "How can I schedule regular delivery?",
    a: "You can schedule regular deliveries (Daily, Alternate Days, or Weekly) directly via our 'Order Now' portal, WhatsApp, or by giving our support team a quick call at +91 98765 43210. Our delivery personnel will arrive during your preferred morning or afternoon time slot."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Got Questions? We’ve Got Answers."
          subtitle="Everything you need to know about SABOL water delivery, can refills, and bulk orders."
        />

        {/* Accordion Container */}
        <div className="mt-12 sm:mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-sabol-blue/40 bg-sabol-ice-50/70 shadow-sm'
                    : 'border-slate-200/80 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-sabol-aqua/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-sabol-navy-900 font-display">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-sabol-blue text-white' : 'bg-sabol-ice-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-sabol-aqua/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
