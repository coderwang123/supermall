import axios from 'axios';

export function request(config){
    // 1.创建axios的实例
    const instance1 = axios.create({
        baseURL:'http://123.207.32.32:8000/api/wh',
        timeout:5000
    })
    // 2.axios的拦截器
    // 2.1 请求拦截
    instance1.interceptors.request.use(config =>{
        // console.log(config);
        // 1.比如config中的一些信息不符合服务器的要求

        // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标

        // 3.某些网络请求（比如登录(token)），必须携带一些特殊的信息，在url中
        return config
    },err => {
        console.log(err);
        return err
    })
    // 2.2 响应拦截
    instance1.interceptors.response.use(res =>{
        return res.data
    },err => {
        return err
    })

    // 3.把网络请求返回，返回的是一个promise
    return instance1(config)
}

// 第三种：通过promise
// export function request(config){
//     return new Promise((resolve,reject)=>{
//           // 1.创建axios的实例
//       const instance1 = axios.create({
//           baseURL:'http://123.207.32.32:8000',
//           timeout:5000
//       })
//       instance1(config)
//       .then(
//           resolve(res)
//       ).catch(
//           reject(err)
//       )
//     })
//   }

// 第二种：通过回调函数的方式，参数为一个对象
// export function request(config){
//     // 1.创建axios的实例
//     const instance1 = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     // 2.发送真正的网络请求
//     instance1(config.baseConfig)
//     .then(res => {
//         // console.log(res);
//         config.success(res);
//     })
//     .catch(err => {
//         // console.log(err);
//         config.failure(err)
//     })
// }

// 第一种通过回调函数 三个参数
// export function request(config,success,failure){
//     // 1.创建axios的实例
//     const instance1 = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     // 2.发送真正的网络请求
//     instance1(config)
//     .then(res => {
//         // console.log(res);
//         success(res);
//     })
//     .catch(err => {
//         // console.log(err);
//         failure(err)
//     })
// }
