# AI maintenance guide

This repository is the production source for the mobile-first support site for
Glucoseman in Yuru-Chara Grand Prix 2026. Read this file before changing code.

## Product intent

- Campaign concept: 「グルコースマンを、12万票で完全召喚する。」 Summoning means
  gathering 120,000 votes so that people and the character grow together. It is
  **not** a measure of how finished the physical costume is. Never describe the
  summon rate as production progress.
- Summon rate = `currentPoint / targetPoint * 100`, shown with one decimal.
- Primary goal: encourage one vote per day for Glucoseman.
- Official identity: Hyogo / Himeji no Tane / Glucoseman / Entry No.111.
- Official ranking source: https://yurugp.jp/vote/2026
- Official vote page: https://yurugp.jp/characters/4524
- Target: 120,000 PT.
- Production Sites URL: https://glucoseman-2026.y-hioki207703.chatgpt.site/
- GitHub Pages mirror: https://budouchan.github.io/glucoseman-website/
- GitHub repository: https://github.com/budouchan/glucoseman-website

## Design requirements

- Treat the site as smartphone-first. Preserve the compact single-column layout.
- The visual source of truth is the supplied `イメージ.png` reference. Do not
  overwrite, optimize, stage, or replace that user-owned file unless explicitly
  requested.
- Keep the dark purple textured background, distressed white headings and the
  yellow CTAs.
- The first view shows Glucoseman in his finished form. Do not crop off the feet
  and do not tint, mask or partially fill the character to express progress —
  progress belongs to the meter and the summon board, never to the artwork.
- `app/hero-character.ts` selects the first-view artwork. The bundled
  `public/glucoseman.png` is the uncoloured line drawing kept from the previous
  design; replace it with the colour artwork when that file is supplied.
- `public/aim-12000-banner.png` reads 「12,000PT」 while the goal is 120,000PT, so
  it is no longer rendered. Do not put it back without corrected artwork.
- Summon percentage is shown with one decimal place, for example `0.5%`.
- Mobile browser chrome uses `#250760`; keep `app/layout.tsx`, `app/globals.css`,
  and `public/manifest.webmanifest` aligned if this color changes.
- The header intentionally has no hamburger icon or `メニュー` label.
- Preserve Japanese copy unless the user explicitly asks to change it.

## Source map

- `app/page.tsx`: composes the sections in order and computes the summon rate.
- `app/sections/*`: one file per page section, in reading order — summon stage,
  meter, vote call, summon board, about, how to vote, story, footer, sticky CTA.
- `app/globals.css`: all responsive layout and visual styling.
- `app/layout.tsx`: metadata, OGP, viewport, theme color, PWA metadata.
- `app/share-button.tsx`: native share interaction and fallback behavior.
- `app/site-links.ts`: outbound URLs, asset prefixing, social links.
- `app/hero-character.ts`: first-view artwork.
- `app/summon-parts.ts`: the seven vote bands behind the summon board.
- `app/story-media.ts`: photo slots for the narrative sections.
- `app/campaign-data.json`: latest verified official snapshot.
- `app/campaign-data.ts`: snapshot validation and Sites runtime fallback.
- `scripts/update-campaign-data.mjs`: official ranking scraper.
- `.github/workflows/sync-ranking.yml`: daily official-data update.
- `.github/workflows/deploy-pages.yml`: GitHub Pages build and deployment.
- `public/og.png`: social preview image.

## Official data synchronization

- GitHub Actions runs at 03:00 UTC / 12:00 JST every day.
- The scraper must verify all four identity markers before accepting data:
  `兵庫県`, `姫路の種`, `グルコースマン`, and `エントリーNo.111`.
- It extracts rank and PT only after the identity check. On parse/fetch failure,
  fail the workflow and keep the last valid snapshot; never write guessed values.
- When points change, the old `currentPoint` becomes `previousPoint`, which drives
  the `前回更新比` display. If points do not change, preserve `previousPoint`.
- Sites fetches the latest GitHub snapshot with `cache: "no-store"` and falls back
  to the bundled JSON if GitHub is unavailable.
- A changed snapshot explicitly dispatches the Pages deployment workflow because
  commits made by `GITHUB_TOKEN` do not trigger a normal push workflow.
- Do not manually edit official rank or points except as an emergency, verified
  recovery. Keep `targetPoint` at 120000 unless the user changes the campaign goal.

## Summon board

- `app/summon-parts.ts` splits `targetPoint` into seven equal vote bands, one per
  costume part. Votes unlock the parts; costume production does not.
- Derive the board from `currentPoint` only. Never hardcode which parts are done.
- Changing the part names or the count is a one-file edit. Keep the count and the
  copy in `sections/summon-board.tsx` consistent.

## Content and future extensions

- Every sentence in the story and about sections comes from material the site
  owner supplied. Do not invent biography, dates, or campaign history.
- `app/story-media.ts` holds photo slots. A slot with `src: null` renders nothing,
  so the page never shows an empty frame. Fill a slot only when the real file is
  committed under `public/`, and use `note` to label renders or mock-ups.
- Planned but deliberately unbuilt: NFT and OpenSea, the Roblox game, AI music,
  NFC-linked dolls, and the supporters behind each part. `sections/about-glucoseman.tsx`
  mentions them as plain keywords; turn those into links when the pages exist.
  Supporter and doll data belongs at the end of `sections/story.tsx`, loaded the
  same way `campaign-data.ts` loads its snapshot.
- Do not add these features on your own initiative. The vote path comes first.

## Safe editing workflow

1. Inspect `git status` first. Preserve unrelated user changes.
2. Edit with focused patches; do not rewrite or replace the working architecture.
3. Run `npm run build` after every source change.
4. For GitHub Pages-specific changes, also verify the static build with:
   `GITHUB_ACTIONS=true NEXT_PUBLIC_BASE_PATH=/glucoseman-website NEXT_PUBLIC_SITE_URL=https://budouchan.github.io/glucoseman-website npx next build`
5. Commit only files belonging to the requested change. Never include `イメージ.png`
   merely because it is modified.
6. Push `main` to the `github` remote. The Pages workflow publishes it.
7. This project also contains `.openai/hosting.json`; when working in Codex Sites,
   follow the Sites build and hosting instructions and deploy the exact validated
   commit to the existing project. Never create a replacement project.

## Local commands

- Install: `npm ci`
- Develop: `npm run dev`
- Validate: `npm run build`
- Lint: `npm run lint`
- Run the official sync manually: `node scripts/update-campaign-data.mjs`

The manual sync requires network access and modifies `app/campaign-data.json`.
Review its diff before committing.

## Guardrails

- Do not invent official points, rank, URLs, or campaign rules.
- Do not remove the official-data validation to make a failed scrape pass.
- Do not add authentication, a database, analytics, or third-party services unless
  explicitly requested.
- Do not expose repository credentials, deployment tokens, or environment secrets.
- Keep external links accessible and preserve meaningful alt text and progressbar
  attributes.
- Avoid redesigning unrelated sections while making a targeted change.

