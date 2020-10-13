//负责人任务时间轴

import React, { Component, useContext, useEffect, useState, createContext, useImmer } from 'react';
import { Steps, message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import '../.././style/global.css'
import style from './TimeList.module.css'
import { getActive, getDetailActive, getGuestActive, FinishActive} from '../../services/api'
import { HistoryOutlined } from '@ant-design/icons'
import {IdContext} from '../../pages/active/Active'
import { getId } from '../../utils/session'

const { confirm } = Modal;

function TimeList(params) {
  const { Step } = Steps;
  const nowData = getNowFormatDate().replace(/-/g,"").replace(/ /g,"").replace(/:/g,"")
  const [activeList, setActiveList] = useState([])
  const [nowStep, setNowStep] = useState(0)
  const {activeId, changeId} = useContext(IdContext)
   
  
   useEffect(()=>{
    getGuestActive(getId())
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
        setActiveList(res.data.reverse())
        chooesNowStep(res)
        //message.success("已获取任务列表")
      } 
        //console.log(res) 
    }).catch((err)=>{
        //console.log(err)
    })
  },[])

  const chooesNowStep = (res) =>{
    //console.log(res)
    let a = -1
    for(let i = 0;i<res.data.length;i++){
      if(res.data[i].startTime.replace(/-/g,"").replace(/ /g,"").replace(/:/g,"")>=nowData){
         a = i    
      }
    }
    if(a==-1){
      setNowStep(res.data.length-1)  
      changeId(res.data[res.data.length-1].id)
    }else{
      setNowStep(a) 
      changeId(res.data[a].id)
    }

    document.getElementById('nowstep').scrollIntoView() 
  }

  const clickActive = (e)=>{
    changeId(activeList[Number(e.target.className)].id)
  } 
  

  const handleFinish = (e,id)=>{
    showConfirm(e,Number(id))
  }


  const showConfirm = (e,id) => {
    confirm({
      title: '是否确定完成',
      icon: <ExclamationCircleOutlined />,
      content: '确认完成到后将无法撤销',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        console.log('OK');
        FinishActive(id).then(res => {
          if (res.code== 0) {
            message.success("提交成功")
            e.disabled = "true"
                    e.style = { 
                      backgroundColor: '#e2e1e1',
                      color: "#fff",
                      borderRadius: 4 + 'px',
                      height: 20 + "px",
                      width: 60 + "px"
                    }                    
            e.innerHTML = "已完成"
          }
          //console.log(res)
        }).catch(err => {
          message.error(err.msg || "提交失败")
        })
      },
      onCancel() {
        //console.log('Cancel');
      },
    });
  }



  return (
    <div className={style.box}>
    <div className="containerBox">
      <h2 className={style.h2}>我的任务</h2>
      <hr />
      <div className={style.container}>
      <Steps current={nowStep} direction="vertical" size="small" >
        {
          activeList.map((item, index)=>{
            return(
              <Step 
                key = {index}
                icon = {<HistoryOutlined />}
                title= {<p key={index}><a
                  key={index}
                  className = {index}
                  onClick={(e)=>{
                  clickActive(e)
                  }}
                >{item.title}    查看详情
                </a></p>} 
                subTitle={`${item.startTime}---${item.endTime}`} 
                description={
                  <>
                  {item.content}
                  <hr/>
                  <button 
                  className={item.id}
                  disabled={item.complete}
                  style={item.complete?
                    { 
                      backgroundColor: '#e2e1e1',
                      color: "#fff",
                      borderRadius: 4 + 'px',
                      height: 20 + "px",
                      width: 60 + "px"
                    }
                    :
                    { 
                    backgroundColor: '#35a8dd',
                    color: "#fff",
                    borderRadius: 4 + 'px',
                    height: 20 + "px",
                    width: 60 + "px"
                  }} onClick={(e)=>{
                    //console.log(e.target.className)
                    handleFinish(e.target, e.target.className)
                  }}>{item.complete?"已完成":"确认完成"}</button>
                  </>
                }
                id = {nowStep==index?"nowstep":"otherstep"}
              />
            )
          })
        }
      </Steps>
      </div>
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

