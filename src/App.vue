<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import singlePageApp from '@/components/singlePageApp'
export default {
  name: 'App',
  components: {
    singlePageApp
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
@import '../node_modules/bulma/css/bulma.css';
@import '../node_modules/font-awesome/css/font-awesome.css';
@import '../node_modules/font-awesome/css/font-awesome';
@import '../node_modules/vue2-animate/dist/vue2-animate.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background-color: aliceblue;
}

.tiny-purple{
  text-align: left;
  color: purple;
  font-size: 0.7em;
}

</style>
