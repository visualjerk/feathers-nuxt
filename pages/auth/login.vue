<template>
  <div id="login">
    <h1>Please login</h1>
    <input v-model="email" type="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="login" class="btn btn-primary">Login</button>
  </div>
</template>

<script>
  export default {
    middleware: 'anonymous',
    data () {
      return {
        email: '',
        password: '',
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
