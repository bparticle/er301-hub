# ER-301 community hub

[![Netlify Status](https://api.netlify.com/api/v1/badges/fb3a943f-637d-4eca-a6f8-a9c35343960d/deploy-status)](https://app.netlify.com/sites/er301-hub/deploys)

https://er301-hub.netlify.app/

this site is a testing environment for the Orthogonal Devices ER-301 sound computer community code hub. The goal of the app is organizing and sharing patches, presets, packages and documentation between users and developers. The original forum discussion is here [Package management, distribution, organization - V0.6](https://forum.orthogonaldevices.com/t/package-management-distribution-organization-v0-6/5280?u=bparticle)

## Nuxt content

For managing and displaying content from different contributors, we are using the [Nuxt content submodule](https://content.nuxtjs.org/). Contributors can pull the code, add their files to the static assets folder and add a simple yaml file with metadata. the code and manually add their content in subfolders.

Detailed documentation in our [Wiki](https://github.com/bparticle/er301-hub/wiki)

## Netlify

The master branch is continuously deployed on Netlify. As soon as the pull request is merged the changes are live. 🎉

## Organization

Organizing the different packages, units, presets and matching them with different firmware versions is currently what I'm trying to conceptualize in my head. Stay tuned. 😁

## Local testing

run `npm install` and then `npm run dev` in the folder to run Nuxt locally. The default port is http://localhost:3000/
