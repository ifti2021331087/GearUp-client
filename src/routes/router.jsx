import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../components/Home/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import CardDetails from '../pages/CardDetails';
import Cart from '../components/Cart/Cart';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';
import Profile from '../components/Profile/Profile';
import EditProfile from '../pages/EditProfile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },

            {
                path: "/cardDetails/:ID",
                element:
                    <PrivateRoute>
                        <CardDetails></CardDetails>,
                    </PrivateRoute>
            },
        ]
    },
    {
        path: "/profile",
        element: <Profile></Profile>,

    },

    {
        path: "/editProfile/:email",
        element: <EditProfile></EditProfile>,
        loader: ({ params }) =>
            fetch(`https://gear-up-server.vercel.app/user/${params.email}`)
    },

    {
        path: "/cart",
        element: (
            <PrivateRoute>
                <Cart></Cart>,
            </PrivateRoute>
        ),
        loader: () => fetch('https://gear-up-server.vercel.app/cart')
    },

    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/signUp",
                element: <SignUp></SignUp>
            }
        ]
    }

]);

export default router;