import React, {useState, useEffect} from 'react';
import { Input, Button, message } from 'antd';
import {getGuest, alterGuest} from '../../services/api.js'
import {getId, getJob, getEmail, getMobile, getUserName, setId, setEmail, setJob, setMobile, setUserName} from '../../utils/session.js'
import './style.css'

function AlterGuest(){
    const [userName, setMyUserName] = useState('')
    const [mobile, setMyMobile] = useState('')
    const [email, setMyEmail] = useState('')
    const [job, setMyJob] = useState('')
    useEffect(()=>{
        if(getJob()&&getEmail()&&getMobile()&&getUserName()){
            setMyUserName(getUserName())
            setMyMobile(getMobile())
            setMyEmail(getEmail())
            setMyJob(getJob())
        }else{
            getGuest(getId()).then(response => {
                let data = response.data
                setMyUserName(data.username)
                setUserName(data.username)
                setMyMobile(data.mobile)
                setMobile(data.mobile)
                setMyEmail(data.email)
                setEmail(data.email)
                setMyJob(data.job)
                setJob(data.job)
            }).catch(error => {
                console.log(error)
            })
        }
    },[])

    function handleClick(){
        alterGuest(getId, userName, mobile, email, job).then(response => {
            console.log('成功',response)
            //console.log(userName,mobile,email,job)
            //请求成功响应
            if(response.code===0){
                setUserName(userName)
                setMobile(mobile)
                setEmail(email)
                setJob(job)
                message.success("修改成功")
            }
        }).catch(error => {
            console.log('失败',error)
        })
    }

    return (
        <div className='alterGuest-container'>
            <div className='alterGuest-item'>
                <span>用户名：</span>
                <Input value={userName} onChange={(e)=>setMyUserName(e.target.value)}/>
            </div>
            <div className='alterGuest-item'>
                <span>电话：</span>
                <Input value={mobile} onChange={(e)=>setMyMobile(e.target.value)}/>
            </div>
            <div className='alterGuest-item'>
                <span>邮箱：</span>
                <Input type='email' value={email} onChange={(e)=>setMyEmail(e.target.value)}/>
            </div>
            <div className='alterGuest-item'>
                <span>职位：</span>
                <Input value={job} onChange={(e)=>setMyJob(e.target.value)}/>
            </div>
            <Button className='alterGuest-btn' type="primary" onClick={()=>{handleClick()}}>修改信息</Button>
        </div>
    )
}

export default AlterGuest