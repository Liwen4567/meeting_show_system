//未读消息组件
import React, { Component, useEffect, useState } from 'react';
import style from './NewMessage.module.css'
import { getNewMessage, readMessage } from '../../services/api'
import { Collapse, Button, message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {getId} from '../../utils/session'

const { Panel } = Collapse
const { confirm } = Modal;

function NewMessage() {
  const [msgList, setMsgList] = useState([])

  useEffect(() => {
    getNewMessage(getId(),false).then(res=>{
      if(res.code == 0){
        setMsgList(res.data)
      }
      console.log(res)
    }).catch(err=>{
      message.error(err.msg||"请求失败")
    })
    // setMsgList([
    //   {
    //     "id":1,
    //     "fromUser":"发送用户id",
    //     "toUser":"接受用户id",
    //     "content":"内容",
    //     "create_time":"发送时间",
    //     "read":"是否已读"
    // },
    // {
    //   "id":2,
    //   "fromUser":"发送用户id",
    //   "toUser":"接受用户id",
    //   "content":"内容",
    //   "create_time":"发送时间",
    //   "read":"是否已读"
    // },{
    //   "id":3,
    //   "fromUser":"发送用户id",
    //   "toUser":"接受用户id",
    //   "content":"内容",
    //   "create_time":"发送时间",
    //   "read":"是否已读"
    // },{
    //   "id":4,
    //   "fromUser":"发送用户id",
    //   "toUser":"接受用户id",
    //   "content":"内容",
    //   "create_time":"发送时间",
    //   "read":"是否已读"
    // },{
    //   "id":0,
    //   "fromUser":"发送用户id",
    //   "toUser":"接受用户id",
    //   "content":"内容",
    //   "create_time":"发送时间",
    //   "read":"是否已读"
    // },{
    //   "id":0,
    //   "fromUser":"发送用户id",
    //   "toUser":"接受用户id",
    //   "content":"内容",
    //   "create_time":"发送时间",
    //   "read":"是否已读"
    // },
    // ])
  }, [])

  const handleRead = (id) => {
    showConfirm(Number(id))
  }

  const showConfirm = (id) => {
    confirm({
      title: '是否确定收到',
      icon: <ExclamationCircleOutlined />,
      content: '确认收到后将无法撤销',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        console.log('OK');
        readMessage(id).then(res => {
          if (res.code == 0) {
            message.success("确认成功")
          }
          console.log(res)
        }).catch(err => {
          message.error(err.msg || "确认失败")
        })
      },
      onCancel() {
        //console.log('Cancel');
      },
    });
  }


  return (
    <>
      <Collapse className={style.collapse} expandIconPosition='right'>
        {msgList.map((item, index) => {
          return (
            <Panel
              key={index}
              header={
                <>
                  <span>From:   {item.fromUser == 0 ? "管理员" : item.fromUser}</span>
                  <span style={{
                    marginLeft: 20 + "px"
                  }}>Time:   {item.createTime}</span>
                </>
              }
              className={style.Panel}
            >
              {item.content}
              <hr />
              <button style={{ 
                backgroundColor: '#35a8dd',
                color: "#fff",
                borderRadius: 4 + 'px',
                height: 25 + "px",
                width: 60 + "px"
              }} onClick={(e) => { handleRead(e.target.className) }} type="primary" className={item.id}>确认收到</button>
            </Panel>
          )
        })}
      </Collapse>
    </>
  )
}

export default NewMessage



