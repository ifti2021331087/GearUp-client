import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { CgProfile } from "react-icons/cg";
import profile from '../../assets/profile.png'
const Header = () => {
    const [items, setItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const { user } = useContext(AuthContext);
    console.log(user);
    useEffect(() => {
        fetch('http://localhost:5001/cart', {

        })
            .then(res => res.json())
            .then(data => {
                setItems(data);
                const cost = data.reduce((sum, item) => sum + (item.price || 0), 0);
                setTotalCost(cost);
            })
    }, [])
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" to="/">GearUP</Link>
            </div>
            {
                user?.email ?
                    <div className="flex gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                    <span className="badge badge-sm indicator-item">{items.length}</span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">{items.length} Items</span>
                                    <span className="text-info">Subtotal: {totalCost}</span>
                                    <div className="card-actions">
                                        <NavLink className="btn btn-info btn-block"
                                            to="/cart"
                                        >View cart</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div> :
                    <div className='flex gap-2'>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <Link className="indicator" to="/auth/login">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            </Link>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User profile"
                                        src={profile}
                                    />
                                </div>
                            </div>

                            <ul
                                tabIndex={0}
                                className="dropdown-content menu menu-none bg-sky-100 rounded-box w-64 mt-3 p-5 shadow-lg border border-base-200"
                            >
                                <li>
                                    <Link className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-medium w-full" to="/auth/login">
                                        Sign in
                                    </Link>
                                    <div className="text-xs ml-3 hover:bg-transparent active:bg-transparent focus:bg-transparent">
                                        New customer?{" "}
                                        <Link
                                            to="/auth/signUp"
                                            className="link link-primary font-semibold"
                                        >
                                            Start here.
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

            }
        </div>
    );
};

export default Header;