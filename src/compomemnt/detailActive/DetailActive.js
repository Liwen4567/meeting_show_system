//详细活动信息

import React, { Component, useEffect, useContext, useState } from 'react';
import { Breadcrumb, Card, Input } from 'antd';
import '../.././style/global.css'
import style from './DetailActive.module.css'
import { getActive, getDetailActive } from '../../services/api'
import { HistoryOutlined } from '@ant-design/icons'
import { IdContext } from '../../pages/active/Active'
import { useImmer } from "use-immer";
const { TextArea } = Input;

function DetailActive(params) {
    const { activeId, changeId } = useContext(IdContext)
    const [showWhat, setShowWhat] = useState(1)
    const [detailList, setDetailList] = useState()
    const [detailList_active, setDetailList_active] = useState({
        "id": "",
        "location": "暂无",
        "title": "暂无",
        "content": "暂无",
        "startTime": "暂无",
        "endTime": "暂无"
    })
    const [detailList_other, setDetailList_other] = useState([
                    {
                        "username": "暂无",
                        "job": "暂无",
                        "id": ""
                    }
                ])
    const [detailList_volunteer, setDetailList_volunteer] = useState([
                    {
                        "id": "",
                        "name": "暂无",
                        "telphone": "暂无",
                        "email": "暂无"
                    }
                ])
    const [detailList_car, setDetailList_car] = useState([
                    {
                        "id": "",
                        "driverName": "暂无",
                        "carNumber": "暂无",
                        "carType": "暂无",
                        "driverTelphone": "暂无",
                        "onUse": ""
                    }
                ])
    const [detailList_room, setDetailList_room] = useState({
                    "id": "",
                    "location": "暂无",
                    "roomType": "暂无",
                    "roomNumber": "暂无"
                })
    useEffect(
        () => {
             getDetailActive(activeId)
                .then((res) => {
                    //console.log(res.data)
                    // res.data = {
                    //     "other": null,
                    //     "volunteer": null,
                    //     "car": null,
                    //     "active": null,
                    //     "room": null
                    // }
                    if(res.data.active != null){
                        setDetailList_active(res.data.active)
                    }else{
                        setDetailList_active({
                            "id": "",
                            "location": "暂无",
                            "title": "暂无",
                            "content": "暂无",
                            "startTime": "暂无",
                            "endTime": "暂无"
                        })
                    }
                    if(res.data.other != null && res.data.other != []){
                        setDetailList_other(res.data.other)
                    }else{
                        setDetailList_other([
                            {
                                "username": "暂无",
                                "job": "暂无",
                                "id": ""
                            }
                        ])
                    }
                    if(res.data.car != null && res.data.car != []){
                        setDetailList_car(res.data.car)
                    }else{
                        setDetailList_car([
                            {
                                "id": "",
                                "driverName": "暂无",
                                "carNumber": "暂无",
                                "carType": "暂无",
                                "driverTelphone": "暂无",
                                "onUse": ""
                            }
                        ])
                    }
                    if(res.data.room != null && res.data.room != []){
                        setDetailList_room(res.data.room)
                    }else{
                        setDetailList_room({
                            "id": "",
                            "location": "暂无",
                            "roomType": "暂无",
                            "roomNumber": "暂无"
                        })
                    }
                    if(res.data.volunteer != null && res.data.volunteer != []){
                        setDetailList_volunteer(res.data.volunteer)
                    }else{
                        setDetailList_volunteer([
                            {
                                "id": "",
                                "name": "暂无",
                                "telphone": "暂无",
                                "email": "暂无"
                            }
                        ])
                    }
                    
                }).catch((err) => {
                    console.log(err)
                })
            //console.log("已获取新数据")
        }
        , [activeId])
    return (
        <div className={style.box}>
            <div className="containerBox">
                <h2 className={style.h2}>活动详情</h2>
                <Breadcrumb className={style.Breadcrumb}>
                        <Breadcrumb.Item onClick={() => { setShowWhat(1) }}>
                            <span className={showWhat == 1 ? style.activeSpan : style.span}>活动详情</span>
                        </Breadcrumb.Item >
                        <Breadcrumb.Item onClick={() => { setShowWhat(2) }}>
                            <span className={showWhat == 2 ? style.activeSpan : style.span}>我的司机</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => { setShowWhat(3) }}>
                            <span className={showWhat == 3 ? style.activeSpan : style.span}>我的房间</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => { setShowWhat(4) }}>
                            <span className={showWhat == 4 ? style.activeSpan : style.span}>我的志愿者</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => { setShowWhat(5) }}>
                            <span className={showWhat == 5 ? style.activeSpan : style.span}>其他嘉宾</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                <div className={style.container}>
                    
                    {
                        
                        showWhat == 1 && 
                        <div className={style.cardBox}>
                            <div className="containerBox">
                                <Card className={style.card}>
                                    <span>名称:<Input className={style.input} value={detailList_active.title} /></span>
                                    <span>地点:<Input className={style.input} value={detailList_active.location} /></span>
                                    <span>开始时间:<Input className={style.input} value={detailList_active.startTime} /></span>
                                    <span>结束时间:<Input className={style.input} value={detailList_active.endTime} /></span>
                                    <span>内容:<TextArea className={style.input} value={detailList_active.content} /></span>
                                </Card>
                            </div>
                        </div>


                    }
                    {
                        showWhat == 2 &&
                            detailList_car.map((item, index) => {
                                return (
                                    <div key={index} className={style.cardBox}>
                                        <div className="containerBox">
                                            <Card className={style.card}>
                                                <span>司机姓名:<Input className={style.input} value={item.driverName} /></span>
                                                <span>车牌号:<Input className={style.input} value={item.carNumber} /></span>
                                                <span>车型:<Input className={style.input} value={item.carType} /></span>
                                                <span>司机电话:<Input className={style.input} value={item.driverTelphone} /></span>
                                            </Card>
                                        </div>
                                    </div>
                                )
                            })

                    }
                    {
                        showWhat == 3 &&
                        <div className={style.cardBox}>
                            <div className="containerBox">
                                <Card className={style.card}>
                                    <span>酒店位置:<Input className={style.input} value={detailList_room.location} /></span>
                                    <span>房间型号:<Input className={style.input} value={detailList_room.roomType} /></span>
                                    <span>房间号:<Input className={style.input} value={detailList_room.roomNumber} /></span>
                                </Card>
                            </div>
                        </div>


                    }
                    {
                        showWhat == 4 &&
                            detailList_volunteer.map((item, index) => {
                                return (
                                    <div key={index} className={style.cardBox}>
                                        <div className="containerBox">
                                            <Card className={style.card}>
                                                <span>姓名:<Input className={style.input} value={item.name} /></span>
                                                <span>电话:<Input className={style.input} value={item.telphone} /></span>
                                                <span>邮箱:<Input className={style.input} value={item.email} /></span>
                                            </Card>
                                        </div>
                                    </div>

                                )
                            })

                    }
                    {
                        showWhat == 5 &&
                            detailList_other.map((item, index) => {
                                return (
                                    <div key={index} className={style.cardBox}>
                                        <div className="containerBox">
                                            <Card className={style.card}>
                                                <span>姓名:<Input className={style.input} value={item.username} /></span>
                                                <span>职位:<Input className={style.input} value={item.job} /></span>
                                            </Card>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailActive