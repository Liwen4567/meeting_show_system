import { Menu } from 'antd';
import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {clear} from '../../utils/session.js'

function Nav(props) {
    const [current, setCurrent] = useState('1')
    function handleClick(e){
        setCurrent(e.key)
    }
    function logout(){
      clear()
    }
    return (
        <div>
        <Menu theme='light'//主题颜色 light dark
          onClick={(e)=>{handleClick(e)}}
          // style={{ width: 140 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          mode="inline"
        >
            <Menu.Item key="1"><Link to={'/person/'}>用户信息</Link></Menu.Item>
            <Menu.Item key="2"><Link to={'/person/altrInformation'}>修改信息</Link></Menu.Item>
            <Menu.Item key="3"><Link to={'/person/alterPassword'}>修改密码</Link></Menu.Item>

            {/* 无法跳转 */}
            <Menu.Item key="4" onClick={()=>{logout()}}><Link to='/login'>退出登录</Link></Menu.Item>
        </Menu>
      </div>
    )
}
  

export default Nav

