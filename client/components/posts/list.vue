<template>
  <div id="posts" class="mx-auto">
    <h2>Your posts:</h2>
    <p v-for="post in posts">{{ post.description }}</p>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import feathers from '~plugins/feathers'
  export default {
    middleware: 'authenticated',
    computed: {
      ...mapState('posts', {
        posts: state => state.posts,
      })
    },
    methods: {
      getList() {
        this.$store.dispatch('posts/getlist')
      }
    },
    created() {
      this.getList()

      feathers.service('posts')
        .on('created', post => this.getList())
    }
  }
</script>
