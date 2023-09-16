import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginForm } from '../components/Login/LoginForm'
import LoginPasswordLost from '../components/Login/LoginPasswordLost'
import { LoginCreate } from '../components/Login/LoginCreate'
import LoginPasswordReset from '../components/Login/LoginPasswordReset'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
        <Route path='create' element={<LoginCreate />}/>
        <Route path='lost' element={<LoginPasswordLost />}/>
        <Route path='reset' element={<LoginPasswordReset />}/>
      </Routes>
    </div>
  )
}

export default Login