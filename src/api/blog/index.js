import {
    server
} from "../all-for-one"

//metnod-name:getBlogList
export const getBlogList = () => {
    const url = "/getBlogList"
    return server('GET', url, '')
}

