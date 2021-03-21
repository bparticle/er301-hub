
<template>
  <div class="container is-fluid home">
    <main class="content">
      <article>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child">
              <section class="section introduction">
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
                <div class="project__tags tags">
                  <span
                    v-for="cat in project.categories"
                    :key="cat"
                    class="tag is-light"
                    >{{ cat }}</span
                  >
                </div>
                <p class="description">
                  {{ project.description }}
                </p>
              </section>
              <section class="section units">
                <h2 class="subtitle">Units</h2>
                <ul class="unit-list">
                  <li class="unit" v-for="unit in orderedUnits" :key="unit">
                    {{ unit }}
                  </li>
                </ul>
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
    orderedUnits: function () {
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
</style>