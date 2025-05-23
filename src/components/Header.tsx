import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-medium tracking-tight">
            Alexandra Scarpello
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              About
            </a>
            <a 
              href="/projects" 
              className="text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Work
            </a>
            <a 
              href="/contact" 
              className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2 rounded-lg transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-100"
            >
              Contact
            </a>
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
          
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-neutral-900 dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/about" 
                className="text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/projects" 
                className="text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </a>
              <a 
                href="/contact" 
                className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2 rounded-lg inline-block transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;