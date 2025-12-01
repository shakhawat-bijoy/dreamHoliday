import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AddPaymentMethod from './pages/AddPaymentMethod'
import Account from './pages/Account'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from './components/common/RootLayout'
import Flights from './pages/Flights'
import Hotels from './pages/Hotels'
import Error from './components/common/Error'
import ResetPassword from './pages/ResetPassword'
import ProtectedRoute from './components/common/ProtectedRoute'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout />}
      errorElement={<Error />}
      >
        <Route index element={<Home />} ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/payment-method" element={<AddPaymentMethod />}></Route>
        <Route path="/account" element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }></Route>
        <Route path="/flights" element={<Flights />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path='/ResetPassword' element={<ResetPassword/>}></Route>


      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App