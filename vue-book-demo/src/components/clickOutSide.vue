<template>
  <div class="main" v-clickoutside="handleClose" @keyup.esc="handleClose">
      <button @click="show=!show">点击显示下拉菜单</button>
      <div class="dropdown" v-show="show">
          <p>下拉框的内容，点击外面区域可以关闭</p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleClose: function () {
      this.show = false
    }
  },
  directives: {
    clickoutside: {
      bind: function (el, binding, vnode) {
        function documentHandler (e) {
          // 判断点击的区域是否是指令所在的元素内部
          if (el.contains(e.target)) {
            return false
          }
          // 判断当前的指令v-clickoutside有没有写表达式
          if (binding.expression) {
            // 执行上下文methods中指定的函数
            binding.value(e)
            console.log(`binding.value(e):${binding.value(e)}`)
          }
        }
        // 引用documentHandler,这样就可以在unbind钩子里移除对document的click事件监听
        el.__vueClickOutside__ = documentHandler
        document.addEventListener('click', documentHandler)
      },
      unbind: function (el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__)
        delete el.__vueClickOutside__
      }
    }
  }
}
</script>

<style scoped>
[v-cloak]{
    display: none
}
.main{
    width: 125px;
}
button{
    display: block;
    width: 100%;
    color: #ffffff;
    background-color: #39f;
    border: 0;
    padding: 6px;
    text-align: center;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    position: relative;
}
button:active{
    top:1px;
    left: 1px;
}
.dropdown{
    width: 100%;
    height: 150px;
    margin: 5px 0;
    font-size: 12px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2)
}
.dropdown p{
    display: inline-block;
    padding: 6px
}
</style>
