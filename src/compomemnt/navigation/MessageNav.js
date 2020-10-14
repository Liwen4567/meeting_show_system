//我的消息侧边导航栏
import React, {useContext, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {clear} from '../../utils/session.js'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Spin, Collapse, Button, Modal, Input, Menu, message, Badge } from 'antd';
import {sendMessage} from '../../services/api'
import {getId} from '../../utils/session'
import {messageNumContext} from '../../pages/mymessage/MyMessage'

import {
  UserOutlined,
  CommentOutlined,
  MessageOutlined,
  EditOutlined
} from '@ant-design/icons';

function Nav(props) {
    const [current, setCurrent] = useState('1')
    const [messageText, setMessageText] = useState("")
    const { messageNum, changeMessageNum } = useContext(messageNumContext)
    // useEffect(()=>{
    //   console.log(messageNum)
    // },[messageNum])
    function handleClick(e){
        setCurrent(e.key)
    }
    // function logout(){
    //   clear()
    // }
    
    const onOK = ()=>{
        setIsModelShow(false)
        sendMessage(
            getId(),
            0,
            messageText
        ).then(res=>{
            if(res.code == 0){
                message.success("反馈成功")
            }
            //console.log(res)
        }).catch(err=>{
            message.error(err.msg||"提交失败")
            //console.log(err)
        })
    }


    const { confirm } = Modal;
    const history = useHistory()

    const logout = () => {
      confirm({
        title: '是否退出登录?',
        icon: <ExclamationCircleOutlined />,
        content: '',
        onOk() {
          clear()
          history.push('/login');
        },
        onCancel() {
          //console.log('Cancel');
        }
      });
    }

    const [IsModelShow, setIsModelShow] = useState(false)
    const [IsDisable, setIsDisable] = useState(true)
    const { TextArea } = Input;


    return (
        <div>
        <Menu theme='light'//主题颜色 light dark
          onClick={(e)=>{handleClick(e)}}
          // style={{ width: 140 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          mode="inline"
        >
            <Menu.Item key="1" icon={<CommentOutlined />}><Badge count={messageNum} offset={[5,0]}><Link to={'/myMessage/'}>未读消息</Link></Badge></Menu.Item>
            <Menu.Item key="2" icon={<MessageOutlined />}><Link to={'/myMessage/oldMessage'}>已读消息</Link></Menu.Item>
            <Menu.Item key="3" icon={<EditOutlined />}><a onClick={()=>{setIsModelShow(true)}}>我要反馈</a></Menu.Item>
        </Menu>
        <Modal
        title="我要反馈"
        visible={IsModelShow}
        onOk={()=>{onOK()}}
        onCancel={() => { setIsModelShow(false) }}
        okButtonProps={{ disabled: IsDisable }}
      >
        <span>To:</span>
        <Input
          allowClear
          prefix={<UserOutlined />}
          maxLength={10}          
          style={{
            width: 180 + "px",
            marginLeft: 10 + "px",
            marginBottom: 15 + "px",
          }}
          value={"系统工作人员"}
        />
        <TextArea
          placeholder="请输入内容"
          className={"messageTextArea"}
          allowClear
          autoSize={{ minRows: 3, maxRows: 10 }}
          onChange={(e) => {
            setMessageText(e.target.value)
            if (e.target.value) {
              setIsDisable(false)
            } else {
              setIsDisable(true)
            }
          }}
          value={messageText}
        />
      </Modal>
      </div>
    )
}
  

export default Nav

