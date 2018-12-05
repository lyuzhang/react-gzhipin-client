/**
 * Created by DeLL on 2018/12/3.
 */

/*
 入口JS
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter, Switch, Route} from 'react-router-dom'

import store from './redux/store'
import Login from './containers/login'
import Register from './containers/register'
//import Main from './containers/main/main'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
       {/* <Route component={Main}/>*/}
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'))
