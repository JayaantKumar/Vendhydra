import React from 'react';
import { motion } from 'framer-motion';

// Updated with the specific Google links and Names you requested
const drinks = [
  { 
    id: 1, 
    name: "Vanilla", 
    type: "Whey Concentrate Base", 
    tags: ["Creamy", "Classic"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP0eECwEzmSSctWw14aV19bA14CWczsAfjcR330_u5t5TK8sCUwiOmp5yjFWSC-jCE_OSXtui06OLRcQsl1gQBM8FGv99SU-wsLGUsfED1vAr6hpTtgm8Cls38hColrS4_uZ_iw_Nyf93BjhI41wBt72kDVBxcRXM7xuaGFzl30EkOacunBWTMT1raJfnM3m3bkXL3MdI5c83SIIYt_GaLZOX3-1W1Z9DxuMksQP2UsP3MHCdBG_X7BCcM_GW0cWccgbv1GcB60GE" 
  },
  { 
    id: 2, 
    name: "Chocolate", 
    type: "Whey Isolate Base", 
    tags: ["Rich Cocoa", "Low Sugar"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARedHCdd_Ckxw5bMUSgqPcvhusQeir4zGalqfzic-qM2dNDH4h5eGau1zj8-TvrduOdSPsXvTxsb0jJ8QayhAAD_evKujMICVZ-t4GHXifx9QYG7_kXHd4GVp2A26NqUsov0KB3bJh48kpQY-psTWtTOFWQWM0vU6BpTnueORo86iHIifOT4uL0wsvvGWW3Ob6JQBFqg0x6fMXq-VDRS8pV9Q4XGrF3VNxb0IMiLQ8k9f2b0M9_-Jvwwj0WAL_zTvp6Y7-BTGVwb4" 
  },
  { 
    id: 3, 
    name: "Strawberry", 
    type: "Hydrolyzed Whey Base", 
    tags: ["Fast Absorb", "Fruity"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALfXRfHLHIGljz8zo8LgzrW0-42Lpo77_N2PeLex9aj1zfVvR_zNWM4wIgKpuLABIl6MReD8VxCeH9CsmcE_IHiZyFe290Qdsw0wPhZm7_l1sKf741LeQ1Mpz1KbmEVi_YUywklxeBAwQxKhciFXtZ2NRZyMNevoMCJ0-4uwLtoSc1UcncmtFiCQwp0oIoCz8caNYtAobOymES-4D3WS49jol0vGXg2RtimEIrD9hL5YNg0hFYNZx3BLxC5nXn3ftx5tWoh10vshs" 
  },
  { 
    id: 4, 
    name: "Peanut Butter", 
    type: "Protein Blend", 
    tags: ["Nutty", "High Energy"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_hsXHY9QXcwB4TcH3GszpHu8OmcFoNU51UXH3eny8XZUXNfurvTWIQc-BsC2c7wZiOpA3-B4hITRtlPEtS9pUjUGb2USwG0uPS3NMHszTyKYodO_zKvFcB_VjL5JmHQUPcOGx7X5L4LFvbYxXIvHOxOrNxVqZMr8IFM0MJcFoaelZ4sb5o3xW2F_XZvri7HY4KvrF4d0Io6b2-bRtWPW82s2ukA2LxTLBPR5ZfgW2WVKzfy-8ZDuOzoVLm-NQGMclsIWDlR6ymSs" 
  },
  { 
    id: 5, 
    name: "Cookies & Cream", 
    type: "Casein Blend Base", 
    tags: ["Crunchy", "Slow Digest"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtCr8UTpRnQa0FD2vIzKhTMTghOWJs-1HHDqJ3HQqrQIVTw41w_f5unLhuXv0T6BabTE24FbYbiB-jvwHpv3gOhmm1qc_pGil_v8N9G80-hs2i45lqzknMxmTKSe-IUiDhLr0-FWd5yP_O3jBtAl80emIiX7OI3eGThvkhB6JLZ9LouWVtkf9FJFipOkXsUiPkB-aiyRqLUFnXudOBw62UuqvuES1d7M7fBd2eJ6Bg8NTsbhabV-vc0uEP_BTUfyabyt7bzRLmJKs" 
  },
  { 
    id: 6, 
    name: "Mocha", 
    type: "Protein Coffee Base", 
    tags: ["Caffeine", "Morning Kick"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0_Zc8lz_BO5po8VdeMiDC14rePlpgUznFgfFJq76JjYhch1ysVPpjYbmEUkKLfwZ_MHTSpAER-e0qy_v52XkcVHX9zO4prPs76qCHfXciT3Sc5v3EOhFwTFstFPwqqmfEgqLYJptyBSdoElTVjN8HRQG1gydGlfPKT8JqcKifXSkeGw20ZXA1vyU4T4HmCsR8WxH6OE2g3lb9kZZOlF1zAqv9IBZW8uSRpuw15_0CM3nMIAXxIHv7VsoUWspo6UlJlyqKFq4eLlw" 
  },
  { 
    id: 7, 
    name: "Banana", 
    type: "Mass Gainer Base", 
    tags: ["Carbs", "Recovery"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh71AJin-j_RcBPOEvO7fDSmxYIoy8mv4Ca0HHaLT6rApGxxBl6GRxpFD1FKvUOTiJ0NTc4haNPCQaAjgydulIl2SFrGr8mykFZIy5qlfAl5sNT1MTDDWIzDMhzbeixpkZmuWySnSqPB2NUWkBQxgo3Icgsbn9wJo431VDNWfR8FKQ30XzOx42YHsG6UikgTP2RRlGfiF-LPuhi3a8SBCGzpTXldNzOCFYoHpM-G7HyF-d5ZBGYEtelFqg6q8NNE-p_hT_Tp01q0I" 
  },
  { 
    id: 8, 
    name: "Pure Unflavored", 
    type: "Raw Isolate", 
    tags: ["Zero Additives", "100% Pure"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH6_cDUctO23vFbZHDVSltwGELXI7KjyMg66czGeTknjL4EtQYqsAgVKx6CdVVmWxs9An4LHc_4Lno2vw4lw1z4sbFsMU5TpvikCfukYiA3HWXEH9pJatkgKIh2lewniCcBzlPr5_mtzNLHczWQAMNT0Lq3IP88PePdpWtB9cldP9DPxOJGiIFAfV3iqWPmdlSTapF_sIrZHNWREdwawkwYAKY4mz-JLSq_94KZdkUWBSO2hyNiUuUI_YUzIvLWuYLh497ShPf0Qg" 
  },
];

const Flavors = () => {
  return (
    <section id="flavors" className="section-padding bg-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-cyan font-bold uppercase tracking-wider mb-2">Machine Inventory</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ethereal <span className="gradient-text">Flavor Journey</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover a symphony of tastes designed for your well-being. Our machines are loaded with top-tier ingredients mixed perfectly on demand.
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
              {/* Image Area */}
              <div className="h-48 overflow-hidden relative bg-gray-800">
                <img 
                  src={drink.image} 
                  alt={drink.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90"
                  onError={(e) => {
                    // Fallback if the Google link is broken or 403 Forbidden
                    e.target.style.display = 'none';
                    e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'text-gray-500');
                    e.target.parentNode.innerHTML = '<span class="text-sm p-4">Image Unavailable</span>';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-card to-transparent opacity-40"></div>
              </div>
              
              {/* Content Area */}
              <div className="p-6 text-center flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-1">{drink.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{drink.type}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {drink.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavors;