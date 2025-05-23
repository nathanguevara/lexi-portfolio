import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  summary: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, summary, image, tags }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-neutral-200 dark:border-neutral-700 transition-all hover:-translate-y-1 group">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{summary}</p>
        
        <a 
          href={`/projects/${id}`}
          className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
        >
          View Project <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;