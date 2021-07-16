<template>
  <div class="is-fluid firmware">
    <div class="columns">
      <div class="column is-two-thirds">
        <section class="section introduction has-background-light">
          <h1 class="mb-6 has-text-centered project__title title">
            The Bounty Hunter's WANTED page
          </h1>
          <p>
            As a way to promote the development of units that the ER-301
            community wants or needs the most, This page will attempt to keep
            track of those needs by means of a "monitized" priority list. The
            bounty hunter's list is sponsored by the
            <a href="https://shop.modularmotel.com" target="_blank"
              >Modular Motel web shop</a
            >
            so you can contribute today by shopping for
            <i>unofficial</i> ER-301 fan merchandise or (if you don't want no
            damn t-shirt) you can sponsor a project directly by purchasing a
            <a
              href="https://shop.modularmotel.com/product/bounty-hunters-target"
              >bounty hunter's target</a
            >.
            <strong
              >Make sure to mention a unit from the nominated projects below on
              checkout!</strong
            >. <sup>*</sup>
          </p>
        </section>
        <section class="section introduction">
          <table class="wanted-list table is-fullwidth">
            <thead>
              <tr>
                <td>Project name</td>
                <td>Requirements</td>
                <td>Cash prize</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="project in wanted" :key="unique(project.name)">
                <td>{{ project.name }}</td>
                <td>{{ project.requirements }}</td>
                <td>{{ project.prize }}</td>
                <td>{{ project.status }}</td>
              </tr>
            </tbody>
          </table>
          <p>
            If you can't find the unit you really need you can submit the idea
            for nomination on the
            <a href="https://forum.orthogonaldevices.com/"
              >Orthogonal Devices forum</a
            >.

            <strong
              >50% of the profit will go into the bounty hunter's pool</strong
            >
            and the developers will get awarded the money on delivery of a unit
            that is on the list. The rest of the profits will be reinvested in
            the shop and the hub.
          </p>
        </section>
      </div>
      <div class="column">
        <a
          class="shop-now"
          href="https://shop.modularmotel.com"
          target="_blank"
          title="Shop @ Modular Motel"
        >
          <span class="shop-now__cta">
            <span class="shop-now__tagline">Put a hit on your target unit</span>
            <span class="button shop-now__button is-medium">Shop Now</span>
          </span>
          <img
            class="shop-now__img"
            src="/images/wanted/shop-now.jpg"
            alt="Modular Motel logo"
          />
        </a>
        <div class="bigcartel mt-4">
          <div
            class="bigcartel__product"
            v-for="prod in er301Prod"
            :key="prod.id"
          >
            <a :href="'https://shop.modularmotel.com' + prod.url">
              {{ prod.name }}</a
            >
            <img :src="prod.images[0].url" :alt="prod.images" />
          </div>
        </div>
        <div class="disclaimer is-size-6">
          <p>
            <sup>*</sup><u>Disclaimer</u>: at the moment of this writing I have
            no idea about the profit margins of the shop (I have never done this
            before), and the way we will figure out all the details. This
            project is in an experimental stage. As data comes in all will be
            clear and the specifics will get sorted out on the forum and in our
            Discord, in the most transperent way.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const bigCartelProducts = await $axios.$get(
      'https://api.bigcartel.com/modularmotel/products.json'
    )

    const er301Prod = bigCartelProducts.filter((prod) => {
      return prod.categories.some((cat) => cat.name === 'ER-301')
    })
    console.log(er301Prod)
    return { er301Prod }
  },
  computed: {
    wanted() {
      return this.$store.state.wantedList
    },
  },
  methods: {
    unique(projName) {
      var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      }
      return (
        projName.replace(/ /g, '_') +
        S4() +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        S4() +
        S4()
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.shop-now {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &__tagline {
    font-size: 1.6em;
    color: white;
    font-weight: 500;

    .shop-now:hover &,
    .shop-now:focus & {
      color: $dark;
    }
  }

  &__cta {
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 1;
  }

  &__img {
    transition: all 0.25s ease;

    .shop-now:hover &,
    .shop-now:focus & {
      filter: sepia(69%) hue-rotate(120deg) saturate(290%) invert(100%);
    }
  }
}

.disclaimer {
  background-color: antiquewhite;
  margin: 2rem 0;
  padding: 2rem;
  border-radius: 5px;
}

.bigcartel {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  &__product {
    padding: 0.5rem;
    border-radius: 4px;
  }
}
</style>