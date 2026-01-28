import React from 'react';
import { motion } from 'framer-motion';
// FIX: Switched to 'react-icons/fa' (Standard Version) to prevent errors
import { FaHandPointer, FaCreditCard, FaMugHot, FaSmile } from 'react-icons/fa';

const About = () => {
  const steps = [
    { 
      icon: <FaHandPointer />, 
      title: "1. Select", 
      desc: "Members choose their flavor and protein type via the HD touchscreen interface." 
    },
    { 
      icon: <FaCreditCard />, 
      title: "2. Pay", 
      desc: "Instant cashless payment via UPI QR code, Card, or Gym Membership integration." 
    },
    { 
      icon: <FaMugHot />, 
      title: "3. Dispense", 
      desc: "The machine precisely mixes powder and chilled water, dispensing in under 30 seconds." 
    },
    { 
      icon: <FaSmile />, 
      title: "4. Fuel", 
      desc: "Hygienic, clump-free, chilled protein ready immediately after their workout." 
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Machine Image - Focusing on the interface/dispensing */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-cyan/20 border border-gray-700 aspect-[4/5]">
            <img 
              // A placeholder image showing a modern vending interface 
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop" 
              alt="Smart Vending Machine Touchscreen Interface" 
              className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-2xl font-bold text-white mb-2">Sleek Indian Design</h4>
                <p className="text-gray-300">Compact footprint designed for modern Indian gyms. Prototype ready April 2026.</p>
             </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-primary font-bold uppercase tracking-wider mb-2">Automation</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Meets <span className="gradient-text">Nutrition.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Forget messy counters and manual mixing. VendHydra automates the entire process, ensuring consistent quality and hygiene while freeing up your staff.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col gap-2 bg-dark-card p-4 rounded-xl border border-gray-800 hover:border-primary transition-colors">
                <div className="text-3xl text-tangerine w-fit">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{step.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;