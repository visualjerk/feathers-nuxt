<template>
  <div id="create" class="mx-auto">
    <h2>Create a post</h2>

    <div class="form-group">
      <label for="description" class="sr-only">Description</label>
      <input v-model="description" type="text" id="description" class="form-control" placeholder="What do you have to say?">
    </div>

    <div class="form-group">
      <button @click="createPost" class="btn btn-primary btn-block">Submit</button>
    </div>

  </div>
</template>

<script>
  export default {
    middleware: 'authenticated',
    data () {
      return {
        description: '',
      }
    },
    methods: {
      createPost() {
        this.$store.dispatch('posts/create',
          {
            description: this.description
          })
          .then(() => {
            this.$router.replace('/posts')
          })
          .catch(error => {
            console.log(error)
          });
      }
    }
  }
</script>

<style>
  #create {
    max-width:400px;
  }
</style>
