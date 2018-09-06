<template>
  <div class="database" id="app">
    <nav-bar></nav-bar>
    <div class="content">
      <h1 class="title is-small">signUp users</h1>
      <p class="p is-small">
        if you want to see all the users you should run the server first
      </p>
      <p>{{users}}</p>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue'
export default {
  name: 'database',
  components: {
    navBar
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    async getUsers () {
      const response = await this.$axios.get('/getUsers')
      this.users = response.data
    }
  }
}
</script>

<style scoped>
.database{
  background-image: url("../assets/header-img.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  height: 100vh;
  padding-top: 5%;
}
.content{
  text-align: left;
  padding: 60px;
}
h1.title.is-small{
  margin-top: 100px;
}
</style>
