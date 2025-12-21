import { Outlet, useLocation } from 'react-router-dom'
import Snowfall from 'react-snowfall'
import Navbar from './Navbar'
import Footer from './Footer'


const RootLayout = () => {
  const location = useLocation()
  const hideNavbarRoutes = ['/login', '/register', '/payment-method', '/reset-password']
  const hideFooterRoutes = ['/login', '/register', '/payment-method', '/reset-password', '/account']
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname)
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname)

  return (
    <div>

      <Snowfall
        snowflakeCount={140}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 50,
        }}
      />

      {!shouldHideNavbar && <Navbar />}


      <Outlet />

      {!shouldHideFooter && <Footer />}

    </div>
  )
}

export default RootLayout