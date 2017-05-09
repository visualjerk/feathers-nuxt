<template>
  <div id="private" class="container">
    <h1>Super secret page</h1>
    <ul class="nav">
      <li class="nav-item">
        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    middleware: 'authenticated',

  }
</script>
