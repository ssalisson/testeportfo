import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden flex items-center justify-center">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
            >
                Vamos criar seu <br/> próximo site?
            </motion.h2>
            
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-xl mb-12"
            >
                Não deixe dinheiro na mesa com um site antigo.
            </motion.p>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
            >
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-[#25D366] rounded-full hover:bg-[#22c55e] shadow-[0_0_40px_-10px_rgba(37,211,102,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,211,102,0.7)]">
                    <MessageCircle size={24} className="fill-white stroke-none" />
                    Chamar no WhatsApp
                </a>
            </motion.div>
        </div>
    </section>
  );
};

export default CTA;