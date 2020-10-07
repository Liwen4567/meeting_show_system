//详细活动信息

import React, { Component, useEffect, useContext, useState } from 'react';
import { Breadcrumb, Card, Input } from 'antd';
import '../.././style/global.css'
import style from './DetailActive.module.css'
import { getActive, getDetailActive } from '../../services/api'
import { HistoryOutlined } from '@ant-design/icons'
import { IdContext } from '../../pages/active/Active'
import { useImmer } from "use-immer";

function DetailActive(params) {
    const { activeId, changeId } = useContext(IdContext)
    const [showWhat, setShowWhat] = useState(1)
    const [detailList, setDetailList] = useImmer()
    //let detailList 
    useEffect(
        async () => {
            await getDetailActive(activeId)
            .then((res)=>{
                console.log(res.data)
                setDetailList(res.data)
                //detailList = res.data.active
                //console.log(detailList.active)
            }).catch((err)=>{
                console.log(err)
            })
        }
    ,[activeId])
    return (
        <div className={style.box}>
            <div className="containerBox">
                <h2 className={style.h2}>活动详情</h2>
                <div className={style.container}>
                    <Breadcrumb className={style.Breadcrumb}>
                        <Breadcrumb.Item onClick={()=>{setShowWhat(1)}}>
                            <span className={showWhat == 1?style.activeSpan:style.span}>活动详情</span>
                        </Breadcrumb.Item >
                        <Breadcrumb.Item onClick={()=>{setShowWhat(2)}}>
                            <span className={showWhat == 2?style.activeSpan:style.span}>行程安排</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={()=>{setShowWhat(3)}}>
                            <span className={showWhat == 3?style.activeSpan:style.span}>我的志愿者</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={()=>{setShowWhat(4)}}>
                            <span className={showWhat == 4?style.activeSpan:style.span}>其他嘉宾</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    {
                        showWhat == 1&&
                        <div className="containerBox">
                           <Card className={style.card}>
                               <span>名称:<Input value = {detailList + "123"}/></span>
                               <span>地点:<Input /></span>
                               <span>开始时间:<Input /></span>
                               <span>结束时间:<Input /></span>
                               <span>内容:<textarea /></span>
                           </Card>
                           {}
                        </div>
                        
                    }
                    {
                        showWhat == 2&&<p>2</p>
                    }
                    {
                        showWhat == 3&&<p>3</p>
                    }
                    {
                        showWhat == 4&&<p>4</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailActive