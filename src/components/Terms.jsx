import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Terms = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-gray-300">
        <h1 className="text-4xl font-bold text-white mb-8">
          Terms and Conditions
        </h1>

        <div className="space-y-6">
          <p>
            These Terms and Conditions govern the use of services operated by{" "}
            <strong className="text-white">
              VEND HYDRAFUEL PRIVATE LIMITED
            </strong>{" "}
            ("Company", "we", "our", "us").
          </p>

          <p>
            VEND HYDRAFUEL PRIVATE LIMITED operates automated protein shake
            vending machines deployed at partner gym and fitness locations.
            Customers can purchase products using digital payment methods.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing our website, scanning a QR code, or using our vending
            machines, you acknowledge that you have read, understood, and agree
            to be bound by these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            2. Use of Machines
          </h2>
          <p>
            You agree to use our vending machines only for lawful purposes. Any
            attempt to damage, tamper with, reverse engineer, or interfere with
            the machine hardware, software, or payment systems is strictly
            prohibited.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            3. Products & Consumption
          </h2>
          <p>
            The vending machines dispense pre-mixed or ready-to-consume protein
            shakes. Ingredient information and nutritional details are displayed
            on the machine interface. Customers are responsible for reviewing
            this information before purchase.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            4. Product Liability
          </h2>
          <p>
            While we ensure quality and hygiene standards, VEND HYDRAFUEL PRIVATE
            LIMITED shall not be held liable for any allergic reactions, medical
            conditions, or adverse effects arising from product consumption.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            5. Payments
          </h2>
          <p>
            All payments are processed through secure third-party payment
            gateways. Prices displayed are inclusive of applicable taxes unless
            stated otherwise. Once a payment is successfully completed, it is
            considered final.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            6. Platform & Partner Settlements
          </h2>
          <p>
            VEND HYDRAFUEL PRIVATE LIMITED acts as a platform facilitating sales
            through vending machines installed at partner locations. A portion
            of each transaction may be retained as a platform service fee, with
            the remaining amount settled to the respective partner as per
            agreed terms.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, VEND HYDRAFUEL PRIVATE
            LIMITED shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            8. Governing Law
          </h2>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of India. Any disputes shall be subject to the exclusive
            jurisdiction of Indian courts.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
