import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "O site do Italo fez nossa empresa parecer 10x maior. Clientes elogiam a experiência toda semana.",
      name: "Ricardo Mendes",
      company: "Diretor, Mendes Engenharia"
    },
    {
      text: "Investimento que se pagou no primeiro mês. A landing page converte muito mais que a anterior.",
      name: "Ana Clara",
      company: "Fundadora, Clara Estética"
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#0A0A0A] p-10 rounded-3xl border border-white/5 relative group hover:border-white/10 transition-colors"
            >
              <Quote className="text-violet-900/50 absolute top-10 right-10 group-hover:text-violet-800/50 transition-colors" size={60} />
              <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-gray-200 font-serif italic mb-8 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10" />
                    <div>
                      <h4 className="font-bold text-white">{review.name}</h4>
                      <p className="text-sm text-violet-400">{review.company}</p>
                    </div>
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