import React, { useRef, useState } from 'react';
import './cssFiles/Signup.css';
import { BsPerson } from 'react-icons/bs';
import { Redirect, withRouter } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { db } from '../firebase';

const  Signup = (props) => {
    const nameRef = useRef()
    const emailRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    

    const { signup, currentUser } = useAuth();
    // console.log(currentUser.email)

    async function handleSubmit(e) {
      e.preventDefault();
      console.log("name",nameRef.current.value)
         console.log("phone",phoneRef.current.value)
      
      if(passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match!');
      }
      try {
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value).then(cred => {
          return db.collection('users').doc(cred.user.uid).set({
            name: nameRef.current.value,
            phone: phoneRef.current.value,
          })

        })
            
        
        // history.push("/dashboard")
      } catch (err) {
        console.log(err)
          if(err.code === 'auth/email-already-in-use') {
              setError('The email address is already in use by another account.')
          }
          else {
              setError("Failed to create an account!")
          }

      }

        setLoading(false)
    }

    return(
        <div className="login-box">
            { currentUser ? 
              <Redirect to="/dashboard"/>
            :
              <div>
                <BsPerson size={70} color='#03e9f4' />
            {currentUser && currentUser.email}
            {error && alert(error)}
            <form style={{paddingTop: '15px'}} onSubmit={handleSubmit}>
              <div className="user-box">
                <input type="text" name="" ref={nameRef} required=""/>
                <label>Name</label>
              </div>
              <div className="user-box">
                <input type="text" name="" ref={emailRef} required=""/>
                <label>Email</label>
              </div>
              <div className="user-box">
                <input type="text" name="" ref={phoneRef} required=""/>
                <label>Phone</label>
              </div>
              <div className="user-box">
                <input type="password" name="" ref={passwordRef} required=""/>
                <label>Password</label>
              </div>
              <div className="user-box">
                <input type="password" name="" ref={passwordConfirmRef} required=""/>
                <label>Confirm Password</label>
              </div>
              {/* <a href="/">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a> */}
              <button disabled={loading} type="submit">Submit</button>
            </form>
            <div style={{color: 'seagreen'}}>
                 Already have an account? <Link to="/login">Log In</Link>
            </div>
              </div>
            }
        </div>
    )
}

export default withRouter(Signup);