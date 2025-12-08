import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Terms = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-gray-300">
        <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>
        
        <div className="space-y-6">
          <p>Welcome to VendHydra.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing our website or using our vending units, you agree to be bound by these terms.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use of Machines</h2>
          <p>You agree to use our machines only for lawful purposes. Any attempt to tamper with the machine hardware or software is strictly prohibited.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Product Liability</h2>
          <p>While we ensure stock quality, VendHydra is not liable for allergic reactions. Please check ingredients list displayed on the screen before purchasing.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Payments</h2>
          <p>All payments are processed securely. Prices are final and inclusive of applicable taxes.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;