import React from 'react';
import Headbar from '../../compomemnt/headbar/Headbar'

import Active from '../active/Active'
import Login from '../login/Login'
import Person from '../personInformation/Person'

import '../.././style/global.css'
import style from './main.module.css'

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    Link,
    useHistory
  } from 'react-router-dom'

function Main() {
     const history = useHistory()
    return ( 
        <div className={style.flexbox}>
                <div className={style.container}>
                    <Headbar />
                    <Route path={'/'} component={Active} />
                    <Route path={'/person'} component={Person} />
                </div>
        </div>
    );
}
 
export default Main;