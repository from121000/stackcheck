import fs from 'fs';
import path from 'path';

const ROOT = '/home/runner/work/stackcheck/stackcheck';

const blogDir = path.join(ROOT, 'app/blog');
const slugs = fs.readdirSync(blogDir).filter(e => {
  const full = path.join(blogDir, e, 'page.tsx');
  return fs.existsSync(full);
});

let updated = 0;
for (const slug of slugs) {
  const filepath = path.join(blogDir, slug, 'page.tsx');
  let content = fs.readFileSync(filepath, 'utf8');

  if (content.includes('application/ld+json')) {
    console.log('SKIP (has JSON-LD):', slug);
    continue;
  }

  // Extract title from metadata.title
  const titleMatch = content.match(/^\s+title:\s+'([^']+)'/m) || content.match(/^\s+title:\s+"([^"]+)"/m);
  if (!titleMatch) {
    console.log('WARN (no title):', slug);
    continue;
  }
  const title = titleMatch[1];

  // Extract date from openGraph.publishedTime or from date div
  let date = null;
  const ogDateMatch = content.match(/publishedTime:\s+'(\d{4}-\d{2}-\d{2})'/);
  if (ogDateMatch) {
    date = ogDateMatch[1];
  } else {
    const divDateMatch = content.match(/>(\d{4}-\d{2}-\d{2})</);
    if (divDateMatch) date = divDateMatch[1];
  }
  if (!date) {
    console.log('WARN (no date):', slug);
    date = '2026-07-18';
  }

  // Escape title for JSON
  const safeTitle = title.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

  // Build the script tag to insert
  const scriptTag =
    '      <script\n' +
    '        type="application/ld+json"\n' +
    '        dangerouslySetInnerHTML={{\n' +
    '          __html: JSON.stringify({\n' +
    '            "@context": "https://schema.org",\n' +
    '            "@type": "Article",\n' +
    '            "headline": "' + safeTitle + '",\n' +
    '            "datePublished": "' + date + '",\n' +
    '            "publisher": {\n' +
    '              "@type": "Organization",\n' +
    '              "name": "StackVerify"\n' +
    '            }\n' +
    '          })\n' +
    '        }}\n' +
    '      />\n';

  // Insert after opening <main ...> line
  const mainPattern = '    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">\n';
  if (!content.includes(mainPattern)) {
    console.log('WARN (main pattern not found):', slug);
    continue;
  }

  const newContent = content.replace(mainPattern, mainPattern + scriptTag);
  fs.writeFileSync(filepath, newContent);
  updated++;
  console.log('OK:', slug, '->', title.substring(0, 60), '@', date);
}

console.log('\nUpdated:', updated, 'of', slugs.length, 'blog posts');
