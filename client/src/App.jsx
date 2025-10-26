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


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout />}
      // errorElement={<Error />}
      >
        <Route index element={<Home />} ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/add-payment-method" element={<AddPaymentMethod />}></Route>
        <Route path="/account" element={<Account />}></Route>



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