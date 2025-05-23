import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const FeaturedProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Ship Tip Series - ShipStation University",
      description: "'Ship Tip' video series aims to provide users with a quick overview of a product or feature. Over 50 videos in this series help merchants expedite their warehouse shipping process.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
      tags: ["Video Production", "E-Learning", "Technical Writing"]
    },
    {
      id: 2,
      title: "ShipStation Certification Program",
      description: "A multi-tier Certification program for internal and external use that blends mixed media for an accessible professional certification experience.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      tags: ["Certification", "Mixed Media", "Training"]
    },
    {
      id: 3,
      title: "Muck Rack Help Center",
      description: "A completely revamped Help Center, built from bare bones external education and making the most out of an extremely simplified Help Center authoring tool.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      tags: ["Technical Writing", "UX Design", "Documentation"]
    }
  ];

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Featured Work</h2>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            A selection of my recent instructional design and educational content projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>
                
                <a 
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="/projects"
            className="inline-flex items-center bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 font-medium px-6 py-3 rounded-lg transition-colors"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;