<template>
  <div class="container is-fluid home">
    <main class="content">
      <div>
        <div class="tile is-parent">
          <div class="tile is-child is-4">
            <label class="label">Search projects</label>
            <input
              class="input"
              v-model="textQuery"
              type="search"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="search-project__results">
          <ul class="search-project__list" v-if="searchProjects.length">
            <li v-for="article of searchProjects" :key="article.slug">
              <nuxt-link
                :to="{
                  name: 'projects-slug',
                  params: { slug: article.slug },
                }"
                >{{ article.title }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
      <table class="projects table">
        <thead>
          <tr>
            <td>Project title</td>
            <td>Author</td>
            <td>V0.5</td>
            <td>V0.6</td>
          </tr>
        </thead>
        <tbody>
          <tr class="contrib" v-for="contrib of projects" :key="contrib">
            <td>
              <nuxt-link
                :to="{ name: 'projects-slug', params: { slug: contrib.slug } }"
              >
                {{ contrib.title }}
              </nuxt-link>
            </td>
            <td>
              {{ contrib.author }}
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
  data() {
    return {
      textQuery: '',
      searchProjects: [],
    }
  },
  async asyncData({ $content, params }) {
    const projects = await $content('projects', params.slug)
      .sortBy('title', 'asc')
      .fetch()
    return {
      projects,
    }
  },
  watch: {
    async textQuery(textQuery) {
      if (!textQuery) {
        this.searchProjects = []
        return
      }

      this.searchProjects = await this.$content('projects')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(textQuery)
        .fetch()
    },
  },
}
</script>

<style lang="scss" scoped>
.search-project {
  &__result {
    transition: max-height 0.3s;
  }
}
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
