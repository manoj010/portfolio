export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
  readingTime: string;
}

type PostMetadata = Record<string, string>;

const postModules = import.meta.glob<string>('./blog/*.mdx', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function parseFrontmatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) {
    return { metadata: inferMetadata(source), content: source.trim() };
  }

  const metadata = match[1].split(/\r?\n/).reduce<Record<string, string>>((acc, line) => {
    const separatorIndex = line.indexOf(':');

    if (separatorIndex === -1) {
      return acc;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    acc[key] = value;
    return acc;
  }, {});

  return { metadata, content: match[2].trim() };
}

function inferMetadata(source: string): PostMetadata {
  const title = source.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const published = source.match(/^\*Published:\s*(.+?)\*$/m)?.[1]?.trim();

  return {
    ...(title ? { title } : {}),
    ...(published ? { date: normalizeDate(published) } : {}),
  } satisfies PostMetadata;
}

function normalizeDate(date: string) {
  const parsedDate = new Date(date);

  if (!Number.isNaN(parsedDate.getTime())) {
    return parsedDate.toISOString().slice(0, 10);
  }

  const monthYear = date.match(/^([A-Za-z]+)\s+(\d{4})$/);

  if (monthYear) {
    return `${monthYear[2]}-${String(new Date(`${monthYear[1]} 1, ${monthYear[2]}`).getMonth() + 1).padStart(2, '0')}-01`;
  }

  return '';
}

function getSlug(path: string) {
  return path.split('/').pop()?.replace(/\.mdx$/, '') ?? '';
}

function getReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

function getDateTime(date: string) {
  const time = new Date(date).getTime();

  return Number.isNaN(time) ? 0 : time;
}

export const blogPosts = Object.entries(postModules)
  .map(([path, source]) => {
    const { metadata, content } = parseFrontmatter(source);

    return {
      slug: getSlug(path),
      title: metadata.title ?? 'Untitled post',
      date: metadata.date ?? '',
      summary: metadata.summary ?? '',
      tags: metadata.tags?.split(',').map((tag) => tag.trim()).filter(Boolean) ?? [],
      content,
      readingTime: getReadingTime(content),
    };
  })
  .sort((a, b) => getDateTime(b.date) - getDateTime(a.date));

export const featuredBlogPosts = blogPosts.slice(0, 2);

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return 'Undated';
  }

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(parsedDate);
}
