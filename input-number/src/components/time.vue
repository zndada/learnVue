<template>
  <div>
    <div v-time="timeNow"></div>
    <div v-time="timeBefore"></div>
  </div>
</template>

<script>
import { Time } from '../common/time'
export default {
  data () {
    return {
      timeNow: (new Date()).getTime(),
      timeBefore: 1488930695721
    }
  },
  directives: {
    time: {
      bind: function (el, binding) {
        el.innerHTML = Time.getFormatTime(binding.value)
        el.__timeout__ = setInterval(function () {
          el.innerHTML = Time.getFormatTime(binding.value)
        }, 6000)
      },
      unbind: function (el) {
        clearInterval(el.__timeout__)
        delete el.__timeout__
      }
    }
  }
}
</script>
