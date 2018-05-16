<template>
  <div class="list">
    <div  v-if="this.list.length">
      <div v-for="(item, index) in list" :key="index" class="list-item">
          <div class="span-con">
            <span>{{item.name}}:</span>
          </div>
          <div class="list-msg">
            <div>{{item.message}}</div>
            <div class="list-reply">
              <a @click="listChange(index)">回复</a>
            </div>
          </div>
      </div>
    </div>
    <div v-if="!this.list.length" class="list-nothing">
      留言列表为空
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    listChange: function (index) {
      this.handleReply(index)
    },
    handleReply: function (index) {
      this.$emit('reply', index)
    }
  }
}
</script>
<style scoped>
.list{
  margin: 50px 20px 0 20px;
}
.list-item{
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-bottom: 1px solid #e3e8ee;
  overflow: hidden;
  flex: 5;
}
.span-con{
  flex: 1;
  margin-right: 10px;
  color: #39f;
}
.list-msg{
  flex: 9;
  text-align: justify;
}
.list-msg .list-reply{
  text-align: right
}
.list-msg a:hover{
  color: #39f
}
.list-nothing{
  text-align: center;
  color: #9ea7b4;
  padding: 20px;
}
</style>
