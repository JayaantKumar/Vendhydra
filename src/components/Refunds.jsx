import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Refunds = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-gray-300">
        <h1 className="text-4xl font-bold text-white mb-8">Cancellation & Refund Policy</h1>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Cancellation Policy</h2>
          <p>Due to the nature of instant vending, orders cannot be cancelled once the product has been dispensed by the machine.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Refunds</h2>
          <p>Refunds are only applicable in the following cases:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment was deducted but the product was not dispensed.</li>
            <li>The product dispensed was expired or damaged.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Processing Timeline</h2>
          <p>If eligible, refunds will be processed within <strong>5-7 business days</strong> to the original payment method. Please contact support@vendhydra.com with your transaction ID.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Refunds;