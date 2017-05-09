<template>
  <div id="app" class="container">
    <h1>FeathersJS + Nuxt.js</h1>
    <ul class="nav">
      <li class="nav-item" v-if="!isAuthenticated">
        <nuxt-link to="/auth/login" class="nav-link">Login</nuxt-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated">
        <nuxt-link to="/auth/logout" class="nav-link">Logout</nuxt-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated">
        <nuxt-link to="/private" class="nav-link">Private</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({isAuthenticated: 'auth/isAuthenticated'})
    }
  }
</script>
