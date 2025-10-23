import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../components/Home/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import CardDetails from '../pages/CardDetails';

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            
            {
                path:"/cardDetails/:ID",
                element:<CardDetails></CardDetails>,
                loader:()=>fetch('/productData.json')
            },
            
        ]
    },
    {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/signUp",
                element:<SignUp></SignUp>
            }
        ]
    }

]);

export default router;