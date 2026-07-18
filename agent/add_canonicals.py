import os

BASE = "https://stackverify.app"
ROOT = "/home/runner/work/stackcheck/stackcheck"

pages = {
    "app/page.tsx": BASE,
    "app/blog/page.tsx": BASE + "/blog",
}

blog_dir = os.path.join(ROOT, "app/blog")
for entry in sorted(os.listdir(blog_dir)):
    full = os.path.join(blog_dir, entry, "page.tsx")
    if os.path.isfile(full):
        pages["app/blog/" + entry + "/page.tsx"] = BASE + "/blog/" + entry

results = []
for rel_path, canonical in pages.items():
    filepath = os.path.join(ROOT, rel_path)
    with open(filepath) as f:
        content = f.read()

    if 'alternates:' in content:
        results.append("SKIP (has alternates): " + rel_path)
        continue

    marker = '};\n\nexport default'
    if marker not in content:
        results.append("WARN (pattern not found): " + rel_path)
        continue

    alt_block = '  alternates: {\n    canonical: "' + canonical + '",\n  },\n};'
    new_content = content.replace(marker, alt_block + '\n\nexport default', 1)

    if new_content == content:
        results.append("WARN (no change): " + rel_path)
        continue

    with open(filepath, 'w') as f:
        f.write(new_content)
    results.append("OK: " + rel_path + " -> " + canonical)

for r in results:
    print(r)
print("\nTotal: " + str(len(pages)) + " pages, " + str(sum(1 for r in results if r.startswith('OK'))) + " updated")
