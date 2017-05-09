<template>
  <div id="logout" class="container"></div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.$router.replace('/');
        });
    }
  }
</script>
