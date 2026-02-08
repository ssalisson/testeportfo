import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Layout, Smartphone } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Layout,
      title: "Sites que geram Confiança",
      description: "Design profissional que posiciona sua marca como líder do mercado instantaneamente."
    },
    {
      icon: Zap,
      title: "Landing Pages de Venda",
      description: "Estruturas otimizadas com copy e design focados em transformar visitantes em leads."
    },
    {
      icon: Smartphone,
      title: "Perfeito no Celular",
      description: "Seu site vai funcionar incrivelmente bem onde 80% dos seus clientes estão: no mobile."
    },
    {
      icon: CheckCircle2,
      title: "Otimizado para Google (SEO)",
      description: "Desenvolvimento técnico para ajudar sua empresa a ser encontrada nas pesquisas."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Como eu ajudo seu negócio</h2>
          <div className="h-1 w-20 bg-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-violet-500/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 text-violet-400">
                <service.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;