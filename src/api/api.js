//将我们http.js中封装好的  get,post.put,delete  导过来

import { axios_post, axios_delete, axios_put} from './http.js'

//按照格式确定方法名
export const getBlogList = p => axios_post("/getBlogList", p);
export const getBlogContent = p => axios_post("/getBlogContent", p);
//向后端传输要修改数据的id
export const user_updatad = p => axios_put("/user/user/?id="+p.id, p);	
export const del = p => axios_delete("/user/user/", p );