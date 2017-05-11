<template>
  <div id="register">
    <h1>Please register</h1>
    <input v-model="email" type="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="register" class="btn btn-primary">Register</button>
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
      register() {
        this.$store.dispatch('auth/register', {email: this.email, password: this.password})
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
