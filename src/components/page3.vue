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

        <a class="pay-b">
          <span class="icon is-medium bay-b-icon">
            <i class="fas fa-align-left"></i>
          </span>
          <span class="bay-b-text">Left</span>
        </a>

        <a class="pay-b">
          <span class="icon is-medium bay-b-icon">
            <i class="fas fa-align-left"></i>
          </span>
          <span class="bay-b-text">Left</span>
        </a>

        <a class="pay-b">
          <span class="icon is-medium bay-b-icon">
            <i class="fas fa-align-left"></i>
          </span>
          <span class="bay-b-text">Left</span>
        </a>

        <a class="pay-b">
          <span class="icon is-medium bay-b-icon">
            <i class="fas fa-align-left"></i>
          </span>
          <span class="bay-b-text">Left</span>
        </a>      

        <img class="line" src="../assets/line.png">
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
/**** desktop ****/
@media only screen and (min-width:401px){
  .page3{
    padding: 5% 20%;
  }
  .content{
    width: 70%;
    margin: auto;
    padding-bottom: 5%;
  }
}
/**** mobile ****/
@media only screen and (max-width:400px){
  .page3{
    padding: 10%;
  }
  .buttons{
    width: 70%;
    margin: auto;
  }
}
.page3{
  background-color: white;
}

.buttons{
  display: flex;
  flex-direction: column;
}
.pay-b{
  color: black;
  padding: 10px;
  width: 100%;
  display: flex;
}
.pay-b:hover{
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 0, 0, 0.19);
  font-weight: bold;
}
.pay-b::active{
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 0, 0, 0.19);
  font-weight: bold;
}
.bay-b-text{
  font-size: 1.5em;
  margin: auto auto auto 10px;
}
.bay-b-icon{
  margin: auto 10px auto auto; /** top right buttom left*/
}
img.line{
  float: left;
}
</style>
