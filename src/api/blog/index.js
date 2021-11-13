// import {
//     server
// } from "../all-for-one"
import axios from 'axios'
//metnod-name:getBlogList
// export const getBlogList = () => {
//     const url = "api/getBlogList"
//     return server('GET', url, '')
// }
axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = '/api/'

export const test = () => {
    const url = "api/getBlogList"
    return new Promise((res, rej) => {
        axios.get(url).then(response => {
            // TODO 错误码和信息
            let {
                respBody
            } = response.data
            console.log(response)
            res({
                data: respBody,
                // code: Number(respBody.code),
                // message: respBody.message
            })
        }).catch(err => {
            rej(err)
        })
    })
}
