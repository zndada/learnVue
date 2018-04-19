<template>
  <tabs v-model="activeKey">
      <pane label="标签一" name="1">
          <!-- 标签一的内容 -->
      </pane>
       <pane label="标签二" name="2">
          标签二的内容
      </pane>
       <pane label="标签三" name="3">
          标签三的内容
      </pane>
  </tabs>
</template>
<script>
import tabs from '../components/tabs'
import pane from '../components/pane'
export default {
  data () {
    return {
      activeKey: 1
    }
  },
  components: {
    tabs,
    pane
  }
}
</script>
