import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

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

    return(
        <div style={{color: 'salmon'}}>
            Dashboard: {currentUser && currentUser.email}
        
            <div>
                <Link to="/update-profile" style={{color: 'seagreen'}}>Update Profile</Link>
            </div>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}