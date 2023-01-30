import React from 'react';

import google from '../Resource/google.png'
import github from '../Resource/github.png'
import facebook from '../Resource/facebook.png'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
     <div className='flex justify-center my-28 '>
     <div className='w-3/12 bg-white shadow-lg p-10 rounded-md   '>
    
     <form
        className=" "
        
      >
        <h1 className='text-2xl text-center font-bold text-black'>LogIn</h1>
       
       
        <div className="flex flex-col w-full mt-1">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className='rounded w-full p-3'
            placeholder='Type Your Email......
            required'
            
          />
        </div>

        <div className="flex flex-col w-full mt-1">
          <label className="mb-2" htmlFor="email">
            Password
          </label>
          <input
            type="Password"
            name="Password"
            id="Password"
            className='rounded w-full p-3'
            placeholder='Type Your Password...
            required...'
            
          />
        </div>
        
        <button
            className=" px-4 py-3 bg-black mt-6 w-full rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
           
          >
            LogIn
          </button>
          <p className='my-3'>New To This Website Please? <Link to={'/register'} className='hover:underline'>Register</Link></p>
          <hr />
      </form>
      <div className='mt-5 flex gap-12 justify-center items-center'>
        <button className='w-10 h-10'><img src={google} alt="" /></button>
        <button className='w-10 h-10'><img src={github} alt="" /></button>
        <button className='w-10 h-10'><img src={facebook} alt="" /></button>
        
      </div>
     </div>
     </div>
      
    );
};

export default Login;