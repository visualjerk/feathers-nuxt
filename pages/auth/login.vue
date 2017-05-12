<template>
  <div id="login" class="mx-auto">
    <h2>Please login</h2>

    <div class="form-group">
      <label for="email" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="email" class="form-control" placeholder="Email">
    </div>

    <div class="form-group">
      <label for="password" class="sr-only">Password</label>
      <input v-model="password" type="password" id="password" class="form-control" placeholder="Password">
    </div>

    <div class="form-group">
      <button @click="login" class="btn btn-success btn-block">Login</button>
    </div>

    <nuxt-link to="/">&larr; Go back</nuxt-link>

  </div>
</template>

<script>
  export default {
    layout: 'blank',
    middleware: 'anonymous',
    data () {
      return {
        email: '',
        password: '',
        remember: false,
      }
    },
    methods: {
      login() {
        this.$store.dispatch('auth/login', {email: this.email, password: this.password})
          .then(() => {
            this.$router.replace('/');
          })
          .catch(error => {
            this.email = this.password = '';
          });
      }
    }
  }
</script>

<style>
  #login {
    max-width: 330px;
    padding: 15px;
  }
</style>
