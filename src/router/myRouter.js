//路由文件

import React from 'react';
import ReactDOM from 'react-dom';
import Active from '../pages/active/Active'
import Login from '../pages/login/Login'
import Person from '../pages/personInformation/Person'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'


function myRouter() {
  return (
    <Switch>
      <Route path={'/'} exact component={Active}></Route>
      <Route path={'/person'}  component={Person}></Route>
      <Route path={'/login'} component={Login}></Route>     
      <Redirect from={'/'} to={'/login'} />
    </Switch>
  )
}
export default myRouter

