import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className='hero bg-base-200 min-h-screen flex justify-center items-center'>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
                    <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label mb-2">
                                <span className="label-text text-gray-800">Your Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label mb-2">
                                <span className="label-text text-gray-800">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="photo-url" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label mb-2">
                                <span className="label-text text-gray-800">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label mb-2">
                                <span className="label-text text-gray-800">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered w-full" required />
                            <label className="label mb-2">
                                <a href="#" className="label-text-alt text-gray-800 link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral w-full">Register</button>
                        </div>
                    </form>
                    <p className='text-center font-semibold'>Already Have An Account ? <Link to="/auth/login" className='text-red-500'>Login</Link></p>
                </div>
            </div>
        </div >
    );
};

export default SignUp;