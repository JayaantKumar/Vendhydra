import React from 'react';
import { motion } from 'framer-motion';
import { BiCheckCircle } from 'react-icons/bi';

const plans = [
  {
    name: "Pay As You Go",
    price: "149",
    suffix: "/shake",
    features: ["Any Flavor", "Standard Scoop Size", "Cold Water Mix", "No commitment"],
    recommend: false,
  },
  {
    name: "Muscle Pack",
    price: "1,299",
    suffix: "/10 shakes",
    features: ["~₹129 per shake", "Save 15%", "Valid for 30 days", "Double Scoop Option", "Priority Dispensing"],
    recommend: true,
  },
  {
    name: "Pro Subscription",
    price: "2,999",
    suffix: "/month",
    features: ["Daily Shake (30 total)", "~₹99 per shake", "Any Flavor + Pre-workout", "Free Shaker Bottle", "Nutrient Tracking App"],
    recommend: false,
  }
];

const Pricing = () => {
  return (
    <section className="section-padding bg-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Smart <span className="gradient-text">Wallet Plans</span>
          </h2>
          <p className="text-gray-400 mt-4">Pay with UPI at the machine, or buy a digital pass for huge savings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative bg-gray-card p-8 rounded-3xl border-2 ${plan.recommend ? 'border-tangerine scale-105 z-10 shadow-2xl shadow-tangerine/20' : 'border-gray-800 hover:border-primary'} transition-all duration-300 flex flex-col h-full`}
            >
              {plan.recommend && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-tangerine to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase">
                  Best Value
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-black text-white">₹{plan.price}</span>
                <span className="text-gray-500">{plan.suffix}</span>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <BiCheckCircle className={`text-xl ${plan.recommend ? 'text-tangerine' : 'text-primary'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${plan.recommend ? 'bg-gradient-to-r from-tangerine to-red-500 text-white hover:scale-105' : 'bg-white text-dark hover:bg-gray-200'}`}>
                Load Wallet
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;