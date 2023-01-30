import React from 'react';
import google from '../Resource/google.png'
import github from '../Resource/github.png'
import facebook from '../Resource/facebook.png'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex justify-center my-28 '>
     <div className=' w-full md:w-6/12 lg:w-3/12 bg-white shadow-lg p-10 rounded-md   '>
    
     <form
        className=" "
        
      >
        <h1 className='text-2xl text-center font-bold text-black'>Register Now</h1>
        <div className="flex flex-col w-full ">
          <label className="mb-2" htmlFor="firstName">
             Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className='rounded w-full p-3'
            placeholder='Type Your Name......'
            required
           
          />
        </div>
       
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
          <label className="mb-2" htmlFor="Photo">
            Photo
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            className='p-1 border rounded '
            required
            
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
        <div className="flex flex-col w-full max-w-xs">
          <h1 className="mb-3">Gender</h1>
          <div className="flex gap-3">
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                
              />
              <label className="ml-2 text-lg" for="male">
                Male
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
               
              />
              <label className="ml-2 text-lg" for="female">
                Female
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                
              />
              <label className="ml-2 text-lg" for="other">
                Other
              </label>
            </div>
          </div>
        </div>
        <button
            className="px-4 py-3 bg-black mt-6 w-full rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
           
          >
            Register
          </button>
          <p className='my-3'>Already Have An Account? <Link className='hover:underline' to={'/login'}>Log In</Link> </p>
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

export default Register;