import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ data }) => {
    // const { id, image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus } = data
    const {id,image, itemName,description} = data
    return (
        <div className="bg-base-100 w-90 h-[500px] shadow-lg flex flex-col gap-5 justify-between rounded-xl">
            <div className="w-full h-80 px-3 pt-3">
                <img
                    src={image}
                    alt={itemName}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>

            <div className="px-2 pb-5 text-center flex-grow">
                <h2 className="text-xl font-semibold mb-2">{itemName}</h2>
                <p className="text-sm">{description}</p>
                <NavLink to={`/cardDetails/${id}`} className="btn btn-primary btn-sm mt-3">Details</NavLink>
            </div>
        </div>
    );
};

export default Card;