import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";
import Booking from "../Pages/Booking/Booking"
import ErrorPage from "../Pages/Error/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch('/data.json')
        },
        {
          path:"/services/:id",
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: () => fetch('/data.json')
        },
        {
          path:"/Login",
          element: <Login></Login>
        },
        {
          path:"/Register",
          element: <Register></Register>
        },
        {
            path:"/About",
            element: <About></About>
        },
        {
          path:"/Contact",
          element: <PrivateRoute><Contact></Contact></PrivateRoute>
        },
        {
          path:"/Booking",
          element: <PrivateRoute><Booking></Booking></PrivateRoute>
        }
      ]

    }
  ]);
  
export default router;