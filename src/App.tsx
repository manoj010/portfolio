import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { BlogTeaser } from './components/sections/BlogTeaser';
import { Contact, Footer } from './components/layout/Footer';
import { BlogListPage } from './components/pages/BlogListPage';
import { BlogPostPage } from './components/pages/BlogPostPage';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

type Route =
  | { name: 'home' }
  | { name: 'blog-list' }
  | { name: 'blog-post'; slug: string };

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [hash, setHash] = useState(window.location.hash);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const route = useMemo<Route>(() => {
    const blogPostMatch = pathname.match(/^\/blog\/([^/]+)$/);

    if (pathname === '/blog') {
      return { name: 'blog-list' };
    }

    if (blogPostMatch?.[1]) {
      return { name: 'blog-post', slug: blogPostMatch[1] };
    }

    return { name: 'home' };
  }, [pathname]);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
      setHash(window.location.hash);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href]');

      if (!anchor || anchor.target || anchor.host !== window.location.host) {
        return;
      }

      const url = new URL(anchor.href);

      if (url.pathname === '/' || url.pathname.startsWith('/blog')) {
        event.preventDefault();
        window.history.pushState({}, '', `${url.pathname}${url.hash}`);
        setPathname(url.pathname);
        setHash(url.hash);

        if (url.hash) {
          document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (route.name === 'home' && hash) {
      const target = document.querySelector(hash);
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash, route.name]);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar pathname={pathname} />
      
      {route.name === 'blog-list' ? (
        <BlogListPage />
      ) : route.name === 'blog-post' ? (
        <BlogPostPage slug={route.slug} />
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <BlogTeaser />
          <Contact />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
