import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "O trabalho do Italo redefiniu completamente como nos apresentamos ao mercado. Não foi apenas um site, foi um upgrade de marca que nos colocou em outro patamar de preço.",
    author: "Ricardo Mendes",
    role: "CEO, Mendes Engenharia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "Em menos de 30 dias após o lançamento do site novo, nossa conversão de leads qualificados aumentou 40%. O design passa a confiança que nossa clínica precisava.",
    author: "Dra. Sofia Alencar",
    role: "Fundadora, Clínica Vida Plena",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "Profissionalismo raro. O Italo entendeu não só de código, mas de negócio. O site carrega instantaneamente e a experiência no mobile é impecável.",
    author: "Marcos Viana",
    role: "CTO, Fintech Neon",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-40 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <Quote size={80} className="text-white/10 absolute -top-10 -left-10 md:-left-20 rotate-180" />
            
            <div className="relative min-h-[400px] flex items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <h2 className="text-2xl md:text-5xl font-display font-medium text-white leading-tight mb-12 relative z-10">
                      "{testimonials[currentIndex].text}"
                  </h2>
                  
                  <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full border border-white/20 p-1">
                          <img 
                              src={testimonials[currentIndex].image} 
                              alt={testimonials[currentIndex].author} 
                              loading="lazy"
                              decoding="async"
                              width="64"
                              height="64"
                              className="w-full h-full rounded-full object-cover grayscale"
                          />
                      </div>
                      <div>
                          <p className="text-white font-bold text-lg">{testimonials[currentIndex].author}</p>
                          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                      </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-8 mt-12">
                <button 
                  onClick={prev}
                  aria-label="Anterior"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex gap-2">
                   {testimonials.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-12 bg-white' : 'w-2 bg-white/20'}`} 
                      />
                   ))}
                </div>

                <button 
                  onClick={next}
                  aria-label="Próximo"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                  <ChevronRight size={20} />
                </button>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;