
<template>
  <div class="container is-fluid home">
    <main class="content">
      <article>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child">
              <section class="content">
                <nuxt-content :document="doc" />
              </section>
            </div>
          </div>
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child">
              <h2>Links</h2>
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
    const doc = await $content('docs', params.slug).fetch()

    return { doc }
  },
}
</script>