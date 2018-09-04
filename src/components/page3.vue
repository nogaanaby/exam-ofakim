<template>
  <div class="page3">
    <div class="content">
      <span>
        <img src="../assets/shield.png">
      </span>
      <h2 class="title is-large">at nunc elit</h2>
      <p class="p is-small">sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
    </div>
    <div class="columns creditBank">
      <div class="column is-four-fifths">
        <img src="../assets/ui-card.jpg">
      </div>
      <div class="column buttons">
        <a class="button is-medium is-fullwidth">vsrth </a>
        <a class="button is-medium is-fullwidth">vsrth </a>
        <a class="button is-medium is-fullwidth">vsrth </a>
        <a class="button is-medium is-fullwidth">vsrth </a>
        <img src="../assets/line.png">
        <p class="p is-small">estibulum at nunc elit. Praesent aliquet ligula mi,</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'page3',
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.page3{
  padding: 5% 20%;
  background-color: white;
}
.content{
  width: 70%;
  margin: auto;
  padding-bottom: 5%;
}
.buttons{
  display: flex;
  flex-direction: column;
}
</style>
