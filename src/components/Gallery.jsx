import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiX } from 'react-icons/bi';

const images = [
  { src: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1470&auto=format&fit=crop", cat: "Machines" },
  { src: "https://images.unsplash.com/photo-1541701057926-207a3dc1869e?q=80&w=1374&auto=format&fit=crop", cat: "Shakes" },
  { src: "https://images.unsplash.com/photo-1624915816153-4855259be0a6?q=80&w=1470&auto=format&fit=crop", cat: "Customers" },
  { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop", cat: "Gyms" },
  { src: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?q=80&w=1470&auto=format&fit=crop", cat: "Shakes" },
  { src: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1470&auto=format&fit=crop", cat: "Machines" },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Fuel in <span className="gradient-text">Action</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="relative group overflow-hidden rounded-xl cursor-pointer h-64"
              onClick={() => setSelectedImg(img.src)}
            >
              <img src={img.src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-lg tracking-wider border-b-2 border-primary">{img.cat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white text-4xl hover:text-primary"><BiX /></button>
          <img src={selectedImg} alt="Full size" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Gallery;