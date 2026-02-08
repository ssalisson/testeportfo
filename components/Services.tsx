import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

const services = [
    {
      id: "01",
      title: "Design de Interface",
      description: "Sites que capturam a essência da marca e prendem a atenção. Foco visual extremo.",
      tags: ["UI Design", "Direção de Arte", "Design System"]
    },
    {
      id: "02",
      title: "Desenvolvimento Web",
      description: "Código limpo, animações fluidas e performance máxima. React, Next.js e Tailwind.",
      tags: ["Frontend", "Interações", "CMS"]
    },
    {
      id: "03",
      title: "Landing Pages",
      description: "Estruturas de alta conversão projetadas para vender. Otimização de funil.",
      tags: ["Copywriting", "CRO", "Vendas"]
    },
    {
      id: "04",
      title: "SEO & Performance",
      description: "Seu site encontrado pelo Google e carregando instantaneamente.",
      tags: ["Core Web Vitals", "Analytics", "Ranking"]
    }
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <h2 className="text-gray-500 font-mono text-sm uppercase tracking-widest mb-4 md:mb-0">
                ( O que eu faço )
            </h2>
            <div className="max-w-xl">
                 <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                    Ajudo marcas ambiciosas a definir sua presença digital através de <span className="text-violet-400">design estratégico</span> e tecnologia.
                 </p>
            </div>
        </div>

        <div className="flex flex-col">
            {services.map((service, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative border-t border-white/10 py-12 md:py-16 transition-colors duration-500 hover:bg-white/[0.02]"
                >
                    <div className="flex flex-col md:flex-row md:items-baseline gap-8 md:gap-0">
                        {/* ID */}
                        <span className="text-gray-600 font-mono text-sm md:w-1/12">/{service.id}</span>
                        
                        {/* Title */}
                        <h3 className="text-3xl md:text-5xl font-display font-medium text-white md:w-5/12 group-hover:translate-x-4 transition-transform duration-500 ease-out">
                            {service.title}
                        </h3>

                        {/* Description Reveal */}
                        <div className="md:w-5/12 flex flex-col gap-6">
                            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                {service.tags.map(tag => (
                                    <span key={tag} className="text-xs border border-white/20 px-3 py-1 rounded-full text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Icon */}
                        <div className="md:w-1/12 flex justify-end">
                             <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'bg-white text-black rotate-45' : 'text-gray-500'}`}>
                                <ArrowRight size={20} />
                             </div>
                        </div>
                    </div>
                </motion.div>
            ))}
            <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Services;