import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Privacy = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-gray-300">
        <h1 className="text-4xl font-bold text-white mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6">
          <p>Last updated: December 2025</p>

          <p>
            This Privacy Policy describes how{" "}
            <strong className="text-white">
              VEND HYDRAFUEL PRIVATE LIMITED
            </strong>{" "}
            ("Company", "we", "our", "us") collects, uses, and protects personal
            information when users access our website or use our automated
            vending machine services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p>
            We may collect limited information when you use our vending machines
            or website, including details such as mobile number, transaction
            reference ID, and payment status for the purpose of completing
            transactions and providing receipts.
          </p>
          <p>
            Payment-related information is processed securely by authorized
            third-party payment service providers such as Cashfree Payments. We
            do not store your complete card, UPI, or banking credentials on our
            servers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            2. How We Use Information
          </h2>
          <p>
            The information collected is used strictly for:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Processing vending machine transactions</li>
            <li>Sending digital payment confirmations or receipts</li>
            <li>Resolving transaction-related issues</li>
            <li>Improving service reliability and machine performance</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            3. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect personal data against unauthorized access,
            disclosure, alteration, or destruction. All payment transactions
            are handled through PCI-DSS compliant payment gateways.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            4. Data Sharing
          </h2>
          <p>
            We do not sell or rent personal information to third parties. Data
            may be shared only with trusted service providers such as payment
            processors or regulatory authorities when required by law.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            5. Changes to This Policy
          </h2>
          <p>
            VEND HYDRAFUEL PRIVATE LIMITED reserves the right to update this
            Privacy Policy from time to time. Any changes will be reflected on
            this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            6. Contact Us
          </h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at:
          </p>
          <p className="mt-2">
            📧 <strong>Email:</strong> privacy@vendhydrafule.in
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
