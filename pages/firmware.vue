<template>
  <div class="is-fluid firmware">
    <section class="section introduction mb-4 has-background-light">
      <h1 class="project__title">ER-301 sound computer</h1>
      <p class="is-size-5">Latest firmware release</p>
      <div class="gh-release">
        <button class="button is-rounded">
          <a :href="githubLatest.url">{{ githubLatest.name }}</a>
        </button>
        <p class="mt-4">
          Published on
          <strong>
            {{ githubLatest.published | moment('dddd, MMMM Do YYYY') }}</strong
          >
        </p>
      </div>
    </section>
    <section class="section units pt-0">
      <h2>Previous releases</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Release</th>
            <th>Publish date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="release in previousReleases" :key="release.id">
            <td>
              <a :href="release.url">{{ release.name }}</a>
            </td>
            <td>
              {{ release.published | moment('dddd, MMMM Do YYYY') }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let response = await $axios.$get(
      `https://api.github.com/repos/odevices/er-301/releases`
    )
    let releases = response || []

    let compareByReleaseIdDesc = (left, right) => {
      return right.id - left.id
    }

    const sortedReleases = releases
      .map((rel) => {
        if (rel.assets) {
          return {
            published: rel.published_at,
            name: rel.assets[0].name,
            url: rel.assets[0].browser_download_url,
            id: rel.assets[0].id,
          }
        }
      })
      .sort(compareByReleaseIdDesc)

    const githubLatest = sortedReleases[0]
    const previousReleases = sortedReleases.slice(1)

    return { githubLatest, previousReleases }
  },
}
</script>

<style lang="scss" scoped>
.project {
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