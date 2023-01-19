import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BaseLayout from './layout/BaseLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App: React.FC = () => {
  return (
    <BaseLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BaseLayout>
  )
}

export default App
