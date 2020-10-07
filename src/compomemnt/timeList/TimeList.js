//时间轴

import React, { Component, useContext, useEffect, useState, createContext, useImmer } from 'react';
import { Steps } from 'antd';
import '../.././style/global.css'
import style from './TimeList.module.css'
import { getActive, getDetailActive } from '../../services/api'
import { HistoryOutlined } from '@ant-design/icons'
import {IdContext} from '../../pages/active/Active'

function TimeList(params) {
  const { Step } = Steps;
  const nowData = getNowFormatDate().replace(/-/g,"").replace(/ /g,"").replace(/:/g,"")
  const [activeList, setActiveList] = useState([])
  const [nowStep, setNowStep] = useState(0)
  const {activeId, changeId} = useContext(IdContext)

  
   useEffect(()=>{
    getActive()
    .then((res)=>{
    //   res = {
    //     "msg": "success",
    // "code": 0,
    // "data": [
    //     {
    //         "id": 1,
    //         "location": "研究中心",
    //         "title": "参观",
    //         "content": "由张老师带队参观研究中心",
    //         "startTime": "2020-10-04 12:44:11",
    //         "endTime": "2020-10-05 12:44:14"
    //     },
    //     {
    //         "id": 2,
    //         "location": "校史馆",
    //         "title": "参观校史馆",
    //         "content": "校长带领参观校史馆",
    //         "startTime": "2020-10-07 12:51:29",
    //         "endTime": "2020-10-08 12:51:34"
    //     }
    // ]
    //   }
      if(res.code == 0){
        setActiveList(res.data)
        chooesNowStep(res)
      } 
        //console.log(res) 
    }).catch((err)=>{
        console.log(err)
    })
  },[])

  const chooesNowStep = (res) =>{
    //console.log(res)
    let a = 0
    for(let i = 0;i<res.data.length;i++){
      if(res.data[i].startTime.replace(/-/g,"").replace(/ /g,"").replace(/:/g,"")>=nowData){
         a = i    
      }
    }
    setNowStep(a)  
    //console.log(activeList[a])
    document.getElementById('nowstep').scrollIntoView() 
    //console.log("dawda")
  }

  const clickActive = (e)=>{
    changeId(activeList[Number(e.target.className)].id)
  } 
  

  return (
    <div className="containerBox">
      <h2 className={style.h2}>活动列表</h2>
      <div className={style.container}>
      <Steps current={nowStep} direction="vertical" size="small" >
        {
          activeList.map((item, index)=>{
            return(
              <>
              <Step 
                key = {index}
                icon = {<HistoryOutlined />}
                title= {<p><a
                  className = {index}
                  onClick={(e)=>{
                  clickActive(e)
                  }}
                >{item.title}    查看详情
                </a></p>} 
                subTitle={`${item.startTime}---${item.endTime}`} 
                description={item.content}
                id = {nowStep==index?"nowstep":"otherstep"}
              />
              </>

            )
          })
        }
      </Steps>
      </div>
    </div>
  )
}

export default TimeList


//转换时间成标准格式
  function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
  }

