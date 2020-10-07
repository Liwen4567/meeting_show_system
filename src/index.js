//入口文件


import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Active from './pages/active/Active'
import Login from './pages/login/Login'
import Person from './pages/personInformation/Person'
import {BrowserRouter ,Redirect,Route} from 'react-router-dom'
import MyRouter from './router/myRouter'

ReactDOM.render( 
  <BrowserRouter>
  <MyRouter />
  </BrowserRouter>
  , document.getElementById('root'));


