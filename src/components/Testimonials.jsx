import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Alex M.",
    result: "Daily User",
    quote: "I used to carry a messy shaker bottle all day. Now I just grab a chilled Double Rich Chocolate after my workout. It tastes way better than my home mix.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1376&auto=format&fit=crop"
  },
  {
    name: "Sarah L.",
    result: "Vegan Athlete",
    quote: "Finally a machine that stocks high-quality Vegan protein! The Green Pea blend is actually smooth, not gritty. Love the contactless payment too.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop"
  },
  {
    name: "Mike T.",
    result: "Bodybuilder",
    quote: "The protein content is legit. I scanned the QR code and saw the lab report. It's the most convenient way to hit my macros.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding gradient-bg relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Community Love</h2>

        <div className="relative overflow-hidden min-h-[400px] flex items-center justify-center">
            {testimonials.map((item, index) => (
                <div 
                  key={index}
                  className={`absolute w-full md:w-2/3 lg:w-1/2 transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90 z-0'}`}
                >
                    <div className="bg-dark/90 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/10 text-center shadow-2xl">
                        <FaQuoteLeft className="text-tangerine text-4xl mx-auto mb-6" />
                        <p className="text-xl md:text-2xl text-white italic mb-6 leading-relaxed">"{item.quote}"</p>
                        <div className="flex items-center justify-center gap-1 text-yellow-400 mb-6">
                            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full border-2 border-primary object-cover mb-3" />
                            <h4 className="text-white font-bold text-lg">{item.name}</h4>
                            <p className="text-cyan text-sm font-medium">{item.result}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/40'}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;