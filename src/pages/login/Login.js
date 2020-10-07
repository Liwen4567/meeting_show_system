import React from 'react';
import MyForm from '../../compomemnt/Form/MyForm'
import './style.css'

function Login() {
     
    return ( 
        <div className='login-container'>
            <div className='login-left'></div>
            <div className='login-right'>
                <nav>
                    <h2>密码登录</h2>
                </nav>
                <div className='login-submit'> 
                    <MyForm></MyForm>
                </div>
            </div>
            {/* Login */}
        </div>
    );
}
 
export default Login;