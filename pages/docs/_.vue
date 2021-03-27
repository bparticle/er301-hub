
<template>
  <div class="container is-fluid home">
    <main class="content">
      <article>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child">
              <section class="section introduction m-4 has-background-light">
                <h1 class="docs__title">{{ doc.title }}</h1>
                <div class="docs__author">
                  <a
                    class="docs__author-link"
                    target="_blank"
                    :href="doc.author"
                  >
                    <avatar :userName="doc.author" />
                    <span class="docs__author-name">{{ doc.author }}</span>
                  </a>
                </div>
                <p class="description">
                  {{ doc.description }}
                </p>
              </section>
              <section class="section pt-0 pb-0">
                <a :href="'/projects/' + doc.project">Back to project</a>
              </section>
              <section class="content section">
                <nuxt-content :document="doc" />
              </section>
            </div>
          </div>
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child">
              <section class="section download">
                <h2 class="subtitle">Downloads</h2>
                <a
                  class="download__link"
                  v-for="(file, index) in doc.files"
                  :key="file + index"
                  :href="'/docs/' + file"
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
    const doc = await $content('docs', { deep: true }, params.pathMatch).fetch()

    console.log(params)
    return { doc }
  },
}
</script>

<style lang="scss" scoped>
.docs {
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
</style>