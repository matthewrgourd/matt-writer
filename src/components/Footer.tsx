
import React from 'react';
import { FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <FileText className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-xl font-bold font-mono">Sarah.Writer</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a href="#portfolio" className="text-slate-300 hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#skills" className="text-slate-300 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Sarah Johnson. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Technical Writer</span>
            <span className="h-1 w-1 rounded-full bg-slate-600"></span>
            <span>Documentation Specialist</span>
            <span className="h-1 w-1 rounded-full bg-slate-600"></span>
            <span>Content Strategist</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
