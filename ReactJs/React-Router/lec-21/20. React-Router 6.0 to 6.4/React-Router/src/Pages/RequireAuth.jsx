import React from 'react'
import { UseAuth } from './Auth'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => {

    const Auth = UseAuth()

    if(!Auth.user){
        return <Navigate to='/Login'></Navigate>
    }

  return (
    children
  )
}

export default RequireAuth
