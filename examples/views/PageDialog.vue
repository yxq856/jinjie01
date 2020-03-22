<template>
    <div class='container'>
        <h2>测试dialog组件</h2>
        <hr>
        <button @click="isShow=true">点击显示弹窗</button>
        <my-dialog v-model="isShow">
            <div slot="header">哈哈哈哈</div>
            <div slot="content">自定义内容</div>
        </my-dialog>
    </div>
</template>

<script>
export default {
  name: 'PageDialog',
  data () {
    return {
      isShow: false
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
