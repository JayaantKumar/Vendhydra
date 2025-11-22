import React, { useState, useEffect } from 'react';
import { BiDumbbell, BiMenu, BiX } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Handle Scroll Effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. LOCK BODY SCROLL when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Quality', href: '#quality' },
    { name: 'Plans', href: '#pricing' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      
      {/* FIX: Added 'relative z-50' here. 
          This forces the Logo and Hamburger button to sit ON TOP of the full-screen menu.
      */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        
        <a href="#home" className="flex items-center gap-2 text-2xl md:text-3xl font-black tracking-tighter hover:opacity-90 transition-opacity">
          <BiDumbbell className="text-primary text-4xl" />
          <span className="text-white">Vend<span className="text-primary">Hydra</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-gradient px-6 py-2 text-sm">Find Machine</button>
        </div>

        {/* Mobile Toggle (Visible on top now) */}
        <div className="md:hidden text-white text-4xl cursor-pointer p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BiX className="text-primary" /> : <BiMenu />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} // Changed to simple fade in/out for cleaner look
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden h-screen w-screen"
          >
            {/* Added extra padding top to account for the fixed header */}
            <div className="flex flex-col items-center gap-8 mt-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-gradient mt-4" onClick={() => setIsOpen(false)}>Find Machine</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;