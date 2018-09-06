<template>
  <div class="home">
    <div class="content">
      <h1 class="title is-small">{{msg}}</h1>
      <img src="../assets/line.png">
      <p class="p is-small">sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
      <a class="" @click="openSignIn = !openSignIn">
        <img src="../assets/btn-acc.png">
      </a>
      <a class="" @click="openContact = !openContact">
        <img src="../assets/sales-btn.png">
      </a>
      <div class="container bounceIn" v-if="openSignIn">
      <sign-in></sign-in>
      </div>
      <div class="container bounceIn" v-if="openContact">
      <contact-us></contact-us>
      </div>
    </div>
  </div>
</template>

<script>
import signIn from '@/components/signIn'
import contactUs from '@/components/contactUs'
export default {
  name: 'home',
  components: {
    signIn,
    contactUs
  },
  data () {
    return {
      msg: 'Welcome To Chocolate Life',
      openSignIn: false,
      openContact: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.home{
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
.container{
  display: block;
  position: absolute;
  margin: 0;
  padding: 0;
}

</style>
