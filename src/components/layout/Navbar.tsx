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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold tracking-tighter text-on-surface hover:text-primary transition-colors font-headline"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Button 
                  size="lg" 
                  className="rounded-full px-8"
                  onClick={() => {
                    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=manoj.ale2002@gmail.com', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Connect Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
