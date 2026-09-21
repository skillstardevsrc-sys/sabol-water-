import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySabol from './components/WhySabol';
import Products from './components/Products';
import DeliveryProcess from './components/DeliveryProcess';
import WhoWeServe from './components/WhoWeServe';
import Quality from './components/Quality';
import BulkOrder from './components/BulkOrder';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import DeliveryArea from './components/DeliveryArea';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';

function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenOrderModal = (productType = 'can') => {
    setSelectedProduct(productType);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-sabol-aqua/20 selection:text-sabol-navy-950">
      {/* Sticky Header Navbar */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenOrderModal={handleOpenOrderModal} />

        {/* 2. Stats / Feature Banner Section */}
        <Stats onOpenOrderModal={handleOpenOrderModal} />

        {/* 3. About Us / Why SABOL Section */}
        <WhySabol onOpenOrderModal={handleOpenOrderModal} />

        {/* 4. Products Section (Bottles & 20L Cans) */}
        <Products onOpenOrderModal={handleOpenOrderModal} />

        {/* 5. Delivery Process Timeline */}
        <DeliveryProcess onOpenOrderModal={handleOpenOrderModal} />

        {/* 6. Who We Serve (5 Sectors) */}
        <WhoWeServe onOpenOrderModal={handleOpenOrderModal} />

        {/* 7. Quality Purification Process (Dark Navy) */}
        <Quality onOpenOrderModal={handleOpenOrderModal} />

        {/* 8. Bulk Order Form Section */}
        <BulkOrder />

        {/* 9. Testimonials Carousel */}
        <Testimonials />

        {/* 10. Delivery Area Pincode Checker */}
        <DeliveryArea onOpenOrderModal={handleOpenOrderModal} />

        {/* 11. FAQ Accordion */}
        <FAQ />

        {/* 12. Final CTA Banner */}
        <CTA onOpenOrderModal={handleOpenOrderModal} />
      </main>

      {/* Footer */}
      <Footer onOpenOrderModal={handleOpenOrderModal} />

      {/* Interactive Quick Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        initialProduct={selectedProduct}
      />
    </div>
  );
}

export default App;
