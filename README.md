# Interactive Resume — Tedi Lowney

A Next.js interactive resume. Paper aesthetic on the surface; click a bullet point to reveal the full story.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Framer Motion
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating copy

All story content lives in one file: **`src/data/stories.ts`**

Each story has:
- `chapter` — small label at the top (e.g. "Scale & Impact")
- `headline` — the big statement
- `body` — the narrative paragraph
- `visual` — either a `stat` (numbers) or `flow` (step diagram)
- `tags` — tech/topic tags shown at the bottom
- `media` — title + description for the media card

To add a story to a bullet, give the bullet a `storyId` in `Resume.tsx` and add the matching story to `stories.ts`.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — that's it

Every `git push` to `main` auto-deploys.
