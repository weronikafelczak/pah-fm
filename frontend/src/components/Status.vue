<template>
  <span
    class="is-online"
    v-if="!isLogin"
    :class="{ online: isOnline }"/>
</template>

<script>
import { mapState } from 'vuex';
import { IS_ONLINE } from '../store';
import { loginRoute } from '../router';

export default {
  name: 'Refresh',
  computed: {
    ...mapState([IS_ONLINE]),
  },
  data() {
    return {
      isLogin: this.$router.currentRoute.path === loginRoute.path,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../scss/base";

.is-online {
  @include absolute(left 0 top 0);
  @include m(3);

  height: 10px;
  width: 10px;
  background-color: $red;
  border-radius: 50%;
  display: inline-block;
}

.online {
  background-color: $green;
}
</style>

