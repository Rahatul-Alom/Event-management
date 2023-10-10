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
import Offer from "../Pages/Offer/Offer";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
          path:"/Offer",
          element: <PrivateRoute><Offer></Offer></PrivateRoute>
        }
      ]

    }
  ]);
  
export default router;