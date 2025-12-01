import { Outlet, useLocation } from 'react-router-dom'
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

      {!shouldHideNavbar && <Navbar />}


      <Outlet />

      {!shouldHideFooter && <Footer />}

    </div>
  )
}

export default RootLayout