<template>
  <div id="private">
    <createpost/>
    <hr>
    <postlist/>
    <nuxt-link to="/">&larr; Go back</nuxt-link>
  </div>
</template>

<script>
  import createpost from '~components/posts/create';
  import postlist from '~components/posts/list';

  export default {
    layout: 'default',
    middleware: 'authenticated',
    components: {
      createpost,
      postlist
    }
  };
</script>
