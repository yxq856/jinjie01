<template>
<!-- header类：控制大小写，如果不写不区分大小写，全部大写，写了之后，可以区分大小写 -->
    <div class="ui divider header" :class="{horizontal:$slots.default ||icon}">
        <!-- 写内容  horizontal -->
        <slot></slot>
        <i class="icon" :class="icon"></i>
    </div>
</template>

<script>
export default {
  name: 'MyDivider',
  props: {
    // 传过来的图标属性
    icon: {
      type: String,
      default: '',
      required: false
    }
    // 竖线分割
    /* vertical: {
      type: Boolean,
      default: false,
      require: false
    } */
  }
}
</script>

<style scoped lang="less">

</style>
