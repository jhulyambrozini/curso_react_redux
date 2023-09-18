import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginForm } from '../../components/Login/LoginForm/LoginForm'
import LoginPasswordLost from '../../components/Login/LoginPasswordLost'
import { LoginCreate } from '../../components/Login/LoginCreate/LoginCreate'
import LoginPasswordReset from '../../components/Login/LoginPasswordReset'
import { useUser } from '../../context/UserContext'
import { Forms, LoginContainer } from './style'
import NotFound from '../NotFound/NotFound'

const Login = () => {
  const {login} = useUser()

  if(login) return <Navigate to='/account' />
  return (
    <LoginContainer>

    <Forms>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
        <Route path='create' element={<LoginCreate />}/>
        <Route path='lost' element={<LoginPasswordLost />}/>
        <Route path='reset' element={<LoginPasswordReset />}/>
        <Route
              path="*"
              element={<NotFound />}
            />
      </Routes>
    </Forms>
    </LoginContainer>
  )
}

export default Login