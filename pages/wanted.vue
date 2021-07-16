<template>
  <div class="is-fluid firmware">
    <div class="columns">
      <div class="column is-two-thirds">
        <section class="section introduction has-background-light p-6">
          <h1 class="has-text-centered project__title title">
            The Bounty Hunter's WANTED page
          </h1>
          <p class="pt-3 pb-3">
            As a way to promote the development of units that the ER-301
            community wants or needs the most, this page will attempt to keep
            track of those needs by means of a "monitized" priority list. The
            bounty hunter's list is sponsored by the
            <a href="https://shop.modularmotel.com" target="_blank"
              >Modular Motel web shop</a
            >
            so you can contribute today by shopping for
            <i>unofficial</i> ER-301 fan merchandise
            <a href="#disclaimer"><sup>*</sup></a> or (if you don't want no damn
            t-shirt) you can sponsor a project directly by purchasing a
            <a
              href="https://shop.modularmotel.com/product/bounty-hunters-target"
              target="_blank"
              >bounty hunter's target</a
            >.
            <strong
              >Make sure to mention a unit from the nominated projects below on
              checkout!</strong
            >.
          </p>
          <p>
            Check out the
            <a href="#explain" class="pt-3 pb-3">rules of the game</a>
          </p>
        </section>
        <section class="section introduction">
          <table class="wanted-list table is-fullwidth">
            <thead>
              <tr>
                <th>Project name</th>
                <th>Requirements</th>
                <th>Discussion/Link</th>
                <th>Cash prize</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="project in wanted" :key="unique(project.name)">
                <td class="has-text-weight-bold">{{ project.name }}</td>
                <td class="requirements">
                  <ul class="requirements__list">
                    <li
                      v-for="(req, index) in project.requirements"
                      :key="unique(index)"
                    >
                      {{ req }}
                    </li>
                  </ul>
                </td>
                <td>
                  <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    class="button is-link is-light"
                    >Link</a
                  >
                </td>
                <td>
                  <span class="tag is-medium has-text-weight-bold">
                    {{ project.prize }} $</span
                  >
                </td>
                <td>
                  <span
                    class="tag"
                    :class="
                      project.status === 'open'
                        ? 'is-danger is-light'
                        : 'is-link is-light'
                    "
                    >{{ project.status }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section
          id="explain"
          class="section introduction has-background-light p-6"
        >
          <h2 class="title">How does it work?</h2>
          <p class="pt-3 pb-3">
            Not all ER-301 enthusiasts, sound designers and musicians are also
            gifted programmers and DSP wizards. But some of them actually are,
            and they are building cool stuff that we all benefit from. The
            bounty hunter project is an attempt to communicate and document the
            priorities of the community while also supporting and encouraging
            the developers, by pooling dollars in different projects that are
            rewarded to the person who delivers a unit that ticks all the boxes.
          </p>
          <p class="pt-3 pb-3">
            If you are desperate to have a certain unit in your toolkit and it
            is not yet on the list above, then you can get your idea nominated
            by visiting
            <a href="https://forum.orthogonaldevices.com/" target="_blank"
              >this thread</a
            >
            on the Orthogonal Devices forum and communicate the requirements
            with us.
          </p>
          <p class="pt-3 pb-3">
            Once your unit is on the list of nominees you can go ahead and
            sponsor the project by shopping for swag or buying a Head Hunter's
            target in the
            <a href="https://shop.modularmotel.com" target="_blank"
              >Modular Motel shop</a
            >. If you go for the merchandise then
            <strong
              >50% of the profit will go to the project of your choice</strong
            >
            (don't forget to mention the project name in the final step of the
            checkout process)! If on the other hand you don't need a t-shirt or
            a hat and you just want to push a certain unit to the top of the
            priority list, then you can purchase a
            <a
              href="https://shop.modularmotel.com/product/bounty-hunters-target"
              target="_blank"
              >bounty hunter's target</a
            >
            for different amounts that may reflect your sense of urgency that
            this particual project sees the light of day. In this case
            <strong
              >70% of the profits will go to the project's cash pool</strong
            >
            (since there is no design, product, shipping and so forth involved).
            In both cases, the remaining funds will be reinvested in the shop
            and the maintenance of this website.
          </p>
          <p>
            At the moment a developer submits a project to the hub that ticks
            all the boxes of a certain target on the list, they will get the
            amount we have collected in the way that is convenient to them.
          </p>
          <p>
            That's about it, except here is
            <a href="#disclaimer">a disclaimer</a>.
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
        <p class="has-text-right has-text-weight-bold">Worldwide shipping</p>
        <div class="bigcartel mt-4">
          <div
            class="bigcartel__product"
            v-for="prod in er301Prod"
            :key="prod.id"
          >
            <a
              class="bigcartel__product-link"
              target="_blank"
              :href="'https://shop.modularmotel.com' + prod.url"
            >
              <img
                class="bigcartel__product-image"
                :src="prod.images[0].url"
                :alt="prod.images"
              />
              <span class="bigcartel__product-title">{{ prod.name }}</span>
            </a>
          </div>
        </div>
        <div class="disclaimer is-size-6" id="disclaimer">
          <p class="pt-3 pb-3">
            <sup>*</sup><u>Disclaimer</u>: at the moment of this writing I have
            no idea about the profit margins of the shop (I have never done this
            before), and the way we will figure out all the details. This
            project is in an experimental stage. As data comes in all will be
            clear and the specifics will get sorted out in the most transparent
            way, on the forum and in the Discord channel.
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

    // Get first n items tagged with "ER-301"
    const n = 6
    const er301Prod = bigCartelProducts
      .filter((prod) => {
        return prod.categories.some((cat) => cat.name === 'ER-301')
      })
      .slice(0, n)
    return { er301Prod }
  },
  computed: {
    wanted() {
      return this.$store.state.wantedList.sort((a, b) =>
        a.prize > b.prize ? -1 : 1
      )
    },
  },
  methods: {
    unique(input) {
      var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      }
      return (
        (typeof input == 'string' ? input.replace(/ /g, '_') : input) +
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

  &:after {
    content: none !important;
  }

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
    transition: all 0.2s ease;
    border-radius: 4px;

    .shop-now:hover &,
    .shop-now:focus & {
      filter: sepia(69%) hue-rotate(120deg) saturate(290%) invert(100%);
    }
  }
}

.status-light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 10px;

  &--open {
    background-color: #ed1c24;
  }
  &--closed {
    background-color: blue;
  }
}

.requirements {
  &__list {
    list-style-type: circle;
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
    &-link {
      display: block;
    }

    &-image {
      transition: all 0.2s ease;
      border-radius: 4px;

      .bigcartel__product-link:hover &,
      .bigcartel__product-link:hover & {
        filter: sepia(25%) hue-rotate(70deg) saturate(150%) invert(80%);
      }
    }
  }
}
</style>