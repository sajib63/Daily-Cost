import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

import Navbar from '../Components/Navbar';
import TopNavbar from '../Components/TopNavbar';

const Main = () => {
    return (
        <div className='bg-white'>
            <TopNavbar></TopNavbar>
            <Navbar></Navbar>
         
            <Outlet></Outlet>
          
        </div>
    );
};

export default Main;