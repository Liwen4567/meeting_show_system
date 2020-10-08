//顶部导航bar

import React, { Component, useState } from 'react';
import { Menu, Avatar, Modal } from 'antd';
import style from './Headbar.module.css'
import { NavLink, Router, Route, useHistory } from 'react-router-dom'
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

  return (
    <div className="containerBox">
      <div className={style.container}>
        <img src={logo} className={style.img} />
        <ul>
          <li>
            <NavLink to={'/active'} activeClassName={style.nowkey}><ContactsTwoTone />   我的活动</NavLink>
          </li>
          <li>
            <NavLink to={'/person'} activeClassName={style.nowkey}><IdcardTwoTone />   我的信息</NavLink>
          </li>
          <li className={style.avatar_li}>
          <span className={style.span}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className={style.avatar} size={40}/>
            {" " + getUserName()}
          </span>
            {/* <a onClick={()=>{logout()}} ><BellTwoTone />   退出登录</a> */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Headbar