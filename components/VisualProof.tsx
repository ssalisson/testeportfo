import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Clínica Vida Plena",
    category: "Site Institucional Médico",
    image: "https://picsum.photos/id/119/800/600",
    color: "from-teal-500/20 to-emerald-500/20"
  },
  {
    id: 2,
    title: "Future Summit 2024",
    category: "Landing Page para Evento",
    image: "https://picsum.photos/id/201/800/600",
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    id: 3,
    title: "Bistro La Ville",
    category: "Site para Negócio Local",
    image: "https://picsum.photos/id/429/800/600",
    color: "from-orange-500/20 to-amber-500/20"
  }
];

const VisualProof: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-violet-400 font-medium tracking-wider text-sm uppercase mb-2 block">Portfolio Selecionado</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Resultados Reais.</h2>
          </motion.div>
          <motion.p 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-gray-400 mt-4 md:mt-0 max-w-xs text-right hidden md:block"
          >
             Projetos desenvolvidos com foco em estética premium e performance de vendas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-900 border border-white/5 shadow-2xl">
                {/* Glow Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />
                
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                />
                
                {/* Floating Content */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                                <p className="text-gray-300 text-sm">{project.category}</p>
                            </div>
                            <div className="bg-white text-black p-2 rounded-full">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>
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

export default VisualProof;