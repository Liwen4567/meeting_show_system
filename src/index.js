//入口文件


import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Active from './pages/active/Active'
import Login from './pages/login/Login'
import Person from './pages/personInformation/Person'
import {BrowserRouter as Router,Redirect,Route} from 'react-router-dom'

ReactDOM.render( 
  <Router>
  <div>
      <Route path={'/login'} component={Login}></Route>
      <Route path={'/active'} component={Active}></Route>
      <Route path={'/person/guest'} component={Person}></Route>
      <Redirect to={'/login'} /> 
  </div>
</Router>
  , document.getElementById('root'));


