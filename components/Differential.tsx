import React from 'react';
import { motion } from 'framer-motion';

const Differential: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
        {/* Background Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                    "Seu site não pode <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">parecer barato."</span>
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl mx-auto"
            >
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-8">
                  Hoje, seu site é a vitrine mais importante da sua empresa. <br className="hidden md:block"/> 
                  Um site amador custa caro: ele custa a confiança do seu cliente.
                </p>
                <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-violet-500 to-pink-500">
                    <div className="px-6 py-2 rounded-full bg-black">
                        <span className="text-gray-200 font-medium">Eu crio sites que vendem o valor da sua marca.</span>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Differential;