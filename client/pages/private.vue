<template>
  <div id="private">
    <h1>Super secret page</h1>
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
