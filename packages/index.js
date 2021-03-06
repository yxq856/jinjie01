// 引入semantic-ui-css
import 'semantic-ui-css/semantic.css'
// 引入定义好的组件
import MyButton from './button/button.vue'
import MyDivider from './divider/index.vue'
import MySlider from './slider/slider.vue'
import MyHeadline from './headline/headline.vue'
import MyDialog from './dialog/dialog.vue'

// 整体向外导出一个对象
// 这个对象有一个 install 方法
export default {
  // Vue.use(对象),他会执行对象的install方法,并传入Vue对象
  install (Vue) {
    Vue.component('MyButton', MyButton)
    Vue.component('MyDivider', MyDivider)
    Vue.component('MySlider', MySlider)
    Vue.component('MyHeadline', MyHeadline)
    Vue.component('MyDialog', MyDialog)
  }
}
