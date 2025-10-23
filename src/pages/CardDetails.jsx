
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
    const { ID } = useParams();
    const data = useLoaderData();
    const filtered = data.filter(item => String(item.id) === String(ID));
    const { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus } = filtered[0];
    console.log(ID);
    console.log(filtered);
    return (
        <div>
            {/* <Header></Header> */}
            <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 mx-auto my-10 p-5">
                <figure className="lg:w-1/4">
                    <img src={image} alt={itemName} className="rounded-xl w-full" />
                </figure>

                <div className="card-body lg:w-1/2 space-y-2">
                    <h2 className="card-title text-3xl font-bold">{itemName}</h2>
                    <p className="text-lg text-gray-600">{description}</p>

                    <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
                        <p><strong>Category:</strong> {categoryName}</p>
                        <p><strong>Price:</strong> ${price}</p>
                        <p><strong>Rating:</strong> ⭐ {rating}/5</p>
                        <p><strong>Stock:</strong> {stockStatus}</p>
                        <p><strong>Customization:</strong> {customization}</p>
                        <p><strong>Delivery Time:</strong> {processingTime} days</p>
                    </div>

                    <div className="card-actions justify-end mt-4 btn-outline">
                        <div className="btn btn-outline btn-secondary border">Add to Cart</div>
                    </div>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default CardDetails;