<template>
  <div class="tabs">
      <div class="tabs-bar">
        <div :class="tabCls(item)" v-for="(item,index) in navList" :key="index" @click="handleChange(index)">
            {{item.label}}
        </div>
      </div>
      <div class="tabs-content">
          <slot></slot>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 用来渲染tab的标题
      navList: [],
      // 因为不能修改value，所以复制一份自己维护
      currentValue: this.value
    }
  },
  props: {
    // 这里的value是为了可以使用v-model
    value: {
      type: [String, Number]
    }
  },
  methods: {
    tabCls: function (item) {
      return [
        'tabs-tab',
        {
          'tabs-tab-active': item.name === this.currentValue
        }
      ]
    },
    // 点击tab标题触发
    handleChange: function (index) {
      console.log(index)
      var nav = this.navList[index]
      var name = nav.name
      // 改变当前选中的他把，触发下面的watch
      this.currentValue = name
      // 更新value
      this.$emit('input', name)
      // 触发一个自定义事件，供父级使用
      this.$emit('on-click', name)
    },
    getTabs: function () {
      // 通过遍历子组件，得到所有的pane组件
      return this.$children.filter(function (item) {
        console.log(`item:${item}`)
        console.log(`item.$options.name:${item.$options.name}`)
        return true
      })
    },
    updateNav () {
      this.navList = []
      // 设置对this的引用，在function回调里，this指向的并不是vue实例
      var _this = this
      this.getTabs().forEach(function (pane, index) {
        console.log(`pane:${pane}`)
        _this.navList.push({
          label: pane.label,
          name: pane.name || index
        })
        // 如果没有给pane设置name，默认设置它的索引
        if (!pane.name) pane.name = index
        // 设置当前选中的tab的索引
        if (index === 0) {
          if (!_this.currentValue) {
            _this.currentValue = pane.name || index
          }
        }
      })
      console.log(`this.navList：${this.navList}`)
      this.updateStatus()
    },
    updateStatus () {
      var tabs = this.getTabs()
      var _this = this
      // 显示当前选中的tab对应的pane组件，隐藏没有选中的
      tabs.forEach(function (tab) {
        console.log('执行updateStatus')
        return (tab.show = tab.name === _this.currentValue)
      })
    }
  },
  watch: {
    value: function (val) {
      this.currentValue = val
    },
    currentValue: function () {
      // 当当前的tab发生变化时，更新pane的显示状态
      this.updateStatus()
    }
  }
}
</script>
<style>
.tabs{
  font-size: 14px;
  color: #657180
}
.tabs-bar:after{
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: #d7dde4;
  margin-top: -1px
}
.tabs-tab{
  display: inline-block;
  padding: 4px 16px;
  margin-right: 6px;
  background: #ffffff;
  border: 1px solid #d7dde4;
  cursor: pointer;
  position: relative
}
.tabs-tab-active{
  color: #3399ff;
  border-top: 1px solid #3399ff;
  border-bottom: 1px solid #fff;
}
.tabs-tab-active:before{
  content: '';
  display: block;
  height: 1px;
  background: #3399ff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.tabs-content{
  padding: 8px 0;
}
</style>
