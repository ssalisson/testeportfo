import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import VisualProof from './components/VisualProof';
import Results from './components/Results';
import Services from './components/Services';
import Differential from './components/Differential';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false); // New state for background detection
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  // Detect Mobile for conditional animations
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 50;
    if (scrolled !== isScrolled) setIsScrolled(scrolled);

    // Dynamic contrast detection for the Differential section (white background)
    const diffSection = document.getElementById('differential');
    if (diffSection) {
      const rect = diffSection.getBoundingClientRect();
      // Check if navbar (approx top 100px) is overlapping with the section
      // We add a small buffer so it switches exactly when entering
      const isOver = rect.top <= 80 && rect.bottom >= 80;
      if (isOver !== isLightSection) setIsLightSection(isOver);
    }
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Dynamic Styles based on background
  const navBgClass = isScrolled 
    ? (isLightSection ? 'bg-black/5 backdrop-blur-md border border-black/5 shadow-lg shadow-black/5' : 'bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50') 
    : 'bg-transparent';
    
  const textColorClass = isLightSection ? 'text-black' : 'text-white';
  const logoDotColor = isLightSection ? 'text-violet-600' : 'text-violet-500';
  
  const buttonClass = isScrolled
    ? (isLightSection 
        ? 'bg-black text-white hover:bg-gray-800' // Dark button on light bg
        : 'bg-white text-black hover:bg-gray-200') // White button on dark bg
    : (isLightSection 
        ? 'bg-black text-white shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:scale-105' 
        : 'bg-white text-black hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]');

  const iconFill = isLightSection ? 'fill-white' : 'fill-black'; // Button icon color inverted relative to button bg

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-violet-500 selection:text-white overflow-hidden font-sans">
      {/* Background Ambient Glow - Reduced opacity for performance */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-900/10 rounded-full blur-[100px] opacity-20" />
      </div>

      {/* Navbar Floating Island Style */}
      <header className={`fixed top-0 left-0 right-0 z-[60] flex justify-center transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-6'}`}>
        <motion.div 
            initial={false}
            animate={{ 
                width: isMobile ? "94%" : (isScrolled ? "fit-content" : "90%"), // Mobile always fixed width to avoid jitter
                maxWidth: isMobile ? "100%" : (isScrolled ? "400px" : "1400px"),
                padding: isScrolled ? "0.5rem 0.75rem" : "0rem"
            }}
            className={`flex items-center justify-between overflow-hidden transition-colors duration-500 ${navBgClass} ${isScrolled ? 'gap-2 md:gap-4 pl-4 md:pl-6 pr-1 md:pr-0 rounded-full' : 'w-[94%] md:w-[90%]'}`}
        >
            {/* Logo */}
            <div className={`flex items-center gap-2 flex-shrink-0`}>
                <span className={`font-bold tracking-tight whitespace-nowrap transition-colors duration-500 ${textColorClass} ${isScrolled ? 'text-sm' : 'text-base md:text-xl'}`}>
                    Web Desenrola<span className={`${logoDotColor}`}>.</span>
                </span>
            </div>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chamar no WhatsApp"
                className={`flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${buttonClass}
                  ${isScrolled 
                    ? 'px-2 py-2 md:px-4 md:py-2 text-[10px]' 
                    : 'w-10 h-10 md:w-auto md:h-auto flex items-center justify-center md:px-6 md:py-3 text-[10px] md:text-xs'}
                `}
                >
                <MessageCircle size={isScrolled ? 16 : 18} className={`${isLightSection && !isScrolled ? 'fill-white' : (isLightSection ? 'fill-white' : 'fill-black')}`} />
                {/* Texto escondido no mobile para limpar o visual e corrigir o bug */}
                <span className="hidden md:block">{isScrolled ? 'WhatsApp' : 'Chamar no WhatsApp'}</span>
                </a>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`md:hidden p-2 rounded-full transition-colors flex items-center justify-center w-10 h-10 ${isLightSection ? 'text-black hover:bg-black/10' : 'text-white hover:bg-white/10'}`}
                    aria-label="Menu"
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
        </motion.div>
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-[#050505] pt-32 px-6 md:hidden flex flex-col gap-8"
            >
                <button onClick={() => scrollToSection('projects')} className="text-4xl font-display font-bold text-white text-left">Projetos</button>
                <button onClick={() => scrollToSection('services')} className="text-4xl font-display font-bold text-white text-left">Serviços</button>
                <button onClick={() => scrollToSection('differential')} className="text-4xl font-display font-bold text-white text-left">Método</button>
                
                <div className="h-px bg-white/10 w-full my-4" />
                
                <a href="https://wa.me/5511999999999" className="flex items-center gap-3 text-xl text-violet-400 font-mono">
                    <span>WhatsApp Direct</span>
                    <ArrowUpRight size={20} />
                </a>
                
                 {/* Close button inside menu for clarity */}
                <div className="absolute top-6 right-6">
                     <button 
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white p-2 rounded-full hover:bg-white/10"
                    >
                        <X size={24} />
                    </button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <VisualProof />
        <Results />
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