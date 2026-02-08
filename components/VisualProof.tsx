import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  size: 'large' | 'small';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Clínica Vida Plena",
    category: "Saúde & Bem-estar",
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 2,
    title: "Urban Architecture",
    category: "Portfolio Corporativo",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    title: "Summit Eventos",
    category: "Landing Page",
    year: "2024",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 4,
    title: "Neon Fintech",
    category: "App & Tech",
    year: "2024",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    size: "large"
  }
];

const VisualProof: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-white/10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-8xl font-display font-medium text-white tracking-tighter"
          >
            TRABALHOS
          </motion.h2>
          
          <div className="flex items-center gap-4 text-sm font-mono text-gray-500 uppercase tracking-widest mt-6 md:mt-0">
             <span>( Seleção 2023 — 2024 )</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group cursor-pointer flex flex-col ${project.size === 'large' ? 'md:col-span-2' : ''}`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden w-full bg-gray-900 mb-8 rounded-sm">
                <div className={`w-full ${project.size === 'large' ? 'aspect-[21/9]' : 'aspect-[4/3]'} overflow-hidden`}>
                     <img 
                        src={project.image} 
                        alt={project.title}
                        width={project.size === 'large' ? 1200 : 800}
                        height={project.size === 'large' ? 514 : 600}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                </div>
                
                {/* Overlay Flash */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
              </div>

              {/* Meta Info */}
              <div className="flex justify-between items-end border-t border-white/10 pt-4 group-hover:border-white/30 transition-colors duration-500">
                <div>
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-1">{project.title}</h3>
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-wider">{project.category}</p>
                </div>
                
                <div className="flex items-center gap-4">
                    <span className="text-gray-600 font-mono text-xs">{project.year}</span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-transparent group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <ArrowUpRight size={18} />
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 flex justify-center">
            <a href="#contact" className="text-sm font-mono text-gray-400 hover:text-white uppercase tracking-widest border-b border-gray-800 hover:border-white pb-1 transition-all">
                Ver Arquivo Completo
            </a>
        </div>
      </div>
    </section>
  );
};

export default VisualProof;