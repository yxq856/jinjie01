<template>
   <div class="ui dimmer modals page" :class="{active}">
      <div class="ui standard modal" :class="{active}" style="top: 60px;">
        <i class="close icon" @click="hNo"></i>
        <div class="header">
             <slot  name="header"></slot>
        </div>
        <div class="content">
          <div class="description">
            <slot name="content"></slot>
          </div>
        </div>
        <div class="actions">
          <div class="ui black button">Nope</div>
          <div class="ui positive right labeled icon button" >
            Yep, that's me
            <i class="checkmark icon"></i>
          </div>
        </div>
      </div>
 </div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    //   v-model传过来的value值
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: this.value
    }
  },
  watch: {
    //   监听value发生改变的时候，active的值也发生改变
    value (newVal) {
      this.active = newVal
    }
  },
  methods: {
    //   关闭弹窗
    hNo () {
      this.active = !this.active
      this.$emit('input', this.active)
    }
  }
}
</script>

<style scoped lang="less">

</style>
