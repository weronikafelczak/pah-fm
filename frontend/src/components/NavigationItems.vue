
<template>
  <b-nav
    fill
    class="menu-items">
    <b-nav-item
      v-for="link in links"
      :to="link.to"
      :key="link.text"
    >
      {{ link.text }}
    </b-nav-item>

    <b-nav-item
      v-if="user"
      to="/logout"
      key="logout"
      class="username"
    >
      {{ $t('login.user', { username: user.username }) }}
    </b-nav-item>

    <b-nav-item
      v-else
      to="/login"
      key="login"
    >
      {{ $t('common.login') }}
    </b-nav-item>
  </b-nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NavigationItems',
  computed: {
    ...mapState(['user']),
  },
  data() {
    return {
      links: this.navigation,
    };
  },

};
</script>

<style>
.bm-burger-button {
  right: 16px !important;
}
</style>

<style scoped lang="scss">
@import '../scss/base';

.menu-items {
  @include media-breakpoint-up (lg) {
    .nav-item.username {
      max-width: 400px;
      flex-grow: initial;
    }

    .nav-link {
      min-height: 100px;
      font-size: 20px;
      min-width: 155px;
      color: $white;
      display: flex;
      align-items: flex-end;
    }

    .nav-link:hover {
      padding-bottom: 12px;
      transition: 0.2s;
    }

    li:nth-child(1) {
      background: $pah-color-1;
    }

    li:nth-child(2) {
      background: $pah-color-2;
    }

    li:nth-child(3) {
      background: $pah-color-3;
    }

    li:nth-child(4) {
      background: $pah-color-4;
    }
  }
}
</style>
