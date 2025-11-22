import React from 'react';
import { motion } from 'framer-motion';
import { BiCheckShield, BiBadgeCheck, BiWater, BiChip } from 'react-icons/bi';

const Quality = () => {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-tangerine font-bold uppercase tracking-wider mb-2">Quality Assurance</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why You Can <span className="gradient-text">Trust Every Cup</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            We don't just dispense powder; we dispense confidence. Our machines use hospital-grade hygiene technology and only stock lab-tested, authentic supplements from global brands.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-gray-800 p-4 rounded-lg text-cyan text-2xl h-fit"><BiBadgeCheck /></div>
              <div>
                <h4 className="text-xl font-bold text-white">Authentic Brands Only</h4>
                <p className="text-gray-400">We source directly from manufacturers. No middle-men, no tampering.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-gray-800 p-4 rounded-lg text-primary text-2xl h-fit"><BiWater /></div>
              <div>
                <h4 className="text-xl font-bold text-white">Auto-Clean Technology</h4>
                <p className="text-gray-400">Internal pipes are flushed with 90°C water after every single serve.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-gray-800 p-4 rounded-lg text-tangerine text-2xl h-fit"><BiChip /></div>
              <div>
                <h4 className="text-xl font-bold text-white">Smart Mixing</h4>
                <p className="text-gray-400">Precision calibration ensures the exact grams of protein in every shake.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Representation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-gray-800 to-black p-1 rounded-2xl">
            <div className="bg-dark rounded-xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop" 
                alt="Machine Internals" 
                className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 backdrop-blur-md border border-primary/30 p-8 rounded-2xl text-center">
                    <BiCheckShield className="text-6xl text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-white">100% Safe</h3>
                    <p className="text-gray-300 mt-2">Regular Lab Testing</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Quality;