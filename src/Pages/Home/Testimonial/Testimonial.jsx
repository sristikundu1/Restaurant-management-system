import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data)
            )
    }, [])

    return (
        <div className='max-w-5xl mx-auto mb-24'>
            <section>
                <SectionTitle
                    subHeading={"---What Our Clients Say---"}
                    heading={"TESTIMONIALS"}>

                </SectionTitle>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {

                        reviews.map(review => <SwiperSlide
                            key={review._id}>
                            <div className="mx-24 my-8 py-5 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180}}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="text-7xl font-bold my-10"><FaQuoteLeft></FaQuoteLeft></p>
                                <p className="text-[#444] text-xl	leading-9">{review.details}</p>
                                <h3 className="text-[#CD9003] text-3xl	font-medium	text-center">{review.name}</h3>
                            </div>

                        </SwiperSlide>)
                    }

                </Swiper>
            </section>

        </div>
    );
};

export default Testimonial;