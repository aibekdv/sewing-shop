import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BaseLayout from './layout/BaseLayout'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import UserProfile from './pages/UserProfile'

const App: React.FC = () => {
  return (
    <BaseLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user/:id' element={<UserProfile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BaseLayout>
  )
}

export default App
