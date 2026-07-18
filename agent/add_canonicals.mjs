import fs from 'fs';
import path from 'path';

const BASE = 'https://stackverify.app';
const ROOT = '/home/runner/work/stackcheck/stackcheck';

const pages = new Map([
  ['app/page.tsx', BASE],
  ['app/blog/page.tsx', BASE + '/blog'],
]);

const blogDir = path.join(ROOT, 'app/blog');
for (const entry of fs.readdirSync(blogDir).sort()) {
  const full = path.join(blogDir, entry, 'page.tsx');
  if (fs.existsSync(full)) {
    pages.set('app/blog/' + entry + '/page.tsx', BASE + '/blog/' + entry);
  }
}

let updated = 0;
for (const [relPath, canonical] of pages) {
  const filepath = path.join(ROOT, relPath);
  let content = fs.readFileSync(filepath, 'utf8');

  if (content.includes('alternates:')) {
    console.log('SKIP (has alternates):', relPath);
    continue;
  }

  const marker = '};\n\nexport default';
  if (!content.includes(marker)) {
    console.log('WARN (pattern not found):', relPath);
    continue;
  }

  const altBlock = '  alternates: {\n    canonical: "' + canonical + '",\n  },\n};';
  const newContent = content.replace(marker, altBlock + '\n\nexport default');

  if (newContent === content) {
    console.log('WARN (no change):', relPath);
    continue;
  }

  fs.writeFileSync(filepath, newContent);
  updated++;
  console.log('OK:', relPath, '->', canonical);
}

console.log('\nTotal:', pages.size, 'pages,', updated, 'updated');
