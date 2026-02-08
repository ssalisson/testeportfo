import React from 'react';
import { motion } from 'framer-motion';

const Differential: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-neutral-900 border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight"
        >
          "Seu site não pode <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">parecer barato."</span>
        </motion.h2>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
        >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              Hoje, seu site é sua vitrine principal. Um site mal feito custa caro: ele custa a confiança do seu cliente.
            </p>
            <p className="text-lg md:text-xl text-gray-500 mt-6 leading-relaxed">
              Eu construo experiências digitais que passam autoridade imediata e transformam visitas casuais em clientes fiéis. Não é apenas código, é estratégia de negócios.
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Differential;