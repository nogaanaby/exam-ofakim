<template>
  <div class="contactUs" v-show="popUpOpend">
      <form class="form">
        <a>
          <span class="icon" @click="popUpOpend = false">
            <i class="fas fa-times"></i>
          </span>
        </a>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="text" placeholder="me@email.com">
          </div>
        </div>

        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input class="input" type="text" placeholder="Title">
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="write your message"></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" type="submit" value="submit" @click="submit">Submit</button>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'contactUs',
  data () {
    return {
      popUpOpend: true
    }
  },
  methods: {

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

.contactUs{
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
