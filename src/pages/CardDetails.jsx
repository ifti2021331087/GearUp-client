
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CardDetails = () => {
    const { ID } = useParams();
    // const data = useLoaderData();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/productData.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
            });
    }, [])
    const filtered = data.filter(item => String(item.id) === String(ID));
    // console.log(filtered);
    const { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus } = filtered[0] || {};
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleSubmitFeedback = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;
        setComments((prev) => [...prev, newComment.trim()]);
        setNewComment("");
    };

    const handleAddItem = () => {
        const newItem = { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus };
        fetch('http://localhost:5001/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: "Your item has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
            )
    }

    return (
        // <div></div>

        <div>
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
                        <div className="btn btn-outline btn-secondary border"
                            onClick={handleAddItem}
                        >Add to Cart</div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-10">
                <h2 className="text-xl font-semibold mb-3">Share your thought with us</h2>

                {/* Comment Form */}
                <form onSubmit={handleSubmitFeedback} className="flex flex-col gap-3">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write your feedback here..."
                        className="textarea textarea-bordered w-full"
                        rows={2}
                    />
                    <div className="flex items-center gap-3">
                        <div type="submit" className="btn btn-primary">Submit</div>
                        <span className="text-sm text-base-content/60">
                            {newComment.trim().length}/500
                        </span>
                    </div>
                </form>

                {/* Render Comments */}
                <div className="my-6 space-y-3">
                    {comments.length > 0 && <h3 className="text-lg font-semibold">All Feedbacks:</h3>}
                    {comments.map((c, index) => (
                        <div
                            key={index}
                            className="p-3 rounded-lg border border-base-300 bg-base-200"
                        >
                            {c}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardDetails;