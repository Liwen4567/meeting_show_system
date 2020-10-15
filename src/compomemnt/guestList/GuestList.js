//负责的嘉宾列表
import React, { Component, useState,useContext, useEffect } from 'react';
import style from './GuestList.module.css'
import { Avatar, Empty, message } from 'antd'
import {IdContext} from '../../pages/myGuest/MyGuest'
import {getMyGuest} from '../../services/api'
import {getId} from '../../utils/session'
import MyEmpty from '../../compomemnt/MyEmpty/MyEmpty';

function GuestList (){
    const {changeGuestId} = useContext(IdContext)
    const [guestList, setGuestList] = useState([])
    
    useEffect(()=>{
        getMyGuest(getId()).then(res=>{
            
            if(res.data){
                setGuestList(res.data)
                changeGuestId(res.data[0].userId)
                //message.success("已获取所有负责嘉宾")
            }
            //console.log(res)
        }).catch(err=>{
            //message.error(err.msg||"获取嘉宾失败")
        })
    },[])

    // setGuestList([
    //     {
    //     "userId": 6,
    //     "username": "18883285127",
    //     "mobile": "18883285127",
    //     "email": "me@itrover.cn",
    //     "job": "教授"
    //     },
    //     {
    //     "userId": 6,
    //     "username": "18883285127",
    //     "mobile": "18883285127",
    //     "email": "me@itrover.cn",
    //     "job": "教授"
    //     },
    //     {
    //     "userId": 6,
    //     "username": "18883285127",
    //     "mobile": "18883285127",
    //     "email": "me@itrover.cn",
    //     "job": "教授"
    //     },
    //     {
    //     "userId": 6,
    //     "username": "18883285127",
    //     "mobile": "18883285127",
    //     "email": "me@itrover.cn",
    //     "job": "教授"
    //     },
    //     {
    //         "userId": 6,
    //         "username": "18883285127",
    //         "mobile": "18883285127",
    //         "email": "me@itrover.cn",
    //         "job": "教授"
    //     },
    //     {
    //         "userId": 6,
    //         "username": "18883285127",
    //         "mobile": "18883285127",
    //         "email": "me@itrover.cn",
    //         "job": "教授"
    //     },
    //     {
    //         "userId": 6,
    //         "username": "18883285127",
    //         "mobile": "18883285127",
    //         "email": "me@itrover.cn",
    //         "job": "教授"
    //     },
    // ])



    return(
        <div className={style.container}>
            <div className="containerBox">
               <div className={style.box}>
               <h2 className={style.h2}>负责嘉宾</h2>
                   <ul className={style.ul}>
                    {
                        !guestList.length?<MyEmpty/>:
                        guestList.map((item,index)=>{
                            return(
                                <li key={index} className={style.li}  onClick={e=>{
                                    changeGuestId(item.userId)
                                    //console.log(item.userId)
                                }}>
                                    <div className={item.userId} >
                                    <Avatar size={60} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    <br/>
                                    <a className={item.userId}
                                    //    onClick={(e)=>{changeGuestId(Number(e.target.className))}}
                                    >{item.username}</a>
                                    </div>
                                </li>
                            )       
                        })
                    }
                    </ul>
               </div>
            </div>
        </div>
    )
}

export default GuestList