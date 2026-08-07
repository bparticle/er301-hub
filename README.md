# ER-301 Hub

[![Netlify Status](https://api.netlify.com/api/v1/badges/fb3a943f-637d-4eca-a6f8-a9c35343960d/deploy-status)](https://app.netlify.com/sites/er301-hub/deploys)

**https://er301-hub.netlify.app/**

A community hub for the [Orthogonal Devices ER-301](https://www.orthogonaldevices.com/er-301) sound computer: a catalog of community-made **custom units** (plugins), organized into **projects/packages**, with per-unit documentation, presets and a shared sample archive ([CardOne](https://er301-hub.netlify.app/card-one)). The goal is to give ER-301 developers and users one place to find, document and download each other's work.

Background/origin: [Package management, distribution, organization - V0.6](https://forum.orthogonaldevices.com/t/package-management-distribution-organization-v0-6/5280?u=bparticle) on the O|D forum.

## How it works

There's no database or admin panel — the site is a static [Nuxt 2](https://v2.nuxt.com/) app, and every project and unit doc is a markdown file with a YAML frontmatter header, managed through [`@nuxt/content`](https://content.nuxtjs.org/v1). Contributors add their project as a markdown file plus a package/images in `static/`, and open a pull request. The `master` branch is continuously deployed on [Netlify](https://app.netlify.com/sites/er301-hub) — merged PRs go live automatically.

**Want to add your project, unit or preset?** See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the step-by-step guide, or look at [`content/projects/example.md`](content/projects/example.md), a live annotated template.

For a fuller architecture/reference doc (page-by-page breakdown, frontmatter schema, conventions) — including for AI coding assistants — see [`CLAUDE.md`](CLAUDE.md).

## Local development

```
npm install
npm run dev
```

Runs at http://localhost:3000/ with live reload on both app code and `content/` changes.

Other scripts: `npm run generate` (static build, what Netlify runs), `npm run build` / `npm run start` (SSR-style build/serve).

> On Node 17+ you may hit `error:0308010C:digital envelope routines::unsupported` (a known Nuxt 2/webpack 4 vs. OpenSSL 3 issue). Prefix the command with `NODE_OPTIONS=--openssl-legacy-provider` if so.

## Project structure

```
content/projects/   one markdown file per project/package (the catalog)
content/docs/        optional deep-dive doc per unit, grouped by project slug
static/packages/    the actual downloadable .pkg files
static/images/       images referenced from content via <md-img>
pages/               routes (project index, project page, unit docs, firmware, ...)
components/          Vue components (Nav, Avatar, MdImg, Logo)
store/               small Vuex store (category filter colors)
```

## Organization

Categorizing units/packages and matching them against ER-301 firmware versions (v0.5 vs v0.6) is an ongoing, evolving effort — see the `compatibility` field on each project and the category tags on the project index.

## Links

- [O|D forum](https://forum.orthogonaldevices.com/)
- [Official ER-301 docs](https://docs.orthogonaldevices.com/er-301/)
- [Project wiki](https://github.com/bparticle/er301-hub/wiki)
- [Report an issue](https://github.com/bparticle/er301-hub/issues)
