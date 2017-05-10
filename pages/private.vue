<template>
  <div id="private" class="container">
    <h1>Super secret page</h1>
    <ul class="nav">
      <li class="nav-item">
        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
      </li>
    </ul>
    <div v-if="user">Logged in as: <strong>{{ user.email }}</strong></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    middleware: 'authenticated',
    computed: {
      ...mapState('auth', {
        user: state => state.user,
      })
    },
  };
</script>
