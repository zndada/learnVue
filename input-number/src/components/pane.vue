<template>
  <div class="pane" v-show="show">
      <slot>sfds</slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    updateNav () {
      this.$parent.updateNav()
    }
  },
  watch: {
    label () {
      this.updateNav()
    }
  },
  mounted () {
    this.updateNav()
  }
}
</script>
