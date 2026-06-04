import { motion } from 'framer-motion';
import { Blocks, CheckCircle, Code2, Database, ShieldCheck, Store, Zap } from 'lucide-react';
import { Card } from '../ui/Card';

const experiences = [
  {
    company: 'Intopros',
    role: 'Software Developer',
    period: 'Present',
    description:
      'Working on custom business systems, Odoo development, CRM workflows, website customization, and ERP-based solutions. Focused on building practical modules that support business operations and automation.',
    achievements: [
      'Developing and customizing Odoo modules for CRM, booking flows, websites, and business workflows.',
      'Working with Python, JavaScript, PostgreSQL, XML views, QWeb, OWL components, and Odoo backend models.',
      'Building custom website sections, forms, dashboards, and business process flows based on client requirements.',
    ],
    impact: [
      { label: 'ERP Customization', icon: Blocks },
      { label: 'Business Automation', icon: Zap },
    ],
  },
  {
    company: "De Artisan's Café",
    role: 'Co-Founder',
    period: 'Dec 2024 - Present',
    description:
      'Started and operated a café business, gaining hands-on experience in business operations, customer handling, branding, digital presence, and daily management.',
    achievements: [
      'Managed café operations, customer service, branding, and daily business activities.',
      'Built digital assets including website pages, QR links, and online customer engagement tools.',
      'Gained practical business experience that strengthened understanding of real-world operational systems.',
    ],
    impact: [
      { label: 'Business Operations', icon: Store },
      { label: 'Digital Presence', icon: Database },
    ],
  },
  {
    company: 'MIDAS Technologies',
    role: 'Software Developer',
    period: 'May 2024 - Oct 2024',
    description:
      'Worked on healthcare, pharmacy, inventory, accounting, and reporting systems using Laravel and PostgreSQL. Focused mainly on backend development, API design, database operations, and business logic implementation.',
    achievements: [
      'Worked on pharmacy and inventory modules with purchase, sales, and reporting features.',
      'Developed accounting-related features including ledgers, vouchers, financial reports, and Excel exports.',
      'Built and maintained Laravel APIs with PostgreSQL, validation, service classes, and structured backend logic.',
    ],
    impact: [
      { label: 'Backend Systems', icon: Code2 },
      { label: 'Data Integrity', icon: ShieldCheck },
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-48 bg-surface-container-low px-6">
      <div className="content-container">
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Professional Journey
          </motion.h2>
          <div className="h-1 w-16 md:w-20 bg-primary mt-4 md:mt-6" />
        </div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-0 overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-700">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 mb-10 md:mb-12">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-2">{exp.company}</h3>
                    <p className="text-primary font-bold tracking-tight text-base md:text-lg">{exp.role}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className="px-4 py-1.5 md:px-5 md:py-2 bg-surface-container rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-light">
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
                          <div className="w-12 h-12 rounded-2xl bg-surface-container-lowest text-primary border border-outline-variant/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
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
