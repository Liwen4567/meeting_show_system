import React from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { login } from '../../services/api.js'
import {setToken} from '../../utils/session.js'
import {setId,setJob,setMobile,setUserName,setEmail} from '../../utils/session.js'
import './style.css'
import '../.././style/global.css'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function MyForm(props) {
  const history = useHistory();
  const onFinish = (values) => {
    login(values.phone, values.password).then(response => {
      if(response.code === 0){
        setToken(response.data.token)
        let user = response.data.user
        setId(user.userId)
        setUserName(user.username)
        setMobile(user.mobile)
        setJob(user.job)
        setEmail(user.email)
        //此处跳转
        //response.data.user是一个对象，包含{userId, username, mobile, email, job}
        history.push('/')
      }
    }).catch(error => {
      console.log(error)
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="手机号"
        name="phone"
        rules={[
          {
            required: true,
            message: '请输入电话号码！',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox className='remberPsw'>记住我</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button className='submitBtn' type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm

