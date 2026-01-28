import React from 'react';
import { motion } from 'framer-motion';
import { BiChevronDown, BiChip, BiBuildingHouse } from 'react-icons/bi';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border border-primary/30">
                Smart Gym Solutions
              </span>
              <span className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                | Coming April 2026
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-lg">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">Gym Hydration.</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Install our fully automated, touch-screen protein shake station. Zero staff needed. Deliver instant, hygienic post-workout fuel to your members.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gradient shadow-lg shadow-primary/20">Pre-Book Machine</button>
              <button className="px-8 py-3 md:py-4 rounded-full font-bold text-lg border-2 border-gray-600 text-white hover:border-white hover:bg-white hover:text-dark transition-all duration-300">
                Calculate ROI
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Feature Cards (Now in Grid, preventing overlap) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row lg:flex-col gap-6 justify-center lg:items-end mt-8 lg:mt-0"
          >
            {/* Card 1 */}
            <div className="bg-dark-card/60 backdrop-blur-md p-6 rounded-2xl border-l-4 border-primary w-full sm:w-64 shadow-xl">
              <div className="bg-dark/50 p-3 rounded-lg w-fit mb-4">
                <BiBuildingHouse className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Zero Staff</h3>
              <p className="text-gray-400 text-sm">Automated Mixing & Dispensing technology.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-dark-card/60 backdrop-blur-md p-6 rounded-2xl border-l-4 border-cyan w-full sm:w-64 shadow-xl">
               <div className="bg-dark/50 p-3 rounded-lg w-fit mb-4">
                <BiChip className="text-3xl text-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">IoT Enabled</h3>
              <p className="text-gray-400 text-sm">Real-time stock monitoring & alerts.</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-4xl cursor-pointer hover:text-primary transition-colors"
      >
        <a href="#how-it-works"><BiChevronDown /></a>
      </motion.div>
    </div>
  );
};

export default Hero;