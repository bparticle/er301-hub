# Plugins

- `fetchGitHub.js` — injects `$fetchGitHub(project)`, used by the project index's "Download" button to resolve a project's latest GitHub release from its `github.path`/`tagRegex` frontmatter.
- `vueMoment.js`, `lodash.js`, `youTubeEmbed.js` — third-party plugin registration (`vue-moment`, `lodash`, `vue-youtube-embed`).
- `pastels.js` — the color palette used for category filter tags (imported directly by `store/index.js`, not registered as a Nuxt plugin).
- `wantedList.js` — anonymized backer/donation data for the retired `pages/wanted.vue` page; not wired into `nuxt.config.js`, kept for historical record.
