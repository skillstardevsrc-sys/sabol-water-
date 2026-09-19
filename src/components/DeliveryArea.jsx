import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search, CheckCircle2, XCircle, ArrowRight, Truck } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

// EDITABLE DEMO SERVICEABLE PINCODES
// Update or extend this list as your delivery network expands
const serviceablePincodes = [
  '641001', '641002', '641003', '641004', '641005', '641006', '641012', '641018', '641035', // Coimbatore
  '600001', '600002', '600004', '600028', '600034', '600040', '600096', // Chennai
  '560001', '560002', '560004', '560025', '560034', '560068', '560100', // Bengaluru
  '500001', '500003', '500032', '500081', // Hyderabad
  '110001', '110020', '122001', '122002', // NCR
  '400001', '400050', '411001', '411014', // Mumbai / Pune
  '123456', '560000', '600000', '641000' // Generic Demo pins
];

export const DeliveryArea = ({ onOpenOrderModal }) => {
  const [pincode, setPincode] = useState('');
  const [status, setStatus] = useState(null); // 'available' | 'unavailable' | null
  const [checkedCode, setCheckedCode] = useState('');

  const handleCheck = (e) => {
    e.preventDefault();
    const cleanPin = pincode.trim().replace(/\D/g, '');
    if (!cleanPin || cleanPin.length < 6) {
      alert('Please enter a valid 6-digit postal pincode.');
      return;
    }

    setCheckedCode(cleanPin);
    const isServiceable = serviceablePincodes.includes(cleanPin) || cleanPin.startsWith('641') || cleanPin.startsWith('560') || cleanPin.startsWith('600');
    setStatus(isServiceable ? 'available' : 'unavailable');
  };

  return (
    <section id="delivery-area" className="py-20 lg:py-28 bg-sabol-ice-100/60 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sabol-aqua/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sabol-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <SectionHeading
          badge="CHECK AVAILABILITY"
          title="We Deliver Freshness to Your Door"
          subtitle="Check if SABOL delivery is available in your area. Enter your 6-digit postal pincode below."
        />

        {/* Pincode Checker Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-water-lg border border-slate-100"
        >
          <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <MapPin className="w-5 h-5 text-sabol-blue" />
              </div>
              <input
                type="text"
                maxLength="6"
                value={pincode}
                onChange={(e) => {
                  setPincode(e.target.value);
                  if (status) setStatus(null);
                }}
                placeholder="Enter your 6-digit pincode"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sabol-blue/30 focus:bg-white transition-all tracking-wider"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={Search}
              iconPosition="left"
              className="py-3.5 shadow-md"
            >
              Check
            </Button>
          </form>

          {/* Quick Helper Pincodes */}
          <div className="mt-3 text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
            <span>Try demo pincodes:</span>
            <button
              type="button"
              onClick={() => { setPincode('641001'); setStatus(null); }}
              className="text-sabol-blue font-bold hover:underline"
            >
              641001
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => { setPincode('560001'); setStatus(null); }}
              className="text-sabol-blue font-bold hover:underline"
            >
              560001
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => { setPincode('600001'); setStatus(null); }}
              className="text-sabol-blue font-bold hover:underline"
            >
              600001
            </button>
          </div>

          {/* Results Message Container */}
          <AnimatePresence mode="wait">
            {status === 'available' && (
              <motion.div
                key="available"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-900">
                      ✓ Delivery available in {checkedCode}!
                    </h4>
                    <p className="text-xs text-emerald-700">
                      Standard delivery within 2 to 4 hours available.
                    </p>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenOrderModal(checkedCode)}
                  className="shrink-0 w-full sm:w-auto"
                >
                  Order to {checkedCode}
                </Button>
              </motion.div>
            )}

            {status === 'unavailable' && (
              <motion.div
                key="unavailable"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-left"
              >
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-rose-900">
                    Sorry, delivery is currently unavailable in this area ({checkedCode}).
                  </h4>
                  <p className="text-xs text-rose-700">
                    We are expanding quickly! Contact our bulk delivery desk for special route requests.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryArea;
