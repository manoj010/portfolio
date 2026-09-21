import { motion } from 'framer-motion';
import { Blocks, Database, Settings2, Terminal, Wrench } from 'lucide-react';
import { Card } from '../ui/Card';

const skills = {
  erp: ['Odoo 18', 'Python', 'XML Views', 'QWeb', 'OWL Components', 'CRM Workflows'],
  backend: ['Laravel', 'PHP', 'PostgreSQL', 'REST APIs', 'Service Classes', 'Validation'],
  frontend: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Website Customization', 'Flutter'],
  systems: ['CRM', 'ERP', 'HMIS', 'Inventory', 'Business Automation'],
  tools: ['Git / GitHub', 'Postman', 'Docker'],
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-48 bg-surface px-6">
      <div className="content-container flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Technical Arsenal
          </motion.h2>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold opacity-60">Always Evolving</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
          {/* Frontend Card */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="md:col-span-2 md:row-span-1 bg-primary text-on-primary p-8 md:p-10 rounded-[2rem] flex flex-col justify-between shadow-xl shadow-primary/10"
          >
            <div className="flex justify-between items-start mb-8">
              <Terminal className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Web Interfaces</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map(skill => (
                    <span key={skill} className="px-3 md:px-4 py-1.5 bg-primary-dim/20 text-on-primary rounded-full text-[10px] md:text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend Card */}
          <Card className="md:col-span-2 md:row-span-1 flex flex-col justify-between group p-8 md:p-10">
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 bg-surface-container-low rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500">
                <Database className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Core Foundation</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map(skill => (
                  <span key={skill} className="px-3 md:px-4 py-1.5 bg-surface-container-low rounded-full text-[10px] md:text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* ERP Card */}
          <Card className="md:col-span-2 md:row-span-1 flex flex-col justify-between group p-8 md:p-10">
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 bg-surface-container-low rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500">
                <Blocks className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">ERP Systems</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Odoo Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.erp.map(skill => (
                  <span key={skill} className="px-3 md:px-4 py-1.5 bg-surface-container-low rounded-full text-[10px] md:text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Business Systems Card */}
          <Card className="md:col-span-1 md:row-span-1 bg-surface-container-low border-none flex flex-col justify-between p-8">
            <Settings2 className="w-8 h-8 text-secondary" />
            <div>
              <h3 className="text-xl font-bold mb-3">Systems</h3>
              <ul className="text-sm text-on-surface-variant flex flex-col gap-2">
                {skills.systems.map(system => (
                  <li key={system} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/30" />
                    {system}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

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
        </div>
      </div>
    </section>
  );
};
