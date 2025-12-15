import React, { useEffect, useState } from 'react';
import { BiDumbbell, BiUpArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom'; // IMPORT THIS

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark border-t border-gray-800 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-black tracking-tighter mb-6">
            <BiDumbbell className="text-primary text-3xl" />
            <span className="text-white">Vend<span className="text-primary">Hydra</span></span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Premium automated nutrition. Fuel your body instantly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {['Home', 'About', 'Pricing', 'Reviews'].map((item) => (
              <li key={item}>
                <a href={`/#${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal (REQUIRED FOR RAZORPAY) */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
          <ul className="space-y-3">
            <li><Link to="/privacy" className="text-gray-400 hover:text-cyan transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-400 hover:text-cyan transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/refunds" className="text-gray-400 hover:text-cyan transition-colors">Refund Policy</Link></li>
            <li><Link to="/shipping" className="text-gray-400 hover:text-cyan transition-colors">Shipping Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
          <p className="text-gray-400 mb-2">123 Fitness Blvd, Gym District</p>
          <p className="text-gray-400 mb-2">+91 98765 43210</p>
          <p className="text-gray-400">support@vendhydra.com</p>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} VEND HYDRAFUEL PRIVATE LIMITED. All rights reserved.</p>
      </div>

      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-linear-to-r from-tangerine to-cyan text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:-translate-y-1 ${showTopBtn ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <BiUpArrowAlt className="text-2xl" />
      </button>
    </footer>
  );
};

export default Footer;