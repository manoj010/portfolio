import { ArrowLeft } from 'lucide-react';
import { formatPostDate, getBlogPost } from '../../content/blog';
import { PostBody } from '../blog/PostBody';

interface BlogPostPageProps {
  slug: string;
}

export const BlogPostPage = ({ slug }: BlogPostPageProps) => {
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-surface px-6 pb-24 pt-36 md:pb-40 md:pt-44">
        <div className="content-container">
          <a
            href="/blog"
            className="group mb-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant transition-all hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Blog
          </a>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">Post not found.</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-surface px-6 pb-24 pt-36 md:pb-40 md:pt-44">
      <article className="content-container max-w-5xl">
        <a
          href="/blog"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant transition-all hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          All posts
        </a>

        <header className="mb-14 border-b border-outline-variant/20 pb-12 md:mb-16 md:pb-16">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-primary md:text-xs">
            <span>{formatPostDate(post.date)}</span>
            <span className="h-1 w-1 rounded-full bg-outline-variant" />
            <span>{post.readingTime}</span>
          </div>

          <h1 className="mb-8 text-4xl font-extrabold tracking-tight md:text-7xl">
            {post.title}
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-2xl">
            {post.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-outline-variant/20 bg-surface-container-low px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mx-auto max-w-3xl">
          <PostBody content={post.content} />
        </div>
      </article>
    </main>
  );
};
