import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Download, ShieldCheck, Smartphone } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import budgetBuddyImage from '../../assets/budgetbuddy-flutter-project.png';

const apps = [
  {
    title: 'BudgetBuddy',
    category: 'Android app',
    version: 'v1.0.0',
    size: '56 MB',
    description:
      'A calm, offline-first expense tracker for understanding where your money goes. Track income, expenses, accounts, budgets, savings goals, and recurring transactions from one focused dashboard.',
    image: budgetBuddyImage,
    tags: ['Flutter', 'SQLite', 'Material 3'],
    download: 'https://github.com/manoj010/BudgetBuddy-Flutter/releases/download/v1.0.0/BudgetBuddy.apk',
    source: 'https://github.com/manoj010/BudgetBuddy-Flutter',
  },
];

export const DownloadableApps = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollApps = (direction: 'previous' | 'next') => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: direction === 'next' ? carousel.clientWidth + 32 : -(carousel.clientWidth + 32),
      behavior: 'smooth',
    });
  };

  return (
  <section id="apps" className="bg-surface-container-low px-6 py-24 md:py-48">
    <div className="content-container">
      <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-primary"
          >
            Take it with you
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl"
          >
            Downloadable apps
          </motion.h2>
          <p className="max-w-xl text-base font-light leading-relaxed text-on-surface-variant md:text-lg">
            Small, useful tools I have built and packaged for real-world use. Download an app, try it on your device, and explore the source behind it.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm font-medium text-on-surface-variant">
          <Smartphone className="h-5 w-5 text-primary" />
          Android-ready builds
        </div>
      </div>

      <div className="-mx-6 flex items-center gap-4 md:-mx-12 lg:-mx-24">
        <button
          type="button"
          onClick={() => scrollApps('previous')}
          className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container-lowest text-on-surface-variant shadow-lg shadow-on-surface/5 transition-all hover:-translate-x-0.5 hover:bg-surface-container-low hover:text-on-surface sm:inline-flex"
          aria-label="Show previous apps"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={carouselRef}
          className="flex min-w-0 flex-1 snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-0"
          aria-label="Downloadable apps carousel"
        >
        {apps.map((app, index) => (
        <motion.article
          key={app.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="grid min-w-full snap-start overflow-hidden rounded-[2rem] border border-outline-variant/20 bg-surface-container-lowest shadow-[0_30px_80px_rgba(43,52,55,0.08)] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative min-h-[280px] overflow-hidden bg-surface-container-low lg:min-h-[440px]">
            <img
              src={app.image}
              alt={`${app.title} app preview`}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full border border-white/30 bg-on-surface/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
              Ready to install
            </div>
          </div>

          <div className="flex flex-col justify-center gap-7 p-8 md:p-12 lg:p-16">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                <span>{app.category}</span>
                <span className="h-1 w-1 rounded-full bg-outline-variant" />
                <span className="text-on-surface-variant">{app.version}</span>
              </div>
              <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{app.title}</h3>
              <p className="max-w-2xl text-base font-light leading-relaxed text-on-surface-variant">
                {app.description}
              </p>
            </div>

            <div className="grid gap-3 text-sm text-on-surface-variant sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl bg-surface-container-low p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span><strong className="block text-on-surface">Private by design</strong>Data stays on your device.</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-surface-container-low p-4">
                <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span><strong className="block text-on-surface">APK download</strong>{app.size} · Android</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <span key={tag} className="rounded-lg border border-outline-variant/20 bg-surface-container-low px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={app.download}
                download
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-headline text-sm font-semibold text-on-primary shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
              >
                Download APK
                <Download className="h-4 w-4" />
              </a>
              <a
                href={app.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-2 py-3 text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
              >
                <GithubIcon className="h-4 w-4" />
                View source
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs leading-relaxed text-on-surface-variant/70">
              Android may ask you to allow installation from this source. Review the app permissions before installing.
            </p>
          </div>
        </motion.article>
        ))}
        </div>

        <button
          type="button"
          onClick={() => scrollApps('next')}
          className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container-lowest text-on-surface-variant shadow-lg shadow-on-surface/5 transition-all hover:translate-x-0.5 hover:bg-surface-container-low hover:text-on-surface sm:inline-flex"
          aria-label="Show next apps"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  </section>
  );
};
