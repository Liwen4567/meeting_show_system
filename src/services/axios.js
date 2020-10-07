// 封装axios

import axios from 'axios'
import { message } from 'antd';
import {getToken} from '../utils/session.js'

const instance = axios.create({
  baseURL: '/api', // 请求地址
  timeout: 5000, //请求超时时间
  withCredentials: true,  // 是否允许跨域使用cookies
  //headers: {'X-Custom-Header': 'foobar'} // 设置请求头
  headers: {'token': getToken()} // 设置请求头
});

//封装增删改查方法
export const get = (url, params)=>{
    return instance.get(url, {
      params
    })
}

export const post = (url, data)=>{
  return instance.post(url, data)
}

export const put = (url, data)=>{
  return instance.put(url, data)
}

export const del = (url, data)=>{
  return instance.delect(url, data)
}

//请求拦截
instance.interceptors.request.use(config => {
    // 发送请求前做什么
    config.headers.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNyIsImlhdCI6MTYwMTk4MTcwNCwiZXhwIjoxNjAyNTg2NTA0fQ.7OTP-ELdBkJAEAr5Cc8p34hhe0Z6Z0QNGwgOFgJfYzhfWAWhPcw7JLxczMBj6t-MX2OHDq5UdtIRSEcKBRPskg"
    return config
  },
  error => {
    // 在此定义请求错误需要做什么
    message.error('系统出错');
    return Promise.reject(error)
  });


//响应拦截
instance.interceptors.response.use(config => {
    // 接收前做什么
    const { code } = config.data.code || "";
    if(code === "200" && code === ""){
        message.success(config.data.message || "完成")
        return(config.data)
    }else{

        message.error(config.data.msg || "请求失败");
        return(config.data)
    }
    
  },
  error => {
    // 在此定义请求错误需要做什么
    console.log(error)
    return Promise.reject(error)
  });


