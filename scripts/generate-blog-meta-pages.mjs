import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const siteUrl = 'https://www.manojale.com.np';
const blogSourceDir = path.join(root, 'src', 'content', 'blog');
const distDir = path.join(root, 'dist');
const indexPath = path.join(distDir, 'index.html');
const extraPosts = [
  {
    slug: 'ai-model-collapse',
    title: 'AI Model Collapse: When AI Starts Learning From Its Own Echo',
    summary:
      'Model collapse is what can happen when AI systems are trained too heavily on synthetic content produced by earlier AI systems. The result is a strange feedback loop where rare ideas disappear, errors get amplified, and the model becomes less connected to reality.',
    image: '/blog-assets/ai-model-collapse-social.png',
    imageWidth: '1731',
    imageHeight: '909',
  },
];

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

function metaTags({ title, summary, image, imageWidth = '1792', imageHeight = '1024', slug }) {
  const url = `${siteUrl}/blog/${slug}`;
  const imageUrl = absoluteUrl(image);
  const imageType = imageUrl.endsWith('.jpg') || imageUrl.endsWith('.jpeg') ? 'image/jpeg' : 'image/png';
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
    imageUrl ? `<meta property="og:image:secure_url" content="${imageUrl}" />` : '',
    imageUrl ? `<meta property="og:image:type" content="${imageType}" />` : '',
    imageUrl ? `<meta property="og:image:width" content="${escapeHtml(imageWidth)}" />` : '',
    imageUrl ? `<meta property="og:image:height" content="${escapeHtml(imageHeight)}" />` : '',
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${safeTitle}" />`,
    `<meta name="twitter:description" content="${safeSummary}" />`,
    imageUrl ? `<meta name="twitter:image" content="${imageUrl}" />` : '',
  ].filter(Boolean).join('\n    ');
}

const template = await readFile(indexPath, 'utf8');
const files = await readdir(blogSourceDir);

async function writePostMetaPage(metadata, slug) {
  const output = template
    .replace(/<title>.*?<\/title>/, '')
    .replace('</head>', `    ${metaTags({ ...metadata, slug })}\n  </head>`);
  const outputDir = path.join(distDir, 'blog', slug);

  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), output);
  await writeFile(path.join(distDir, 'blog', `${slug}.html`), output);
}

await Promise.all(files.filter((file) => file.endsWith('.mdx')).map(async (file) => {
  const slug = getSlug(file);
  const source = await readFile(path.join(blogSourceDir, file), 'utf8');
  const metadata = parseFrontmatter(source);

  if (!metadata.title || !metadata.summary) {
    return;
  }

  await writePostMetaPage(metadata, slug);
}));

await Promise.all(extraPosts.map(({ slug, ...metadata }) => writePostMetaPage(metadata, slug)));
