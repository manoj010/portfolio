import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Menu, Moon, Sun, X } from 'lucide-react';

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
  const [activeSection, setActiveSection] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return savedTheme ? savedTheme === 'dark' : prefersDark;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-30% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
  const toggleDarkMode = () => setIsDarkMode((current) => !current);

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
            bg-surface-container-lowest/70 backdrop-blur-[24px] border border-outline-variant/20
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.href.slice(1))}
                  className={`rounded-full px-3 py-1.5 font-headline text-sm font-medium tracking-tight transition-all ${
                    isActive 
                      ? 'bg-primary text-on-primary shadow-sm' 
                      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-on-surface-variant transition-all hover:bg-surface-container-low hover:text-on-surface"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={isDarkMode}
            >
              {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

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
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-surface/90 backdrop-blur-xl md:hidden overflow-hidden"
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



            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-10 md:px-16 pt-32">
              <div className="flex flex-col gap-12 items-center justify-center w-full grow">
                <div className="flex flex-col gap-8 text-center">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.1 + index * 0.08,
                        duration: 0.8,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => {
                          setActiveSection(link.href.slice(1));
                          setIsMobileMenuOpen(false);
                        }}
                        className={`block rounded-full px-8 py-2 text-2xl font-medium tracking-[0.05em] transition-all duration-300 font-headline active:scale-95 ${
                          activeSection === link.href.slice(1)
                            ? 'bg-primary text-on-primary'
                            : 'text-on-surface hover:text-primary'
                        }`}
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.1 + navLinks.length * 0.08,
                    duration: 0.8,
                    ease: [0.32, 0.72, 0, 1]
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
