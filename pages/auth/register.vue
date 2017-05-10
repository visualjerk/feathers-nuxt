<template>
  <div id="register" class="container">
    <h1>Please register</h1>
    <input v-model="email" type="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="register" class="btn btn-primary">Register</button>
    <ul class="nav">
      <li class="nav-item">
        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
      </li>
    </ul>
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
