#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const DEFAULT_VAULT = '/Users/binwen6/Obsidian/Study Notes';
const PUBLISH_LINE = '- [x] Publish on personal website';
const PUBLISH_RE = /^\s*-\s*\[([ xX])\]\s*Publish on personal website\s*$/m;
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.avif']);
const vaultArgument = process.argv.slice(2).find(arg => !arg.startsWith('--'));
const vault = path.resolve(vaultArgument || process.env.OBSIDIAN_VAULT || DEFAULT_VAULT);
const initializeFlags = process.argv.includes('--init-publish-flags');
const siteRoot = path.resolve(import.meta.dirname, '..');
const outputRoot = path.join(siteRoot, 'blog', 'obsidian');
const notesRoot = path.join(outputRoot, 'notes');
const assetsRoot = path.join(outputRoot, 'assets');

function normalize(relativePath) {
  return relativePath.split(path.sep).join('/');
}

function stableId(relativePath) {
  return createHash('sha256').update(normalize(relativePath)).digest('hex').slice(0, 16);
}

function titleFromPath(relativePath) {
  return path.basename(relativePath, path.extname(relativePath));
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'))) {
    if (entry.name === '.obsidian' || entry.name === '.DS_Store' || entry.name.startsWith('.')) continue;
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    else files.push(absolute);
  }
  return files;
}

function buildLookup(files) {
  const lookup = new Map();
  for (const file of files) {
    const relative = normalize(path.relative(vault, file));
    const keys = [relative, path.basename(relative), relative.replace(/\.[^.]+$/, '')];
    for (const key of keys) {
      const normalizedKey = key.toLocaleLowerCase();
      if (!lookup.has(normalizedKey)) lookup.set(normalizedKey, file);
    }
  }
  return lookup;
}

function resolveVaultFile(target, fromFile, lookup) {
  const clean = target.split('#')[0].trim().replace(/^<|>$/g, '');
  const candidates = [
    normalize(path.relative(vault, path.resolve(path.dirname(fromFile), clean))),
    clean,
    path.basename(clean),
    clean.endsWith('.md') ? clean.slice(0, -3) : `${clean}.md`
  ];
  for (const candidate of candidates) {
    const match = lookup.get(candidate.toLocaleLowerCase());
    if (match) return match;
  }
  return null;
}

function stripPublishControl(markdown) {
  return markdown.replace(PUBLISH_RE, '').replace(/^\s*\n/, '');
}

function extractSummary(markdown) {
  const plain = stripPublishControl(markdown)
    .replace(/!\[\[[^\]]+\]\]/g, '')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/[*_`>#[\]()~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return plain.slice(0, 180);
}

function extractTags(markdown) {
  return [...new Set([...markdown.matchAll(/(^|\s)#([\p{L}\p{N}_/-]+)/gu)].map(match => match[2]))].slice(0, 8);
}

async function main() {
  const vaultInfo = await stat(vault);
  if (!vaultInfo.isDirectory()) throw new Error(`Vault is not a directory: ${vault}`);

  const allFiles = await walk(vault);
  const markdownFiles = allFiles.filter(file => path.extname(file).toLowerCase() === '.md');
  const lookup = buildLookup(allFiles);

  if (initializeFlags) {
    for (const file of markdownFiles) {
      const markdown = await readFile(file, 'utf8');
      if (!PUBLISH_RE.test(markdown)) {
        const bom = markdown.startsWith('\uFEFF') ? '\uFEFF' : '';
        const body = bom ? markdown.slice(1) : markdown;
        await writeFile(file, `${bom}${PUBLISH_LINE}\n\n${body}`, 'utf8');
      }
    }
  }

  const records = [];
  for (const file of markdownFiles) {
    const markdown = await readFile(file, 'utf8');
    const flag = markdown.match(PUBLISH_RE);
    const published = !flag || flag[1].trim().toLowerCase() === 'x';
    if (!published) continue;
    const relative = normalize(path.relative(vault, file));
    records.push({
      id: stableId(relative),
      path: relative,
      title: titleFromPath(relative),
      directory: normalize(path.dirname(relative)) === '.' ? '' : normalize(path.dirname(relative)),
      source: file,
      markdown,
      summary: extractSummary(markdown),
      tags: extractTags(markdown)
    });
  }

  const publishedBySource = new Map(records.map(record => [record.source, record]));
  await rm(outputRoot, { recursive: true, force: true });
  await mkdir(notesRoot, { recursive: true });
  await mkdir(assetsRoot, { recursive: true });
  const copiedAssets = new Map();

  async function publishAsset(source) {
    if (copiedAssets.has(source)) return copiedAssets.get(source);
    const extension = path.extname(source).toLowerCase();
    const outputName = `${stableId(normalize(path.relative(vault, source)))}${extension}`;
    await cp(source, path.join(assetsRoot, outputName));
    const url = `blog/obsidian/assets/${outputName}`;
    copiedAssets.set(source, url);
    return url;
  }

  for (const record of records) {
    let transformed = stripPublishControl(record.markdown);

    const wikiEmbeds = [...transformed.matchAll(/!\[\[([^\]]+)\]\]/g)];
    for (const match of wikiEmbeds) {
      const [target, size] = match[1].split('|').map(part => part.trim());
      const source = resolveVaultFile(target, record.source, lookup);
      if (!source || !IMAGE_EXTENSIONS.has(path.extname(source).toLowerCase())) continue;
      const url = await publishAsset(source);
      const width = size && /^\d+$/.test(size) ? ` width="${size}"` : '';
      transformed = transformed.replace(match[0], `<img src="${url}" alt="${path.basename(target)}"${width} loading="lazy">`);
    }

    const markdownImages = [...transformed.matchAll(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g)];
    for (const match of markdownImages) {
      if (/^(https?:|data:|blog\/)/i.test(match[2])) continue;
      const source = resolveVaultFile(decodeURIComponent(match[2]), record.source, lookup);
      if (!source || !IMAGE_EXTENSIONS.has(path.extname(source).toLowerCase())) continue;
      const url = await publishAsset(source);
      transformed = transformed.replace(match[0], `![${match[1]}](${url})`);
    }

    transformed = transformed.replace(/\[\[([^\]]+)\]\]/g, (whole, value) => {
      const [rawTarget, alias] = value.split('|');
      const [target, heading] = rawTarget.split('#');
      const source = resolveVaultFile(target, record.source, lookup);
      const linked = source && publishedBySource.get(source);
      const label = (alias || target || heading || '').trim();
      if (!linked) return label;
      const hash = heading ? `#${encodeURIComponent(heading.trim().toLowerCase().replace(/\s+/g, '-'))}` : '';
      return `[${label}](post.html?note=${linked.id}${hash})`;
    });

    await writeFile(path.join(notesRoot, `${record.id}.md`), transformed, 'utf8');
  }

  const index = {
    generatedAt: new Date().toISOString(),
    vaultName: path.basename(vault),
    count: records.length,
    notes: records.map(({ source, markdown, ...record }) => ({
      ...record,
      file: `blog/obsidian/notes/${record.id}.md`
    }))
  };
  await writeFile(path.join(siteRoot, 'blog-index.json'), `${JSON.stringify(index, null, 2)}\n`, 'utf8');
  console.log(`Published ${records.length}/${markdownFiles.length} notes and ${copiedAssets.size} referenced images.`);
}

main().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
