<template>
  <div class="is-fluid home">
    <main class="container content">
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
        <div class="tile is-parent">
          <div class="field is-grouped is-grouped-multiline">
            <div
              class="control"
              v-for="category in cats"
              :key="category.tagName"
            >
              <div class="tags has-addons">
                <a
                  class="tag"
                  :class="{
                    'is-link': category.active,
                    'is-light': !category.active,
                  }"
                  @click="addCat(category)"
                  >{{ category.tagName }}</a
                >
                <a
                  v-if="category.active"
                  class="tag is-delete"
                  @click="disableCat(category)"
                ></a>
              </div>
            </div>
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
            <td>Latest version</td>
            <td>V0.5 (stable)</td>
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
              {{ contrib['latest version'] }}
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
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textQuery: '',
      searchProjects: [],
      searchCats: [],
    }
  },
  async asyncData({ $content, params }) {
    const projects = await $content('projects', params.slug)
      .sortBy('title', 'asc')
      .fetch()

    // Get unique categories
    var uniqueCats = []
    var cats = []
    for (let i = 0; i < projects.length; i++) {
      const proj = projects[i]
      for (let j = 0; j < proj.categories.length; j++) {
        const cat = proj.categories[j]
        uniqueCats.push(cat)
      }
    }
    uniqueCats = _.sortBy(
      uniqueCats.filter((e, i) => uniqueCats.indexOf(e) === i)
    )

    for (let k = 0; k < uniqueCats.length; k++) {
      cats.push({
        tagName: uniqueCats[k],
        active: false,
      })
    }

    return {
      projects,
      cats,
    }
  },
  methods: {
    addCat: function (cat) {
      cat.active = true

      function filterProjects(project) {
        return project.categories.includes(cat.tagName)
      }

      var filtered = this.projects.filter(filterProjects)
      this.projects = filtered
    },
    disableCat: function (cat) {
      cat.active = false
    },
  },
  computed: {
    categories: function () {
      return null
    },
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

.tags .tag {
  transition: all 0.5s;
}
</style>
