
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
                <div class="unit-list tags pb-2">
                  <span
                    class="unit tag is-light"
                    v-for="unit in units"
                    :key="unit.name"
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
                  v-for="file in project.files"
                  :key="file"
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
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  },
  computed: {
    units: function () {
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