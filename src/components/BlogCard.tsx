import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, excerpt, date, image, tags }) => {
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
        <div className="flex items-center text-neutral-600 dark:text-neutral-400 mb-3">
          <Calendar className="w-4 h-4 mr-1" /> 
          <span className="text-sm">{date}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{excerpt}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={`/blog/${id}`}
          className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
        >
          Read Article <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;