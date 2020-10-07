//全局请求api
import * as config from './config'
import {
        get,
        post,
        put,
        del
} from './axios'
import {
        getToken
} from '../utils/session.js'
import Password from 'antd/lib/input/Password'




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
export const getcode = (mailAddr_or_Phone) => {
        return post("/api/vip/active", {
                mailAddr_or_Phone
        })
}


//获取全部活动
export const getActive = (telphone) => {
        return get("/api/app/active", {
                telphone
        })
}


//获取活动详细信息
export const getDetailActive = (id) => {
        return get(`/api/app/active/${id}`)
}

//登录
export const login = (phone, password) => {
        return post(config.LOGIN, {
                "mobile": phone,
                "password": password
        })
}

//获取嘉宾信息
export const getGuest = (id) => {
        return get(config.GETGUEST + '/' + id, {})
}

//修改嘉宾信息
export const alterGuest = (id, name, telphone, email, job) => {
        return put(config.ALTERGUEST, {
                data: {
                        "email": email,
                        "job": job,
                        "mobile": telphone,
                        "userId": id,
                        "username": name
                }
        })
}

//修改嘉宾密码
export const alterPsw = (oldPsw, newPsw) => {
        return post(config.ALTERPSW, {
                data: {
                        "oldPsw": oldPsw,
                        "newPsw": newPsw,
                }
        })
}