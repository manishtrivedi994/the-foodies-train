import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {

  const { currentUser } = useAuth()

    return (
        <div>
          {currentUser ? 
            <Redirect to="/dashboard" /> 
          :
            <div>
              <div className="app-login">
                  <Link to="/login" style={{color: '#03e9f4'}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                  </Link>
                  {/* <a href="/" style={{color: 'salmon', marginLeft: '2%'}}>Signup</a> */}
              </div>
              <div className="app-signup">
                <Link to="/signup"  >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Signup
                </Link>
              </div>
            </div>
          }
        </div>
    )
}