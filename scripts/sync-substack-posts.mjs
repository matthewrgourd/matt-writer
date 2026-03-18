import { writeFile } from 'node:fs/promises';

const SOURCE_POSTS = [
  'https://substack.com/home/post/p-191342672',
  'https://substack.com/home/post/p-190741705',
  'https://substack.com/home/post/p-188596070',
  'https://substack.com/home/post/p-188512784',
  'https://substack.com/home/post/p-185519390',
  'https://substack.com/home/post/p-175701474',
];
const FORCE_TWO_PARAGRAPH_SNIPPET_POST_IDS = new Set([185519390, 188512784]);

const OUTPUT_FILE = new URL('../src/data/substackPosts.ts', import.meta.url);

function decodeJsonString(value) {
  return JSON.parse(`"${value}"`);
}

function extractPreloads(html) {
  const match = html.match(/window\._preloads\s*=\s*JSON\.parse\("([\s\S]*?)"\)<\/script>/);
  if (!match) {
    throw new Error('Unable to locate window._preloads payload');
  }

  const encodedPayload = match[1];
  const decodedPayload = decodeJsonString(encodedPayload);
  return JSON.parse(decodedPayload);
}

function findPostObject(node, postId) {
  if (!node || typeof node !== 'object') {
    return null;
  }

  if (
    Number.isInteger(node.id) &&
    node.id === postId &&
    typeof node.title === 'string' &&
    (typeof node.body_html === 'string' || typeof node.truncated_body_text === 'string')
  ) {
    return node;
  }

  if (Array.isArray(node)) {
    for (const value of node) {
      const found = findPostObject(value, postId);
      if (found) {
        return found;
      }
    }

    return null;
  }

  for (const value of Object.values(node)) {
    const found = findPostObject(value, postId);
    if (found) {
      return found;
    }
  }

  return null;
}

function findFirstSubdomain(node) {
  if (!node || typeof node !== 'object') {
    return null;
  }

  if (typeof node.subdomain === 'string' && node.subdomain.length > 0) {
    return node.subdomain;
  }

  if (Array.isArray(node)) {
    for (const value of node) {
      const found = findFirstSubdomain(value);
      if (found) {
        return found;
      }
    }

    return null;
  }

  for (const value of Object.values(node)) {
    const found = findFirstSubdomain(value);
    if (found) {
      return found;
    }
  }

  return null;
}

function stripHtml(html) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateText(value, maxLength) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 3).trim()}...`;
}

function extractParagraphs(bodyHtml) {
  if (!bodyHtml) {
    return [];
  }

  const matches = [...bodyHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
  return matches
    .map((match) => stripHtml(match[1]))
    .filter(Boolean);
}

function toIsoDate(postDate) {
  if (!postDate) {
    return null;
  }

  const parsed = new Date(postDate);
  return Number.isNaN(parsed.valueOf()) ? null : parsed.toISOString();
}

function buildCanonicalUrl(subdomain, slug, fallbackUrl) {
  if (subdomain && slug) {
    return `https://${subdomain}.substack.com/p/${slug}`;
  }

  return fallbackUrl;
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'matt-writer-substack-sync/1.0',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

async function fetchPost(url) {
  const idMatch = url.match(/p-(\d+)/);
  if (!idMatch) {
    throw new Error(`Could not parse post id from ${url}`);
  }

  const postId = Number.parseInt(idMatch[1], 10);
  const html = await fetchHtml(url);
  const preloads = extractPreloads(html);
  const post = findPostObject(preloads, postId);

  if (!post) {
    throw new Error(`Could not find post payload for ${postId}`);
  }

  const subdomain = findFirstSubdomain(post) || findFirstSubdomain(preloads) || null;
  const paragraphSnippets = extractParagraphs(post.body_html || '');

  let excerpt;
  if (FORCE_TWO_PARAGRAPH_SNIPPET_POST_IDS.has(postId) && paragraphSnippets.length >= 2) {
    const first = truncateText(paragraphSnippets[0], 190);
    const second = truncateText(paragraphSnippets[1], 190);
    excerpt = `${first}\n\n${second}`;
  } else {
    const excerptSource = post.truncated_body_text || stripHtml(post.body_html || '');
    excerpt = excerptSource.length > 260 ? `${excerptSource.slice(0, 257)}...` : excerptSource;
  }

  return {
    postId,
    title: post.title,
    subtitle: post.subtitle || null,
    excerpt,
    publishedAt: toIsoDate(post.post_date || post.published_at || null),
    sourceUrl: url,
    canonicalUrl: buildCanonicalUrl(subdomain, post.slug || null, url),
  };
}

function sortByPublishedDesc(posts) {
  return [...posts].sort((a, b) => {
    const timeA = a.publishedAt ? new Date(a.publishedAt).valueOf() : 0;
    const timeB = b.publishedAt ? new Date(b.publishedAt).valueOf() : 0;
    return timeB - timeA;
  });
}

function renderDataFile(posts) {
  return `/* Auto-generated by scripts/sync-substack-posts.mjs. */\nexport type SubstackPost = {\n  postId: number;\n  title: string;\n  subtitle: string | null;\n  excerpt: string;\n  publishedAt: string | null;\n  sourceUrl: string;\n  canonicalUrl: string;\n};\n\nexport const substackPosts: SubstackPost[] = ${JSON.stringify(posts, null, 2)};\n`;
}

async function main() {
  const posts = [];

  for (const url of SOURCE_POSTS) {
    // Sequential requests help avoid triggering anti-bot rate limits.
    const post = await fetchPost(url);
    posts.push(post);
  }

  const sorted = sortByPublishedDesc(posts);
  const fileContents = renderDataFile(sorted);
  await writeFile(OUTPUT_FILE, fileContents, 'utf8');

  console.log(`Wrote ${sorted.length} posts to ${OUTPUT_FILE.pathname}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
