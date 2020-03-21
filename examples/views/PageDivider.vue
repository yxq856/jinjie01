<template>
    <div class='container'>
        <h2>测试my-divider组件</h2>
        <hr>
        <!-- 普通的分割线（横着） -->
        <my-divider></my-divider>
        <br>
        <br>
        <!-- 中间写字 -->
        <my-divider>哈哈哈哈哈</my-divider>
        <br><br>
        <!-- 加图标 -->
        <my-divider icon="user"></my-divider>
        <br><br>
        <!-- 既加图标又加字 -->
        <my-divider icon="user">啦啦啦</my-divider>
        <!-- 竖线分割 -->
        <br><br>
        <div style="height:300px">
            <!-- <my-divider vertical></my-divider> -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'page-divider'
}
</script>

<style scoped lang="less">

</style>
