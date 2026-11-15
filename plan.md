# Plan: Restructure pisanie.dev for open source + Wayback-ready SSG

## Goal

- Merge the current **Home** and **Contact** pages conceptually: the **Home** page becomes an open-source/GitHub-focused landing, while the **Contact** page is renamed **"About me"** and keeps the social links + contact form plus a short bio.
- Keep the site fully multilingual (English + Polish).
- Reduce JavaScript-dependence at capture time so the Internet Archive’s Wayback Machine can scrape real content by switching the build to Quasar **SSG** (Static Site Generation).
- Work on branch `dev/home-about-merge`.

## Data sources used

- GitHub API: 19 public repos under `Asura-Codes`.
- Career KB: 45 products / 181 records; confirmed strong focus on C/C++, Go, Python, embedded/MCU, messaging (MQTT/NATS/ZeroMQ), industrial protocols, data pipelines, Vue/TypeScript.

## Proposed new information architecture

| Route (history mode) | Page file        | Purpose                                                                                   |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------- |
| `/`                  | `IndexPage.vue`  | Open-source landing: hero, interests, featured GitHub projects, link to full GitHub page. |
| `/about`             | `AboutPage.vue`  | Former contact page renamed; social links, short bio, Google-Forms contact form.          |
| `/github`            | `GithubPage.vue` | Existing full project/resource list (unchanged).                                          |
| `/work`              | `WorkPage.vue`   | Existing work experience (unchanged).                                                     |
| `/stack`             | `StackPage.vue`  | Existing stack page (unchanged).                                                          |

## Files to create

1. `src/pages/AboutPage.vue` (rename/rework of `ContactPage.vue`)
2. `src/i18n/en-US/about.ts` and `src/i18n/pl-PL/about.ts`
3. `src-ssg/ssg-renderer.ts`
4. `src/router/routes.ts` updated route list

## Files to modify

1. `src/pages/IndexPage.vue` — replace generic portfolio/home content with open-source focused content.
2. `src/layouts/MainLayout.vue` — rename nav link `contact` → `about`; guard `localStorage` for SSR/SSG.
3. `src/i18n/en-US/home.ts` and `src/i18n/pl-PL/home.ts` — new home content.
4. `src/i18n/en-US/index.ts` and `src/i18n/pl-PL/index.ts` — import `about` instead of `contact`.
5. `src/i18n/en-US/nav.ts` and `src/i18n/pl-PL/nav.ts` — change `contact` key to `about`.
6. `src/router/routes.ts` — `/about` instead of `/contact`; `vueRouterMode: 'history'` in `quasar.config.ts`.
7. `quasar.config.ts` — enable SSG (`ssg` block), update i18n plugin `ssr` flag, maybe bump Quasar version if SSG requires it.
8. `package.json` — `build` → `quasar build -m ssg`, `deploy` → `dist/ssg`.
9. Delete `src/pages/ContactPage.vue`, `src/i18n/en-US/contact.ts`, `src/i18n/pl-PL/contact.ts`.

## Content outline

### Home page (`home.ts`)

- `heroTitle` / `heroSubtitle`: Patryk Tomaszewski, full-stack/dev with open-source labs in Go, C++, Python, embedded, messaging.
- `interestsTitle`: areas of interest — distributed messaging, embedded systems, data pipelines, protocol tooling, LLM/agentic experiments.
- `projectsTitle`: featured open-source projects (6–8 cards), each with title, one-line description, tags, GitHub link.
  - agentic-lab
  - ft232rl-protocol-probe
  - mcu-lab
  - go-zeromq-labs
  - nats-jetstream-laboratory
  - mosquitto-go-explorations
  - fluentbit-replication-lab
  - go-postgres-explorations
- CTA: link to `/github` and external GitHub profile.

### About me page (`about.ts`)

- `title`: About me / O mnie
- Short bio from current `home.aboutIntro` / `home.aboutJourney`.
- Social links (GitHub, LinkedIn, Facebook).
- Google Forms contact form (existing logic, relabeled).

## Wayback / SSG strategy

- Switch router from hash mode to **history mode** so each route can become a real HTML file.
- Add Quasar SSG configuration + `src-ssg/ssg-renderer.ts` listing routes `/`, `/about`, `/work`, `/github`, `/stack`.
- Build output moves from `dist/spa` to `dist/ssg`.
- Guard all browser-only APIs (`localStorage`, `window`) so SSG build does not crash in Node.
- After build, verify that `dist/ssg/index.html`, `dist/ssg/about/index.html`, etc. contain real text content (not just `<div id="app"></div>`).

## Verification

- `npm install` succeeds.
- `npm run lint` passes.
- `npx vue-tsc --noEmit` passes.
- `npm run build` (SSG) completes and outputs `dist/ssg`.
- Spot-check generated HTML files contain visible text (hero, project titles, about text).
- `npm run format` run at the end.

## Notes / risks

- Quasar SSG requires Quasar UI ≥ 2.22. The repo pins `^2.16.0`; we may need to bump to `^2.22.0` and run `npm install`.
- SSG runs code at build time; `localStorage` access in `MainLayout.vue` must be wrapped.
- GitHub Pages has no server fallback; generating all routes as directories covers the known routes, and Quasar SSG also creates `404.html`.
