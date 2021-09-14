<template>
  <div :class="currentRouteName">
    <div class="container is-fluid header">
      <div>
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
        <h1 class="title">OD ER-301 hub</h1>
      </div>
    </div>
    <Nav />
    <transition name="fade">
      <main class="container mt-4">
        <Nuxt />
      </main>
    </transition>
    <footer class="footer">
      <div class="container">
        <div class="footer-logos">
          <img
            class="pixel-anim"
            src="/frontplate--pixelart_anim--slowerframe.gif"
            alt=""
          />
        </div>
      </div>
    </footer>
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
body {
  font-size: 1.1em;
  line-height: 1.7;
}
main {
  margin-top: 4rem;
  min-height: 100vh;
  padding-bottom: 6rem;
}
.footer {
  background: rgba(135, 135, 135, 1) 0%;
  padding: 2rem;
}
.download {
  &__link {
    display: block;
  }
}

u {
  text-decoration: none;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 8px;
    background-color: yellow;
    mix-blend-mode: multiply;
    left: 0;
    bottom: 0px;
  }
}

a {
  color: #3273dc;

  &[target='_blank']::after {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
    margin: 0px 3px 0px 5px;
  }
}

p a {
  text-decoration: underline;
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
        padding-top: 8px;
        position: absolute;
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
  padding-bottom: 1rem;
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

.footer-logos {
  display: flex;
  justify-content: flex-end;
}

.pixel-anim {
  max-width: 180px;
}
</style>
