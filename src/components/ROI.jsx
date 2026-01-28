import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaIndianRupeeSign } from 'react-icons/fa6';

const ROI = () => {
  // State for sliders
  const [memberCount, setMemberCount] = useState(500);
  const [dailyVendsPercentage, setDailyVendsPercentage] = useState(15); // estimates 15% of members buy daily

  // Assumptions for Indian Market (Hypothetical estimates)
  const averageProfitPerShake = 80; // e.g., Selling price ₹150 - Cost ₹70 = ₹80 profit
  
  // Calculations
  const estimatedDailyVends = Math.round(memberCount * (dailyVendsPercentage / 100));
  const dailyProfit = estimatedDailyVends * averageProfitPerShake;
  const monthlyProfit = dailyProfit * 30;
  const annualProfit = monthlyProfit * 12;

  // Format currency to Indian Rupee standard
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="roi" className="section-padding bg-dark-card relative overflow-hidden">
      {/* Background accent glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-primary font-bold uppercase tracking-wider mb-2">Financial Benefits</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Estimate Your <span className="gradient-text">ROI</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            See potential profits based on your gym's member strength. Turn unused floor space into a significant revenue generator.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Sliders/Inputs Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark p-8 rounded-3xl border border-gray-800 space-y-10"
          >
            {/* Slider 1: Member Count */}
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-bold text-xl">Active Gym Members</label>
                <span className="text-primary font-bold text-2xl">{memberCount}</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="2000" 
                step="50"
                value={memberCount}
                onChange={(e) => setMemberCount(Number(e.target.value))}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <p className="text-gray-500 text-sm mt-2">Slide to match your current member base.</p>
            </div>

            {/* Slider 2: Estimated Daily Usage % */}
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-bold text-xl">Est. Daily Usage Rate</label>
                <span className="text-cyan font-bold text-2xl">{dailyVendsPercentage}%</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="40" 
                step="5"
                value={dailyVendsPercentage}
                onChange={(e) => setDailyVendsPercentage(Number(e.target.value))}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan"
              />
               <p className="text-gray-500 text-sm mt-2">Percentage of members buying a shake daily (Conservative est: 10-20%).</p>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-xl flex justify-between items-center border border-gray-700">
                <span className="text-gray-300 font-medium">Estimated Daily Vends:</span>
                <span className="text-white font-bold text-2xl">{estimatedDailyVends} Shakes</span>
            </div>
          </motion.div>

          {/* Results Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
             {/* Monthly Profit Box */}
            <div className="bg-gradient-to-br from-dark to-gray-900 p-8 rounded-3xl border-2 border-primary/50 shadow-2xl shadow-primary/10 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                 <h4 className="text-gray-300 uppercase tracking-wider font-bold mb-2 relative z-10">Potential Monthly Profit</h4>
                 <div className="flex items-center justify-center text-primary relative z-10">
                    {/* Glowing text effect using drop-shadow */}
                    <span className="text-5xl md:text-7xl font-black drop-shadow-[0_0_15px_rgba(23,207,23,0.5)]">
                        {formatCurrency(monthlyProfit)}
                    </span>
                 </div>
            </div>

             {/* Annual Profit Box */}
             <div className="bg-gradient-to-br from-dark to-gray-900 p-8 rounded-3xl border-2 border-cyan/50 shadow-2xl shadow-cyan/10 text-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-cyan/5 group-hover:bg-cyan/10 transition-colors"></div>
                 <h4 className="text-gray-300 uppercase tracking-wider font-bold mb-2 relative z-10">Potential Annual Revenue Growth</h4>
                 <div className="flex items-center justify-center text-cyan relative z-10">
                    <span className="text-4xl md:text-6xl font-black drop-shadow-[0_0_15px_rgba(0,206,209,0.5)]">
                        {formatCurrency(annualProfit)}
                    </span>
                 </div>
                 <p className="text-gray-500 text-sm mt-4 relative z-10">*Estimates based on avg. market margins. Actual results may vary.</p>
            </div>

            <button className="btn-gradient w-full py-5 text-xl shadow-xl hover:shadow-primary/30">
                Get a Custom Quote based on these numbers
            </button>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROI;