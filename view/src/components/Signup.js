import React from 'react';
import './cssFiles/Signup.css';
import { BsPerson } from 'react-icons/bs';
import { withRouter } from 'react-router-dom'

const  Signup = (props) => {
  console.log(props);
    return(
        <div className="login-box">
            {/* <h2>Login</h2> */}
            <BsPerson size={70} color='#03e9f4' />
            <form style={{paddingTop: '15px'}}>
              <div class="user-box">
                <input type="text" name="" required=""/>
                <label>Name</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required=""/>
                <label>Email</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required=""/>
                <label>Phone</label>
              </div>
              <div class="user-box">
                <input type="password" name="" required=""/>
                <label>Password</label>
              </div>
              <div class="user-box">
                <input type="password" name="" required=""/>
                <label>Confirm Password</label>
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

export default withRouter(Signup);