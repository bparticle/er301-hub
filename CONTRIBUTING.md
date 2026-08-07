# Contributing content

Everything on the hub — projects, units, docs — is a markdown file with a YAML frontmatter header, plus whatever images/packages it references in `static/`. There is no admin panel: you add content by committing files and opening a pull request.

The fastest way to get unstuck is to read **[`content/projects/example.md`](content/projects/example.md)** — it's a working, fully-annotated template for everything below, and it's also live at `/projects/example` (not listed on the homepage) so you can see how each field renders.

## Add a project (package)

1. Create `content/projects/<your-slug>.md`. Copy the frontmatter block from `content/projects/example.md` and fill it in:

   ```yaml
   ---
   title: My Project
   description: One-line description
   author: your_OD_forum_username # exact match, used to fetch your forum avatar
   compatibility: { v05: false, v06: true }
   contact: https://forum.orthogonaldevices.com/u/your_username/summary
   link: https://github.com/you/your-repo
   github: # optional — enables a live "latest release" download button
     path: you/your-repo
     tagRegex: ^my-project.*$
   latest version: v1.0.0
   files:
     - my-project-1.0.0.pkg
   units:
     - { name: My Unit, category: Sequencer, docs: true }
     - { name: Other Unit, category: Filter }
   ---
   ```

   - `category` should reuse an existing category (check other files under `content/projects/`) unless your unit genuinely doesn't fit one.
   - Set `docs: true` on a unit only if you're also adding a dedicated doc page for it (see below) — it changes the unit tag into a link to `/docs/<slug>/<unit-name>`.

2. Write the markdown body below the frontmatter — this becomes the content of the project page. You can:
   - Reference images with `<md-img src="<your-slug>/filename.png" alt="">` (put the file in `static/images/<your-slug>/`).
   - Embed a YouTube video with `<div class="yt-embed"><youtube :video-id="'VIDEO_ID'"></youtube></div>`.
3. Drop the actual downloadable package file(s) into `static/packages/`, matching the names listed in `files:`.
4. Open a PR.

## Add a unit doc page

Only needed for units you flagged `docs: true`. Create `content/docs/<project-slug>/<unit-name>.md`, lowercased with spaces replaced by hyphens (e.g. unit "My Unit" → `my-unit.md`):

```yaml
---
title: My Unit
description: What it does, one line
author: your_OD_forum_username
project: <project-slug> # must match the parent project file's slug
---

Longer writeup, parameter reference, patch examples, images (`<md-img>` works here too), etc.
```

See `content/docs/lojik/and.md` for an example that includes a parameter table.

## Local preview

```
npm install
npm run dev
```

Open http://localhost:3000 — your new project/unit pages are live-reloaded from the `content/` files.

## Where things live

| What | Where |
| --- | --- |
| Project pages | `content/projects/*.md` |
| Unit doc pages | `content/docs/<project-slug>/<unit>.md` |
| Downloadable packages | `static/packages/` |
| Images referenced by `<md-img>` | `static/images/<project-slug>/` |

Full field-by-field reference and site architecture: see [`CLAUDE.md`](CLAUDE.md).
