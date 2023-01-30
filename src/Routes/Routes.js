import { createBrowserRouter } from "react-router-dom";

import Area from "../Components/CountryArea/Area";
import Home from "../Components/Home/Home";
import Login from "../Components/Login";
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
            element:<Area></Area>
        },

        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }

      
       ] 
    }
])
