import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-dark-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-bg"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <h3 className="text-tangerine font-bold uppercase tracking-wider mb-2">Partner With Us</h3>
                <h2 className="text-4xl font-bold text-white mb-6">Get a Machine in Your Gym</h2>
                <p className="text-gray-400 mb-10">
                  Interested in installing a VendHydraFuel station? Fill out the form below and our sales team will contact you for a site survey.
                </p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Your Name" className="bg-dark border border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-primary w-full" />
                        <input type="text" placeholder="Gym Name" className="bg-dark border border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-primary w-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <input type="text" placeholder="City / Location" className="bg-dark border border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-primary w-full" />
                         <input type="tel" placeholder="Phone Number" className="bg-dark border border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-primary w-full" />
                    </div>
                    
                    <textarea rows="4" placeholder="Tell us about your facility (Approx. members, available space...)" className="bg-dark border border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-primary w-full"></textarea>
                    
                    <button className="btn-gradient w-full">Request Demo & Quote</button>
                </form>
            </div>

            <div className="flex flex-col justify-center bg-dark p-8 rounded-2xl border border-gray-800">
                 <h3 className="text-2xl font-bold text-white mb-6">Headquarters</h3>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                        <p className="text-gray-400">Tech Park, Sector 5, Innovation City</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaPhoneAlt className="text-tangerine text-xl mt-1" />
                        <p className="text-gray-400">+1 (800) VEND-PRO</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaEnvelope className="text-cyan text-xl mt-1" />
                        <p className="text-gray-400">partnerships@vendhydra.com</p>
                    </div>
                 </div>
                 
                 <div className="mt-10 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-300">
                        <strong className="text-white">Note for Gym Members:</strong> If you want VendHydra in your gym, tell your gym manager to contact us!
                    </p>
                 </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;