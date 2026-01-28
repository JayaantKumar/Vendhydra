import React from 'react';
import { motion } from 'framer-motion';
// FIX: Switched to FontAwesome (Fa) to fix the "not defined" error and ensure stability
import { FaChartLine, FaTools, FaStar, FaTemperatureLow, FaBan, FaMobileAlt, FaUserFriends } from 'react-icons/fa';

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Install <span className="gradient-text">VendHydra?</span>
          </h2>
          <p className="text-gray-400 mt-4">A win-win solution for your business and your clientele.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Gym Owners Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-card p-8 rounded-3xl border border-gray-800 hover:border-tangerine transition-all duration-300"
          >
            <div className="bg-tangerine/10 w-16 h-16 rounded-full flex items-center justify-center text-tangerine text-3xl mb-6">
              <FaChartLine />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">For Gym Owners</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <FaChartLine className="text-xl text-primary mt-1" />
                <span><strong>New Revenue Stream:</strong> Earn profit on every shake sold without lifting a finger.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FaTools className="text-xl text-primary mt-1" />
                <span><strong>Zero Maintenance:</strong> We handle restocking, cleaning, and servicing.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FaStar className="text-xl text-primary mt-1" />
                <span><strong>Premium Amenity:</strong> Attract new members with state-of-the-art nutrition tech.</span>
              </li>
            </ul>
            <button className="mt-8 w-full py-4 rounded-xl font-bold text-lg bg-white text-dark hover:bg-gray-200 transition-all">
              Request Installation Info
            </button>
          </motion.div>

          {/* Gym Members Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-card p-8 rounded-3xl border border-gray-800 hover:border-cyan transition-all duration-300"
          >
             <div className="bg-cyan/10 w-16 h-16 rounded-full flex items-center justify-center text-cyan text-3xl mb-6">
              <FaUserFriends />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">For Gym Members</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <FaTemperatureLow className="text-xl text-cyan mt-1" />
                <span><strong>Perfect Temperature:</strong> Always chilled, perfectly mixed, and ready to drink.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FaBan className="text-xl text-cyan mt-1" />
                <span><strong>No More Shaker Bottles:</strong> Stop carrying dirty bottles and bags of powder.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FaMobileAlt className="text-xl text-cyan mt-1" />
                <span><strong>Macro Tracking:</strong> Sync nutrition data directly to your fitness app.</span>
              </li>
            </ul>
            <button className="mt-8 w-full py-4 rounded-xl font-bold text-lg border border-gray-600 text-white hover:border-cyan hover:text-cyan transition-all">
              View Flavor Menu
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;