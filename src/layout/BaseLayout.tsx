import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface IBaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => {

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default BaseLayout
