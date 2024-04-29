import React from 'react'
import { UseAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const Auth = UseAuth()

    const navigate = useNavigate()

    const handleLogout = () => {
        Auth.logout()
        navigate('/Login')
    }

  return (
    <div>
        <span>
          Welcome To Emart  Mr/Mrs. {Auth.user}
        </span><br />
        <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Profile
