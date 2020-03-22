
<script>
export default {
  name: 'MyHeadline',
  props: {
    // 几级标题
    headline: {
      type: Number,
      default: 1
    },
    // 是否有图标
    icon: {
      type: String,
      default: ''
    },
    // 尺寸
    size: {
      type: String,
      default: ''
    }
  },
  // 生成虚拟dom
  render (h) {
    const arr = []
    // 是否有图标
    if (this.icon) {
      const icon = h('i', {
        class: `icon ${this.icon}`
      })
      arr.push(icon)
    }
    // 是否有子标题
    if (this.$slots.sub) {
      const sub = h('div', { class: 'sub header' }, [this.$slots.sub])
      const content = h('div', { class: 'content' }, [this.$slots.default, sub])
      arr.push(content)
    } else {
      const content = h('div', { class: 'content' }, [this.$slots.default])
      arr.push(content)
    }

    return h('h' + this.headline, {
      class: `ui header ${this.size}`
    }, arr)
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
