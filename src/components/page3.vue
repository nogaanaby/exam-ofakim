<template>
  <div class="page3">
    <div class="content">
      <span>
        <img src="../assets/shield.png">
      </span>
      <h2 class="title is-large">at nunc elit</h2>
      <p class="p is-small">Popup boxes are the most useful way of showing a warning or any other important information to the website visitors in many HTML5 templates. In this article I’m going to walk you through the creation of a very simple popup box with shadow overlay and close button</p>
    </div>
    <div class="columns creditBank">
      <div class="column is-four-fifths">
        <img src="../assets/ui-card.jpg">
      </div>
      <div class="column buttons">

        <a class="pay-b">
          <span class="icon is-medium bay-b-icon">
            <i class="fas fa-barcode"></i>
          </span>
          <span class="bay-b-text">payment</span>
        </a>

        <a class="pay-b">
          <span class="icon is-medium bay-b-icon">
            <i class="far fa-comments"></i>
          </span>
          <span class="bay-b-text">costumers</span>
        </a>

        <a class="pay-b">
          <span class="icon is-medium bay-b-icon">
            <i class="fas fa-address-card"></i>
          </span>
          <span class="bay-b-text">subscribers</span>
        </a>

        <a class="pay-b">
          <span class="icon is-medium bay-b-icon">
            <i class="fas fa-bullhorn"></i>
          </span>
          <span class="bay-b-text">reportings</span>
        </a>      

        <img class="line" src="../assets/line.png">
        <p class="p is-small tiny-purple">estibulum at nunc elit. Praesent</p>
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
  width: 100%
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
  font-size: 1em;
  float: left;
}
.bay-b-icon{
  float: left;
}
img.line{
  float: left;
}
</style>
