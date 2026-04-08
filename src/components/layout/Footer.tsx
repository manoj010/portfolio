import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { Button } from '../ui/Button';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-48 bg-surface-container-low px-6">
      <div className="content-container text-center flex flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary font-bold">Available for Work</span>
          <h2 className="text-3xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Let's build something <span className="text-primary italic">enduring</span>.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed"
        >
          I'm currently open to new opportunities or interesting project collaborations.
          If you value structured code and premium results, let's talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 w-full max-w-2xl pt-8"
        >
          <Button
            className="flex-1 py-8 md:py-10 rounded-[1.5rem] flex items-center justify-center gap-4 text-lg md:text-xl"
            onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=manoj.ale2002@gmail.com', '_blank')}
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
            Email Me
          </Button>

          <div className="flex-1 flex gap-4">
            <a
              href="https://www.linkedin.com/in/manoj-ale/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-surface-container-highest text-on-surface rounded-[1.5rem] font-bold py-6 md:py-0 flex flex-col items-center justify-center gap-2 hover:bg-white transition-all shadow-sm hover:shadow-xl"
            >
              <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-xs md:text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/manoj010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-surface-container-highest text-on-surface rounded-[1.5rem] font-bold py-6 md:py-0 flex flex-col items-center justify-center gap-2 hover:bg-white transition-all shadow-sm hover:shadow-xl"
            >
              <GithubIcon className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-xs md:text-sm">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-surface py-16 px-8 border-t border-surface-container-high">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-on-surface-variant font-bold text-center md:text-left">
            © 2026 Manoj. Built with <span className="text-primary">Quiet Authority</span>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/manoj-ale/' },
            { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/manoj010' },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all"
            >
              {social.name}
              <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
