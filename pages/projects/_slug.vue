
<template>
  <div class="container is-fluid home">
    <main class="content">
      <article>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child">
              <section class="section introduction">
                <h1 class="project__title">{{ project.title }}</h1>
                <span class="project__author"
                  >by
                  <a
                    target="_blank"
                    :href="project.contact"
                    class="project__author-name"
                    >{{ project.author }}</a
                  ></span
                >
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
                  <li class="unit" v-for="unit in project.units" :key="unit">
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
}
</script>

<style lang="scss" scoped>
.project {
  &__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  &__author {
    display: block;
    margin-bottom: 0.5rem;

    &-name {
      border-radius: 3px;
      padding: 3px 0.5rem;
      color: white;
      background: darkgray;
      transition: background 0.2s;

      &:hover,
      &:focus {
        background-color: #333;
      }
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