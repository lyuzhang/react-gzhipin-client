/*
 应用主界面路由组件
 */
import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import LaobanInfo from '../../containers/laobaninfo'
import DashenInfo from '../../containers/dasheninfo'
export default class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/laobaninfo" component={LaobanInfo}/>
        <Route path="/dasheninfo" component={DashenInfo}/>

      </div>
    )
  }
}