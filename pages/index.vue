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
            <td>Latest version</td>
            <td>V0.5 (stable)</td>
            <td>V0.6</td>
            <td>Updated</td>
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
            <td>
              {{ contrib.updatedAt | dateBetween }}
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
      .sortBy('updatedAt', 'desc')
      .fetch()
    return {
      projects,
    }
  },
  filters: {
    dateBetween: function (lastUpdate) {
      const MONTH_NAMES = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]

      function getFormattedDate(
        date,
        prefomattedDate = false,
        hideYear = false
      ) {
        const day = date.getDate()
        const month = MONTH_NAMES[date.getMonth()]
        const year = date.getFullYear()
        const hours = date.getHours()
        let minutes = date.getMinutes()

        if (minutes < 10) {
          // Adding leading zero to minutes
          minutes = `0${minutes}`
        }

        if (prefomattedDate) {
          // Today at 10:20
          // Yesterday at 10:20
          return `${prefomattedDate} at ${hours}:${minutes}`
        }

        if (hideYear) {
          // 10. January at 10:20
          return `${day}. ${month} at ${hours}:${minutes}`
        }

        // 10. January 2017. at 10:20
        return `${day}. ${month} ${year}. at ${hours}:${minutes}`
      }

      // --- Main function
      function timeAgo(dateParam) {
        if (!dateParam) {
          return null
        }

        const date =
          typeof dateParam === 'object' ? dateParam : new Date(dateParam)
        const DAY_IN_MS = 86400000 // 24 * 60 * 60 * 1000
        const today = new Date()
        const yesterday = new Date(today - DAY_IN_MS)
        const seconds = Math.round((today - date) / 1000)
        const minutes = Math.round(seconds / 60)
        const isToday = today.toDateString() === date.toDateString()
        const isYesterday = yesterday.toDateString() === date.toDateString()
        const isThisYear = today.getFullYear() === date.getFullYear()

        if (seconds < 5) {
          return 'now'
        } else if (seconds < 60) {
          return `${seconds} seconds ago`
        } else if (seconds < 90) {
          return 'about a minute ago'
        } else if (minutes < 60) {
          return `${minutes} minutes ago`
        } else if (isToday) {
          return getFormattedDate(date, 'Today') // Today at 10:20
        } else if (isYesterday) {
          return getFormattedDate(date, 'Yesterday') // Yesterday at 10:20
        } else if (isThisYear) {
          return getFormattedDate(date, false, true) // 10. January at 10:20
        }

        return getFormattedDate(date) // 10. January 2017. at 10:20
      }
      return timeAgo(lastUpdate)
    },
  },
  methods: {},
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
