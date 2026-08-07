# ER-301 Hub

Community hub for the [Orthogonal Devices ER-301](https://www.orthogonaldevices.com/er-301) sound computer. It catalogues community-made **custom units** (plugins), grouped into **projects/packages**, along with docs, presets and a sample archive. Content is contributed via pull request as flat markdown/YAML files — there is no database and no CMS backend.

Live site: https://er301-hub.netlify.app/
Origin/discussion: [Package management, distribution, organization - V0.6](https://forum.orthogonaldevices.com/t/package-management-distribution-organization-v0-6/5280) (Orthogonal Devices forum)

## Stack

- **Nuxt 2** (`ssr: false`, `target: 'static'`) — statically generated with `nuxt generate`, deployed to **Netlify** on every push to `master`.
- **@nuxt/content v1** — the content layer. Every `.md` file under `content/` becomes a queryable "document" (YAML frontmatter = fields, markdown body = rendered content). This is effectively the site's database.
- **Bulma** (`@nuxtjs/bulma`) for CSS, **Vuex** for the small bit of client state (category filter colors), `@nuxtjs/axios` for GitHub API calls, `@nuxtjs/pwa`.
- No TypeScript, no test suite, no linter wired into `npm run` scripts (prettier config exists but isn't enforced by a script).

## Commands

```
npm install
npm run dev        # http://localhost:3000
npm run generate    # static build, same as what Netlify runs (npm run build for SSR-style build)
npm run start        # serve a build (requires build, not generate)
```

There is no test or lint command configured.

## The content model (the part that matters most here)

This repo exists to be filled in with community content. Two content collections, driven entirely by files:

### `content/projects/<slug>.md` — one per project/package

YAML frontmatter, then a markdown body rendered on `/projects/<slug>` via `<nuxt-content>`. **`content/projects/example.md` is a live, annotated template** — read it first when adding or explaining a project; don't duplicate its comments elsewhere.

Key frontmatter fields:
- `title`, `description`, `author` (must match the user's exact Orthogonal Devices forum username — the avatar is fetched from `forum.orthogonaldevices.com/user_avatar/.../<author>/...`), `contact`, `link`
- `compatibility: { v05: bool, v06: bool }` — ER-301 firmware compatibility
- `github: { path: 'user/repo', tagRegex: '^prefix.*$' }` (optional) — if present, the project page fetches the matching latest GitHub release via the GitHub REST API client-side
- `latest version`, `files` (array of `.pkg` filenames — the actual files must exist in `static/packages/`)
- `units`: array of `{ name, category, docs: true|false }`. `docs: true` links the unit to a deep-dive page at `/docs/<project-slug>/<unit-name-kebab-case>`.
- Markdown body can embed images with the custom `<md-img src="<slug>/file.png" alt="">` component, which resolves against `static/images/<slug>/`, and YouTube embeds via `<youtube :video-id="'...'">`.

### `content/docs/<project-slug>/<unit-name>.md` — optional per-unit deep dive

Only needed for units with `docs: true`. Frontmatter: `title`, `description`, `author`, `project` (must equal the parent project's slug — used for the "Back to project" link).

### Supporting static assets

- `static/packages/` — the actual downloadable `.pkg` files referenced by a project's `files:` list.
- `static/images/<slug>/` — images referenced by `<md-img>`.

When asked to "add a project" or "add a unit", the shape to produce is: a `content/projects/<slug>.md` file (copy `example.md`'s frontmatter shape), optionally one `content/docs/<slug>/<unit>.md` per documented unit, plus any images/packages dropped in the matching `static/` subfolder.

## Pages (`pages/`)

- `index.vue` — project index with search + category-tag filtering (reads `content/projects`).
- `projects/_slug.vue` — single project page; fetches latest GitHub release client-side if `github.path` is set.
- `docs/_.vue` — single unit-doc page (catch-all route, reads `content/docs`).
- `firmware.vue` — pulls ER-301 firmware releases live from `odevices/er-301` on GitHub.
- `card-one.vue`, `about.vue` — static info pages (CardOne is a community sample archive hosted on Google Drive, linked not embedded).
- `unsorted.vue` — pulls a public Google Sheet (unsorted forum project ideas) client-side via `fetch`.
- `wanted.vue` — retired "Bounty Hunter's WANTED" page. **Not linked from `components/Nav.vue` anymore** (removed per commit `f402b65`) but the file and its data (`plugins/wantedList.js`, anonymized backer/donation records) are still in the tree. Treat as dead/historical unless told otherwise.

## State (`store/index.js`)

Minimal Vuex store: unit categories + a pastel color palette (`plugins/pastels.js`) randomly assigned per category for the filter tags on the index/project pages. Note: `pages/index.vue` calls `store.commit('addAllProjects', ...)` but no such mutation is defined in `store/index.js` — it's a silent no-op (Vuex just warns), not a real data path. Don't assume project data flows through the store; pages fetch directly via `$content` in `asyncData`.

## Conventions

- 2-space indent, no semicolons, single quotes (`.prettierrc`, `.editorconfig`) — not enforced by CI, just match the existing style.
- Prefer editing an existing content file's shape over inventing new frontmatter keys; the frontend code (`pages/projects/_slug.vue`, `pages/index.vue`) reads specific field names (`units[].category`, `files`, `github.path`, etc.) and will silently ignore anything it doesn't expect.
