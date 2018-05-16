<template>
  <div>
    <div class="message">
      <v-input v-model="username"></v-input>
      <v-textarea v-model="message" ref="message"></v-textarea>
      <div class="btn-con">
        <input @click="handleSend" type="button" class="btn" value="发布"/>
      </div>
    </div>
    <v-list :list="list" @reply="handleReply"></v-list>
  </div>
</template>
<script>
import vInput from '../components/vInput.vue'
import vTextarea from '../components/vTextarea.vue'
import vList from '../components/vList.vue'
export default {
  data () {
    return {
      username: '',
      message: '',
      list: []
    }
  },
  components: {
    vInput,
    vTextarea,
    vList
  },
  methods: {
    handleSend: function () {
      if (this.username === '') {
        window.alert('请输入昵称')
        return
      }
      if (this.message === '') {
        window.alert('请输入留言内容')
        return
      }
      // 数组list存储了所有的留言内容，通过函数给list添加一项留言数据，添加成功后把文本框置空
      this.list.push({
        name: this.username,
        message: this.message
      })
      this.message = ''
    },
    handleReply: function (index) {
      var name = this.list[index].name
      this.message = '回复@' + name + ':'
      this.$refs.message.focus()
    }
  }
}
</script>

<style scoped>
.message {
  display: flex;
  flex-direction: column;
}
.message div{
  margin-bottom: 12px;
  flex-direction: row;
}
.message input:focus,
.message textarea:focus{
  border: 1px solid #3399ff;
  border-radius: 5px;
}
.message .btn-con{
  text-align: center;
  display: inline-block;
}
.message .btn{
  padding: 6px 15px;
  border: 1px solid #39f;
  border-radius: 4px;
  color: #fff;
  background-color: #39f;
  cursor: pointer;
  outline: none;
}
</style>
