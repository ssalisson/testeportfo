import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden px-6 pt-24 pb-12">
      
      {/* Background Texture - Minimal Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-center">
        
        {/* Coluna de Texto (Dominante) */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-20 pt-8 lg:pt-0 order-2 lg:order-1">
            
            {/* Signature Tag - Minimalista */}
            <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 mb-8 lg:mb-10 pl-1"
            >
                <div className="h-[1px] w-8 bg-violet-500/50" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500">
                    Italo Lima — Independent
                </span>
            </motion.div>

            {/* Main Headline - Hierarquia Editorial */}
            <h1 className="font-display font-medium tracking-tighter leading-[0.85] text-white mix-blend-exclusion mb-8">
                <div className="overflow-hidden">
                    <motion.span 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="block text-4xl md:text-5xl lg:text-[4.5rem] text-gray-400 font-light mb-2 lg:mb-4 tracking-tight"
                    >
                        Design que
                    </motion.span>
                </div>
                
                <div className="overflow-hidden">
                    <motion.span 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="block text-[13vw] lg:text-[9rem] uppercase text-white font-bold ml-[-0.05em]"
                    >
                        CONSTRÓI
                    </motion.span>
                </div>

                <div className="overflow-hidden relative">
                     <motion.span 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="block text-[13vw] lg:text-[9rem] uppercase text-gray-600 font-light ml-[-0.05em]"
                    >
                        AUTORIDADE.
                    </motion.span>
                </div>
            </h1>

            {/* Personal Manifesto */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="mt-4 lg:mt-8 max-w-md pl-1"
            >
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                    Interfaces que não apenas impressionam, mas convertem. 
                    Sem intermediários ou burocracia de agência. Apenas <span className="text-white border-b border-white/20">estratégia visual</span> direta da fonte.
                </p>
                
                <div className="flex flex-wrap gap-8 items-center">
                    <a href="#projects" className="group flex items-center gap-3 text-white">
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <ArrowDownRight size={18} />
                        </div>
                        <span className="text-xs font-mono uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                            Portfolio Select
                        </span>
                    </a>
                </div>
            </motion.div>
        </div>

        {/* Coluna de Imagem - Integração Fluida */}
        <div className="lg:col-span-5 relative h-[55vh] lg:h-[90vh] flex items-end lg:items-center justify-center order-1 lg:order-2 lg:-mr-12">
            <motion.div 
                initial={{ opacity: 0, filter: "blur(15px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full"
            >
                 {/* Imagem com crop mais fechado e posicionado */}
                 <img 
                    src="https://i.ibb.co/SwHFYdC9/Air-Brush-20260208163021-jpg.jpg" 
                    alt="Italo Lima Portrait" 
                    className="w-full h-full object-cover object-[center_25%] grayscale contrast-[1.1] brightness-[0.8] lg:brightness-[0.9] lg:mask-image-linear-gradient"
                 />
                 
                 {/* Gradient masking for seamless blend */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent lg:via-transparent" />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-80 lg:opacity-100" />
                 
                 {/* Floating Signature - Real Designer Tag */}
                 <div className="absolute bottom-4 right-4 lg:bottom-12 lg:right-12 text-right">
                    <div className="flex flex-col items-end gap-1">
                        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">
                            Design & Code
                        </span>
                        <span className="text-white text-sm font-bold tracking-widest border-b border-white/30 pb-1">
                            ITALO LIMA
                        </span>
                    </div>
                 </div>
            </motion.div>
        </div>

      </div>
      
    </section>
  );
};

export default Hero;