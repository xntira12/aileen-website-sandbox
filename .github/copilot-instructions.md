<!-- Copilot/AI agent instructions for the Aileen Website (Vite + React + Tailwind) -->

# Goal
Be immediately productive in this repository: small React site scaffolded with Vite, Tailwind and ESLint.

# Key facts (quick)
- Framework: React 19 (ESM project; see `package.json` "type": "module").
- Dev server: Vite (`npm run dev` → `vite`).
- Build: `npm run build` (Vite build). Preview: `npm run preview`.
- Linting: `npm run lint` (ESLint configured in `eslint.config.js` for .js/.jsx).
- CSS: Tailwind entry at `src/index.css`; config in `tailwind.config.js` and `postcss.config.js`.

# Project structure and conventions
- Entrypoint: `src/main.jsx` mounts `App` from `src/App.jsx`.
- UI: Tailwind utility classes are used directly in JSX (see `src/App.jsx`). Prefer short, semantic component wrappers but keep utilities for layout.
- File extensions: use `.jsx` for React components in this repo (ESLint and tooling expect JSX files).
- Directories: `src/components`, `src/layouts`, `src/pages` exist as intended places for UI code (currently empty). Add reusable units to `src/components`.
- Static assets: use `src/assets/*` for imports and `public/` for raw static files served at root.

# Coding patterns to follow (observable from repo)
- Keep components default-exported (current `App.jsx` uses default export).
- Tailwind classes live in component JSX; global tokens and base styles live in `src/index.css`/`src/App.css`.
- When adding new JSX files, ensure Tailwind picks them up (glob in `tailwind.config.js` covers `./src/**/*.{js,ts,jsx,tsx}`).
- Avoid adding TypeScript unless you update `package.json`, ESLint and add type config (this repo is JS-first; TS types are present as dev deps but not wired).

# Tooling notes & debugging
- Vite plugin: `@vitejs/plugin-react` is used (see `vite.config.js`) — HMR/Fast Refresh expected.
- If `npm run dev` fails, check terminal output for Vite error details; common fixes: missing `root` element in HTML or syntax errors in JSX.
- Lint behavior: ESLint ignores `dist` (see `eslint.config.js`) and uses a `no-unused-vars` override that ignores names matching `^[A-Z_]` (useful for global constants/React components).

# When you edit build/config
- Update these files when changing tool behavior: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `package.json` scripts, and `eslint.config.js`.
- For adding TypeScript: add `tsconfig.json`, update `tailwind.config.js` content globs (already includes `ts,tsx`) and adjust ESLint settings.

# Example tasks and how to complete them
- Add a component: create `src/components/Header.jsx`, default-export `Header`, import in `src/App.jsx`, use Tailwind classes.
- Add a page: add `src/pages/Home.jsx` and (optionally) a basic router; there is no router currently included — install `react-router-dom` if routing is needed.
- Add image asset: place in `src/assets/img/...` and import `import logo from '../assets/img/home/logo.png'` in JSX.

# Files to inspect for context
- `package.json` (scripts & deps)
- `vite.config.js` (dev/build behavior)
- `tailwind.config.js` and `postcss.config.js` (CSS pipeline)
- `eslint.config.js` (linting rules)
- `src/main.jsx`, `src/App.jsx`, `src/index.css` (bootstrap + styling examples)

# Final note
Keep changes minimal and idiomatic to the current scaffold: `.jsx` components, Tailwind utility-first styling, Vite dev workflow. Ask for clarification on scope (add router, switch to TypeScript, or a component library) before making large structural changes.

-- End of file
