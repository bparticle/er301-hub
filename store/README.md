# Store

`index.js` is a small Vuex store used only for the category filter UI on the project index/project pages: it holds the pastel color palette (`plugins/pastels.js`) and the set of unit categories, randomly colored per session. It is not the source of project/unit data — pages fetch that directly from `@nuxt/content` in `asyncData`. See [`CLAUDE.md`](../CLAUDE.md).
