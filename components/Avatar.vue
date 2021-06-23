<template>
  <img class="avatar" :src="avatarSrc" alt="" />
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  components: {
    Avatar,
  },
  name: 'Avatar',
  props: {
    userName: {
      type: String,
      required: true,
    },
  },
  computed: {
    avatarSrc: function () {
      const forumAvatar =
        'https://forum.orthogonaldevices.com/user_avatar/forum.orthogonaldevices.com/' +
        this.userName +
        '/50/3702_2.png'
      return forumAvatar
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