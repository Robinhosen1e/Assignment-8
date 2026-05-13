"use client";

import Imag1 from '@/image/banner(1).png';
import Imag2 from '@/image/banner (2).png';
import Imag3 from '@/image/banner (3).png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import "swiper/css";

import Image from "next/image";

export default function Slider() {
  return (
    <div className='bg-[#ce752813]'>
      <div className='w-11/12 mx-auto pt-8 pb-20 '>
      <Swiper
      modules={[Autoplay , Pagination]}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
      }}
    >
      <SwiperSlide>
        <Image src={Imag1} alt="" width={1200} height={200} className='h-[85vh] w-full bg-cover bg-no-repeat bg-center  rounded-lg ' />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={Imag2} alt="" width={1200} height={200} className='h-[85vh] w-full bg-cover bg-no-repeat bg-center  rounded-lg' />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={Imag3} alt="" width={1200} height={200} className='h-[85vh] w-full bg-cover bg-no-repeat bg-center  rounded-lg' />
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
  );
}