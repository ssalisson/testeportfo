import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto flex flex-col items-center text-center z-10">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-[3px] bg-gradient-to-r from-violet-500 to-pink-500 overflow-hidden">
            <img 
                src="https://picsum.photos/id/64/300/300" 
                alt="Italo Lima" 
                className="w-full h-full rounded-full object-cover border-4 border-black"
            />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-black border border-white/10 text-[10px] md:text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-lg text-white">
            <Star size={10} className="fill-yellow-400 text-yellow-400" />
            <span>Web Designer</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
      >
        Websites que parecem caros <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-white">
          e convertem clientes.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
      >
        Eu sou Italo Lima, especialista em criar sites rápidos, modernos e estratégicos para empresas que querem vender mais no digital.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <a 
          href="#projects" 
          className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          Ver Projetos
        </a>
        <a 
          href="#contact" 
          className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2 backdrop-blur-sm group"
        >
          Quero um Site Assim
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"
      />
    </section>
  );
};

export default Hero;