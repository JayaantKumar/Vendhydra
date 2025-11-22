import React from 'react';
import { motion } from 'framer-motion';
import { BiRocket, BiSupport, BiMobileAlt, BiWallet } from 'react-icons/bi';

const About = () => {
  const features = [
    { icon: <BiRocket />, title: "Instant Recovery", desc: "Get your protein within 30 seconds of finishing your set." },
    { icon: <BiMobileAlt />, title: "Touchless Order", desc: "Order via app or simple QR scan." },
    { icon: <BiWallet />, title: "Cashless Pay", desc: "UPI, Credit Card, and Gym Membership card integration." },
    { icon: <BiSupport />, title: "24/7 Active", desc: "Our machines never sleep, always ready to fuel you." }
  ];

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-cyan/20 border border-gray-700">
            {/* Image of a modern vending machine or gym goer drinking shake */}
            <img 
              src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?q=80&w=1470&auto=format&fit=crop" 
              alt="Athlete drinking shake" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-primary font-bold uppercase tracking-wider mb-2">The Future of Fuel</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fitness Meets <span className="gradient-text">Automation</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Forget carrying shaker bottles or dealing with messy powders in the locker room. FuelStation brings premium nutrition automation to your gym floor. We bridge the gap between your workout and your recovery.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="text-3xl text-tangerine bg-gray-card p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
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