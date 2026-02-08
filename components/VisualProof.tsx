import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  result: string;
  image: string;
  span: string; // Para layout grid assimétrico
}

const projects: Project[] = [
  {
    id: 1,
    title: "Clínica Vida Plena",
    category: "Site Institucional",
    result: "+40% Agendamentos",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-2"
  },
  {
    id: 2,
    title: "Neon Bank App",
    category: "Landing Page Fintech",
    result: "Branding Premium",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-1"
  },
  {
    id: 3,
    title: "Summit Eventos",
    category: "Página de Vendas",
    result: "Alta Conversão",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-1"
  },
  {
    id: 4,
    title: "Urban Architecture",
    category: "Portfolio Corporativo",
    result: "Autoridade Visual",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-2"
  }
];

const VisualProof: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trabalhos Selecionados</h2>
            <p className="text-gray-400 text-lg">Design que resolve problemas de negócio.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative cursor-pointer rounded-3xl overflow-hidden bg-gray-900 border border-white/5 aspect-[4/3] md:aspect-auto md:h-[400px] ${project.span}`}
            >
              {/* Image with Zoom Effect */}
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                    <div>
                        <div className="inline-block px-3 py-1 mb-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold tracking-wider text-violet-300 uppercase">
                            {project.result}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-gray-400 text-sm">{project.category}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                        <ArrowUpRight size={20} />
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