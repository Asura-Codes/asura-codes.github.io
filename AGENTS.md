# AGENTS.md

## Branch / deploy model

- `master` is the only source branch. `gh-pages` holds just the compiled SPA (`index.html`, `assets/`, `icons/`) and shares no history with `master` — never edit or merge it.
- Deploys are manual, with no CI: `npm run build` (SSG), then `npm run deploy` (`cpx CNAME dist/ssg && cd dist && gh-pages -d ssg`). `deploy` does **not** build, and it overwrites `gh-pages` from `dist/ssg`.
- Live site is pisanie.dev (`CNAME`). Quasar `publicPath` is `/` and the router is history mode; SSG generates `index.html` files for `/`, `/about`, `/work`, `/github`, and `/stack`.
- The GitHub repo's default branch is `gh-pages`, so clones may start on build output — `git switch master` before editing.

## Commands (use npm)

- `package-lock.json` is the lockfile, even though the README mentions yarn and `.npmrc` holds pnpm options.
- `npm install` runs `postinstall: quasar prepare`, generating `.quasar/tsconfig.json`; root `tsconfig.json` only extends it, so typechecking/Volar fails until install has run.
- `npm run dev` · `npm run build` (SSG) · `npm run lint` · `npm run format`.
- There is no test suite: `npm test` is a placeholder echo. Verify with `npm run lint` and `npx vue-tsc --noEmit`; `vite-plugin-checker` also runs ESLint + vue-tsc during dev/build.
- `lint` only scans `./src*/**/*.{ts,js,cjs,mjs,vue}`; root config files are not linted. Prettier: single quotes, 100 columns. EditorConfig: 2 spaces, LF.

## Multilingual requirement

- The site is bilingual: `en-US` and `pl-PL`. **English and Polish versions must always be kept in sync.**
- `en-US` is the TypeScript schema (`MessageSchema`); every key added, renamed, or removed there must be mirrored in `pl-PL` with the same structure.
- All copy changes, new pages, cards, labels, and project descriptions require both locales before the change is considered finished.

## Architecture notes

- Quasar v2.35+ + Vue 3.5+ (`<script setup lang="ts">`) + Vite 8, TypeScript strict (`quasar.config.ts` → `build.typescript.strict`). Boot files: `src/boot/i18n.ts`, `src/boot/axios.ts`. Pinia store factory: `src/stores/index.ts`. Routes in `src/router/routes.ts`, all lazy-loaded.
- Most page content is data in `src/i18n/{en-US,pl-PL}/*.ts`, rendered by `src/pages/*.vue`. Edit copy in both locales; `en-US` is the TS schema (`MessageSchema`), so `pl-PL` must keep the same shape.
- Adding a page requires a route in `routes.ts`, a drawer link in `src/layouts/MainLayout.vue`, and keys in both locale files.
- With `@quasar/app-vite` v3 use `@/` for `/src` and `#q-app` for Quasar wrappers. The old aliases (`src/`, `pages/`, `layouts/`, `boot/`, `#q-app/wrappers`) are removed.
- Default to SSG so the Internet Archive, search engines, and link previews receive real HTML instead of an empty SPA shell.
- During SSG/SSR the code runs in Node.js, so guard `localStorage`, `window`, and other browser APIs with `typeof window !== 'undefined'` (or `import.meta.env.QUASAR_CLIENT` once app-vite types are loaded).
- Dark mode (default on) and language persist in `localStorage`; images are served from `public/`.
- Static site only: no backend or API. `src/boot/axios.ts` is template boilerplate with a placeholder `baseURL`; `gapi-script`, `@auth/core`, and axios are unused outside it.
- GA4 (`G-RVTG4DL0EF`) is hardcoded in `index.html`.

## Verification and bug-finding

Run these checks before considering a change finished:

1. **Static analysis**
   - `npm install`
   - `npm run lint`
   - `npx vue-tsc --noEmit`

2. **Production build**
   - `npm run build` must complete with "Build succeeded" and render the expected routes.
   - After the build, inspect `dist/ssg/<route>/index.html` files for visible text (not just an empty `<div id="app"></div>`).

3. **Route coverage**
   - Verify every route in `src/router/routes.ts` has a matching entry in `src-ssg/ssg-renderer.ts`.
   - Check that drawer links in `src/layouts/MainLayout.vue` point to existing routes and use the correct `nav.*` i18n key.

4. **Multilingual parity**
   - For every change in `src/i18n/en-US/*.ts`, make sure `src/i18n/pl-PL/*.ts` has the same keys and structure.
   - Switch languages in the UI and confirm no missing-string keys appear.

5. **Browser-only API safety**
   - Search for `localStorage`, `window`, `document`, `navigator` outside guards. Any use during SSG/SSR build will crash the static generation.

6. **Visual / functional smoke tests**
   - `npm run dev` and exercise the drawer, language switcher, dark mode toggle, and every route.
   - Click every external link and CTA on the home page.
   - Submit the contact form on `/about` and confirm it prefills Google Forms correctly.

7. **GitHub Pages readiness**
   - Ensure `dist/ssg` contains a `404.html` and route directories (`about/index.html`, etc.).
   - Confirm `npm run deploy` copies `CNAME` into `dist/ssg` and pushes `dist/ssg`, not `dist/spa`.
