# ER-301 community hub

https://er301-hub.netlify.app/

this site is a proof of concept, or rather a testing environment for our quest to find a way to easily share code, patches, presets and packages for the ER-301 sound computer. The original forum discussion is here [Package management, distribution, organization - V0.6](https://forum.orthogonaldevices.com/t/package-management-distribution-organization-v0-6/5280?u=bparticle)

## Nuxt content

For managing and displaying content from different contributors, we are using the [Nuxt content submodule](https://content.nuxtjs.org/). Contributors can pull the code, add their files to the static assets folder and add a simple yaml file with metadata. the code and manually add their content in subfolders.

Detailed documentation in our [Wiki](https://github.com/bparticle/er301-hub/wiki)

## Netlify

The master branch is continuously deployed on Netlify. As soon as the pull request is merged the changes are live. 🎉
## Organization

Organizing the different packages, units, presets and matching them with different firmware versions is currently what I'm trying to conceptualize in my head. Stay tuned. 😁
