import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 text-center text-gray-600 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Web Desenrola. Todos os direitos reservados.</p>
        <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
            <span className="cursor-pointer hover:text-white transition-colors">LinkedIn</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;