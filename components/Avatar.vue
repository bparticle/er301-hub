<template>
  <div
    v-if="showPlaceholder"
    class="avatar avatar--placeholder"
    :title="userName"
  >
    {{ initials }}
  </div>
  <img
    v-else
    class="avatar"
    :src="avatarSrc"
    :alt="userName"
    @error="showPlaceholder = true"
  />
</template>

<script>
import { FORUM_ONLINE } from '~/utils/forum'

export default {
  name: 'Avatar',
  props: {
    userName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // Forum avatars can't load while the forum is down; also falls back
      // per-image via @error above if a specific avatar 404s once it's back.
      showPlaceholder: !FORUM_ONLINE,
    }
  },
  computed: {
    avatarSrc: function () {
      const forumAvatar =
        'https://forum.orthogonaldevices.com/user_avatar/forum.orthogonaldevices.com/' +
        this.userName +
        '/50/3702_2.png'
      return forumAvatar
    },
    initials: function () {
      return (this.userName || '?').trim().slice(0, 2).toUpperCase()
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 25px;
  height: 25px;
  border-radius: 5px;
  margin-right: 0.5rem;

  &--placeholder {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #dcdcdc;
    color: #555;
    font-size: 10px;
    font-weight: 700;
    line-height: 1;
  }
}
</style>
