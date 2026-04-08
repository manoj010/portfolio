import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { Button } from '../ui/Button';

const projects = [
  {
    title: 'BudgetBuddy',
    category: 'Full-stack Application',
    description: 'A comprehensive personal finance tracker with automated categorization and insight reports. Built with Laravel and React.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNe5NIgl7pZAHz5pxvaIGismvs3CxBw3Kn-40ftkbvlnATQexuGNaUP7UzgvKo4QMkytW9xKopPbIae22Ja3pYqnMCBdT1nPpg9OmyN3pPsocKC0F4c_QlI4ngGdh5aPUT2GpK-hVHz6BR3b5eiG-7GCtwSlWG7UAVrxsj8YaAv5tGG0ydm459a8B5gwJ5IVkBQeRXXwZ8vIfQsEa6abWKFj-bmzXRTTjmjxerwAFNmXpMO4p9xAsEr1FIHYvFX9gkyHYHaOfE_t62',
    tags: ['Laravel', 'PostgreSQL', 'React'],
    link: '#'
  },
  {
    title: 'Enterprise Portal',
    category: 'Business Dashboard',
    description: 'Scalable management interface for multi-tenant business systems, featuring robust RBAC and activity logging.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClaPe1635HEID-1BRLRhpRzzwSprQmHmQyw0jPZt-hMTG3HrCB1eVbJtHmvIwTKTPEd1ubP2m9JJgzpEl69Tc4vWRz8YKA6yqBuBEhgyg-XCMbbhNGYWmtjfiXCnXaa4apvIZlVYMUu2tUSBS4EH2S76fLAJaKSZtuxSjoGNGH4D093OvQ93FRbkOsilvdAjl6t12RhiT_rm-0suc1Owy3CGHeb98kt5MSvCnw9F4WHzmkiC9bgjUw9F_K85BQygcoN34VfdHeJ5eo',
    tags: ['TypeScript', 'API Design', 'Node.js'],
    link: '#'
  },
  {
    title: 'Insight Engine',
    category: 'Reporting Tool',
    description: 'High-performance data processing engine that exports complex datasets into boardroom-ready visual reports.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW0dSpL684_0_7sOUsxhh6WtcDhl5EZrrNYSqwLxayWfIGf5iUfQZpjdOlVDCGzmLX-LN4agVeucNq9u0UDsWs7PJ8N_9ppSvJyY3i9VV6LzdqVZhqxYQXxChdZkirQ1R7ngN3PewfGBouov1HcQepIWRUpnBKSl69Cw6MZ_1TRk62eOek1y4jwMUaJHEI2oIwm2tb_Se9jG3hNIVuHpH7xYcIXBj5sH_CI4Gsa61rRhj4pMOBXaGxa5cYHHAqAGmhLj9lHdXRFGUG',
    tags: ['PHP', 'AWS Lambda', 'Dashboard'],
    link: '#'
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
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-surface-container-low shadow-sm transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(43,52,55,0.12)] border border-white/50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                  <Button variant="primary" className="shadow-2xl translate-y-4 lg:group-hover:translate-y-0 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 delay-100">
                    Case Study
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 px-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-on-surface-variant opacity-60 lg:opacity-40 lg:group-hover:opacity-100 lg:group-hover:text-primary transition-all" />
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
