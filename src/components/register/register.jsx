/*
 用户注册的路由组件
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavBar,WhiteSpace,WingBlank,List,InputItem,Radio,Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom';
import Logo from '../logo/index';

const Item = List.Item;
export default class Register extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  }

  state = {
    boss:true,
    username:'',
    password:'',
    rePassword:''


  }
  handleChange = (type,value) => {
    this.setState({
      [type]:value
    })
  }

  register = async() =>{
    const {boss,username,password,rePassword} = this.state;
    console.log(boss,username,password);
    this.props.register({type: boss ? 'boss' : 'dashen', password, rePassword, username});
  }

  goLogin = () =>{
    this.props.history.replace('/login');
  }
  render() {
    const {boss} = this.state;
    const {errMsg, redirectTo} = this.props.user;

    //判断是否注册成功
    if (redirectTo) {
      //路由链接跳转
      return <Redirect to={redirectTo} />
      //编程式导航
      // this.props.history.push(redirectTo);
      // return null;
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
            <InputItem onChange={(val)=>{this.handleChange('rePassword',val)}}>确认密码：</InputItem>
            <WhiteSpace/>
            <Item>用户类型：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={!boss} onChange={this.handleChange.bind(null,'boss',false)}>大神</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={boss} onChange={this.handleChange.bind(null,'boss',true)}>老板</Radio>
            </Item>
          </List>
          <Button type="primary" onClick={this.register}>注册</Button>
          <Button onClick={this.goLogin}>已有账户</Button>
        </WingBlank>

      </div>
    )
  }
}