import React from 'react';
import { motion } from 'framer-motion';

const StatItem = ({ value, label, suffix = "", delay = 0 }: { value: string, label: string, suffix?: string, delay?: number }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className="flex flex-col justify-between h-full p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 last:border-r-0 hover:bg-white/[0.02] transition-colors duration-500"
        >
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">{label}</span>
            <div className="flex items-baseline gap-1">
                <h3 className="text-6xl md:text-7xl font-display font-medium text-white tracking-tighter">
                    {value}
                </h3>
                <span className="text-2xl text-violet-400 font-light">{suffix}</span>
            </div>
        </motion.div>
    )
}

const Results: React.FC = () => {
  return (
    <section className="border-b border-white/5 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <StatItem value="40" suffix="%" label="Aumento em Conversão" delay={0} />
                <StatItem value="10" suffix="dias" label="Entrega Média" delay={0.2} />
                <StatItem value="50" suffix="+" label="Projetos Entregues" delay={0.4} />
            </div>
        </div>
    </section>
  );
};

export default Results;