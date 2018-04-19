<template>
  <div>
      <input-count v-model="value" :max="100" :min="0"></input-count>
  </div>
</template>

<script>
import inputCount from '../components/inputCount'
export default {
  data () {
    return {
      value: 5
    }
  },

  components: {
    inputCount
  }
}
</script>
