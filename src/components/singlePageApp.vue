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
import database from '@/components/database.vue'
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
    footerComponent,
    database
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

<style scoped>
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

</style>
