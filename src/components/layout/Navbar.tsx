import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-6 py-10 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        className={`
          pointer-events-auto
          flex items-center gap-8 px-6 py-2 rounded-full
          bg-white/70 backdrop-blur-[24px] border border-white/20
          shadow-[0_40px_60px_rgba(43,52,55,0.06)]
          transition-all duration-500
          ${isScrolled ? 'py-1.5 px-5' : 'py-2 px-6'}
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

        <Button 
          size="sm" 
          className="hidden sm:flex"
          onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=manoj.ale2002@gmail.com', '_blank')}
        >
          Connect
        </Button>
      </motion.nav>
    </header>
  );
};
