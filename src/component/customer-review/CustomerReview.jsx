"use client";

import { useEffect, useState } from "react";
import CustomerReviewCard from "./CustomerReviewCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const CustomerReview = () => {

  const [customerReviews, setCustomerReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/customerReviews")
      .then((res) => res.json())
      .then((data) => setCustomerReviews(data));
  }, []);

  return (
   <div className="bg-[#ce752813]">


       <div>
         <h1 className="text-3xl text-gray-800 text-center font-bold py-6">Customer Review</h1>
       </div>


      <div className="w-11/12 mx-auto pb-15 ">

      <Swiper
  modules={[Autoplay]}
  slidesPerView={2}
  spaceBetween={20}
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}

  breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
>
  {customerReviews.map((item) => (
    <SwiperSlide key={item.id}>
      <CustomerReviewCard item={item} />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
   </div>
  );
};

export default CustomerReview;



 