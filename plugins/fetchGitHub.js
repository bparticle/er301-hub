import axios from 'axios'

export default ({ app }, inject) => {
    inject('fetchGitHub', project => {
        let github = project.github || {}

        async function getGitHub() {
            if (github.path) {
                let response = await axios.get(
                    `https://api.github.com/repos/${github.path}/releases`
                )
                let releases = response || []
                
                let filtered = (() => {
                    let regex = github.tagRegex
                    if (!regex) return releases
                    return releases.data.filter(
                        (release) =>
                            !!(release.name || '').match(regex) ||
                            !!(release.tag_name || '').match(regex)
                    )
                })()

                let compareByReleaseIdDesc = (left, right) => {
                    return right.id - left.id
                }

                github.latest = (() => {
                    let release = filtered.sort(compareByReleaseIdDesc)[0]
                    if (!release) return

                    let asset = (release.assets || [])[0]
                    if (!asset) return

                    return {
                        name: release.name,
                        published: release.published_at,
                        url: asset.browser_download_url,
                    }
                })()
            }
        }

        getGitHub().then(function () {
            return github.latest.url
        })

    })
}