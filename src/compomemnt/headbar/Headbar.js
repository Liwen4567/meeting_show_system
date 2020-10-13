//顶部导航bar

import React, { Component, useState, useContext } from 'react';
import { Menu, Avatar, Modal,Dropdown } from 'antd';
import style from './Headbar.module.css'
import { NavLink, Router, Route, useHistory, Link } from 'react-router-dom'
import { ContactsTwoTone, IdcardTwoTone, BellTwoTone, UserOutlined } from '@ant-design/icons'
import '../.././style/global.css'
import logo from '../../assets/images/logo-yuan.png'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {clear} from '../../utils/session.js'
import { getUserName } from '../../utils/session'

function Headbar(params) {
  const [nowkey, setNowkey] = useState('active')
  const handleClick = e => {
    setNowkey(e.key)
  };

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
      },
    });
  }


  const menu = (
    <Menu>
      <Menu.Item>
        <Link to={'/person/'}>
          详细信息
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={'/person/altrInformation'}>
          修改信息
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={'/person/alterPassword'}>
          修改密码
        </Link>
      </Menu.Item>
      <Menu.Item>
        <a onClick={()=>{logout()}} >
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="containerBox">
      <div className={style.container}>
        <img src={logo} className={style.img} />
        <ul>
          <li>
            <NavLink to={'/active'} activeClassName={style.nowkey}><ContactsTwoTone />   我的任务</NavLink>
          </li>
          <li>
            <NavLink to={'/guest'} activeClassName={style.nowkey}><IdcardTwoTone />   我的嘉宾</NavLink>
          </li>
          <li>
            <NavLink to={'/person'} activeClassName={style.nowkey}><IdcardTwoTone />   个人信息</NavLink>
          </li>
          <li>
            <NavLink to={'/myMessage'} activeClassName={style.nowkey}><IdcardTwoTone />   我的消息</NavLink>
          </li>
          <li className={style.avatar_li}>
            <Dropdown overlay={menu} placement="bottomCenter">
              <span className={style.span}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className={style.avatar} size={40}/>
                {" " + getUserName()}
              </span>
            </Dropdown>  
            {/* <a onClick={()=>{logout()}} ><BellTwoTone />   退出登录</a> */}
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Headbar