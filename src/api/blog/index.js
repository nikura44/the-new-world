import {
    server
} from "../all-for-one"

//metnod-name
export const getSel=(data) => {
    const url ="/"
    return server('post',url,data)
}