<template>
    <div class='container'>
        <my-slider
            style="width:500px;height:280px"
            :list='list'
            :currentIndex="currentIndex"
            :auto='2000'
            @click="info"
        >
        </my-slider>
    </div>
</template>

<script>
export default {
  name: 'page-slider',
  data () {
    return {
      // 图片数组
      list: [
        { url: require('./imgs/01.jpg'), alt: '111111' },
        { url: require('./imgs/02.jpg'), alt: '222222' },
        { url: require('./imgs/03.jpg'), alt: '333333' },
        { url: require('./imgs/04.jpg'), alt: '444444' },
        { url: require('./imgs/05.jpg'), alt: '555555' }
      ],
      // 当前下标
      currentIndex: 2
    }
  },
  methods: {
    info (idx) {
      console.log(`点击了第${idx + 1}张图片`)
    }
  }
}
</script>

<style scoped lang="less">

</style>
