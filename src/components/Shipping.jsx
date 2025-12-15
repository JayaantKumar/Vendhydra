import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Shipping = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-gray-300">
        <h1 className="text-4xl font-bold text-white mb-8">
          Shipping & Delivery Policy
        </h1>

        <div className="space-y-6">
          <p>
            This Shipping & Delivery Policy applies to services operated by{" "}
            <strong className="text-white">
              VEND HYDRAFUEL PRIVATE LIMITED
            </strong>
            .
          </p>

          <p>
            VEND HYDRAFUEL PRIVATE LIMITED operates automated vending machines
            that dispense protein shakes at partner gym and fitness locations.
            As such, there is no traditional shipping or courier-based delivery
            involved.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            1. Instant Delivery
          </h2>
          <p>
            <strong>Physical Products:</strong> All products purchased through
            our vending machines are dispensed instantly at the machine upon
            successful completion of payment. Customers receive their product
            immediately at the point of sale.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            2. Digital Receipts
          </h2>
          <p>
            Payment confirmations or digital receipts, where applicable, are
            generated instantly after successful payment and may be displayed
            on the machine screen or sent via the payment service provider.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            3. Service Availability
          </h2>
          <p>
            Our services are available only at physical vending machine
            locations operated by or in partnership with VEND HYDRAFUEL PRIVATE
            LIMITED. Availability of products may vary by location.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            4. Delivery Exceptions
          </h2>
          <p>
            In the event of a technical issue, machine malfunction, or failed
            dispense after payment, customers may contact support for
            assistance or resolution as per our Refund & Cancellation Policy.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shipping;
