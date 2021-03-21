<template>
  <img class="avatar" :src="avatarSrc" alt="" />
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    userName: {
      type: String,
      required: true,
    },
  },
  computed: {
    avatarSrc: function () {
      return (
        'https://forum.orthogonaldevices.com/user_avatar/forum.orthogonaldevices.com/' +
        this.userName +
        '/50/3702_2.png'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  max-width: 25px;
  border-radius: 5px;
  margin-right: 0.5rem;
}
</style>