/*
 用户登陆的路由组件
 */
import React, {Component} from 'react';
import {NavBar,WhiteSpace,WingBlank,List,InputItem,Button} from 'antd-mobile'
import Logo from '../../components/logo';
export default class Register extends Component {
  state = {

    userName:'',
    password:''


  }
  handleChange = (type,value) => {
    this.setState({
      [type]:value
    })
  }

  register = () => {
    const {userName,password} = this.state;
    console.log(userName,password)
  }
  goRegister = () =>{
    this.props.history.replace('/register');
  }
  render() {

    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WhiteSpace/>
        <WingBlank>
          <List>
            <InputItem onChange={(val)=>{this.handleChange('userName',val)}}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem onChange={(val)=>{this.handleChange('password',val)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace/>

          </List>
          <Button type="primary" onClick={this.register}>登录</Button>
          <Button onClick={this.goRegister}>没有账户</Button>
        </WingBlank>

      </div>
    )
  }
}