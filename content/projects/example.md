---
# Start the yaml frontmatter with three hyphens
title: Example
description: Description of Example project
author: OD_forum_username # If you use the exact OD forum username then the avatar will be fetched from the forum
compatibility: { v05: false, v06: true } # object with two keys and boolean values: v05 and v06
contact: https://forum.orthogonaldevices.com/u/tomf/summary # Just a link to wherever you can be contacted
link: https://github.com/tmfset/er-301-custom-units # Another link, to the project source or
github: # OPTIONAL: GitHub releases
  path: tmfset/er-301-custom-units # GitHub user name and repository name
  tagRegex: ^releasename.*$ # regex by which the package can be found (^ = starts with, .*$ = any extension)
latest version: v1.0.0 # name of the latest release for quick lookup in the index
files: # A list of files that you have uploaded in /static/packages
  - my-project-0.1.0.pkg
  - my-project-0.1.0.pkg
units: # A list of units with categories. If possible, use existing categories unless you have something that deserves its own
  - { name: My unit, category: Sequencer, docs: true } # Object with two required keys: name and category. "docs" is optional: if set to true, then you can link to a dedicated documentation page in /content/docs/my-project/name-of-unit.md
  - { name: Other unit, category: Sequencer }
  - { name: Last unit, category: Latch }
# End frontmatter with three hyphens
---

## Example project

This project is not listed on the home page but you can access it directly at http://er301-hub.netlify.app/projects/example

This markdown file is intended for short inline unit descriptions and docs. Units will be listed on top of the project page and automatically link to headers that bear the same name as the unit. For example the "Other unit" unit title will link to the next header

## Other unit

You can use images, provided you have added them to the `/static/images` folder with the following syntax:

<md-img src="my-project/exampleimg.jpg" alt=""></md-img>

And you can use YouTube videos like this:

<div class="yt-embed">
  <youtube :video-id="'66MMMyfIy50'"></youtube>
</div>

## Last unit

For longer documentation, patch examples and demos, it might be fun to experiment with the dedicated documentation pages. You can add a markdown page in the `/content/docs/example` folder (that may need creating if it doesn't exist) with the same name as your unit. Sanitize the unit name by using only lowercase characters and replacing spaces with hyphens.
