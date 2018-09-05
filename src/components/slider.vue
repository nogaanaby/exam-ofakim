<template>
  <div class="slider">
    <div class="columns is-mobile">
      <span class="column arrows effect">
        <a class="arrows-icon" @click="flip('back')">
          <i class="fas fa-angle-left fa-3x"></i>
        </a>
      </span>

      <div class="slideImg column is-three-fifths">
        <img v-show="imgS === 1" :class="{slideLeft: this.direction ==='next', slideRight: this.direction==='back'}" src="../assets/phone.jpg">
        <img v-show="imgS === 2" :class="{slideLeft: this.direction ==='next', slideRight: this.direction==='back'}" src="../assets/phone2.jpg">
        <img v-show="imgS === 3" :class="{slideLeft: this.direction ==='next', slideRight: this.direction==='back'}" src="../assets/phone3.jpg">
      </div>

      <span class="column arrows">
        <a class="arrows-icon" @click="flip('next')">
          <i class="fas fa-angle-right fa-3x"></i>
        </a>
      </span>
    </div>
    <span>
      <a>
        <i v-if="imgS !== 1" class="far fa-circle fa-xs"></i> <!-- EMPTY 3 || 2 -->
        <i v-if="imgS === 3" class="far fa-circle fa-xs"></i>
        <i class="fas fa-circle fa-xs bounceIn"></i> <!-- FULL -->
        <i v-if="imgS === 1" class="far fa-circle fa-xs"></i>
        <i v-if="imgS !== 3" class="far fa-circle fa-xs"></i><!-- EMPTY 2 || 1 -->
      </a>
    </span>
  </div>
</template>

<script>

export default {
  name: 'slider',
  components: {

  },
  data () {
    return {
      imgS: 1,
      direction: ''
    }
  },
  methods: {
    flip (direction) {
      this.direction = direction
      if (direction === 'next' && this.imgS < 3) {
        this.imgS++
      } else if (direction === 'back' && this.imgS > 1) {
        this.imgS--
      }
    }
  }
}
</script>

<style scoped>
.arrows{
  display: flex;
}
.arrows-icon{
  margin: auto;
}
.slideImg{
  overflow-x: hidden;
}
.slideLeft{
  position:relative;
  -webkit-animation: slideLeft 0.4s;
  animation: slideLeft 0.4s;
}
@keyframes slideLeft {
    0%   {left: 100px;}
    100%  {left: 0px;}
}
.slideRight{
  position:relative;
  -webkit-animation: slideRight 0.4s;
  animation: slideRight 0.4s;
}
@keyframes slideRight {
    0%   {right: 100px;}
    100%  {right: 0px;}
}
</style>
