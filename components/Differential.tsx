import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Differential: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="differential" className="relative py-40 overflow-hidden bg-white text-[#050505]">
        
        {/* Scrolling Text Background */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full opacity-[0.03] pointer-events-none overflow-hidden whitespace-nowrap">
            <motion.div style={{ x }} className="text-[20vw] font-black leading-none uppercase">
                Premium Design • High Performance • Conversion •
            </motion.div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-20 items-center">
            
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2"
            >
                 <div className="w-20 h-[2px] bg-black mb-8" />
                 <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.95] mb-8">
                    DESIGN NÃO É <br/>
                    SOBRE BELEZA. <br/>
                    É SOBRE <span className="text-violet-600">LUCRO.</span>
                 </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:w-1/2"
            >
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800 mb-8">
                  A maioria dos sites são apenas cartões de visita digitais caros. <br/><br/>
                  Eu construo ecossistemas digitais projetados para posicionar sua empresa como líder de mercado e transformar tráfego em receita.
                </p>
                
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 py-4 border-b border-black/10">
                        <span className="font-mono text-sm">01</span>
                        <span className="text-lg font-medium">Experiência de Usuário Impecável</span>
                    </div>
                    <div className="flex items-center gap-4 py-4 border-b border-black/10">
                        <span className="font-mono text-sm">02</span>
                        <span className="text-lg font-medium">Velocidade Extrema (Core Vitals)</span>
                    </div>
                    <div className="flex items-center gap-4 py-4 border-b border-black/10">
                        <span className="font-mono text-sm">03</span>
                        <span className="text-lg font-medium">Narrativa Visual Coerente</span>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Differential;