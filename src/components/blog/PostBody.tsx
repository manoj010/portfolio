import type { ReactNode } from 'react';

interface PostBodyProps {
  content: string;
}

function flushParagraph(lines: string[], nodes: ReactNode[], key: number) {
  if (lines.length === 0) {
    return key;
  }

  nodes.push(
    <p key={`p-${key}`} className="text-lg leading-9 text-on-surface-variant">
      {lines.join(' ')}
    </p>
  );

  lines.length = 0;
  return key + 1;
}

function isTableSeparator(line: string) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function parseTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function parseImage(line: string) {
  return line.match(/^!\[(.*?)\]\((.*?)\)$/);
}

export const PostBody = ({ content }: PostBodyProps) => {
  const lines = content.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  const paragraph: string[] = [];
  let key = 0;
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      key = flushParagraph(paragraph, nodes, key);
      index += 1;
      continue;
    }

    const image = parseImage(trimmed);

    if (image) {
      key = flushParagraph(paragraph, nodes, key);
      nodes.push(
        <figure key={`image-${key}`} className="overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-lowest">
          <img src={image[2]} alt={image[1]} className="w-full object-cover" loading="lazy" />
        </figure>
      );
      key += 1;
      index += 1;
      continue;
    }

    if (trimmed.includes('|') && isTableSeparator(lines[index + 1] ?? '')) {
      key = flushParagraph(paragraph, nodes, key);
      const headers = parseTableRow(trimmed);
      const rows: string[][] = [];
      index += 2;

      while (index < lines.length && lines[index].trim().includes('|')) {
        rows.push(parseTableRow(lines[index]));
        index += 1;
      }

      nodes.push(
        <div key={`table-${key}`} className="overflow-x-auto rounded-2xl border border-outline-variant/20 bg-surface-container-lowest">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm md:text-base">
            <thead className="bg-surface-container-low text-on-surface">
              <tr>
                {headers.map((header) => (
                  <th key={header} className="border-b border-outline-variant/20 px-5 py-4 font-headline text-sm font-bold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              {rows.map((row, rowIndex) => (
                <tr key={`${row.join('-')}-${rowIndex}`} className="border-b border-outline-variant/10 last:border-b-0">
                  {headers.map((header, cellIndex) => (
                    <td key={`${header}-${cellIndex}`} className="px-5 py-4">
                      {row[cellIndex] ?? ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      key += 1;
      continue;
    }

    if (trimmed.startsWith('```')) {
      key = flushParagraph(paragraph, nodes, key);
      const code: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        code.push(lines[index]);
        index += 1;
      }

      nodes.push(
        <pre key={`code-${key}`} className="overflow-x-auto rounded-2xl bg-inverse-surface p-5 text-sm leading-7 text-surface">
          <code>{code.join('\n')}</code>
        </pre>
      );
      key += 1;
      index += 1;
      continue;
    }

    if (trimmed.startsWith('### ')) {
      key = flushParagraph(paragraph, nodes, key);
      nodes.push(
        <h3 key={`h3-${key}`} className="pt-5 text-xl font-extrabold tracking-tight md:text-2xl">
          {trimmed.replace(/^###\s+/, '')}
        </h3>
      );
      key += 1;
      index += 1;
      continue;
    }

    if (trimmed.startsWith('## ')) {
      key = flushParagraph(paragraph, nodes, key);
      nodes.push(
        <h2 key={`h2-${key}`} className="pt-8 text-2xl font-extrabold tracking-tight md:text-3xl">
          {trimmed.replace(/^##\s+/, '')}
        </h2>
      );
      key += 1;
      index += 1;
      continue;
    }

    if (trimmed.startsWith('# ')) {
      key = flushParagraph(paragraph, nodes, key);
      index += 1;
      continue;
    }

    if (trimmed === '---') {
      key = flushParagraph(paragraph, nodes, key);
      nodes.push(<hr key={`hr-${key}`} className="border-outline-variant/20" />);
      key += 1;
      index += 1;
      continue;
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      key = flushParagraph(paragraph, nodes, key);
      const items: string[] = [];

      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*]\s+/, ''));
        index += 1;
      }

      nodes.push(
        <ul key={`ul-${key}`} className="flex list-disc flex-col gap-3 pl-6 text-lg leading-8 text-on-surface-variant marker:text-primary">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
      key += 1;
      continue;
    }

    paragraph.push(trimmed);
    index += 1;
  }

  flushParagraph(paragraph, nodes, key);

  return <div className="flex flex-col gap-7">{nodes}</div>;
};
