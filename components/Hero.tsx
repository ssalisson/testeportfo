import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
      
      {/* Badge Superior */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs md:text-sm font-medium text-gray-300 tracking-wide uppercase">Disponível para novos projetos</span>
      </motion.div>

      {/* Avatar com Glow Intenso */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10 relative group"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-violet-600/40 rounded-full blur-[60px] group-hover:bg-violet-500/50 transition-colors duration-700"></div>
        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-br from-gray-700 to-black overflow-hidden ring-1 ring-white/20">
            <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" 
                alt="Italo Lima" 
                className="w-full h-full rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
        </div>
      </motion.div>

      {/* Headline Impactante */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 text-white text-glow"
      >
        Sites premium que <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-gray-400">
          passam autoridade.
        </span>
      </motion.h1>

      {/* Subtexto Comercial */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light"
      >
        Sou <strong className="text-white font-medium">Italo Lima</strong>, especialista em criar experiências digitais modernas para empresas que querem vender mais e parecer grandes no online.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center"
      >
        <a 
          href="#projects" 
          className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Ver Projetos
        </a>
        <a 
          href="#contact" 
          className="w-full sm:w-auto px-8 py-4 glass-card text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
        >
          Quero um Site Assim
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-900/10 rounded-full blur-[128px]" />
      </div>
    </section>
  );
};

export default Hero;