import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
    const {
        setUser,
        createNewUser,
        profileUpdate } = useContext(AuthContext)

    const [error, setError] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (name.length < 6) {
            setError({ ...error, name: "Your name should be at least of 6 characters" });
            return;
        }

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);

        if (!hasUpperCase || !hasLowerCase) {
            setError({ ...error, password: "Password should've al least one uppercase and one lowercase letter" });
            return;
        }

        
        createNewUser(email, password)
        .then(res => {
            const user = res.user;
            setUser(user);
            profileUpdate({ displayName: name, photoURL: photo })
            .then(() => {
                navigate("/");
            })
            
        })

        const newUser = { name, photo, email };
        fetch('http://localhost:5001/user', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
        
    }
    return (
        <div>
            <div className='hero bg-base-200 min-h-screen flex justify-center items-center'>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
                    <h2 className='text-2xl font-semibold text-center'>Sign up for your account</h2>
                    <form className="card-body" onSubmit={handleSubmit}>
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
                        {
                            error.name && (
                                <label className='label text-sm text-red-500'>
                                    {error.name}
                                </label>
                            )
                        }
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
                        {
                            error.password && (
                                <label>
                                    <label className='label text-sm text-red-500'>
                                        {error.password}
                                    </label>
                                </label>
                            )
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral w-full">Register</button>
                        </div>
                    </form>
                    <p className='text-center font-semibold'>Already Have An Account ? <Link to="/auth/login" className='text-red-500'>Sign In</Link></p>
                </div>
            </div>
        </div >
    );
};

export default SignUp;