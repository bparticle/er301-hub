<template>
  <div v-if="!forumOnline" class="forum-notice">
    {{ message }}
  </div>
</template>

<script>
import { FORUM_ONLINE, FORUM_DOWN_MESSAGE } from '~/utils/forum'

export default {
  name: 'ForumNotice',
  data() {
    return {
      forumOnline: FORUM_ONLINE,
      message: FORUM_DOWN_MESSAGE,
    }
  },
}
</script>

<style lang="scss" scoped>
.forum-notice {
  background: #fff3cd;
  color: #7a5b00;
  text-align: center;
  font-size: 0.9rem;
  padding: 0.6rem 1rem;
}
</style>
