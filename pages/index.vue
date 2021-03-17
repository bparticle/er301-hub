<template>
  <div class="container is-fluid home">
    <main class="content">
      <table class="contribs table">
        <thead>
          <tr>
            <td>Project title</td>
            <td>V0.5</td>
            <td>V0.6</td>
          </tr>
        </thead>
        <tbody>
          <tr class="contrib" v-for="contrib of contribs" :key="contrib">
            <td>
              <nuxt-link
                :to="{ name: 'projects-slug', params: { slug: contrib.slug } }"
              >
                {{ contrib.title }}
              </nuxt-link>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const contribs = await $content('projects', params.slug)
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      contribs,
    }
  },
}
</script>

<style lang="scss">
.header {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 0;
  border-bottom: 1px solid;

  .index & {
    padding-bottom: 2rem;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;

  .index & {
    font-size: 55px;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
