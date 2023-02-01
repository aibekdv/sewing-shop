import * as React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SignUp from '../../components/Auth/Signup'
import { selectUser } from '../../redux/user/selector'

const Register: React.FC = () => {
  const { isAuth } = useSelector(selectUser)
  const navigate = useNavigate()

  if (isAuth) {
    navigate('/')
  }
  return <SignUp />
}

export default Register
