import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slides from '../slides/slides';
import Card from '../Card/Card';

const Home = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        fetch('/productData.json')
            .then(res => res.json())
            .then(data => {
                setData(data),
                setFilterData(data)
            }
            );
    }, [])
    const handleFilter = (category) => {
        const filtered = data.filter(item => item.categoryName === category);
        setFilterData(filtered);
    }
    return (
        <div className=''>
            <Slides></Slides>
            <div className="text-4xl text-center text-bold m-4">SPORTS ACCESSORIES</div>
            <div className="flex gap-1 justify-center mb-5">
                <div className="btn btn-xs b-2 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                    onClick={() => handleFilter("men")
                    }
                >MAN</div>
                <div className="btn btn-xs b-2 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                    onClick={() => handleFilter("women")}
                >WOMEN</div>
                <div className="btn btn-xs b-2 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                    onClick={() => handleFilter("child")}
                >CHILD</div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    filterData.map(data => <Card data={data}></Card>)
                }
            </div>

        </div>
    );
};

export default Home;