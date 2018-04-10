<template>
  <div class="wrapper" append="tree">
    <image src="./logo.png" class="logo"></image>
    <text class="title">Hello {{target}}</text>
  </div>
</template>

<style>
  .wrapper { align-items: center; padding-top: 180px; }
  .title { font-size: 48px; margin-top: 50px; color: #004684}
  .logo { width: 360px; height: 82px; }
</style>

<script>
  export default {
    data: {
      target: 'UMS'
    }
  }
</script>
