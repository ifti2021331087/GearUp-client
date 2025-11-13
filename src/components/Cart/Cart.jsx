import React, { useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import Swal from 'sweetalert2';

const Cart = () => {
    const loadedItems = useLoaderData();
    const [items, setItems] = useState(loadedItems);
    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: true
        });
        swalWithBootstrapButtons.fire({
            title: "Remove from cart",
            text: "Item(s) will be removed from order",
            showCancelButton: true,
            confirmButtonText: "Remove",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://gear-up-server.vercel.app/cart/${id}`,{
                    method:'DELETE',
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount){
                        const remainningItems=items.filter(item=>item._id!==id);
                        setItems(remainningItems);
                    }
                })
            } 
        });
    }
    // console.log(items);

    return (
        <div>
            <Header></Header>
            <div className='m-10'>
                <div className="text-3xl text-center text-bold my-10">Cart list</div>
                <div className='w-3/5 mx-auto'>
                    <div className='flex flex-col gap-2'>
                        {
                            items.map(item =>
                                <ItemCard key={item._id} item={item} items={items} setItems={setItems} handleDelete={handleDelete}></ItemCard>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;