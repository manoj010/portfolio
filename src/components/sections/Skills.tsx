import { motion } from 'framer-motion';
import { Database, Terminal, Wrench, Rocket } from 'lucide-react';
import { Card } from '../ui/Card';

const skills = {
  backend: ['Laravel', 'PHP', 'PostgreSQL', 'MySQL'],
  frontend: ['React', 'TypeScript', 'Tailwind CSS'],
  tools: ['Git / GitHub', 'Postman', 'Docker Basics'],
};

export const Skills = () => {
  return (
    <section id="skills" className="py-48 bg-surface">
      <div className="content-container flex flex-col gap-12">
        <div className="flex justify-between items-end">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Technical Arsenal
          </motion.h2>
          <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold opacity-60">Always Evolving</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
          {/* Backend Card */}
          <Card className="md:col-span-2 md:row-span-1 flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-surface-container-low rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500">
                <Database className="w-8 h-8" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Core Foundation</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map(skill => (
                  <span key={skill} className="px-4 py-1.5 bg-surface-container-low rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Frontend Card */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="md:col-span-2 md:row-span-1 bg-primary text-on-primary p-10 rounded-[2rem] flex flex-col justify-between shadow-xl shadow-primary/10"
          >
            <div className="flex justify-between items-start">
              <Terminal className="w-10 h-10 opacity-80" />
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Visual Systems</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map(skill => (
                  <span key={skill} className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools Card */}
          <Card className="md:col-span-1 md:row-span-1 bg-surface-container-low border-none flex flex-col justify-between p-8">
            <Wrench className="w-8 h-8 text-secondary" />
            <div>
              <h3 className="text-xl font-bold mb-3">Tools</h3>
              <ul className="text-sm text-on-surface-variant flex flex-col gap-2">
                {skills.tools.map(tool => (
                  <li key={tool} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/30" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Learning Card */}
          <Card className="md:col-span-3 md:row-span-1 bg-surface-container-highest border-none overflow-hidden relative group p-10">
            <div className="relative z-10 flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold mb-3">Learning & Growth</h3>
              <p className="text-on-surface-variant max-w-md leading-relaxed">
                Currently deep-diving into SaaS architecture and advanced system performance 
                using Full-stack React frameworks.
              </p>
              <div className="mt-6 flex gap-6">
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Next.js
                </span>
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  Microservices
                </span>
              </div>
            </div>
            <Rocket className="absolute right-8 bottom-8 w-48 h-48 text-on-surface/5 -rotate-12 group-hover:scale-110 group-hover:-translate-y-4 group-hover:rotate-0 transition-all duration-1000" />
          </Card>
        </div>
      </div>
    </section>
  );
};
