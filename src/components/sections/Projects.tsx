import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import budgetBuddyImage from '../../assets/budgetbuddy-project.png';
import minilinksImage from '../../assets/minilinks-project.png';
import nepseNotifierImage from '../../assets/nepse-notifier-project.png';

const projects = [
  {
    title: 'BudgetBuddy',
    category: 'Full-stack Application',
    description: 'A comprehensive personal finance tracker with automated categorization and insight reports. Built with Laravel and React.',
    image: budgetBuddyImage,
    tags: ['Laravel', 'PostgreSQL', 'React'],
    link: 'https://github.com/manoj010/Budget-Buddy.git'
  },
  {
    title: 'Minilinks',
    category: 'Link Management Tool',
    description: 'A compact URL shortener and link management dashboard for creating short links, tracking clicks, and sharing links quickly.',
    image: minilinksImage,
    tags: ['React', 'Python', 'Dashboard'],
    link: 'https://github.com/manoj010/minilinks.git'
  },
  {
    title: 'NEPSE Index Notifier',
    category: 'Python Automation',
    description: 'A Python desktop notifier that monitors the NEPSE Index in near real time with Selenium-powered scraping and system alerts.',
    image: nepseNotifierImage,
    tags: ['Python', 'Selenium', 'BeautifulSoup'],
    link: 'https://github.com/manoj010/Nepse-Notifier.git'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-48 bg-surface px-6">
      <div className="content-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            >
              Featured Work
            </motion.h2>
            <p className="text-on-surface-variant max-w-md text-base md:text-lg font-light">
              A selection of projects where technical rigor meets user-centered design.
            </p>
          </div>
          
          <motion.a 
            href="https://github.com/manoj010"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all"
          >
            View All on GitHub 
            <GithubIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex flex-col gap-6 md:gap-8"
            >
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-surface-container-low shadow-sm transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(43,52,55,0.12)] border border-white/50 block"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                  <span className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 font-headline text-sm font-semibold text-on-primary shadow-2xl shadow-primary/10 translate-y-4 lg:group-hover:translate-y-0 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 delay-100">
                    View on GitHub
                  </span>
                </div>
              </a>
              
              <div className="flex flex-col gap-4 px-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ExternalLink className="w-5 h-5 text-on-surface-variant opacity-60 lg:opacity-40 lg:group-hover:opacity-100 lg:group-hover:text-primary transition-all" />
                  </a>
                </div>
                
                <p className="text-on-surface-variant text-sm leading-relaxed font-light line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-surface-container-low rounded-lg border border-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
