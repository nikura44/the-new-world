import axios from 'axios'

// const serve = axios.create({
//     baseURL: "http://localhost:8080",
//     timeout: 3000
// })
axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = '/nicolas/'

function serverPost(url, data) {
    return new Promise((res, rej) => {
        axios.post(url, data).then(response => {
            // TODO 错误码和信息
            let {
                respBody
            } = response.data
            res({
                data: respBody,
                code: Number(respBody.code),
                message: respBody.message
            })
        }).catch(err => {
            rej(err)
        })
    })
}

function serverGet(url) {
    return new Promise((res, rej) => {
        axios.get(url).then(response => {
            // TODO 错误码和信息
            let {
                respBody
            } = response.data
            res({
                data: respBody,
                code: Number(respBody.code),
                message: respBody.message
            })
        }).catch(err => {
            rej(err)
        })
    })
}

function server(method, url, data) {
    if (method == 'POST') {
        return serverPost(url, {
            reqBody: {
                ...data
            }
        })
    }
    if (method == 'GET') {
        return serverGet(url, {
            reqBody: {
                ...data
            }
        })
    }

}

export const getBlogList = () => {
    const url = "getBlogList"
    axios.get('/longRequest', {
        timeout: 5000,
        baseURL: '/nicolas/'
    });
    return server('GET', url, '')
}