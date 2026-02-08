import React from 'react';
import Hero from './components/Hero';
import VisualProof from './components/VisualProof';
import Services from './components/Services';
import Differential from './components/Differential';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-violet-500 selection:text-white overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] opacity-30" />
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">Web Desenrola<span className="text-violet-500">.</span></span>
          <a 
            href="#contact" 
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <VisualProof />
        <Services />
        <Differential />
        <Testimonials />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;