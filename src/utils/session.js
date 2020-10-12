//常用方法
const ADMINTOKEN = 'adminToken'
const ID = 'id'
const USERNAME = 'userName'
const MOBILE = 'mobile'
const JOB = 'job'
const EMAIL = 'email'

//清除所有
export function clear(){
    sessionStorage.clear();
}

//token
export function setToken(value){
    sessionStorage.setItem(ADMINTOKEN, value)
}

export function getToken(value){
    return sessionStorage.getItem(ADMINTOKEN, value)
}

export function removeToken(){
    sessionStorage.removeItem(ADMINTOKEN);
}


//ID
export function setId(value){
    sessionStorage.setItem(ID, value)
}

export function getId(value){
    return sessionStorage.getItem(ID, value)
}

export function removeId(){
    sessionStorage.removeItem(ID);
}

//userName
export function setUserName(value){
    sessionStorage.setItem(USERNAME, value)
}

export function getUserName(value){
    return sessionStorage.getItem(USERNAME, value)
}

export function removeUserName(){
    sessionStorage.removeItem(USERNAME);
}

//mobile
export function setMobile(value){
    sessionStorage.setItem(MOBILE, value)
}

export function getMobile(value){
    return sessionStorage.getItem(MOBILE, value)
}

export function removeMobile(){
    sessionStorage.removeItem(MOBILE);
}

//job
export function setJob(value){
    sessionStorage.setItem(JOB, value)
}

export function getJob(value){
    return sessionStorage.getItem(JOB, value)
}

export function removeJob(){
    sessionStorage.removeItem(JOB);
}

//email
export function setEmail(value){
    sessionStorage.setItem(EMAIL, value)
}

export function getEmail(value){
    return sessionStorage.getItem(EMAIL, value)
}

export function removeEmail(){
    sessionStorage.removeItem(EMAIL);
}