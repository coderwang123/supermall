import Toast from "./Toast";

const obj ={}

obj.install = function (Vue) {
  // 当他执行install函数的时候，toast里template模板是还没有挂载的，没有渲染的
  // 1. 创建组件构造器
  const toastContrustor = Vue.extend(Toast) // 这一步相当于直接把 Toast组件对象传进去了

  // 2. new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()

  // 3. 将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  // 4. toast.$el 对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
