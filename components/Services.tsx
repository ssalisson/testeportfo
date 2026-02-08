import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Smartphone, TrendingUp, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: "Sites que geram confiança",
    description: "Layouts profissionais que posicionam sua marca como autoridade no mercado instantaneamente."
  },
  {
    icon: TrendingUp,
    title: "Landing Pages de Alta Conversão",
    description: "Estruturas desenhadas psicologicamente para transformar visitantes em leads e vendas."
  },
  {
    icon: Zap,
    title: "Performance e SEO",
    description: "Tecnologia de ponta para seu site carregar rápido e ser encontrado pelo Google."
  },
  {
    icon: Smartphone,
    title: "Experiência Mobile",
    description: "Design pensado primeiro para o celular, onde a maioria dos seus clientes está."
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <span className="text-pink-500 font-semibold tracking-wider text-sm uppercase mb-3 block">O que eu faço</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Design estratégico para <br/> negócios ambiciosos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-violet-400 group-hover:text-pink-400 transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
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