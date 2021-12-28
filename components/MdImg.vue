<template>
  <div class="img">
    <img :src="imgSrc()" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`/static/images/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>