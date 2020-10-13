//修改用户密码组件
import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import {withRouter,useHistory} from 'react-router-dom'
import {alterPsw} from '../../services/api.js'
import {clear} from '../../utils/session.js'
import './style.css'

function AlterPsw(props){
    const history = useHistory()
    const [oldPsw, setOldPsw] = useState('')
    const [newPsw, setNewPsw] = useState('')
    const [isNewOk, setIsNewOk] =useState(true)
    const [isOldOk, setIsOldOk] =useState(true)
    function handleClick(){
        alterPsw(oldPsw, newPsw).then(response => {
            //console.log(response)
            //
            if(response.code == 0){
                message.success("修改成功")
                clear()
                history.push('/login')
            }else{
                message.error(response.msg||'修改失败')
            }        
        }).catch(error => {
            //console.log('失败',error)
            message.error(error.msg||'修改失败')
        })
    }

    return (
        <div className='alterPsw-container'>
            <div className='alterPsw-item'>
                <span>旧密码：</span>
                <Input.Password 
                    value={oldPsw} 
                    className={"changePsw"} 
                    onChange={(e)=>{
                        setOldPsw(e.target.value)
                        if(e.target.value){
                            setIsOldOk(false)
                        }else{
                            setIsOldOk(true)
                        }
                    }
                } />
            </div>
            <div className='alterPsw-item'>
                <span>新密码：</span>
                <Input.Password 
                    value={newPsw} 
                    className={"changePsw"}
                    onChange={(e)=>{
                        setNewPsw(e.target.value)
                        if(e.target.value){
                            setIsNewOk(false)
                        }else{
                            setIsOldOk(true)
                        }
                    }
                } />
            </div>
            <Button className='alterPsw-btn' type='primary' onClick={()=>{handleClick()}} disabled={isOldOk||isNewOk}>修改密码</Button>
        </div>
    )
}

export default AlterPsw