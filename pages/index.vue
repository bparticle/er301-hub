<template>
  <div class="is-fluid">
    <div>
      <div class="columns">
        <div class="column is-half">
          <h3>Search projects</h3>
          <input
            class="input"
            v-model="filterValue"
            type="search"
            autocomplete="off"
            placeholder="Start typing to search"
          />
          <div class="search-project__results">
            <transition-group
              tag="ul"
              name="slide"
              class="search-project__list"
              v-if="searchProject.length != projects.length"
            >
              <li v-for="project of searchProject" :key="project.slug">
                <nuxt-link
                  :to="{
                    name: 'projects-slug',
                    params: { slug: project.slug },
                  }"
                  >{{ project.title }}</nuxt-link
                >
              </li>
            </transition-group>
          </div>
        </div>
        <div class="column is-half">
          <h3>Filters</h3>
          <div class="field is-grouped is-grouped-multiline">
            <div
              class="control"
              v-for="(category, index) in cats"
              :key="category.category + index + category.color"
            >
              <div class="tags has-addons">
                <a
                  class="tag"
                  v-bind:style="[
                    category.active
                      ? { backgroundColor: category.color }
                      : { backgroundColor: category.colorPassive },
                  ]"
                  @click="enableCat(category)"
                  >{{ category.category | upperCased }}</a
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
      </div>
    </div>
    <h3>Index</h3>

    <table class="projects table is-fullwidth">
      <thead>
        <tr>
          <th class="table__td--narrow"></th>
          <th>Project title</th>
          <th># units</th>
          <th>Latest version</th>
          <th><span class="gh-dl"> GitHub </span></th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="contrib"
          v-for="(project, index) of filteredProjects"
          :key="project + index + project.author"
        >
          <td class="table__td--narrow">
            <div class="projects__author">
              <avatar :userName="project.author" />
            </div>
          </td>
          <td>
            <nuxt-link
              :to="{ name: 'projects-slug', params: { slug: project.slug } }"
            >
              {{ project.title }}
            </nuxt-link>
          </td>
          <td>
            {{ project.units.length }}
          </td>
          <td>
            {{ project['latest version'] }}
          </td>
          <td>
            <button
              class="button is-small is-rounded"
              v-if="project.github"
              @click="fetchGitHub(project)"
            >
              Download
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue'

export default {
  components: {
    Avatar,
  },
  data() {
    return {
      filterValue: '',
      searchCats: [],
    }
  },
  async asyncData({ $content, params, store }) {
    const projects = await $content('projects', params.slug)
      .where({ title: { $nin: 'Example' } })
      .sortBy('title', 'asc')
      .fetch()

    store.commit('addAllProjects', projects)

    const isInit = store.state.allProjects === []
    store.commit('addUniqueCats', { projects: projects, force: true })

    return {
      projects,
    }
  },
  methods: {
    fetchGitHub: function (project) {
      let gitHubData
      this.$fetchGitHub(project).then((value) => {
        gitHubData = value
        if (gitHubData.url) {
          window.open(gitHubData.url)
          return false
        }
      })
    },
    enableCat: function (cat) {
      this.$store.commit('enableCat', cat)
    },
    disableCat: function (cat) {
      this.$store.commit('disableCat', cat)
    },
  },
  filters: {
    upperCased: function (data) {
      return data.replace(/^\w/, (c) => c.toUpperCase())
    },
  },
  computed: {
    cats: function () {
      return this.$store.state.cats
    },
    filteredProjects: function () {
      const activeCats = this.cats.filter((cat) => cat.active === true)
      function filterProjects(project) {
        let testArr = []
        const projectCats = [
          ...new Set(project.units.map((unit) => unit.category.toLowerCase())),
        ]
        for (let i = 0; i < activeCats.length; i++) {
          testArr.push(
            projectCats.includes(activeCats[i].category.toLowerCase())
          )
        }
        return testArr.every((test) => test === true)
      }
      var filtered = this.projects.filter(filterProjects)
      return [...filtered]
    },
    searchProject: function () {
      let result = this.projects
      if (!this.filterValue) return result

      const filterValue = this.filterValue.toLowerCase()

      const filter = (project) => {
        return (
          project.units
            .map((unit) => unit.name)
            .some((unit) => unit.toLowerCase().includes(filterValue)) ||
          project.units
            .map((unit) => unit.category.toLowerCase())
            .some((unit) => unit.toLowerCase().includes(filterValue)) ||
          project.title.toLowerCase().includes(filterValue) ||
          project.author.toLowerCase().includes(filterValue) ||
          project.description.toLowerCase().includes(filterValue)
        )
      }
      return result.filter(filter)
    },
  },
}
</script>

<style lang="scss" scoped>
.projects {
  &__author {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
}
.search-project {
  &__list {
    list-style: circle;
    margin-left: 2rem;
    margin-top: 1rem;
  }
  &__result {
    transition: max-height 0.3s;
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

.gh-dl {
  display: flex;

  &:before {
    margin-right: 1rem;
    content: url('/GitHub-Mark-32px.png');
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(1rem);
  opacity: 0;
}

.slide-move {
  transition: all 0.5s;
}
</style>
