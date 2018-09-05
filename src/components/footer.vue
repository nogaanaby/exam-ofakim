  <template>
  <div class="footer">
    <div class="columns is-mobile">

      <div class="column links">
        <h5 class="title is-5">Title Bla</h5>
        <ul>
          <li><dropDownQuickLink :options = "['United State', 'Israel', 'Japan', 'Turkey']"></dropDownQuickLink></li>
          <li><dropDownQuickLink :options="['English', 'Hebrew', 'Chinese']"></dropDownQuickLink></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import dropDownQuickLink from '@/components/dropDownQuickLink.vue'
export default {
  name: 'footerComponent',
  components: {
    dropDownQuickLink
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
