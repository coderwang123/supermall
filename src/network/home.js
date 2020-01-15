import {request} from './request.js'

export function getHomeMultiDate() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params: {
      type,
      page
    }
  })
}
