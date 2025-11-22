import React, { useEffect, useState } from 'react';
import { BiDumbbell, BiUpArrowAlt } from 'react-icons/bi';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
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
            <span className="text-white">Fitness<span className="text-primary">Pro</span></span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Transform your body and mind with our world-class facilities and expert guidance. Join the movement today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {['Home', 'About', 'Pricing', 'Trainers', 'Gallery'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-3">
            {['Strength Training', 'Yoga & Pilates', 'Cardio Fitness', 'Personal Training', 'Nutrition Plans'].map((item) => (
              <li key={item} className="text-gray-400 hover:text-cyan transition-colors cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
          <p className="text-gray-400 mb-4">Subscribe for latest updates and offers.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Your Email" className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none w-full" />
            <button className="bg-primary text-white px-4 py-2 rounded-r-lg font-bold hover:bg-primary/90">Go</button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} FitnessPro. All rights reserved.</p>
      </div>

      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-gradient-to-r from-tangerine to-cyan text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:-translate-y-1 ${showTopBtn ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <BiUpArrowAlt className="text-2xl" />
      </button>
    </footer>
  );
};

export default Footer;