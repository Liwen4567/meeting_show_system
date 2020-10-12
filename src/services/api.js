//全局请求api
import * as config from './config'
import qs from 'qs'
import {
        get,
        post,
        put,
        del,
        instance //axios实例，用于处理含有请求头参数的请求
} from './axios'




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







//获取嘉宾全部活动 
export const getActive = (userId) => {
        return get('/api/app/active',{
                userId
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
                "email": email,
                "job": job,
                "mobile": telphone,
                "userId": id,
                "username": name
        })
}

//修改嘉宾密码
export const alterPsw = (oldPsw, newPsw) => {
        return post(config.ALTERPSW, {
                "old": oldPsw,
                "nw": newPsw,
        })
}

//发送消息
export const sendMessage = (fromUser, toUser, content) => {
        return post('/api/app/message', {
                "fromUser": fromUser,
                "toUser": toUser,
                "content": content
        })
}

//获取未读消息(旧消息) isRead=ture
export const getOldMessage = (userId,isRead) => {
        return get(`/api/app/message/${userId}`,{
                isRead
        })
}

//获取已读消息(新消息) isRead=false
export const getNewMessage = (userId,isRead) => {
        return get(`/api/app/message/${userId}`,{
                isRead
        })
}

//删除消息
export const delectMessage = (ids) => {
        return post(`/api/app/message/delete`,[ids]
        )
}


//设置已读消息
export const readMessage = (id) => {
        return post(`/api/app/message/read?id=${id}`)
}


//反馈完成任务
export const FinishActive = (id) => {
        return put(`/api/app/volunteer/task/?id=${id}`)
}

//查询负责嘉宾
export const getMyGuest = (id) => {
        return get('/api/app/volunteer/guest',{
                id
        })
}

//查询联络员的任务列表
export const getGuestActive = (id) => {
        return get(`/api/app/volunteer/task`,{
                id
        })
}