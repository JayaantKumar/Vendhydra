import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaLeaf, FaCookie, FaCoffee } from 'react-icons/fa';
import { BiSolidDrink } from 'react-icons/bi';
import { GiChocolateBar, GiStrawberry } from 'react-icons/gi';

// Updated icons to use valid imports
const drinks = [
  { id: 1, name: "Double Rich Chocolate", type: "Whey Isolate", cals: "120", pro: "25g", icon: <GiChocolateBar />, color: "text-amber-700" },
  { id: 2, name: "Vanilla Bean Dream", type: "Whey Concentrate", cals: "130", pro: "24g", icon: <FaCookie />, color: "text-yellow-200" },
  { id: 3, name: "Strawberry Storm", type: "Hydrolyzed Whey", cals: "115", pro: "26g", icon: <GiStrawberry />, color: "text-red-500" },
  { id: 4, name: "Mocha Cappuccino", type: "Protein Coffee", cals: "140", pro: "20g", icon: <FaCoffee />, color: "text-amber-900" },
  { id: 5, name: "Cookies & Cream", type: "Casein Blend", cals: "150", pro: "24g", icon: <FaCookie />, color: "text-gray-300" },
  { id: 6, name: "Vegan Greens", type: "Pea Protein", cals: "110", pro: "22g", icon: <FaLeaf />, color: "text-green-500" },
  { id: 7, name: "Blueberry Pre-Workout", type: "Energy Blend", cals: "15", pro: "0g", icon: <FaBolt />, color: "text-blue-500" },
  { id: 8, name: "BCAA Watermelon", type: "Recovery", cals: "10", pro: "5g", icon: <BiSolidDrink />, color: "text-red-400" },
];

const Menu = () => {
  return (
    <section className="section-padding bg-dark-card relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-cyan font-bold uppercase tracking-wider mb-2">Dispensing Now</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Choose Your <span className="gradient-text">Fuel</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We stock only the highest rated brands. Select from 8 premium options available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-card p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300 group"
            >
              <div className={`text-5xl mb-6 ${drink.color} bg-dark w-20 h-20 flex items-center justify-center rounded-full shadow-lg mx-auto group-hover:scale-110 transition-transform`}>
                {drink.icon}
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">{drink.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{drink.type}</p>
                
                <div className="flex justify-center gap-4 text-gray-400 text-sm border-t border-gray-700 pt-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-white">{drink.cals}</span>
                    <span>Kcal</span>
                  </div>
                  <div className="w-[1px] bg-gray-700 h-8"></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white">{drink.pro}</span>
                    <span>Protein</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full py-2 rounded-lg bg-dark text-white border border-gray-700 hover:bg-primary hover:border-primary hover:text-dark font-bold transition-colors">
                  View Ingredients
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;