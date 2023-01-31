import { createBrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart/Cart";

import Area from "../Components/CountryArea/Area";
import Home from "../Components/Home/Home";
import Login from "../Components/Login";
import PerfectHolidayDetails from "../Components/PerfectHoliday/PerfectHolidayDetails";
import PrivateRoute from "../Components/PrivateRoutes/PrivateRoute";
import Register from "../Components/Register";
import Main from "../Layout/Main";

export const router=createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/area/:id',
            loader: ({ params }) => fetch(`http://localhost:5000/allCountry/${params.id}`),
            element:<PrivateRoute><Area></Area></PrivateRoute>
        },
        {
            path:'/perfectHoliday/:id',
            loader: ({ params }) => fetch(`http://localhost:5000/perfectHoliday/${params.id}`),
            element:<PrivateRoute><PerfectHolidayDetails></PerfectHolidayDetails></PrivateRoute>
        },

        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/cart',
            element:<PrivateRoute><Cart></Cart></PrivateRoute>
        }

      
       ] 
    }
])
