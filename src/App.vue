<template>
  <div id="app">
      <nav-bar @scrollingEvent="scrollTo"></nav-bar>
      <div ref="home" class="home">
        <home></home>
      </div>
      <div ref="page2" class="columns container">
        <page2 class="column"></page2>
        <slider class="column"></slider>
      </div>
      <div class="page3" ref="page3">
        <page3></page3>
      </div>
      <footerComponent></footerComponent>
      <router-view/>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue'
import signIn from '@/components/signIn.vue'
import home from '@/components/home.vue'
import slider from '@/components/slider.vue'
import page2 from '@/components/page2.vue'
import page3 from '@/components/page3.vue'
import footerComponent from '@/components/footer.vue'
export default {
  name: 'App',
  components: {
    navBar,
    signIn,
    home,
    slider,
    page2,
    page3,
    footerComponent
  },
  data () {
    return {
      cuurentPage: 'home',
      slideDown: false,
      slideUp: false
    }
  },
  methods: {
    scrollTo (page) {
      if (page === 'page2') {
        this.$refs.page2.scrollIntoView(true)
      } else if (page === 'page3') {
        this.$refs.page3.scrollIntoView(true)
      } else {
        this.$refs.home.scrollIntoView(true)
      }
    }
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
/**** desktop ****/
@media only screen and (min-width:401px) {
  .container{
    width: 70%;
    margin: auto;
    padding: 5%;
  }
}

/**** mobile ****/
@media only screen and (max-width:400px) {
  .container{
    padding: 10%;
  }
}

.tiny-purple{
  text-align: left;
  color: purple;
  font-size: 0.7em;
}

</style>
