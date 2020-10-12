//已读消息组件
import React, { Component, useEffect, useState } from 'react';
import style from './OldMessage.module.css'
import { getOldMessage, delectMessage } from '../../services/api'
import { Collapse, Button, message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {getId} from '../../utils/session'
import axios from 'axios'

const { Panel } = Collapse
const { confirm } = Modal;


function OldMessage() {
  const [msgList, setMsgList] = useState([])

  useEffect(() => {
    getOldMessage(getId(),true).then(res => {
      if (res.code == 0) {
        //message.success("删除成功")
        setMsgList(res.data)
      }
      console.log(res)
    }).catch(err => {
      message.error(err.msg || "请求失败")
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

  const handleDel = (id) => {
    showDeleteConfirm(Number(id))
    //console.log(id)
  }


  const showDeleteConfirm = (id) => {
    confirm({
      title: '是否确定删除',
      icon: <ExclamationCircleOutlined />,
      content: '删除后将无法恢复',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        //console.log(id);
        delectMessage(id).then(res => {
          if (res.code == 0) {
            message.success("删除成功")
          }
          console.log(res)
        }).catch(err => {
          message.error(err.msg || "删除失败")
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
                <span>From:   {item.fromUser == 0 ? "管理员": item.fromUser}</span>
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
          }} onClick={(e) => { handleDel(e.target.className) }} type="primary" className={item.id}>删除消息</button>
          </Panel>
            
          )
        })}
      </Collapse>
    </>
  )
}

export default OldMessage