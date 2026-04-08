import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Download } from 'lucide-react';
import ppImage from '../../assets/pp.jpg';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-surface">
      {/* Decorative Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"
      />
      <motion.div
        style={{ y: y2, rotate }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[150px]"
      />

      <div className="content-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.2, 0, 0, 1], delay: 0.2 }}
          className="flex flex-col gap-6 md:gap-8 items-center text-center lg:items-start lg:text-left"
        >
          {/* Mobile Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:hidden w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4"
          >
            <img src={ppImage} alt="Manoj" className="w-full h-full object-cover" />
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-on-surface-variant font-bold"
            >
              Software Developer
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.95]">
              Manoj<span className="text-primary italic">.</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed font-light">
            Building practical web applications and business-critical tools with precision and a <span className="text-on-surface font-medium italic">quiet authority</span> in technical execution.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <Button 
              className="group gap-2 min-h-[48px] px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="secondary"
              className="group gap-2"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Manoj_Ale_CV.pdf';
                link.download = 'Manoj_Ale_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download CV
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0, 1], delay: 0.4 }}
          className="hidden lg:flex justify-end"
        >
          <div className="relative w-[450px] h-[500px] bg-surface-container-low rounded-[2rem] shadow-2xl overflow-hidden border border-white/50 group">
            <img
              src={ppImage}
              alt="Manoj Portfolio Hero"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-12 left-12"
            >
              <p className="font-headline text-3xl font-bold text-on-surface">Focus on Quality.</p>
              <p className="text-on-surface-variant font-medium">Efficiency by Design</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 sm:opacity-20"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-8 md:h-12 bg-on-surface" />
      </motion.div>
    </section>
  );
};
