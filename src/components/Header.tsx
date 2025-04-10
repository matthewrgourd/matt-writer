
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Github, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <FileText className="h-6 w-6 text-blue-600 mr-2" />
          <span className="text-xl font-bold font-mono">Matt.Writer</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#portfolio" className="text-slate-700 hover:text-blue-600 transition-colors">
            Portfolio
          </a>
          <a href="#skills" className="text-slate-700 hover:text-blue-600 transition-colors">
            Skills
          </a>
          <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">
            Contact
          </a>
          <Button asChild variant="outline" className="ml-4 flex items-center gap-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-b border-slate-200 px-4 py-4 flex flex-col space-y-4 animate-fade-in">
          <a
            href="#portfolio"
            className="text-slate-700 py-2 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#skills"
            className="text-slate-700 py-2 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#about"
            className="text-slate-700 py-2 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-slate-700 py-2 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button asChild variant="outline" className="flex items-center justify-center gap-2 w-full">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
