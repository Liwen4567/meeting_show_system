//我的信息侧边导航栏
import { Menu, Modal } from 'antd';
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {clear} from '../../utils/session.js'
import { ExclamationCircleOutlined } from '@ant-design/icons';


import {
  PieChartOutlined,
  SettingOutlined,
  BellOutlined,
  LogoutOutlined
} from '@ant-design/icons';

function Nav(props) {
    const [current, setCurrent] = useState('1')
    function handleClick(e){
        setCurrent(e.key)
    }
    // function logout(){
    //   clear()
    // }

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


    return (
        <div>
        <Menu theme='light'//主题颜色 light dark
          onClick={(e)=>{handleClick(e)}}
          // style={{ width: 140 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          mode="inline"
        >
            <Menu.Item key="1" icon={<PieChartOutlined />}><Link to={'/person/'}>用户信息</Link></Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />}><Link to={'/person/altrInformation'}>修改信息</Link></Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}><Link to={'/person/alterPassword'}>修改密码</Link></Menu.Item>

            {/* 无法跳转 */}
            <Menu.Item key="4" onClick={()=>{logout()}} icon={<LogoutOutlined />}><a>退出登录</a></Menu.Item>
        </Menu>
      </div>
    )
}
  

export default Nav

