import React, { Component } from 'react';
import './cssFiles/Login.css';
import { BsPerson } from 'react-icons/bs';

class Login extends Component {
  componentDidMount () {
    console.log(this.props)
  }
  render() {
    return(
      <div className="login-box">
          <BsPerson size={70} color='#03e9f4' />
          <form style={{paddingTop: '15px'}}>
            <div class="user-box">
              <input type="text" name="" required=""/>
              <label>Username</label>
            </div>
            <div class="user-box">
              <input type="password" name="" required=""/>
              <label>Password</label>
            </div>
            <a href="/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
      </div>
    )
  }
}

export default Login;