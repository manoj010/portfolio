import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-48 bg-surface-container-low">
      <div className="content-container grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          className="md:col-span-4"
        >
          <h2 className="text-4xl font-bold tracking-tight">About My<br/>Development<br/>Mindset.</h2>
        </motion.div>
        
        <div className="md:col-span-8 flex flex-col gap-8">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="text-2xl leading-relaxed text-on-surface-variant font-light"
          >
            I am a developer who values <span className="text-on-surface font-medium italic underline decoration-primary/30 underline-offset-8">reliability over hype</span>. 
            My journey began deep in backend systems, where logic and data integrity define the user experience.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="text-xl leading-relaxed text-on-surface-variant"
          >
            Over time, my curiosity for the full stack led me to craft seamless interfaces that bridge the gap 
            between complex database architectures and intuitive user workflows. I specialize in building 
            tools that solve real business problems, focusing on clean code, scalable reporting, and performance-driven results.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.2, 0, 0, 1] }}
            className="w-24 h-1 bg-primary/20 origin-left mt-4"
          />
        </div>
      </div>
    </section>
  );
};
