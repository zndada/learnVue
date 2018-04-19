<template>
  <div>
    <div class="one" v-show="showOne">
      <label for="">1.请问您的性别是：</label>
      <div>
        <input type="radio" name="sex">男
        <input type="radio" name="sex">女
        <input type="radio" name="sex">保密
      </div>
    </div>
    <div class="one" v-show="showTwo">
      <label for="">2.请问您的性别是：</label>
      <div>
        <input type="radio" name="sex">男
        <input type="radio" name="sex">女
        <input type="radio" name="sex">保密
      </div>
    </div>
    <div class="one" v-show="showThree">
      <label for="">3.请问您的性别是：</label>
      <div>
        <input type="radio" name="sex">男
        <input type="radio" name="sex">女
        <input type="radio" name="sex">保密
      </div>
    </div>
    <v-button v-show="showOne || showTwo" @click="handleNext">下一步</v-button>
    <v-button v-show="showTwo || showThree">上一步</v-button>
    <v-button v-show="showThree">上一步</v-button>
    <v-button>重置</v-button> 
  </div>
</template>
<script>
import vButton from '../components/button'

export default {
  data () {
    return {
      showOne: true,
      showTwo: false,
      showThree: false
    }
  },
  components: {
    vButton
  }
}
</script>
