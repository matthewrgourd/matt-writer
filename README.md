# Matt Gourd - technical writer portfolio

Welcome to my professional portfolio website. I'm a Senior Technical Writer and Information Engineer with 20+ years of experience in API documentation, developer guides, and technical content strategy.

This site showcases my writing style, technical documentation capabilities, and approach to developer experience, content systems, and product enablement.

## 🌐 Live preview

- **[www.mattgourd.com](https://www.mattgourd.com)** — link to deployed site

## ✍️ About the site

This portfolio is designed for clarity, speed, and accessibility. Built using a modern front-end stack, it emphasizes clean design and structured presentation of writing samples and experience.

### 🔧 Tech stack

- **[Vite](https://vitejs.dev/)** — Lightning-fast development tooling
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling framework
- **[TypeScript](https://www.typescriptlang.org/)** — For scalable, typed code
- **[React](https://reactjs.org/)** — Component-based UI rendering

## 🚀 Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## 📄 CV (static HTML in `public/cv/`)

The interactive CV mirrors the standalone CV project. After you update that repo, sync into `public/cv/` (`style.css`, `resume.js`, `script.js`, `index.html` using those paths), replace `public/Matthew-Gourd.pdf` with a fresh export, and keep certificate PDFs plus `matt-profile-photo2.png` next to the HTML.

## 📝 Syncing Substack content to the blog

The blog section displays posts from [mattgourd.substack.com](https://mattgourd.substack.com). The sync script fetches metadata (title, excerpt, publish date) for each post in the `SOURCE_POSTS` list in `scripts/sync-substack-posts.mjs` and writes it to `src/data/substackPosts.ts`.

The script only fetches posts explicitly listed in `SOURCE_POSTS` — it won't pick up new posts automatically.

### Add a new post

1. Open [Substack](https://substack.com) and go to **Posts**.
2. Click the post you want to add. The URL in the address bar will be `https://substack.com/home/post/p-123456789` — that's the internal post ID.
3. Add that URL to the `SOURCE_POSTS` array in `scripts/sync-substack-posts.mjs`:

   ```javascript
   const SOURCE_POSTS = [
     // ... existing posts ...
     'https://substack.com/home/post/p-XXXXXXXX',  // new post
   ];
   ```

4. Run the sync:

   ```bash
   npm run sync:substack
   ```

5. Rebuild and deploy.

### Refresh existing post data

If a post's title, excerpt, or date has changed on Substack, just run the sync — it re-fetches all posts in `SOURCE_POSTS`:

```bash
npm run sync:substack
```

### Sync all posts

To pull in every post from the public Substack API instead of using `SOURCE_POSTS`:

```bash
npm run sync:substack -- --all
```

This overwrites `src/data/substackPosts.ts` with all published posts, sorted alphabetically by title.
