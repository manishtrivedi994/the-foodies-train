import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Link} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      
          <div className="App" >
            <div className="app-login">
                <Link to="/login" >
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
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
            
      </div>
      
    );
  }
}

export default App;
