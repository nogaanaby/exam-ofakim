<template>
  <div class="signIn" v-show="popUpOpend">
      <form class="form" v-show="!submited" method="POST" action="/users/add">
        <a>
          <span class="icon" @click="close">
            <i class="fas fa-times"></i>
          </span>
        </a>
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input class="input" type="text" placeholder="JohnSmithBla" name="username">
          </div>
          <p v-show="invalidUsername" class="help is-danger">This username is already exist</p>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password" name="password">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" type="submit" value="submit" @click="submit">Submit</button>
          </div>
        </div>
      </form>
      <div class="backend-res" v-show="submited">

      </div>
  </div>
</template>

<script>
export default {
  name: 'signIn',
  data () {
    return {
      invalidUsername: false,
      invalidEmail: false,
      submited: false,
      popUpOpend: true
    }
  },
  methods: {
    submit () {
      if (this.submited) {
        this.submited = false
      } else {
        this.submited = true
      }
    },
    close () {
      this.popUpOpend = false
    }
  }
}
</script>

<style scoped>
.form{
  display: block;
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.signIn{
  display: block;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  margin:0;
  padding:0;
  overflow: auto;
}
</style>
