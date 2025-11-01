import React, { useContext } from "react";
import Header from "../Header/Header";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {

    const { user } = useContext(AuthContext);
    return (
        <div>
            <Header></Header>
            <div className="max-w-sm mx-auto mt-10 bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
                <div className="flex justify-center mt-6">
                    <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
                    />
                </div>

                <div className="p-6 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
                    <p className="text-gray-600 mt-1">{user?.email}</p>

                    <div className="border-t border-gray-200 my-4"></div>

                    <div className="flex flex-col gap-3">
                        {user?.email && (
                            <Link
                                to={`/editProfile/${user.email}`}
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
                            >
                                Edit Profile
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
