// 引入定义好的组件
import MyButton from './button/button.vue'

// 整体向外导出一个对象
// 这个对象有一个 install 方法
export default {
  // Vue.use(对象),他会执行对象的install方法,并传入Vue对象
  install (Vue) {
    Vue.component('MyButton', MyButton)
  }
}
