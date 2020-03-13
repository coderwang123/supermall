import {
  ADD_COUNTER,ADD_TO_CART
} from './mution-types'
export default {
  addCart(context,payload){
    return new Promise((resolve, reject) =>{
      // 1.查找数组中是否有该商品
      // 遍历数组中的每一项，一但发现数组中item的iid 等于 传过来的iid 就会把 item 返回 作为product的值
      // item为数组中的每一项
      let oldproduct = context.state.cartList.find(item =>{
        return item.iid === payload.iid
      })
      // 2.判断 oldproduct
      if(oldproduct){
        context.commit(ADD_COUNTER,oldproduct)
        resolve('当前的商品数量+1')
      }else {
        payload.count = 1
        context.commit(ADD_TO_CART,payload)
        resolve('成功添加新商品')
      }
    })
  },
  reduce(context,payload){
    if(confirm("确定减少吗")){
      context.commit('jian_count',payload)
    }
  },
  increase(context,payload){
    context.commit('add_count',payload)
  },
  del(context){
    if(confirm('确认清空么')){
      context.commit('del_more')
    }
  }
}
