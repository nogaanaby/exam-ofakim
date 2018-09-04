<template>
  <div class="navBar">
      <div class="menu-buttons">
          <a class="logo">
            <img src="../assets/logo.png" height="60px" width="200px">
          </a>
          <a class="menu-b">
            Home
          </a>
          <a class="menu-b">
            page2
          </a>
          <a class="menu-b">
            page3
          </a>
          <a class="menu-b">
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
      </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      openSearch: false
    }
  },
  methods: {
    openSearchBox () {
      if (this.openSearch) {
        this.openSearch = false
      } else {
        this.openSearch = true
      }
    }
  }
}
</script>

<style scoped>
.navBar{
  background-color: rgba(241, 250, 255, 0.9);
  position: fixed;
  width: 100%;
}
.menu-buttons{
  display: flex;
  flex-direction: row;
  margin: auto;
}
.menu-b{
  padding: 3% 1% 1% 2%;
}
.stretchRight{
  float: right;
}
</style>
