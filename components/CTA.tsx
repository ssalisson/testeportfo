import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-[#050505] min-h-[80vh] flex flex-col justify-between border-t border-white/5">
        
        <div className="max-w-[1400px] mx-auto w-full flex-grow flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <p className="text-violet-400 font-mono text-sm uppercase tracking-widest mb-6">Comece um Projeto</p>
                
                <h2 className="text-[12vw] font-display font-bold text-white leading-[0.85] tracking-tighter mb-12 hover:text-gray-200 transition-colors cursor-default">
                    VAMOS <br/>
                    CONVERSAR?
                </h2>
                
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <a 
                        href="https://wa.me/"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center gap-4 bg-white text-black px-10 py-6 rounded-full text-xl font-bold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                    >
                        <span>Iniciar Conversa</span>
                        <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                    
                    <span className="text-gray-500 text-sm max-w-xs leading-relaxed">
                        Respondo em até 24h. <br/>
                        Agenda aberta para projetos de alto impacto.
                    </span>
                </div>
            </motion.div>
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full pt-20 flex flex-col md:flex-row justify-between items-end border-t border-white/10 mt-20">
             <div className="text-gray-600 text-sm mb-4 md:mb-0">
                &copy; 2024 Web Desenrola.
             </div>
             <div className="flex gap-8 text-sm font-mono uppercase tracking-wider text-gray-500">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Behance</a>
             </div>
        </div>
    </section>
  );
};

export default CTA;