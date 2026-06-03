# Siege Field Notes

A current-meta operator and map guide for **Tom Clancy's Rainbow Six Siege**, built as a single self-contained React component. Pick a map to see the strongest operators on it — attack and defense — with concise notes on what to actually do with each, plus the highest-impact ban per side.

Built for patch **Y11S2 "Operation System Override."**

> Unofficial fan project. Not affiliated with or endorsed by Ubisoft.

---

## Features

- **Interactive map grid** — click any of the 18 ranked-pool maps (including the new Calypso Casino) to open its detail view.
- **Top operators per map** — each map lists its best attackers and defenders, split into Attack / Defense tabs, with a one-line "what to do" for every pick (where to push, when to use the gadget, what to hold).
- **Per-map bans** — the single highest-impact ban on each side for every map.
- **Overall Meta tab** — the strongest attackers and defenders across the whole pool, independent of map.
- **Fully self-contained** — every map image and all 23 operator icons are embedded directly in the file as base64 data URIs, so it renders anywhere with no external image requests or broken links.

## Tech

- **React** (functional component, hooks) — single file, default export.
- Inline styles; no CSS framework or build-time styling needed.
- Fonts: **Oswald** + **DM Sans** via Google Fonts.
- Artwork embedded as base64 (no `localStorage` / external assets).

## Running locally

The guide is one React component (`siege-map-guide.jsx`). The quickest way to run it:

```bash
npm create vite@latest siege-field-notes -- --template react
cd siege-field-notes
npm install
```

Then drop `siege-map-guide.jsx` into `src/`, import it in `src/App.jsx`:

```jsx
import SiegeGuide from "./siege-map-guide.jsx";

export default function App() {
  return <SiegeGuide />;
}
```

```bash
npm run dev
```

## Deploying to GitHub Pages

```bash
npm install --save-dev gh-pages
```

In `vite.config.js`, set the base to your repo name:

```js
export default defineConfig({
  plugins: [react()],
  base: "/your-repo-name/",
});
```

Add to `package.json`:

```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

Then:

```bash
npm run deploy
```

…and enable Pages on the `gh-pages` branch in your repository settings.

## Data & credits

- Meta picks, tier calls, and ban recommendations are compiled from the Ubisoft Y11S2 Designer's Notes, Ubisoft ban-rate data, [siege.gg](https://siege.gg), and community consensus (r/Rainbow6).
- Map and operator artwork is property of **Ubisoft Entertainment**, used here for a non-commercial fan reference.

## Disclaimer

Operator, tier, and ban calls are **opinions, not rules** — the right pick always depends on the enemy team, and the meta shifts every patch. The guide reflects the launch-week picture of Y11S2; the newest balance changes (especially the Dokkaebi rework) will firm up over the following weeks. Calypso Casino picks are tentative until the map settles into the rotation.
