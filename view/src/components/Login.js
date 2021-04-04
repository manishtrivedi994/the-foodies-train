import React, { useRef, useState } from 'react';
import './cssFiles/Login.css';
import { BsPerson } from 'react-icons/bs';
import { useAuth } from '../contexts/AuthContext'
import { useHistory, Link, Redirect } from 'react-router-dom';

export default function Login() {
  
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit (e) {
      e.preventDefault();
      try {
          setError('')
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/dashboard");
      } catch {
          setError("Failed to sign in!")
      }
      setLoading(false)
  }

  
    return(
      
      <div className="login-box">
        {currentUser ? 
        <Redirect to="/dashboard" /> 
        :
        <div>
        <BsPerson size={70} color='#03e9f4' />
        {error && alert(error)}
        <form style={{paddingTop: '15px'}} onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="" ref={emailRef} required=""/>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" ref={passwordRef} name="" required=""/>
            <label>Password</label>
          </div>
          {/* <Link to="/dashboard">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link  > */}
          <button disabled={loading} type="submit">Submit</button>
        </form>
        <div>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div style={{color: 'seagreen'}}>
               Need an account?  <Link to="/signup"> Sign Up</Link>
        </div>
        </div>
        }
      </div>
    )
  
}