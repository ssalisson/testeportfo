import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-pink-600/10 blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
                Vamos criar seu <br/> próximo site?
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg mb-10 max-w-xl mx-auto"
            >
                Não deixe sua empresa perder oportunidades por causa de um site amador. Vamos conversar sobre o seu projeto.
            </motion.p>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
            >
                <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold text-white transition-all duration-300 bg-violet-600 rounded-full hover:bg-violet-500 shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.7)]">
                    <MessageCircle size={24} />
                    Chamar no WhatsApp
                </button>
            </motion.div>
        </div>
    </section>
  );
};

export default CTA;