import { motion } from 'framer-motion';
import { CheckCircle, Zap, ShieldCheck } from 'lucide-react';
import { Card } from '../ui/Card';

const experiences = [
  {
    company: 'MIDAS Technologies',
    role: 'Software Developer (Backend Specialist)',
    period: 'Present',
    description: 'Leading the development of mission-critical reporting systems and backend architectures. Focused on transforming complex business logic into efficient, maintainable software.',
    achievements: [
      'Optimized database queries in PostgreSQL, reducing report generation time by 40%.',
      'Built a custom Laravel dashboard for internal financial auditing.',
      'Mentored junior devs on clean coding standards and REST API design.',
    ],
    impact: [
      { label: 'System Scaling', icon: Zap },
      { label: 'Data Integrity', icon: ShieldCheck },
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-48 bg-surface-container-low">
      <div className="content-container">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight"
          >
            Professional Journey
          </motion.h2>
          <div className="h-1 w-20 bg-primary mt-6" />
        </div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-0 overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-700">
              <div className="p-10 md:p-12">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-12">
                  <div>
                    <h3 className="text-3xl font-bold text-on-surface mb-2">{exp.company}</h3>
                    <p className="text-primary font-bold tracking-tight text-lg">{exp.role}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="px-5 py-2 bg-surface-container rounded-full text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-on-surface-variant text-lg leading-relaxed font-light">
                      {exp.description}
                    </p>
                    <ul className="space-y-4">
                      {exp.achievements.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4 text-on-surface-variant"
                        >
                          <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                          <span className="text-base">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-surface-container/50 p-8 rounded-[2rem] border border-white/20">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-8 opacity-40">Impact Focus</p>
                    <div className="flex flex-col gap-6">
                      {exp.impact.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-bold tracking-tight">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
