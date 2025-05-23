import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-8">
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com" 
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="/contact" 
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Contact"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8 text-center text-neutral-600 dark:text-neutral-400">
            <p>&copy; {new Date().getFullYear()} Alexandra Scarpello. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;