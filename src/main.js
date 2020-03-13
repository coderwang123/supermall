import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css/swiper.css'

import toast from  'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.prototype.$bus= new Vue()

Vue.config.productionTip = false

// 安装 toast插件
Vue.use(toast) // mian.js一启动的时候就开始安装好 vue.use执行的时候 会调用toast里面的 install
FastClick.attach(document.body)
//使用懒加载插件
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.png')// 设置懒加载的时候展位图
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
