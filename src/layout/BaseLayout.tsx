import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface IBaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => {
  const { pathname } = useLocation()
  const [isPathName, setIsPathName] = React.useState(false)

  React.useEffect(() => {
    if (pathname === '/login' || pathname === '/register' || pathname === '/reset') {
      setIsPathName(true)
    }

    return () => setIsPathName(false)
  }, [pathname, isPathName])

  return (
    <>
      <Header isAuth={isPathName} />
      <main>{children}</main>
      {!isPathName && <Footer />}
    </>
  )
}

export default BaseLayout
