import React from 'react';
import { motion } from 'framer-motion';
import { BiChevronDown, BiTimer, BiCheckShield } from 'react-icons/bi';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background: High tech vending aesthetic */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1470&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-transparent"></div>
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider border border-primary/30">Smart Nutrition</span>
            <span className="text-gray-400 text-sm uppercase tracking-wider">| Lab Tested Purity</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
            Premium Fuel. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">Zero Waiting.</span>
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed">
            The world's most advanced protein vending station. 8 gourmet flavors, chilled to perfection, ready in 30 seconds.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <button className="btn-gradient">View Menu</button>
            <button className="px-8 py-3 md:py-4 rounded-full font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-dark transition-all duration-300">
              Location Map
            </button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:flex absolute right-10 bottom-32 gap-6"
        >
          <div className="bg-dark-card/80 backdrop-blur p-6 rounded-xl border-l-4 border-primary w-48">
            <BiTimer className="text-4xl text-primary mb-2" />
            <h3 className="text-xl font-bold text-white">30 Seconds</h3>
            <p className="text-gray-400 text-sm">Dispense Time</p>
          </div>
          <div className="bg-dark-card/80 backdrop-blur p-6 rounded-xl border-l-4 border-cyan w-48">
            <BiCheckShield className="text-4xl text-cyan mb-2" />
            <h3 className="text-xl font-bold text-white">Certified</h3>
            <p className="text-gray-400 text-sm">100% Authentic</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-4xl cursor-pointer"
      >
        <a href="#menu"><BiChevronDown /></a>
      </motion.div>
    </div>
  );
};

export default Hero;