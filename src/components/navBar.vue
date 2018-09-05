<template>
  <div class="navBar">
      <div class="header">
          <a class="logo">
            <img src="../assets/logo.png" height="60px" width="200px">
          </a>
          <a class="menu-b hideOnMobile">
            <span class="menu-b-text" @click="scroll('home')" >Home</span>
          </a>
          <a class="menu-b hideOnMobile">
            <span class="menu-b-text" @click="scroll('page2')" >page2</span>
          </a>
          <a class="menu-b hideOnMobile">
            <span class="menu-b-text" @click="scroll('page3')" >page3</span>
          </a>
          <a class="menu-b hideOnMobile">
            <a class="fas fa-search" @click="openSearchBox"></a>
            <div v-if="openSearch" class="field stretchRight">
              <p class="control has-icons-right">
                <input class="input" type="text" placeholder="search">
                <span class="icon is-small is-right">
                  <i class="fas fa-search"></i>
                </span>
              </p>
            </div>
          </a>
          <span class="hideOnDesktop burgerSpan" @click="openMobileMenuTab">
            <i class="fas fa-bars fa-3x burgerIcon"></i>
          </span>
      </div>
      <div class="mobileMenu hideOnDesktop stretchDown" v-if="openMobileMenu">
          <a class="menu-M">
            Home
          </a>
          <a class="menu-M">
            page2
          </a>
          <a class="menu-M">
            page3
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      openSearch: false,
      openMobileMenu: false
    }
  },
  methods: {
    openSearchBox () {
      if (this.openSearch) {
        this.openSearch = false
      } else {
        this.openSearch = true
      }
    },
    openMobileMenuTab () {
      if (this.openMobileMenu) {
        this.openMobileMenu = false
      } else {
        this.openMobileMenu = true
      }
    },
    scroll (page) {
      this.$emit('scrollingEvent', page)
    }
  }
}
</script>

<style scoped>
.navBar{
  position: fixed;
  width: 100%;
  z-index: 1;
}
.header{
  background-color: rgba(241, 250, 255, 0.9);
  display: flex;
  flex-direction: row;
  margin: auto;
  max-height: 100px;
}
.menu-b{
  padding: 3% 1% 1% 2%;
  font-size: 1em;
  color: black;
}
.menu-b-text{
  padding: 10px 20px;
}
.menu-b-text:hover{
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 0, 0, 0.19);
}
.menu-M{
  font-size: 1.5em;
  padding: 5%;
  color: black;
}
.menu-M:hover{
  font-weight: bold;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 0, 0, 0.19);
  width: 80%;
  margin: 0 auto;
}
.stretchRight{
  float: right;
  justify-content: center;
}
.burgerSpan{
  display: flex;
  width: 100%;
}
.burgerIcon{
  margin: auto 10% auto auto;
}
.mobileMenu{
  background-color: rgba(241, 250, 255, 0.9);
  width: 200px;
  height: 200px;
  float: right;
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 400px) {
  .hideOnMobile{
    display:none;
  }
}

@media screen and (min-width: 401px) {
  .hideOnDesktop{
    display:none;
  }
}

</style>
