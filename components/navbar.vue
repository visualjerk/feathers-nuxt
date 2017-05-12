<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <div class="container">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#mainManu" aria-controls="mainManu" aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-brand">&nbsp;</div>
    <div class="collapse navbar-collapse" id="mainManu">
      <ul class="navbar-nav mr-auto mt-2 mt-md-0">
        <nuxt-link tag="li" to="/" class="nav-item">
          <a class="nav-link">Home</a>
        </nuxt-link>
        <nuxt-link v-if="isAuthenticated" tag="li" to="/private" class="nav-item">
          <a class="nav-link">Private</a>
        </nuxt-link>
      </ul>
      <form class="form-inline" >
        <nuxt-link v-if="!isAuthenticated" to="/auth/login" class="btn btn-sm btn-success mr-2">Login</nuxt-link>
        <nuxt-link v-if="!isAuthenticated" to="/auth/register" class="btn btn-sm btn-primary">Register</nuxt-link>
        <nuxt-link v-if="isAuthenticated" to="/auth/logout" class="btn btn-sm btn-secondary">Logout</nuxt-link>
      </form>
    </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({isAuthenticated: 'auth/isAuthenticated'})
    }
  }
</script>
