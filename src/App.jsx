// 测试用组件

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import axios from 'axios'
import { getcode } from './services/api' //例子

function App() {

    

    return (
        <>
            <Button type="primary" onClick={()=>getcode("15736007263")}>点我发起请求</Button>
        </>
    )
}

export default App