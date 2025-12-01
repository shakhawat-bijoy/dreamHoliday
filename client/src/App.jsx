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
import Terms from './pages/Terms'
import PrivecyPolicy from './pages/PrivecyPolicy'


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
        <Route path="/account" element={<Account />}></Route>
        <Route path="/flights" element={<Flights />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path='/ResetPassword' element={<ResetPassword/>}></Route>
        <Route path='/terms' element={<Terms/>}></Route>
        <Route path='/privecy-policy' element={<PrivecyPolicy/>}></Route>


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