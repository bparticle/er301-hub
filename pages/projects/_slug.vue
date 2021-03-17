
<template>
  <div class="container is-fluid home">
    <main class="content">
      <article>
        <nuxt-content :document="contrib" />
      </article>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const contrib = await $content('projects', params.slug).fetch()

    return { contrib }
  },
}
</script>