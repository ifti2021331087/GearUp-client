import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AuthLayout = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;