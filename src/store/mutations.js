import {
  ADD_COUNTER,ADD_TO_CART
} from './mution-types'

export default {
  // mutations唯一的目的就是修改state中状态
  // mutations中每个方法尽可能完成的事件比较单一一点
  [ADD_COUNTER](state,payload){
    payload.count++
  },
  [ADD_TO_CART](state,payload){
    payload.checked = false
    state.cartList.push(payload)
  },
  jian_count(state,payload){
    payload.count--
    if(payload.count<0){
      alert('该商品不能减少了')
      payload.count = 0
    }
  },
  add_count(state,payload){
    payload.count++
  },
  del_more(state){
    state.cartList.splice(0)
  }
}
