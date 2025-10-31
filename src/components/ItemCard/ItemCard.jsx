import React from 'react';

const ItemCard = ({ item, handleDelete }) => {
    const { _id, image, itemName, price, description } = item;

    return (
        <div
            className="
        flex flex-col sm:flex-row items-center sm:items-center
        gap-4 sm:gap-5 bg-white shadow-md p-4 rounded-lg border
        hover:shadow-lg transition-all w-full
      "
        >
            {/* Image */}
            <img
                src={image}
                alt={itemName}
                className="w-32 h-32 sm:w-28 sm:h-28 object-cover rounded-md"
            />

            {/* Product Info */}
            <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-lg sm:text-xl">{itemName}</h3>

                {/* 🔹 Hide description on extra-small screens */}
                <p className="text-sm text-gray-500 hidden sm:block">
                    {description}
                </p>

                {/* Price Section */}
                <div className="mt-2 flex justify-center sm:justify-start items-center gap-3">
                    <span className="text-orange-400 font-bold text-lg sm:text-xl">
                        ৳ {price}
                    </span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex sm:flex-col justify-center items-center gap-3 mt-3 sm:mt-0">
                {/* Delete */}
                <button
                    onClick={() => handleDelete(_id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm sm:text-base transition-all"
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default ItemCard;
