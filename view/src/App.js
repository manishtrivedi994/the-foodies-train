import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'
import UpdateProfile from './components/UpdateProfile'
import PrivateRoute from './components/PrivateRoute'
import { Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';


class App extends Component {
  render () {
    return (
      
      <div className="App" >
            <AuthProvider>
              <Switch>
                <PrivateRoute path="/dashboard" exact component={Dashboard}/>
                <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                <Route path="/" exact component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/forgot-password" component={ForgotPassword}/>
              </Switch>
            </AuthProvider> 
      </div>
      
    );
  }
}

export default App;
