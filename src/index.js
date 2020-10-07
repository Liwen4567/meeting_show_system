//入口文件


import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Active from './pages/active/Active'
import Login from './pages/login/Login'
import Person from './pages/personInformation/Person'
import MyRouter from './router/myRouter'


import { routes } from './router/myRouter';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

ReactDOM.render( 
  <HashRouter>
    <MyRouter/>
  </HashRouter>
  , document.getElementById('root'));


