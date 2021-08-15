
<template>
  <div class="is-fluid home">
    <article>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child">
            <section class="section introduction m-4 has-background-light">
              <h1 class="project__title">{{ project.title }}</h1>
              <div class="project__author">
                <a
                  class="project__author-link"
                  target="_blank"
                  :href="project.contact"
                >
                  <avatar :userName="project.author" />
                  <span class="project__author-name">{{ project.author }}</span>
                </a>
              </div>
              <a :href="project.link" class="project__link" target="_blank">{{
                project.link
              }}</a>
              <p class="description">
                {{ project.description }}
              </p>
            </section>
            <section class="section units pt-0">
              <h2 class="subtitle">Units</h2>

              <div class="tags" v-if="activeCats.length">
                <a
                  v-for="(category, index) in activeCats"
                  :key="category.category + index"
                  class="tag is-white"
                  @click="disableCat(category)"
                  ><span
                    class="tag__dot"
                    v-bind:class="{ 'tag__dot--active': category.active }"
                    v-bind:style="[
                      category.active
                        ? { backgroundColor: category.color }
                        : { backgroundColor: 'whitesmoke' },
                    ]"
                  ></span
                  >{{ category.category }}</a
                >
              </div>
              <div class="tags" v-if="passiveCats.length">
                <a
                  v-for="(category, index) in passiveCats"
                  :key="category.category + index"
                  class="tag is-white"
                  @click="enableCat(category)"
                  ><span
                    class="tag__dot"
                    v-bind:class="{ 'tag__dot--active': category.active }"
                    v-bind:style="[
                      category.active
                        ? { backgroundColor: category.color }
                        : { backgroundColor: 'whitesmoke' },
                    ]"
                  ></span
                  >{{ category.category }}</a
                >
              </div>
              <div class="unit-list tags pb-2">
                <a
                  class="unit tag is-medium is-light"
                  v-for="unit in units"
                  :key="unit.name"
                  :href="anchorLink(unit)"
                  v-bind:style="[
                    unit.active
                      ? { backgroundColor: unit.color }
                      : { backgroundColor: unit.colorPassive },
                  ]"
                >
                  {{ unit.name }}
                  <a class="unit__doc-link" v-if="unit.docs">
                    <svg
                      class="unit__icon"
                      v-if="unit.docs"
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <g>
                        <rect fill="none" height="24" width="24" />
                        <path
                          fill="#363636"
                          d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M16,12H8 c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0C17,11.55,16.55,12,16,12z M12,16H8c-0.55,0-1-0.45-1-1v0 c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v0C13,15.55,12.55,16,12,16z"
                        />
                      </g>
                    </svg>
                  </a>
                </a>
              </div>
            </section>
            <section class="content section pt-2">
              <nuxt-content :document="project" />
            </section>
          </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child">
            <section class="section download">
              <div class="gh-release" v-if="project.github.latest">
                <h2 class="gh-release__title">Latest GitHub release</h2>
                <button class="button is-rounded">
                  <a :href="project.github.latest.url">{{
                    project.github.latest.name
                  }}</a>
                </button>
                <p class="mt-4">
                  Published on
                  <strong>
                    {{
                      project.github.latest.published
                        | moment('dddd, MMMM Do YYYY')
                    }}</strong
                  >
                </p>
              </div>
              <h2 class="subtitle">Downloads</h2>
              <a
                class="download__link"
                v-for="(file, index) in project.files"
                :key="file + index"
                :href="'/packages/' + file"
                download
              >
                {{ file }}
              </a>
            </section>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, store, $axios }) {
    const project = await $content('projects', params.slug).fetch()
    project.files.sort().reverse()

    let github = project.github || {}
    project.github = github

    if (github.path) {
      let response = await $axios.$get(
        `https://api.github.com/repos/${github.path}/releases`
      )
      let releases = response || []

      let filtered = (() => {
        let regex = github.tagRegex
        if (!regex) return releases
        return releases.filter(
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
    console.log(project.github.latest);

    // Get unique categories
    var uniqueCats = []
    var projectCats = []
    for (let i = 0; i < project.units.length; i++) {
      const cat = project.units[i].category
      uniqueCats.push(cat)
    }
    uniqueCats = _.sortBy(
      uniqueCats.filter((e, i) => uniqueCats.indexOf(e) === i)
    )

    for (let k = 0; k < uniqueCats.length; k++) {
      projectCats.push({
        category: uniqueCats[k],
        active: false,
        color: store.state.pastels[k],
        colorPassive: 'whitesmoke',
      })
    }

    store.commit('addUniqueCats', { projects: project, force: false })

    return { project, projectCats }
  },
  methods: {
    enableCat: function (cat) {
      this.$store.commit('enableCat', cat)
    },
    disableCat: function (cat) {
      this.$store.commit('disableCat', cat)
    },
    anchorLink: function (unit) {
      if (unit.docs === true) {
        return (
          '/docs/' +
          this.project.title.toLowerCase().replace(/\s/g, '-') +
          '/' +
          unit.name.toLowerCase().replace(/\s/g, '-')
        )
      } else {
        return '#' + unit.name.toLowerCase().replace(/\s/g, '-')
      }
    },
  },
  computed: {
    cats() {
      const cats = this.$store.state.cats
      if (cats.length === 0) {
        return this.projectCats
      } else {
        return cats.filter((cat) =>
          this.projectCats
            .map((projCat) => projCat.category)
            .includes(cat.category)
        )
      }
    },
    activeCats() {
      return this.cats.filter((cat) => cat.active)
    },
    passiveCats() {
      return this.cats.filter((cat) => !cat.active)
    },
    pastels() {
      return this.$store.state.pastels
    },
    units: function () {
      const cats = this.$store.state.cats
      if (cats.length != 0) {
        for (let i = 0; i < this.project.units.length; i++) {
          const unit = this.project.units[i]
          const cat = this.$store.state.cats.filter(
            (cat) => cat.category === unit.category.toLowerCase()
          )[0]
          unit.color = cat.color
          unit.active = cat.active
        }
      } else {
        for (let i = 0; i < this.project.units.length; i++) {
          const unit = this.project.units[i]
          unit.color = ''
          unit.active = false
        }
      }
      return this.project.units.sort()
    },
    avatar: function () {
      return (
        'https://forum.orthogonaldevices.com/user_avatar/forum.orthogonaldevices.com/' +
        this.project.author +
        '/50/3702_2.png'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.gh-release {
  &__title {
    &:before {
      margin-right: 5px;
      content: url('/GitHub-Mark-32px.png');
    }
  }
}
.project {
  &__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  &__author {
    &-link {
      display: flex;
      margin-bottom: 0.5rem;
    }

    &-avatar {
      max-width: 25px;
      border-radius: 5px;
    }
  }

  &__link {
    margin-bottom: 1rem;
    display: block;
  }
}

.tags {
  border-bottom: 2px solid #f5f5f5;
  margin-bottom: 0.5rem !important;
}

.unit {
  &__icon {
    margin-left: 0.5rem;
  }
}

.tag {
  &.is-white {
    padding: 0;
  }
  &__dot {
    &--active {
      width: 15px;
      height: 15px;
      border-radius: 3px;
      margin: 0 0.5rem 0 0;
    }
  }
}

.unit {
  &__doc-link {
    display: flex;
  }
}
.unit-list {
  border-bottom: 2px solid #f5f5f5;
}

// Remove weird padding on markdown heading
// span.icon.icon-link {
//   display: none;
// }

// Responsive video embed
.section.videos {
  > div {
    position: relative;
    overflow: hidden;
    width: 100%;

    &:after {
      display: block;
      content: '';
      padding-top: 56.25%;
    }

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>