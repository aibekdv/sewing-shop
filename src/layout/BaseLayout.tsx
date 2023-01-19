import React from 'react'
import Header from '../components/Header'

interface IBaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default BaseLayout
