<template>
    <div class="ui button" :class="cClass" @click="hEmitClick()">
      <template v-if="animated">
        <!-- 带动画的按钮 -->
        <!-- $slots:标识收集到的所有的插槽 -->
        <div v-if="$slots.hidden"  class="hidden content">
          <!-- 具名插槽 -->
          <slot name="hidden"></slot>
        </div>
        <div v-if="$slots.visible"  class="visible content">
          <!-- 具名插槽 -->
          <slot name="visible"></slot>
        </div>
      </template>
      <!-- 不带动画的按钮 -->
      <template v-else>
        <!-- 按钮图标，当icon有的时候显示 -->
        <i v-if="icon" class="icon" :class="icon"></i>
        <!-- 使用的时候可以自定义内容 -->
        <slot>默认内容</slot>
      </template>
    </div>

</template>
icon
<script>
export default {
  name: 'MyButton',
  props: {
    // size:按钮的大小
    size: {
      type: String,
      default: 'medium',
      require: false,
      // 校验size的值为
      validator: function (val) {
        // arr.includes(val) 判断数组中是否存在，返回布尔值，为真不报错，为false报错
        return ['mini', 'samll', 'tiny', 'medium', 'large', 'big', 'huge', 'massive'].includes(val)
      }
    },
    // 图标
    icon: {
      type: String,
      default: '',
      required: false
    },
    // 禁用，默认为false
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    // 是否处于加载状态，默认为false
    loading: {
      type: Boolean,
      default: false,
      required: false
    },
    // 动画animate
    animated: {
      type: String,
      default: '',
      required: false
    }
  },
  created () {
    // console.log(this.disabled)
    // console.log(this.icon)
    // console.log(this.size)
  },
  computed: {
    // 计算是否有某些类
    cClass () {
      // 默认拥有size类
      const classArr = ['size']
      // 如果disabled传的为真，则添加类名disabled
      this.disabled && classArr.push('disabled')
      /* 上述代码等同于
        if(this.disabled) { classArr.push('disabled)}
      */
      // 如果加载中为真，添加类名
      this.loading && classArr.push('loading')
      // 如果有动画，需要添加类名
      this.animated && classArr.push('animated', this.animated)
      return classArr.join(' ')
    }
  },
  methods: {
    hEmitClick () {
      this.$emit('click1')
    }
  }

}
</script>

<style scoped lang="less">

</style>
