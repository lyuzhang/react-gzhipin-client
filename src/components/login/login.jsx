/*
 用户登陆的路由组件
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavBar,WhiteSpace,WingBlank,List,InputItem,Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom';
import Logo from '../logo/index';
export default class Register extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  }

  state = {

    userName:'',
    password:''


  }
  handleChange = (type,value) => {
    this.setState({
      [type]:value
    })
  }

  login = () => {
    const {username,password} = this.state;
    console.log(username,password);
    this.props.login({password, username});
  }
  goRegister = () =>{
    this.props.history.replace('/register');
  }
  render() {
    const {errMsg, redirectTo} = this.props.user;

    if (redirectTo) {
      return <Redirect to={redirectTo} />
    }

    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <p className="err-msg">{errMsg}</p>
        <WhiteSpace/>
        <WingBlank>
          <List>
            <InputItem onChange={(val)=>{this.handleChange('username',val)}}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem onChange={(val)=>{this.handleChange('password',val)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace/>

          </List>
          <Button type="primary" onClick={this.login}>登录</Button>
          <Button onClick={this.goRegister}>没有账户</Button>
        </WingBlank>

      </div>
    )
  }
}