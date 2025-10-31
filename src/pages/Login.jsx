import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { setUser, userLogin } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
            .then(res => {
                const user = res.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
            })
    }
    return (
        <div className='hero bg-base-200 min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Sign in to your account</h2>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label mb-1">
                            <span className="label-text text-gray-800">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label mb-1">
                            <span className="label-text text-gray-800">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered w-full" required />
                        {
                            error.login && (
                                <label className="label text-sm text-red-600">
                                    {error.login}
                                </label>
                            )}
                        <label className="label mb-1 mt-1">
                            <a href="#" className="label-text-alt text-gray-800 link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral w-full">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Dont Have An Account ? <Link to="/auth/signUp" className='text-red-500'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;