<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr>
    <my-button size="mini">小按钮</my-button>
    <br>
    <br>
    <my-button>默认按钮</my-button>
    <br><br>
    <my-button size="massive" >大按钮</my-button>
    <!-- 图标按钮 -->
    <br><br>
    <my-button icon="cloud">图标按钮</my-button>
    <br><br>
    <my-button icon="warning circle">警告按钮</my-button>
    <br><br>
    <!--禁用按钮 -->
    <my-button size="big" disabled>禁用按钮</my-button>
    <br><br>
    <!-- 加载状态 -->
    <my-button loading>加载中...</my-button>
    <br><br>
    <!-- 动画按钮 -->
    <my-button animated="fade">
      <div slot="hidden">shop</div>
      <div slot="visible">哈哈哈哈！！</div>
    </my-button>
    <my-button animated="vertical">
      <div slot="hidden">gogogo</div>
      <div slot="visible">啦啦啦！</div>
    </my-button>
    <!-- 添加点击事件
      由于mybutton 是组件，所以不能直接添加事件，除非组件内部有暴露出来
      如果没有可以添加 native 修饰符
     -->
    <br><br>
    <my-button @click.native="sub()">修饰符native实现点击</my-button>
    <my-button @click1="sub()">点击我啊</my-button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    sub () {
      alert('哈哈哈，欢迎您')
    }
  }
}
</script>
