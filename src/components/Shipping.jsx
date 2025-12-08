import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Shipping = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-gray-300">
        <h1 className="text-4xl font-bold text-white mb-8">Shipping & Delivery Policy</h1>
        
        <div className="space-y-6">
          <p>VendHydra operates automated vending kiosks.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Instant Delivery</h2>
          <p><strong>Physical Goods:</strong> Products are dispensed immediately at the vending terminal upon successful payment. There is no shipping or courier involvement.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Digital Receipts</h2>
          <p>Digital receipts and membership credits are delivered instantly to your registered account or email.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Service Area</h2>
          <p>Our services are available only at physical machine locations listed on our website.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shipping;