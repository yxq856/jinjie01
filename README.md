# jinjie01

## 安装
```
npm i demo-btn
```

### 使用
```
import demo-btn from '/demo-btn'
import 'demo-btn/lib/demo-btn.css'
Vue.use(demo-btn)
```

### 组件

* 按钮my-button
* 分割线 my-divider
* 轮播图 my-slider
* headline

#### 按钮的使用
* size:按钮的大小，可选值：'mini', 'samll', 'tiny', 'medium', 'large', 'big', 'huge', 'massive'，默认为medium
```
<my-button size="mini">小按钮</my-button>
<br>
<br>
<my-button>默认按钮</my-button>
<br><br>
<my-button size="massive" >大按钮</my-button>
```
* icon: 带有图标的按钮
```
<my-button icon="cloud">图标按钮</my-button>
<br><br>
<my-button icon="warning circle">警告按钮</my-button>
```
* disabled:按钮禁用，默认为false
```
<my-button size="big" disabled>禁用按钮</my-button>
```
* loading:加载状态的按钮，默认为false
```
<my-button loading>加载中...</my-button>
```
* animated:按钮带有动画 
```
<my-button animated="fade">
  <div slot="hidden">shop</div>
  <div slot="visible">哈哈哈哈！！</div>
</my-button>
<my-button animated="vertical">
  <div slot="hidden">gogogo</div>
  <div slot="visible">啦啦啦！</div>
</my-button>
```
* click:绑定点击事件
```
<my-button @click1="sub()">点击我啊</my-button>
methods: {
    sub () {
      alert('哈哈哈，欢迎您')
    }
}
```
#### 分割线的使用
* 普通分割线
```
<my-divider></my-divider>
```
* 分割线中间显示文字
```
<my-divider>显示的文字</my-divider>
```
* 显示图标
```
<my-divider icon="user"></my-divider>
```
#### 轮播图的使用
* style  设置宽和高
* list： 设置图片数组
* auto: 设置图片是否自动轮播
* currentIndex：当前图标的下标
* click事件：点击图片做什么
```
<my-slider
    style="width:500px;height:280px"
    :list='list'
    :currentIndex="currentIndex"
    :auto='2000'
    @click="info"
>
</my-slider>

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
```

#### headline的使用
* headline：可以控制是几级标题
* icon :是否下是图标
* 具名插槽：slot = sub 子标题
* size:可以控制大小
```
<my-headline :headline="1" icon="user" >
  哈哈哈哈
  <div slot="sub">我是小标题</div>
</my-headline>
<my-headline :headline="2" icon="user">
  哈哈哈哈
  <div slot="sub">我是小标题</div>
</my-headline>
```

#### dialog弹窗的使用
* v-model: 弹窗是否显示
```
<my-dialog v-model="isShow">
    <div slot="header">哈哈哈哈</div>
    <div slot="content">自定义内容</div>
</my-dialog>

data () {
  return {
    isShow: false
  }
}
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
