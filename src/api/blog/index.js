// import {
//     server
// } from "../all-for-one"
//metnod-name:getBlogList
// export const getBlogList = () => {
//     const url = "getBlogList"
//     return server('GET', url, '')
// }

// export const getBlogList = () => {
//     const url = "api/getBlogList"
//     return new Promise((res, rej) => {
//         server.get(url).then(response => {
//             // TODO 错误码和信息
//             let {
//                 respBody
//             } = response.data
//             res({
//                 data: respBody,
//                 code: Number(respBody.code),
//                 message: respBody.message
//             })
//         }).catch(err => {
//             rej(err)
//         })
//     })
// }
