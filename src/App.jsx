import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import Flavors from './components/Flavors';
import Quality from './components/Quality';
import Benefits from './components/Benefits'; 
import ROI from './components/ROI'; // IMPORT NEW COMPONENT
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Policy Pages
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Refunds from './components/Refunds';
import Shipping from './components/Shipping';

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="how-it-works"><About /></div>
      <div id="benefits"><Benefits /></div>
      {/* Added ROI Section here */}
      <div id="roi"><ROI /></div>
      <div id="flavors"><Flavors /></div>
      <div id="quality"><Quality /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="gallery"><Gallery /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div className="bg-dark min-h-screen w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
    </div>
  );
};

export default App;