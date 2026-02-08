import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Depois do site do Italo, começamos a receber contatos qualificados toda semana. O design elevou o nível da nossa marca.",
    author: "Ricardo Mendes",
    role: "Diretor da Mendes Engenharia"
  },
  {
    quote: "O melhor investimento que fizemos no ano. O site é rápido, lindo e funciona perfeitamente no celular. Recomendo demais.",
    author: "Ana Clara",
    role: "Fundadora, Estética Clara"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#0f0f0f] p-8 md:p-10 rounded-3xl border border-white/5 relative"
            >
              <Quote className="text-violet-900/50 absolute top-8 right-8" size={48} />
              <p className="text-lg text-gray-200 mb-6 relative z-10 font-light italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
                <div>
                  <h4 className="font-bold text-white">{item.author}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;