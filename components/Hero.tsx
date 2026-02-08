import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-28 md:pt-32 pb-20 px-6 md:px-12 border-b border-white/5 bg-[#050505] overflow-hidden">
      
      {/* Background Grid Accent - Simplified mask for performance */}
      <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px] -z-10 transform translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-[1400px] mx-auto w-full flex-grow flex flex-col justify-center h-full">
        
        {/* Top Meta Info */}
        <div className="flex justify-between items-start mb-8 md:mb-12 opacity-60 text-[10px] md:text-sm font-mono tracking-widest uppercase border-b border-white/10 pb-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            São Paulo, Brasil <br />
            Est. 2024
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-right flex flex-col items-end">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Aceitando Projetos</span>
             </div>
             <span className="mt-1 text-xs opacity-50">Agenda Out/Nov</span>
          </motion.div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-bold text-white leading-[0.9] tracking-tighter mb-8 md:mb-12 text-center lg:text-left"
              style={{ fontSize: 'clamp(3.5rem, 12vw, 8rem)' }}
            >
              SITES QUE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-gray-400">
                VENDEM
              </span> <br />
              AUTORIDADE.
            </motion.h1>

            {/* MOBILE ONLY IMAGE - REDESIGNED */}
            <div className="lg:hidden w-full mb-12 flex justify-center relative">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-violet-900/10 ring-1 ring-white/10"
                 >
                     <img 
                      src="https://i.ibb.co/HD0dnB7z/ESSEEEEEEEEE.png" 
                      alt="Italo Lima" 
                      width="320"
                      height="426"
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-full object-cover grayscale"
                    />
                    
                    {/* Mobile Badge Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/5 flex items-center justify-between">
                        <div>
                            <p className="text-white font-bold text-sm">Italo Lima</p>
                            <p className="text-gray-300 text-[10px] uppercase tracking-wider">Founder</p>
                        </div>
                         <div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center text-black">
                            <Star size={10} className="fill-black" />
                        </div>
                    </div>
                 </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-xl mx-auto lg:mx-0"
            >
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10 text-center lg:text-left">
                Eu sou <strong className="text-white font-medium">Italo Lima</strong>. Transformo negócios em marcas digitais premium através de design estratégico e desenvolvimento de alta performance.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start sm:justify-center lg:justify-start gap-6">
                <a 
                  href="#projects" 
                  className="w-full sm:w-auto group relative h-14 px-8 rounded-full bg-white text-black font-bold flex items-center justify-center gap-3 overflow-hidden transition-all hover:pr-10"
                >
                  <span className="relative z-10">Ver Projetos</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-violet-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </a>
                
                <a href="#contact" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                   <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                      <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                   </div>
                   <span className="text-sm font-medium uppercase tracking-wide">Vamos Conversar</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Strategic Photo (DESKTOP ONLY) */}
          <div className="hidden lg:flex lg:col-span-5 order-2 relative justify-end">
             <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.1 }}
                className="relative w-full max-w-[400px] lg:max-w-full aspect-[3/4] rounded-2xl overflow-hidden group"
             >
                <img 
                  src="https://i.ibb.co/HD0dnB7z/ESSEEEEEEEEE.png" 
                  alt="Italo Lima - Web Designer" 
                  width="500"
                  height="667"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                />
                
                {/* Overlays for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-violet-900/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between group-hover:bg-white/10 transition-colors">
                    <div>
                        <p className="text-white font-bold text-sm">Italo Lima</p>
                        <p className="text-gray-400 text-xs font-mono uppercase tracking-wider">Founder & Art Director</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-black">
                        <Star size={14} className="fill-black" />
                    </div>
                </div>
             </motion.div>
             
             {/* Glow Behind Image */}
             <div className="absolute -inset-4 bg-violet-600/20 rounded-[2rem] blur-2xl -z-10 opacity-0 lg:opacity-100 animate-pulse-slow pointer-events-none" />
          </div>

        </div>
      </div>
      
      {/* Decorative Bottom Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  );
};

export default Hero;