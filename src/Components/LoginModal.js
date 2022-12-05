import React from 'react';

const LoginModal = () => {
    return (
        <div>

            <input type="checkbox" id="LoginModal" className="modal-toggle" />
            <label htmlFor="LoginModal" className="modal cursor-pointer">
                <div className="hero  ">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            
                        </div>
                        <form className="card flex-shrink-0   shadow-2xl bg-base-100">
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </label>
        </div>
    );
};

export default LoginModal;