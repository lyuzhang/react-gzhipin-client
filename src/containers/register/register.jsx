/*
 用户注册的路由组件
 */
import React, {Component} from 'react';
import {NavBar,WhiteSpace,WingBlank,List,InputItem,Radio,Button} from 'antd-mobile'
import Logo from '../../components/logo';

const Item = List.Item;
export default class Register extends Component {
  state = {
    boss:true,
    userName:'',
    password:''


  }
  handleChange = (type,value) => {
    this.setState({
      [type]:value
    })
  }
  handleRePassword = (value) =>{
    const password = this.state.password;
    if(password !== value){
      alert('请确认密码！')
    }
  }
  register = () =>{
    const {boss,userName,password} = this.state;
    console.log(boss,userName,password);
  }

  goLogin = () =>{
    this.props.history.replace('/login');
  }
  render() {
    const {boss} = this.state;
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
            <InputItem onChange={(val)=>{this.handleRePassword(val)}}>确认密码：</InputItem>
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