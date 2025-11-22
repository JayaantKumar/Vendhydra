import React from 'react';
import { motion } from 'framer-motion';

const drinks = [
  { 
    id: 1, 
    name: "Double Rich Chocolate", 
    type: "Whey Isolate", 
    cals: "120", 
    pro: "25g", 
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=1470&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    name: "Vanilla Bean Dream", 
    type: "Whey Concentrate", 
    cals: "130", 
    pro: "24g", 
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1374&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    name: "Strawberry Storm", 
    type: "Hydrolyzed Whey", 
    cals: "115", 
    pro: "26g", 
    image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?q=80&w=1374&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    name: "Mocha Cappuccino", 
    type: "Protein Coffee", 
    cals: "140", 
    pro: "20g", 
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1469&auto=format&fit=crop" 
  },
  { 
    id: 5, 
    name: "Cookies & Cream", 
    type: "Casein Blend", 
    cals: "150", 
    pro: "24g", 
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1374&auto=format&fit=crop" 
  },
  { 
    id: 6, 
    name: "Vegan Greens", 
    type: "Pea Protein", 
    cals: "110", 
    pro: "22g", 
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=1374&auto=format&fit=crop" 
  },
  { 
    id: 7, 
    name: "Blueberry Pre-Workout", 
    type: "Energy Blend", 
    cals: "15", 
    pro: "0g", 
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=1470&auto=format&fit=crop" 
  },
  { 
    id: 8, 
    name: "BCAA Watermelon", 
    type: "Recovery", 
    cals: "10", 
    pro: "5g", 
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=1374&auto=format&fit=crop" 
  },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-card rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* Image Area - Replaces the Icon */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={drink.image} 
                  alt={drink.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay to make text readable if needed, or just aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-card to-transparent opacity-60"></div>
              </div>
              
              {/* Content Area */}
              <div className="p-6 text-center flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-1">{drink.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{drink.type}</p>
                
                <div className="flex justify-center gap-4 text-gray-400 text-sm border-t border-gray-700 pt-4 mt-auto">
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
                
                <button className="mt-6 w-full py-3 rounded-lg bg-dark text-white border border-gray-700 hover:bg-primary hover:border-primary hover:text-dark font-bold transition-colors uppercase text-sm tracking-wide">
                  Select
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