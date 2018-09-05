<template>
  <div class="signIn">
      <form class="form" v-show="!submited">
        <div class="field">
          <label class="label">Full Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="John Smith">
          </div>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input class="input is-success" type="text" placeholder="JohnSmithBla">
          </div>
          <p v-show="invalidUsername" class="help is-danger">This username is already exist</p>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input is-danger" type="email" placeholder="Email input">
          </div>
          <p v-show="invalidEmail" class="help is-danger">This email is invalid</p>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="submit">Submit</button>
          </div>
          <div class="control">
            <button class="button">Cancel</button>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'signIn',
  data () {
    return {
      invalidUsername: false,
      invalidEmail: false,
      submited: false
    }
  },
  methods: {
    submit () {
      if (this.submited) {
        this.submited = false
      } else {
        this.submited = true
      }
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
