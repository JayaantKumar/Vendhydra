import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section-padding bg-dark-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-bg"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-10">
            Have questions about our vending machines or partnerships? Fill out
            the form and our team at{" "}
            <strong className="text-white">
              VEND HYDRAFUEL PRIVATE LIMITED
            </strong>{" "}
            will get back to you.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="bg-dark border border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-primary w-full"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-dark border border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-primary w-full"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="bg-dark border border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-primary w-full"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-dark border border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-primary w-full"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="bg-dark border border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-primary w-full"
              required
            ></textarea>

            <button className="btn-gradient w-full">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Business Contact Information
            </h3>

            <div className="flex items-start gap-4">
              <div className="bg-gray-800 p-4 rounded-lg text-primary text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-white font-bold">Registered Office</h4>
                <p className="text-gray-400">
                  India (Operational locations across partner gyms)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-800 p-4 rounded-lg text-tangerine text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-white font-bold">Phone</h4>
                <p className="text-gray-400">
                  Available on request via email support
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-800 p-4 rounded-lg text-cyan text-xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-white font-bold">Email</h4>
                <p className="text-gray-400">
                  support@vendhydrafule.in
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-white font-bold mb-6">Business Hours</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Monday – Friday</span>
                <span>9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Saturday</span>
                <span>10:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
