//全局请求api

import {get, post, put, del} from './axios' 


/*
具体示意：
   export const 方法名 = (变量1，变量2，。。。。。。)=>{
    return 方式("url",{
            变量1，
            变量2，
            。。。。。
        })
}

返回一个promise

*/


//例子 
export const getcode = (mailAddr_or_Phone)=>{
    return post("/verificationCode",{
            mailAddr_or_Phone
        })
}


//

