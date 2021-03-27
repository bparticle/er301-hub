
<template>
  <div class="container is-fluid home">
    <main class="content">
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
                    <span class="project__author-name">{{
                      project.author
                    }}</span>
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

                <div class="tags">
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
                <div class="tags">
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
                  <span
                    class="unit tag is-light"
                    v-for="unit in units"
                    :key="unit.name"
                    v-bind:style="[
                      unit.active
                        ? { backgroundColor: unit.color }
                        : { backgroundColor: unit.colorPassive },
                    ]"
                  >
                    {{ unit.name }}
                  </span>
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
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, store }) {
    const project = await $content('projects', params.slug).fetch()

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
            (cat) => cat.category === unit.category
          )[0]
          unit.color = cat.color
          unit.active = cat.active
        }
      } else {
        for (let i = 0; i < this.project.units.length; i++) {
          console.log(unit)
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

.download {
  &__link {
    display: block;
  }
}

.unit-list {
  border-bottom: 2px solid #f5f5f5;
}

// Remove weird padding on markdown heading
span.icon.icon-link {
  display: none;
}

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