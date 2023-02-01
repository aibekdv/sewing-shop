import React from 'react'
import { useSelector } from 'react-redux'
import SignIn from '../../components/Auth/Signin'
import { selectUser } from '../../redux/user/selector'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const { isAuth } = useSelector(selectUser)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [])

  return <SignIn />
}

export default Login
