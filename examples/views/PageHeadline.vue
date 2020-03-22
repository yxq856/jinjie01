<template>
    <div class='container'>
        <h2>测试headline组件</h2>
        <hr>
        <my-headline :headline="1" icon="user" >
          哈哈哈哈
          <div slot="sub">我是小标题</div>
        </my-headline>
        <my-headline :headline="2" icon="user">
          哈哈哈哈
          <div slot="sub">我是小标题</div>
        </my-headline>
    </div>
    <!-- <template>
    <h2 class="ui header" :class="size">
        <i v-if="icon" class="icon" :class="icon"></i>
        <div class="content">
            <slot></slot>
            <div class="sub header">
              <slot name="sub"></slot>
            </div>
        </div>
    </h2>
</template> -->
</template>

<script>
export default {
  name: 'page-divider'
}
</script>

<style scoped lang="less">

</style>
