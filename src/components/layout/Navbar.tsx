import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 md:px-6 transition-all duration-500 pointer-events-none ${isScrolled ? 'py-4' : 'py-6 md:py-10'}`}>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          className={`
            pointer-events-auto
            flex items-center justify-between md:justify-center gap-4 md:gap-8 px-5 md:px-6 py-2 rounded-full
            bg-white/70 backdrop-blur-[24px] border border-white/20
            shadow-[0_40px_60px_rgba(43,52,55,0.06)]
            transition-all duration-500
            ${isScrolled ? 'md:py-1.5 md:px-5' : 'md:py-2 md:px-6'}
            w-full max-w-[95%] md:w-auto
          `}
        >
          <a 
            href="#" 
            className="text-lg font-bold tracking-tighter text-on-surface font-headline"
          >
            Manoj<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-on-surface-variant hover:text-on-surface transition-colors font-headline tracking-tight font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              className="hidden sm:flex"
              onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=manoj.ale2002@gmail.com', '_blank')}
            >
              Connect
            </Button>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white/70 backdrop-blur-3xl md:hidden overflow-hidden"
          >
            {/* Subtle Background Animations (Grayscale Blobs) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
              <motion.div
                animate={{
                  x: [0, 100, -50],
                  y: [0, 50, 100],
                  scale: [1, 1.2, 0.9],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-on-surface/5 rounded-full blur-[120px]"
              />
              <motion.div
                animate={{
                  x: [0, -80, 40],
                  y: [0, 120, -60],
                  scale: [1, 0.8, 1.1],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-on-surface/5 rounded-full blur-[140px]"
              />
            </div>

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none contrast-150 brightness-100" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
            />

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-10 md:px-16 pt-32">
              <div className="flex flex-col gap-12 items-center justify-center w-full grow">
                <div className="flex flex-col gap-8 text-center">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.2 + index * 0.1,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-medium tracking-[0.05em] text-on-surface hover:text-primary transition-all duration-300 font-headline active:scale-95 block"
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.2 + navLinks.length * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="pt-8 w-full max-w-[240px]"
                >
                  <Button 
                    size="lg" 
                    className="w-full rounded-full py-5 text-base font-bold shadow-2xl shadow-on-surface/5 active:scale-95 transition-transform"
                    onClick={() => {
                      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=manoj.ale2002@gmail.com', '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Connect Now
                  </Button>
                </motion.div>
              </div>

              {/* Bottom Copyright Hint */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-[10px] uppercase tracking-[0.3em] font-bold pb-4 text-on-surface"
              >
                © 2026 Manoj Ale
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
