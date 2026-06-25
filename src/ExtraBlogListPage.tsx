import { ArrowLeft } from 'lucide-react';
import { blogPosts } from './extraBlogPosts';
import { BlogCard } from './components/blog/BlogCard';

export const ExtraBlogListPage = () => {
  return (
    <main className="min-h-screen bg-surface px-6 pb-24 pt-36 md:pb-40 md:pt-44">
      <div className="content-container">
        <div className="mb-16 flex flex-col gap-8 md:mb-20">
          <a
            href="/"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant transition-all hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Home
          </a>

          <div className="max-w-3xl">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary md:text-xs">
              Blog
            </span>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-7xl">
              Notes from the workbench.
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant md:text-xl">
              Personal notes, build logs, and small lessons from projects I am learning through.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} featured />
          ))}
        </div>
      </div>
    </main>
  );
};
