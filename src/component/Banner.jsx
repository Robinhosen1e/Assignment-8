"use client";

import Imag1 from '@/image/banner (1).png';
import Imag2 from '@/image/banner (2).png';
import Imag3 from '@/image/banner (3).png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Slider() {
  return (
    <div className='w-8/12 mx-auto mt-8 '>
      <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
      }}
    >
      <SwiperSlide>
        <Image src={Imag1} alt="" width={1200} height={200} className='w-full rounded-2xl h-auto' />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={Imag2} alt="" width={1200} height={200} className='w-full rounded-2xl h-auto' />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={Imag3} alt="" width={1200} height={200} className='w-full rounded-2xl h-auto' />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}