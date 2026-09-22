import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import budgetBuddyImage from '../../assets/budgetbuddy-project.png';
import budgetBuddyFlutterImage from '../../assets/budgetbuddy-flutter-project.png';
import minilinksImage from '../../assets/minilinks-project.png';
import nepseNotifierImage from '../../assets/nepse-notifier-project.png';
import projectXImage from '../../assets/project-x-project.png';

const projects = [
  {
    title: 'Project X',
    category: 'Developer Workspace',
    description: 'A private Supabase-backed workspace for Markdown notes, reusable snippets, encrypted secrets, recovery tools, and portable backups.',
    image: projectXImage,
    tags: ['React', 'Supabase', 'TypeScript'],
    link: 'https://github.com/manoj010/Project-X',
    liveLink: 'https://project-x-lake-phi.vercel.app/'
  },
  {
    title: 'BudgetBuddy Flutter',
    category: 'Mobile Finance App',
    description: 'A local-first Flutter Android expense tracker with budgets, savings goals, recurring reminders, reports, and SQLite storage.',
    image: budgetBuddyFlutterImage,
    tags: ['Flutter', 'Dart', 'SQLite'],
    link: 'https://github.com/manoj010/BudgetBuddy-Flutter',
    downloadLink: 'https://github.com/manoj010/BudgetBuddy-Flutter/releases/download/v1.0.0/BudgetBuddy.apk'
  },
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
    link: 'https://github.com/manoj010/minilinks.git',
    liveLink: 'https://minilinks-two.vercel.app'
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
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: 'previous' | 'next') => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const cardWidth = carousel.querySelector<HTMLElement>('[data-project-card]')?.offsetWidth ?? 320;
    const gap = 40;

    carousel.scrollBy({
      left: direction === 'next' ? cardWidth + gap : -(cardWidth + gap),
      behavior: 'smooth',
    });
  };

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

        <div className="-mx-6 flex items-start gap-4 md:-mx-12 lg:-mx-24">
          <button
            type="button"
            onClick={() => scrollProjects('previous')}
            className="mt-[18vw] hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container-lowest text-on-surface-variant shadow-lg shadow-on-surface/5 transition-all hover:-translate-x-0.5 hover:bg-surface-container-low hover:text-on-surface sm:inline-flex md:mt-[13vw] lg:mt-32"
            aria-label="Show previous projects"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={carouselRef}
            className="flex min-w-0 flex-1 snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-6 pb-8 md:gap-10 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Featured projects carousel"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                data-project-card
                className="group flex min-w-[86%] snap-start flex-col gap-6 md:min-w-[46%] md:gap-8 lg:min-w-[31%]"
              >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-surface-container-low shadow-sm transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(43,52,55,0.12)] border border-white/50">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="block h-full w-full"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </a>
                <div className="absolute inset-0 bg-primary/20 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="flex flex-wrap items-center justify-center gap-3 translate-y-4 lg:group-hover:translate-y-0 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 delay-100">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 font-headline text-sm font-semibold text-on-primary shadow-2xl shadow-primary/10"
                    >
                      View on GitHub
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-surface px-6 py-2.5 font-headline text-sm font-semibold text-on-surface shadow-2xl"
                      >
                        Live Link
                      </a>
                    )}
                    {project.downloadLink && (
                      <a
                        href={project.downloadLink}
                        className="inline-flex items-center justify-center rounded-full bg-surface px-6 py-2.5 font-headline text-sm font-semibold text-on-surface shadow-2xl"
                      >
                        Download APK
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
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

                <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant transition-colors hover:text-primary"
                  >
                    View on GitHub
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary transition-colors hover:text-on-surface"
                    >
                      Live Link
                    </a>
                  )}
                  {project.downloadLink && (
                    <a
                      href={project.downloadLink}
                      className="text-primary transition-colors hover:text-on-surface"
                    >
                      Download APK
                    </a>
                  )}
                </div>
                
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

          <button
            type="button"
            onClick={() => scrollProjects('next')}
            className="mt-[18vw] hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container-lowest text-on-surface-variant shadow-lg shadow-on-surface/5 transition-all hover:translate-x-0.5 hover:bg-surface-container-low hover:text-on-surface sm:inline-flex md:mt-[13vw] lg:mt-32"
            aria-label="Show next projects"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
