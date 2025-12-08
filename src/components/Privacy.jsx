import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Privacy = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-gray-300">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-6">
          <p>Last updated: December 2025</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you use our vending machines or website, including phone numbers for receipts and payment information (processed securely by Razorpay).</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Information</h2>
          <p>We use the information to process transactions, send digital receipts, and improve our machine inventory based on popularity.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at privacy@vendhydra.com.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;