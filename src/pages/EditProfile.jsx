import React from 'react';
import Header from '../components/Header/Header';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditProfile = () => {
    const userData = useLoaderData() || {};
    const { name, photo,email} = userData;
    const navigate=useNavigate();
    const handleUpdateUser = (e) => {
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const newProfile={name,photo,email};
        fetch("http://localhost:5001/user",{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newProfile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                navigate("/")
            })
    }
    return (
        <div className='w-10/12 mx-auto'>
            <Header></Header>
            <form onSubmit={handleUpdateUser} className='mt-10'>
                <div className="md:flex md:w-2/5 mx-auto mb-8">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text mb-2">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label mb-2">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter your photoURL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Profile" className="btn btn-block" />
            </form>
        </div>
    );
};

export default EditProfile;