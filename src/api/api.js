//将我们http.js中封装好的  get,post.put,delete  导过来

import {axios_get, axios_post, axios_delete, axios_put} from './http.js'

//按照格式确定方法名
export const getBlogList = p => axios_get("/getBlogList", p);
export const add_post1 = p => axios_post("/user/user/", p);
//向后端传输要修改数据的id
export const user_updatad = p => axios_put("/user/user/?id="+p.id, p);	
export const del = p => axios_delete("/user/user/", p );