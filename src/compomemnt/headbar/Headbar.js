//顶部导航bar

import React, { Component, useState } from 'react';
import { Menu, Avatar } from 'antd';
import style from './Headbar.module.css'
import { NavLink, Router, Route } from 'react-router-dom'
import { ContactsTwoTone, IdcardTwoTone, BellTwoTone, UserOutlined } from '@ant-design/icons'
import '../.././style/global.css'



function Headbar(params) {
  const [nowkey, setNowkey] = useState('active')

  const handleClick = e => {
    setNowkey(e.key)
  };

  return (
    <div className="containerBox">
      <div className={style.container}>
        <ul>
          <li>
            <NavLink to={{pathname:'/active'}} activeClassName={style.nowkey}><ContactsTwoTone />   我的活动</NavLink>
          </li>
          <li>
            <NavLink to={{pathname:'/person/guest'}} activeClassName={style.nowkey}><IdcardTwoTone/>   我的信息</NavLink>
          </li>
          <li>
            <NavLink to={{pathname:'/login'}} activeClassName={style.nowkey}><BellTwoTone/>  退出登录</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Headbar