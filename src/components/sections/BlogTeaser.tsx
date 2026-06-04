import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { featuredBlogPosts } from '../../content/blog';
import { BlogCard } from '../blog/BlogCard';

export const BlogTeaser = () => {
  const primaryPost = featuredBlogPosts[0];
  const secondaryPosts = featuredBlogPosts.slice(1);

  if (!primaryPost) {
    return null;
  }

  return (
    <section id="blog" className="bg-surface-container-low px-6 py-24 md:py-48">
      <div className="content-container">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl"
            >
              Latest Notes
            </motion.h2>
            <p className="max-w-xl text-base font-light text-on-surface-variant md:text-lg">
              Short writing on what I am building, learning, and thinking through.
            </p>
          </div>

          <motion.a
            href="/blog"
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant transition-all hover:text-primary"
          >
            See all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BlogCard post={primaryPost} featured />
          </motion.div>

          <div className="grid gap-8">
            {secondaryPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.8 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}

            <motion.a
              href={`/blog/${primaryPost.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="group inline-flex min-h-28 items-center justify-between rounded-[2rem] bg-primary px-7 py-6 font-headline text-lg font-bold text-on-primary shadow-lg shadow-primary/10 transition-all hover:-translate-y-1 hover:bg-primary-dim"
            >
              Read more
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
