import React from 'react';
import { FaCartPlus, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import coinImage from '../Assets/carousel/cost/1.gif'


const Navbar = () => {

  const navItems = <>


    <li tabIndex={0}>
      <Link to='/' className="justify-between hover:bg-white hover:text-sky-400 hover:underline">
        Home

      </Link>
      <ul className="p-2 bg-white shadow-2xl">
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Travel Agency</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Winter Holidays</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Exotic Destinations</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Summer Holidays</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>City Tours</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>New Year Trips</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Wne Tours</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Vacation Showcase</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Landing</Link></li>

      </ul>
    </li>


    <li tabIndex={0}>
      <Link className="justify-between hover:bg-white hover:text-sky-400 hover:underline">
        Pages

      </Link>
      <ul className="p-2 bg-white shadow-2xl">
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>About Us</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>What We Offer</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Our Team</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Get In Touch</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Contact Us</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>FAQ Page</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Coming Soon</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Error Page</Link></li>
      </ul>
    </li>



    <li tabIndex={0}>
      <Link className="justify-between hover:bg-white hover:text-sky-400 hover:underline">
        Destination

      </Link>
      <ul className="p-2 bg-white shadow-2xl">
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Destination List</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Destination Slider</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Destination Item</Link></li>
      </ul>
    </li>




    <li tabIndex={0}>
      <Link className="justify-between hover:bg-white hover:text-sky-400 hover:underline">
        Tours

      </Link>
      <ul className="p-2 bg-white shadow-2xl">
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Standard List</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Gallery List</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Split List</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Tour Item</Link></li>
      </ul>
    </li>



    <li tabIndex={0}>
      <Link className="justify-between hover:bg-white hover:text-sky-400 hover:underline">
        Blog

      </Link>
      <ul className="p-2 bg-white shadow-2xl">
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Blog Masonry</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Blog Standard</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Post Types</Link></li>


      </ul>
    </li>



    <li tabIndex={0}>
      <Link className="justify-between hover:bg-white hover:text-sky-400 hover:underline">
        Shop

      </Link>
      <ul className="p-2 bg-white shadow-2xl">
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Product List</Link></li>
        <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Product Single</Link></li>
      </ul>
    </li>

    <li tabIndex={0}>
      <Link className="justify-between hover:bg-white hover:text-sky-400 hover:underline">
        Elements

      </Link>
      <ul className="p-2 bg-white shadow-2xl w-0 md:w-[1105px] ml-0 lg:-ml-[720px] ">
        <div className='lg:grid lg:grid-cols-4 mx-3 bg-white '>

          <div className='hidden lg:block'>
            <li><Link to='' className='hover:bg-white text-sky-400 hover:underline'>FEATURED</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Tour List</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Tour Carousel</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Tours Filter</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Destination With Tours</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Destination List</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Fullscreen Sections</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Reviews Carousel</Link></li>
          </div>

          <div className='hidden lg:block'>
            <li><Link to='' className='hover:bg-white text-sky-400 hover:underline'>PRESENTATION</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Team </Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Blog List</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Shop List</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Testimonials</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Banner</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Clients</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Parallax Section</Link></li>

          </div>

          <div className='hidden lg:block'>
            <li><Link to='' className='hover:bg-white text-sky-400 hover:underline'>CLASSIC</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Accrodions</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Tabs</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Buttons</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Google Maps</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Contact Form</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Progress Bar</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'>Countdown</Link></li>


          </div>

          <div className='hidden lg:block'>
            <li><Link to='' className='hover:bg-white text-sky-400 hover:underline'>TYPOGRAPHY</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'> Headings</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'> Columns </Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'> Section Title</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'> Blockquote</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'> Dropcaps</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'> Highlights</Link></li>
            <li><Link to='' className='hover:bg-white hover:text-sky-400 hover:underline'> Icon With Text</Link></li>
          </div>

        </div>
      </ul>
    </li>


  </>

  return (

    <div className='sticky top-0 bg-white z-50'>

      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to='/' className=" text-sm lg:text-3xl  font-semibold text-orange-400 ml-0 lg:ml-10"><span>
            Passenger</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex text-lg font-semibold">
          <ul className="menu menu-horizontal p-0">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end mx-10 text-sm font-semibold ">

          <Link><FaCartPlus></FaCartPlus></Link>



          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
              <Link className="justify-between hover:bg-white hover:text-sky-400 hover:underline">

                <FaUser></FaUser>
              </Link>
              <ul className="p-2 bg-white shadow-2xl w-32 -ml-14 ">
                <li><Link className='hover:bg-white hover:text-sky-400 hover:underline'>DashBoard</Link></li>
                <li><Link className='hover:bg-white hover:text-sky-400 hover:underline'>Login</Link></li>
                <li><Link className='hover:bg-white hover:text-sky-400 hover:underline'>Register</Link></li>
                <li><Link className='hover:bg-white hover:text-sky-400 hover:underline'>LogOut</Link></li>


              </ul>
            </li>
          </ul>



        </div>
      </div>

    </div>


  );
};

export default Navbar;