<template>
  <div id="app">
    <navbar/>
    <div class="container mt-4">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import navbar from '~components/navbar';
  export default {
    components: {
      navbar
    }
  }
</script>
