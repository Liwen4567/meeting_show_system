//路由文件

import React from 'react';
import ReactDOM from 'react-dom';
import Active from '../pages/active/Active'
import Login from '../pages/login/Login'
import Person from '../pages/personInformation/Person'
import Main from '../pages/main/Main'
import AlterGuest from '../compomemnt/alterGuest/AlterGuest'
import AlterPsw from '../compomemnt/alterPsw/AlterPsw'
import Guest from '../compomemnt/guestInformation/Guest'

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'


function myRouter() {
  return (
    <Switch>
      <Route path={'/active'} exact component={Active}></Route>
      <Route path={'/person'} component={Person}></Route>     
      <Route path={'/login'} component={Login}></Route>  
      <Redirect  to={'/login'} />
    </Switch>
  )
}
export default myRouter


// const routes = [
//   {
//     path: '/',
//     component: Active,
//     exact: true,
//   },
//   {
//     path: '/login',
//     component: Login,
//   },
//   {
//     path: '/person',
//     component: Person,
//     children: [
//       {
//         path: '/person/guest',
//         component: Guest
//       },
//       {
//         path: '/person/alterGuest',
//         component: AlterGuest
//       },
//       {
//         path: '/person/alterPsw',
//         component: AlterPsw
//       }
//     ]
//   },
// ]

// export {routes}