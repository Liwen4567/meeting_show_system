//用户信息
import React, {useEffect, useState} from 'react';
import { Input } from 'antd';
import {getGuest} from '../../services/api.js'
import {getId, getJob, getEmail, getMobile, getUserName, setId, setEmail, setJob, setMobile, setUserName} from '../../utils/session.js'
import './style.css'

function Guest(){
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
                //console.log(error)
            })
        }
    },[])

    return (
        <div className='guest-container'>
            <div className='guest-item'>
                <span>用户名：</span>
                <Input readOnly value={userName}/>
            </div>
            <div className='guest-item'>
                <span>电话：</span>
                <Input readOnly value={mobile}/>
            </div>
            <div className='guest-item'>
                <span>邮箱：</span>
                <Input readOnly value={email}/>
            </div>
            <div className='guest-item'>
                <span>职位：</span>
                <Input readOnly value={job}/>
            </div>
        </div>
    )
}

export default Guest