import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SideNav.css'

const SideNav = () => {
    return (
        <div id="mysidenav" class="sidenav">
            
            <Link to='' id="home" ><FaFacebook className='ml-4'></FaFacebook></Link>
            
            
            <Link to='' id="facebook"><FaInstagram className='ml-4'></FaInstagram></Link>
            <Link to='' id="instagram"><FaLinkedinIn className='ml-4'></FaLinkedinIn></Link>




        </div>
    );
};

export default SideNav;