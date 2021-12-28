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
            <a href="#disclaimer"><sup>*</sup></a> or (<u
              >if you don't want no damn t-shirt</u
            >) you can sponsor a project directly by making a
            <a
              href="https://www.paypal.com/donate?hosted_button_id=DTLPFT6S72RF6"
              >donation with PayPal</a
            >.
            <strong
              >Whichever method you choose, make sure to mention the project you
              are backing as a comment or on the checkout page</strong
            >.
          </p>
          <p class="pt-3 pb-3">
            Check out the
            <a href="#explain" class="pt-3 pb-3">detailed instructions</a> and
            the rules of the game.
          </p>
        </section>
        <section class="section wanted">
          <h2 class="subtitle has-text-centered is-size-3">The list</h2>
          <table class="wanted-list table is-fullwidth">
            <thead>
              <tr>
                <th>Project name</th>
                <th>Requirements</th>
                <th>Discussion/Link</th>
                <th>Status</th>
                <th>Cash prize</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="project in wanted" :key="unique(project.name)">
                <td class="has-text-weight-bold">
                  <span
                    :class="{ 'tag is-link': project.status === 'completed' }"
                  >
                    {{ project.name }}
                  </span>
                </td>
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
                <td>
                  <span class="tag is-medium has-text-weight-bold">
                    {{ project.award }} $</span
                  >
                </td>
                <td>
                  <span v-if="project.backers">{{
                    project.backers.length
                  }}</span
                  ><span v-else>-</span>
                </td>
              </tr>
              <tr>
                <td colspan="4"></td>
                <td>
                  <span class="tag is-medium has-text-weight-bold">
                    {{ totalAmountOpen }} $</span
                  >
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>
            (The current status may not be up to date while I'm processing
            orders.)
          </p>
          <p>
            There a bunch of
            <Nuxt-Link :to="'/unsorted'">unsorted projects</Nuxt-Link> that need
            organizing
          </p>
        </section>
        <section class="section completed">
          <h2 class="subtitle has-text-centered is-size-3">Completed</h2>
          <table class="wanted-list table is-fullwidth">
            <thead>
              <tr>
                <th>Project name</th>
                <th>Requirements</th>
                <th>Download</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="project in completed" :key="unique(project.name)">
                <td class="has-text-weight-bold">
                  <span>
                    {{ project.name }}
                  </span>
                </td>
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
                  <Nuxt-Link v-if="project.hubPage" :to="project.hubPage"
                    >Project page</Nuxt-Link
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
            the developers,
            <u>by pooling dollars in different projects</u> that are rewarded to
            the person who delivers a unit that ticks all the boxes. If the
            developer chooses not to accept the tip for whatever reason, it may
            be donated to a charity of their choice, or migrated to a new or
            existing Bounty Hunter project.
          </p>
          <p class="pt-3 pb-3">
            If you find a projects you would like to sponsor on the list above
            then you can skip to the next paragraph to find out how to do that.
            If on the other hand you are desperate to have a certain unit in
            your toolkit and it is not yet described on the list, then you can
            get your idea nominated by visiting
            <a
              href="https://forum.orthogonaldevices.com/t/announcement-launch-of-bounty-hunters-project-shop-is-open"
              target="_blank"
              >this thread</a
            >
            on the Orthogonal Devices forum and request a new project with your
            requirements. Any idea works I guess so it's just up to the
            maintainers to add it to the list. Ideally,
            <u>every requested unit will have its own thread</u> so we can keep
            communicating about it and also announce the delivery of the unit.
            The link to this thread will be on the list.
          </p>
          <p class="pt-3 pb-3">
            Once you have picked a unit from the list of nominees you can go
            ahead and <u>sponsor the project</u> by shopping for swag or buying
            a Head Hunter's target in the
            <a href="https://shop.modularmotel.com" target="_blank"
              >Modular Motel shop</a
            >. If you go for the merchandise then
            <strong
              >50% of the profit will go to the project of your choice</strong
            >
            (don't forget to mention the project name in the final step of the
            checkout process: see screenshot below). If on the other hand you
            don't need a t-shirt or a hat and you just want to push a certain
            unit to the top of the priority list, then you can making a
            <a
              href="https://www.paypal.com/donate?hosted_button_id=DTLPFT6S72RF6"
              >donation with PayPal</a
            >
            for different amounts that may or may not reflect the sense of
            urgency you feel that this particual project sees the light of day.
            In this case
            <strong
              >70% of the profits will go to the project's cash pool</strong
            >
            (since there is no design, product, shipping and so forth involved).
            In both cases, the remaining funds will be reinvested in the shop
            and the maintenance of this website.
          </p>
          <figure class="screenshot">
            <img
              class="screenshot__img"
              src="/images/wanted/shop_checkout-instructions.png"
              alt="Shop checkout instructions"
            />
            <figcaption class="screenshot_caption has-text-right is-size-6">
              Screenshot of the Modular Motel checkout form
            </figcaption>
          </figure>
          <p class="pt-3 pb-3">
            At the moment a developer submits a project to the hub that ticks
            all the boxes of a certain target on the list, they will get the
            amount we have collected in the way that is convenient to them.
          </p>
          <p class="pt-3 pb-3">
            That's about it! Except maybe read
            <a href="#disclaimer">the disclaimer</a> too.
          </p>
          <p class="pt-3 pb-3">
            This is how the final step of the checkout looks like. Please use
            the optional notes or instructions field to mention the unit you
            want to sponsor. If you are ordering multiple items, you can mention
            an equal amount of projects on the checkout form. The money will be
            split among the mentioned projects.
          </p>
        </section>
      </div>
      <div class="column">
        <div class="bigcartel">
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
          <p class="has-text-right has-text-weight-bold">Worldwide shipping</p>
        </div>
        <div class="paypal-donation">
          <a
            href="https://www.paypal.com/donate?hosted_button_id=DTLPFT6S72RF6"
            class="button is-link is-rounded"
            >Donate with PayPal</a
          >
        </div>
        <div class="disclaimer is-size-7" id="disclaimer">
          <p class="pt-3 pb-3">
            <sup>*</sup><u>Disclaimer</u>: this project is in an experimental
            stage. We are still figuring out the profit margins of the shop
            (with taxes, currency conversions, fees and so forth) so the details
            are still subject to change. As data comes in all will be clear and
            the specifics will get sorted out in the most transparent way, on
            the forum (in
            <a
              target="_blank"
              href="https://forum.orthogonaldevices.com/t/announcement-launch-of-bounty-hunters-project-shop-is-open"
              >this thread</a
            >
            most probably) and in the Discord channel.
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
      return this.$store.getters.openProjects
    },
    completed() {
      return this.$store.getters.completedProjects
    },
    totalAmountOpen() {
      return this.$store.getters.totalAmountOpen.toFixed(2)
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

.is-completed {
  background-color: powderblue;
}

.paypal-donation {
  display: flex;
  justify-content: flex-end;
}

.screenshot {
  padding: 1rem;

  &__image {
    vertical-align: bottom;
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
    list-style-type: cambodian;
    margin-left: 1.5rem;
  }
}

.disclaimer {
  background-color: antiquewhite;
  margin: 2rem 0;
  padding: 2rem;
  border-radius: 5px;

  &:target {
    animation: target 0.8s ease-out 0.5s 1;
  }

  @keyframes target {
    0% {
      background-color: antiquewhite;
    }
    30% {
      background-color: gold;
    }
    100% {
      background-color: antiquewhite;
    }
  }
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