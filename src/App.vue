<template>
  <div id="app">
      <nav-bar></nav-bar>
      <home></home>
      <div class="columns container">
        <page2 class="column"></page2>
        <slider class="column"></slider>
      </div>
      <page3></page3>
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
.container{
  width: 70%;
  margin: auto;
  padding: 5%;
}

</style>
