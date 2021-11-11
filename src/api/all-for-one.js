function serverLocal(url, data) {
    return new Promise((res, rej) => {
        this.$http.post(url, data).then(response => {
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

export function server(url, data) {
    return serverLocal(url, {
        reqBody: {
            ...data
        }
    })
}