// Protected rout and Authenticator

import React from 'react'
import { useState } from 'react'
import { UseAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [user , setUser]=useState('')
    const Auth = UseAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        Auth.login(user)
        navigate('/Profile')
    }
  return (
    <div>
        <label htmlFor="username">UserName</label>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
