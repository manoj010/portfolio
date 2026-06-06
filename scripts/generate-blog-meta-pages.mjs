import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const siteUrl = 'https://www.manojale.com.np';
const blogSourceDir = path.join(root, 'src', 'content', 'blog');
const distDir = path.join(root, 'dist');
const indexPath = path.join(distDir, 'index.html');

function escapeHtml(value = '') {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function absoluteUrl(value = '') {
  if (!value) {
    return '';
  }

  if (/^https?:\/\//.test(value)) {
    return value;
  }

  return `${siteUrl}${value.startsWith('/') ? value : `/${value}`}`;
}

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!match) {
    return {};
  }

  return match[1].split(/\r?\n/).reduce((metadata, line) => {
    const separatorIndex = line.indexOf(':');

    if (separatorIndex === -1) {
      return metadata;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    metadata[key] = value;
    return metadata;
  }, {});
}

function getSlug(fileName) {
  return fileName.replace(/\.mdx$/, '');
}

function metaTags({ title, summary, image, slug }) {
  const url = `${siteUrl}/blog/${slug}`;
  const imageUrl = absoluteUrl(image);
  const safeTitle = escapeHtml(title);
  const safeSummary = escapeHtml(summary);

  return [
    `<title>${safeTitle} | Manoj Ale</title>`,
    `<meta name="description" content="${safeSummary}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:title" content="${safeTitle}" />`,
    `<meta property="og:description" content="${safeSummary}" />`,
    `<meta property="og:url" content="${url}" />`,
    imageUrl ? `<meta property="og:image" content="${imageUrl}" />` : '',
    imageUrl ? `<meta property="og:image:width" content="1792" />` : '',
    imageUrl ? `<meta property="og:image:height" content="1024" />` : '',
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${safeTitle}" />`,
    `<meta name="twitter:description" content="${safeSummary}" />`,
    imageUrl ? `<meta name="twitter:image" content="${imageUrl}" />` : '',
  ].filter(Boolean).join('\n    ');
}

const template = await readFile(indexPath, 'utf8');
const files = await readdir(blogSourceDir);

await Promise.all(files.filter((file) => file.endsWith('.mdx')).map(async (file) => {
  const slug = getSlug(file);
  const source = await readFile(path.join(blogSourceDir, file), 'utf8');
  const metadata = parseFrontmatter(source);

  if (!metadata.title || !metadata.summary) {
    return;
  }

  const output = template
    .replace(/<title>.*?<\/title>/, '')
    .replace('</head>', `    ${metaTags({ ...metadata, slug })}\n  </head>`);
  const outputDir = path.join(distDir, 'blog', slug);

  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), output);
  await writeFile(path.join(distDir, 'blog', `${slug}.html`), output);
}));
