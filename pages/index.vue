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
            <td>
              <div
                class="status-light"
                :class="
                  contrib.compatibility.v05
                    ? 'status-light--yes'
                    : 'status-light--no'
                "
              ></div>
            </td>
            <td>
              <div
                class="status-light"
                :class="
                  contrib.compatibility.v06
                    ? 'status-light--yes'
                    : 'status-light--no'
                "
              ></div>
            </td>
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
      .sortBy('title', 'asc')
      .fetch()
    return {
      contribs,
    }
  },
}
</script>

<style lang="scss">
.status-light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 10px;

  &--no {
    background-color: #ed1c24;
  }
  &--yes {
    background-color: green;
  }
}

.content table td,
.content table th {
  vertical-align: middle;
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
