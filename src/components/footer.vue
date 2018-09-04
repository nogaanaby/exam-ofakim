  <template>
  <div class="footer">
    <div class="columns is-mobile">
      <div class="column links">
        <h5 class="title is-5">Title Bla</h5>
        <ul>
          <li>some link</li>
          <li>some link</li>
          <li>some link</li>
          <li>some link</li>
        </ul>
      </div>
      <div class="column links">
        <h5 class="title is-5">Title Bla</h5>
        <ul>
          <li>some link</li>
          <li>some link</li>
          <li>some link</li>
        </ul>
      </div>
      <div class="column links">
        <h5 class="title is-5">Title Bla</h5>
        <ul>
          <li>some link</li>
          <li>some link</li>
          <li>some link</li>
          <li>some link</li>
          <li>some link</li>
        </ul>
      </div>
      <div class="column links">
        <h5 class="title is-5">Title Bla</h5>
        <ul>
          <li>some link</li>
          <li>some link</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'footerComponent',
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
.footer{
  width: 70%;
  margin: auto;
  background-color: aliceblue;
  padding:2%;
}
.links{
  display: flex;
  flex-direction: column;
}
</style>
