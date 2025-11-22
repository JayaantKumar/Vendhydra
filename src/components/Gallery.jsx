import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiX } from 'react-icons/bi';

// Data extracted from the provided HTML snippet
const images = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP0eECwEzmSSctWw14aV19bA14CWczsAfjcR330_u5t5TK8sCUwiOmp5yjFWSC-jCE_OSXtui06OLRcQsl1gQBM8FGv99SU-wsLGUsfED1vAr6hpTtgm8Cls38hColrS4_uZ_iw_Nyf93BjhI41wBt72kDVBxcRXM7xuaGFzl30EkOacunBWTMT1raJfnM3m3bkXL3MdI5c83SIIYt_GaLZOX3-1W1Z9DxuMksQP2UsP3MHCdBG_X7BCcM_GW0cWccgbv1GcB60GE", cat: "Vanilla" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuARedHCdd_Ckxw5bMUSgqPcvhusQeir4zGalqfzic-qM2dNDH4h5eGau1zj8-TvrduOdSPsXvTxsb0jJ8QayhAAD_evKujMICVZ-t4GHXifx9QYG7_kXHd4GVp2A26NqUsov0KB3bJh48kpQY-psTWtTOFWQWM0vU6BpTnueORo86iHIifOT4uL0wsvvGWW3Ob6JQBFqg0x6fMXq-VDRS8pV9Q4XGrF3VNxb0IMiLQ8k9f2b0M9_-Jvwwj0WAL_zTvp6Y7-BTGVwb4", cat: "Chocolate" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuALfXRfHLHIGljz8zo8LgzrW0-42Lpo77_N2PeLex9aj1zfVvR_zNWM4wIgKpuLABIl6MReD8VxCeH9CsmcE_IHiZyFe290Qdsw0wPhZm7_l1sKf741LeQ1Mpz1KbmEVi_YUywklxeBAwQxKhciFXtZ2NRZyMNevoMCJ0-4uwLtoSc1UcncmtFiCQwp0oIoCz8caNYtAobOymES-4D3WS49jol0vGXg2RtimEIrD9hL5YNg0hFYNZx3BLxC5nXn3ftx5tWoh10vshs", cat: "Strawberry" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_hsXHY9QXcwB4TcH3GszpHu8OmcFoNU51UXH3eny8XZUXNfurvTWIQc-BsC2c7wZiOpA3-B4hITRtlPEtS9pUjUGb2USwG0uPS3NMHszTyKYodO_zKvFcB_VjL5JmHQUPcOGx7X5L4LFvbYxXIvHOxOrNxVqZMr8IFM0MJcFoaelZ4sb5o3xW2F_XZvri7HY4KvrF4d0Io6b2-bRtWPW82s2ukA2LxTLBPR5ZfgW2WVKzfy-8ZDuOzoVLm-NQGMclsIWDlR6ymSs", cat: "Peanut Butter" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtCr8UTpRnQa0FD2vIzKhTMTghOWJs-1HHDqJ3HQqrQIVTw41w_f5unLhuXv0T6BabTE24FbYbiB-jvwHpv3gOhmm1qc_pGil_v8N9G80-hs2i45lqzknMxmTKSe-IUiDhLr0-FWd5yP_O3jBtAl80emIiX7OI3eGThvkhB6JLZ9LouWVtkf9FJFipOkXsUiPkB-aiyRqLUFnXudOBw62UuqvuES1d7M7fBd2eJ6Bg8NTsbhabV-vc0uEP_BTUfyabyt7bzRLmJKs", cat: "Cookies & Cream" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0_Zc8lz_BO5po8VdeMiDC14rePlpgUznFgfFJq76JjYhch1ysVPpjYbmEUkKLfwZ_MHTSpAER-e0qy_v52XkcVHX9zO4prPs76qCHfXciT3Sc5v3EOhFwTFstFPwqqmfEgqLYJptyBSdoElTVjN8HRQG1gydGlfPKT8JqcKifXSkeGw20ZXA1vyU4T4HmCsR8WxH6OE2g3lb9kZZOlF1zAqv9IBZW8uSRpuw15_0CM3nMIAXxIHv7VsoUWspo6UlJlyqKFq4eLlw", cat: "Mocha" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh71AJin-j_RcBPOEvO7fDSmxYIoy8mv4Ca0HHaLT6rApGxxBl6GRxpFD1FKvUOTiJ0NTc4haNPCQaAjgydulIl2SFrGr8mykFZIy5qlfAl5sNT1MTDDWIzDMhzbeixpkZmuWySnSqPB2NUWkBQxgo3Icgsbn9wJo431VDNWfR8FKQ30XzOx42YHsG6UikgTP2RRlGfiF-LPuhi3a8SBCGzpTXldNzOCFYoHpM-G7HyF-d5ZBGYEtelFqg6q8NNE-p_hT_Tp01q0I", cat: "Banana" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH6_cDUctO23vFbZHDVSltwGELXI7KjyMg66czGeTknjL4EtQYqsAgVKx6CdVVmWxs9An4LHc_4Lno2vw4lw1z4sbFsMU5TpvikCfukYiA3HWXEH9pJatkgKIh2lewniCcBzlPr5_mtzNLHczWQAMNT0Lq3IP88PePdpWtB9cldP9DPxOJGiIFAfV3iqWPmdlSTapF_sIrZHNWREdwawkwYAKY4mz-JLSq_94KZdkUWBSO2hyNiUuUI_YUzIvLWuYLh497ShPf0Qg", cat: "Pure Unflavored" },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-primary font-bold uppercase tracking-wider mb-2">Flavor Lineup</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ethereal <span className="gradient-text">Flavor Journey</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover a symphony of tastes designed for your well-being.
          </p>
        </div>

        {/* Using a 4-column grid to neatly display the 8 flavors.
           Added placeholder styling in case the Google URLs don't load real images.
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer h-64 bg-gray-800 border border-gray-700"
              onClick={() => setSelectedImg(img.src)}
            >
              {/* Image with fallback background color */}
              <img 
                src={img.src} 
                alt={img.cat} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 bg-gray-card" 
                onError={(e) => {
                  // Fallback behavior if image fails to load
                  e.target.style.display = 'none'; 
                  e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
              
              {/* Hover Overlay showing Flavor Name */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <span className="text-white font-bold text-xl text-center tracking-wider border-b-2 border-primary pb-1">
                  {img.cat}
                </span>
              </div>
              
              {/* Visible label if image fails to load (handled by onError above) */}
              <div className="hidden text-gray-500 font-bold text-lg text-center absolute z-0">
                 {img.cat} Image placeholder
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox modal for full-screen view */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white text-4xl hover:text-primary transition-colors"><BiX /></button>
          <img 
            src={selectedImg} 
            alt="Full size" 
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border-2 border-white/10 bg-gray-card" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;