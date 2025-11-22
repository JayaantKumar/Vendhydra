import React from 'react';
import { motion } from 'framer-motion';
import { FaRunning, FaDumbbell, FaSpa, FaHeartbeat, FaAppleAlt, FaUsers } from 'react-icons/fa';

const services = [
  { icon: <FaDumbbell />, title: "Strength Training", desc: "Build muscle mass and increase raw power with olympic equipment." },
  { icon: <FaRunning />, title: "Cardio Programs", desc: "Improve endurance and burn fat with our advanced treadmill zone." },
  { icon: <FaSpa />, title: "Yoga & Flexibility", desc: "Enhance mobility, reduce stress and find your inner balance." },
  { icon: <FaHeartbeat />, title: "Personal Training", desc: "One-on-one expert guidance tailored specifically to your body type." },
  { icon: <FaAppleAlt />, title: "Nutrition Coaching", desc: "Custom meal plans designed by certified nutritionists." },
  { icon: <FaUsers />, title: "Group Classes", desc: "Join our energetic Zumba, Spin, and CrossFit community sessions." },
];

const Services = () => {
  return (
    <section className="section-padding bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-cyan font-bold uppercase tracking-wider mb-2">What We Offer</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-card p-8 rounded-2xl border border-gray-800 relative overflow-hidden group card-hover"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-primary/20"></div>
              
              <div className="text-4xl text-primary mb-6 bg-dark w-16 h-16 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {service.desc}
              </p>
              <a href="#contact" className="text-cyan font-bold uppercase text-sm tracking-wide hover:underline">
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;