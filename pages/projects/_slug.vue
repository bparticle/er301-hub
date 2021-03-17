
<template>
  <div class="container is-fluid home">
    <main class="content">
      <article>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child">
              <section class="section introduction">
                <h1 class="project__title">{{ project.title }}</h1>
                <p class="author">by {{ project.author }}</p>
                <div class="tags">
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
    margin-bottom: 0;
  }
}
</style>