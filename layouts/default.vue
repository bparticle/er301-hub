<template>
  <div :class="currentRouteName">
    <div class="container is-fluid header">
      <div>
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
        <h1 class="title">OD ER-301 hub</h1>
        <p class="intro">
          Orthogonal Devices ER-301 sound computer community packages, presets
          and bespoke units
        </p>
      </div>
    </div>
    <transition name="fade">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name
    },
  },
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.content {
  a .icon {
    align-items: center;
    display: inline-flex;
    justify-content: flex-start;
    height: 1.5rem;
    width: 2rem;
    
    &.icon-link {
      &:before {
        content: url('/link-24px.svg');
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s 0.25s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(-200px);
}

.section {
  padding: 2rem 1.5rem;
}

.header {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
  padding-bottom: 0;
  border-bottom: 1px solid;

  .index & {
    padding-bottom: 2rem;
  }
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.intro {
  opacity: 0;
  max-height: 0;

  .index & {
    opacity: 1;
    max-height: 150px;
  }
}
</style>
