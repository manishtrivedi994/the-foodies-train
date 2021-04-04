import React, { useRef, useState } from 'react';
import './cssFiles/Signup.css';
import { BsPerson } from 'react-icons/bs';
import { Redirect, withRouter } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import { db } from '../firebase';

const  Signup = (props) => {
  console.log(props);
    const nameRef = useRef()
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const { signup, currentUser } = useAuth();
    // console.log(currentUser.email)

    async function handleSubmit(e) {
      e.preventDefault();
      if(passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match!');
      }
      try {
        setError('')
        setLoading(true)
        // await signup(emailRef.current.value, passwordRef.current.value).then(cred => {
        //   db.collection('users').doc(cred.user.uid).set({
        //     name: nameRef.current.value
        //   })
        // const cred = await signup(emailRef.current.value, passwordRef.current.value)
        
         const sex = db.collection('users').doc('sex')

         await sex.set({
          first: 'Ada',
          last: 'Lovelace',
          born: 1815
        });
            
        console.log(sex)
        history.push("/login")
      } catch (err) {
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
                <input type="text" name="" required=""/>
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