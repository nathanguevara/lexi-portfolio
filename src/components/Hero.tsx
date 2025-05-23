import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white dark:bg-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-950/30 dark:to-neutral-900/30 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6">
              Hi, I'm Alexandra. <br />
              I create <span className="text-primary-600 dark:text-primary-400">educational</span> experiences.
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
              Instructional designer specializing in video production, technical writing, and e-learning development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/projects" 
                className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium px-6 py-3 rounded-lg inline-flex items-center justify-center transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-100"
              >
                View My Work
                <ChevronRight className="ml-1 h-5 w-5" />
              </a>
              <a 
                href="/contact" 
                className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 font-medium px-6 py-3 rounded-lg inline-flex items-center justify-center transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block fade-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg" 
                alt="Alexandra Scarpello" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-2/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
              <img 
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg" 
                alt="Video production work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;