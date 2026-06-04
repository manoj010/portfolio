import { ArrowUpRight, Clock } from 'lucide-react';
import type { BlogPost } from '../../content/blog';
import { formatPostDate } from '../../content/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <a
      href={`/blog/${post.slug}`}
      className={`group flex h-full flex-col justify-between rounded-[2rem] border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_70px_rgba(43,52,55,0.10)] ${
        featured ? 'md:p-8' : ''
      }`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            <span>{formatPostDate(post.date)}</span>
            <span className="h-1 w-1 rounded-full bg-outline-variant" />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              {post.readingTime}
            </span>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-on-surface-variant opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary group-hover:opacity-100" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-bold tracking-tight text-on-surface`}>
            {post.title}
          </h3>
          <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
            {post.summary}
          </p>
        </div>
      </div>

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
    </a>
  );
};
