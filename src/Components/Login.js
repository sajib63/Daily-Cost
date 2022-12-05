import React from 'react';
import LoginModal from './LoginModal';
import image from '../Assets/login.gif'


const Login = () => {
    return (
        <div>
          <div className='flex my-0 lg:my-320 items-center justify-center '>
          <label htmlFor="LoginModal" className="btn bg-orange-600 border-0">Click For Login</label>
            <img src={image} alt="" />
          </div>
            <LoginModal></LoginModal>
        </div>
    );
};

export default Login;