//我的消息页面
import React, { Component, useState, createContext } from 'react';
import { Spin, Collapse, Button, Modal, Input, message } from 'antd';
import { UserOutlined, AudioOutlined } from '@ant-design/icons';
import style from './MyMessage.module.css'
import '../.././style/global.css'
import Headbar from '../../compomemnt/headbar/Headbar'
import MessageNav from '../../compomemnt/navigation/MessageNav'
import OldMessage from '../../compomemnt/oldMessage/OldMessage'
import NewMessage from '../../compomemnt/newMessage/NewMessage'
import {Link, useHistory, Route, NavLink, Redirect} from 'react-router-dom'

export const messageNumContext = createContext()

function MyMessage() {
  const [messageNum, setMessageNum] = useState(0)
  const mymessageNum = {
      messageNum: messageNum,
      changeMessageNum: e=>{
        setMessageNum(e)
      }
  }
  const { Panel } = Collapse;
  const [msgList, setMsgList] = useState([1, 2, 3, 4])
  return (
    <div className={style.bodyContainer}>
      <messageNumContext.Provider value={mymessageNum}>
        <Headbar />
      <div className={style.boxContainer}>
      <div className="containerBox">
        <div className={style.container}>     
          <div className='message-left'>
            <MessageNav></MessageNav>
          </div>
          <div className={style.message_left}>       
            <Route path='/myMessage/' exact component={NewMessage}></Route>
            <Route path='/myMessage/OldMessage' component={OldMessage}></Route>
            <Redirect from={"*"} to={'/myMessage/'} />           
          </div>       
        </div>
      </div>
      </div>
      </messageNumContext.Provider>
    </div>
  )
}

export default MyMessage

