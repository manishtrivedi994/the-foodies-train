import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { db } from '../firebase';

export default function Dashboard () {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory();

    async function handleLogout () {
        setError('')
        try {
            await logout()
            history.push("/login")
        } catch {
            setError('Failed to log out');
        }
    }

    const [user,setUser]=useState([])
    const uid = currentUser.uid
    

    const getUser = async () => {
        try {
          const documentSnapshot = await db
            .collection('users')
            .doc(uid)
            .get();
    
          const userData = documentSnapshot.data();
          setUser(userData);
        } catch {
          setError("Failed to get dashboard")
        }
      };

       // Get user on mount
        useEffect(() => {
          getUser();
        }, []);

    return(
        <div style={{color: 'salmon'}}>
            <div>
              {error}
                <div>
                Dashboard: {currentUser && currentUser.email}
                </div>
                <div>
                Name: {user.name}
                </div>
                <div>
                Phone: {user.phone}
                </div>
            </div>

        
            <div>
                <Link to="/update-profile" style={{color: 'seagreen'}}>Update Profile</Link>
            </div>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}