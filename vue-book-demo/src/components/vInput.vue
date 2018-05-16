<template>
  <div class="input-con">
    <span>昵称:</span>
    <input type="text" :value="value" @input="updateValue"/>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    updateValue: function (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
.input-con{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
span{
  width: 100px;
  display: inline-block;
  text-align: right;
  vertical-align: middle;
}
input{
  border: 1px solid #e6e6ee;
  padding: 4px 5px;
  line-height: 24px;
  height: 24px;
  border-radius: 5px;
  width: 300px;
}
</style>
