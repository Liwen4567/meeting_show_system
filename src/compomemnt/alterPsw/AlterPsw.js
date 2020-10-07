import React, { useState } from 'react';
import { Input, Button } from 'antd';
import {withRouter,useHistory} from 'react-router-dom'
import {alterPsw} from '../../services/api.js'
import {clear} from '../../utils/session.js'
import './style.css'

function AlterPsw(props){
    const history = useHistory()
    const [oldPsw, setOldPsw] = useState('')
    const [newPsw, setNewPsw] = useState('')
    function handleClick(){
        alterPsw(oldPsw, newPsw).then(response => {
            clear()
            history.push('/login')
        }).catch(error => {
            console.log('失败',error)
        })
    }

    return (
        <div className='alterPsw-container'>
            <div className='alterPsw-item'>
                <span>旧密码：</span>
                <Input value={oldPsw} onChange={(e)=>{setOldPsw(e.target.value)}}/>
            </div>
            <div className='alterPsw-item'>
                <span>新密码：</span>
                <Input value={newPsw} onChange={(e)=>{setNewPsw(e.target.value)}}/>
            </div>
            <Button className='alterPsw-btn' type='primary' onClick={()=>{handleClick()}}>修改密码</Button>
        </div>
    )
}

export default AlterPsw