import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Globe, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 lg:px-24 border-b border-white/5 bg-[#050505] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid pointer-events-none -z-10 opacity-40" />
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-violet-900/10 rounded-full blur-[120px] -z-10 opacity-60" />

      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Typography (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
            
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
               <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-300 font-mono">Disponível para Projetos</span>
               </div>
               <span className="hidden md:inline-block h-px w-12 bg-white/10"></span>
               <span className="hidden md:inline-block text-[10px] uppercase tracking-widest text-gray-500 font-mono">São Paulo, BR</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Custom ease for smoothness
              className="font-display font-bold text-white leading-[0.95] tracking-tighter mb-8"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
            >
              SITES QUE <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-gray-400">VENDEM</span>
                <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute bottom-2 left-0 w-full h-[0.1em] bg-violet-500/30 -z-0 origin-left"
                />
              </span> <br />
              AUTORIDADE.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-xl"
            >
              Eu sou <strong className="text-white font-medium">Italo Lima</strong>. Crio experiências digitais premium que diferenciam sua marca e convertem visitantes em clientes de alto valor.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               animate={{ opacity: 1, y: 0 }} 
               transition={{ delay: 0.6, duration: 0.8 }}
               className="flex flex-col sm:flex-row gap-5"
            >
                <a 
                  href="#projects" 
                  className="group relative h-14 px-8 rounded-full bg-white text-black font-bold flex items-center justify-center gap-3 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                >
                  <span className="relative z-10">Ver Projetos Selecionados</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a href="#contact" className="h-14 px-8 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-all hover:bg-white/5">
                   <span>Vamos Conversar</span>
                </a>
            </motion.div>

             {/* Footer bits for Hero */}
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-16 flex items-center gap-8 text-xs font-mono text-gray-600 uppercase tracking-wider"
             >
                <div className="flex items-center gap-2">
                    <Globe size={14} />
                    <span>Design Mundial</span>
                </div>
                <div className="flex items-center gap-2">
                    <Zap size={14} />
                    <span>Alta Performance</span>
                </div>
             </motion.div>
        </div>

        {/* Right Column: Visual (5 Columns) - Floating Card Style */}
        <div className="lg:col-span-5 relative h-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
             <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="relative w-full max-w-[440px] aspect-[3/4] group"
             >
                {/* Back Glow */}
                <div className="absolute inset-0 bg-violet-500/20 blur-[60px] rounded-full scale-90 group-hover:scale-110 transition-transform duration-1000 opacity-0 group-hover:opacity-100" />
                
                {/* Image Card */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl shadow-black/50">
                    <img 
                      src="https://i.ibb.co/SwHFYdC9/Air-Brush-20260208163021-jpg.jpg" 
                      alt="Italo Lima - Web Designer" 
                      width="440"
                      height="586"
                      loading="eager"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                    {/* Floating Info inside Image */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                         <div className="backdrop-blur-md bg-white/10 border border-white/10 px-4 py-3 rounded-xl flex-grow mr-4">
                            <p className="text-white font-bold text-sm">Italo Lima</p>
                            <p className="text-gray-300 text-[10px] font-mono uppercase tracking-wider">Founder & Creative Director</p>
                         </div>
                         <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-white/10">
                            <Star size={20} className="fill-black" />
                         </div>
                    </div>
                </div>

                {/* Decorative Elements around image */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-full blur-2xl opacity-20" 
                />
             </motion.div>
        </div>

      </div>
      
    </section>
  );
};

export default Hero;