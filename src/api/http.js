import axios from 'axios'
// 环境的切换
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = 'http://localhost:8888/' // 开发环境
// } else if (process.env.NODE_ENV === 'debug') {
//   axios.defaults.baseURL = '' // 调试环境
// } else if (process.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = '' // 生产环境
// }

axios.defaults.baseURL = 'http://localhost:8080/' // 开发环境

// axios.defaults.withCredentials = true
//跨域访问需要发送cookie时一定要加axios.defaults.withCredentials = true

axios.defaults.timeout = 1000000;

// 封装xiaos请求  封装axios里的get
export function axios_get(url,params){
    return new Promise(
      (resolve,reject)=>{
        axios.get(url,{params:params})
          .then(res=>{
            console.log("封装信息的的res",res);
            resolve(res.data)
          }).catch(err=>{
          reject(err.data)
        })
      }
    )
  }
  
  // 封装xiaos请求  封装axios里的post
  export function axios_post(url,data){
    return new Promise(
      (resolve,reject)=>{
        console.log(data);
        axios.post(url,JSON.stringify(data))
          .then(res=>{
            console.log("封装信息的的res",res);
            resolve(res.data)
          }).catch(err=>{
          reject(err.data)
        })
      }
    )
  }
  
  // 封装xiaos请求  封装axios里的put
  export function axios_put(url,data){
    return new Promise(
      (resolve,reject)=>{
        console.log(data);
        axios.put(url,JSON.stringify(data))
          .then(res=>{
            console.log("封装信息的的res",res);
            resolve(res.data)
          }).catch(err=>{
          reject(err.data)
        })
      }
    )
  }
  
  // 封装xiaos请求  封装axios里的delete
  export function axios_delete(url,data){
    return new Promise(
      (resolve,reject)=>{
        console.log(data);
        axios.delete(url,{params:data})
          .then(res=>{
            console.log("封装信息的的res",res);
            resolve(res.data)
          }).catch(err=>{
          reject(err.data)
        })
      }
    )
  }
  
  