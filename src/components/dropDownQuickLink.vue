  <template>
  <div>
    <div class="dropdown is-up" :class="{'is-active': isActive} ">
      <div class="dropdown-trigger quick-link">
        <button class="quick-link" @click="isActive = !isActive" @blur="closeDropdown">
          <span>{{options[selected]}}</span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a v-for="(o, i) in options"
            :key="o[i]"
            @click="select(i)"
            class="dropdown-item">
            {{o}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dropDownQuickLink',
  props: ['options'],
  data () {
    return {
      isActive: false,
      selected: 0
    }
  },
  methods: {
    select (i) {
      this.selected = i
      this.isActive = false
    },
    closeDropdown () {
      setTimeout(() => {
        this.isActive = false
      }, 100)
    }
  }
}
</script>

<style scoped>
.quick-link{
  background-color: transparent;
  border: none;
}

.dropdown-item {
  padding: 0;
  margin: 0;
  line-height: 20px;
}
.dropdown-content {
  width: fit-content;
  padding-left: 4%;
  padding-right: 4%;
}
</style>
