<template>
  <div class="nav-wrapper">
    <nav
      class="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <a
        role="button"
        tabindex="0"
        class="navbar-burger"
        data-target="navMenu"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleActive"
        v-on:keyup.enter="toggleActive"
        v-on:keyup.space="toggleActive"
      >
        <img src="/burger-menu.svg" alt="" />
      </a>
      <div class="navbar-menu" ref="mainNav">
        <div class="navbar-start">
          <Nuxt-Link class="navbar-item" :to="'/'">Projects</Nuxt-Link>
          <Nuxt-Link class="navbar-item" :to="'/firmware'"
            >O|D firmware</Nuxt-Link
          >
          <Nuxt-Link class="navbar-item" :to="'/card-one'">CardOne</Nuxt-Link>
          <Nuxt-Link class="navbar-item" :to="'/wanted'">WANTED</Nuxt-Link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a
                target="_blank"
                href="https://forum.orthogonaldevices.com/"
                class="navbar-item"
              >
                O|D forum
              </a>
              <a
                target="_blank"
                href="https://docs.orthogonaldevices.com/er-301/"
                class="navbar-item"
              >
                official ER-301 docs
              </a>
              <a
                target="_blank"
                href="https://github.com/bparticle"
                class="navbar-item"
              >
                Contact
              </a>
              <hr class="navbar-divider" />
              <a
                href="https://github.com/bparticle/er301-hub/issues"
                target="_blank"
                class="navbar-item"
              >
                Report an issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleActive: function () {
      this.$refs.mainNav.classList.toggle('is-active')
    },
  },
  watch: {
    $route(to, from) {
      this.$refs.mainNav.classList.remove('is-active')
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  background: rgb(245, 238, 255);
  background: linear-gradient(
    90deg,
    rgba(245, 238, 255, 1) 0%,
    rgba(207, 207, 255, 1) 41%,
    rgba(204, 255, 248, 1) 93%
  );
  margin-bottom: 3rem;
}
.navbar {
  background-color: transparent;

  a.navbar-item:focus,
  a.navbar-item:focus-within,
  a.navbar-item:hover,
  a.navbar-item.is-active,
  .navbar-link:focus,
  .navbar-link:focus-within,
  .navbar-link:hover,
  .navbar-link.is-active {
    background-color: rgba($color: #fafafa, $alpha: 0.7);
  }

  &-menu {
    &.is-active {
      max-height: 200rem;
    }
  }

  &-burger {
    height: auto;
    width: 2rem;
    margin-left: 0;
    padding: 0.5rem;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
      display: none;
    }
  }
}
</style>
