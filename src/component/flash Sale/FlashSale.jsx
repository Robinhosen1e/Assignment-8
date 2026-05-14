"use client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import FlashSaleCard from "./FlashSaleCard";
// import { LuCirclePercent } from 'react-icons/lu';
import { BsPercent } from 'react-icons/bs';
import { LuMoveRight } from 'react-icons/lu';
import Link from 'next/link';

const FlashSale = () => {
  const [flashSale, setFlashSale] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/flashSale")
      .then((res) => res.json())
      .then((data) => setFlashSale(data));
  }, []);


  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  


  return (
    <div className='my-10 w-11/12 mx-auto '>


      <div className='border-b-2 border-[#F48721] pb-2 mb-8 justify-between flex items-center'>
         
    <h2 class="text-2xl font-bold text-[#F48721] flex items-center gap-1.5">
    <BsPercent size={26} className='bg-[#F48721] text-white p-1.5 rounded-full' />  Flash Sale
    </h2>

    <Link href='/flashsale' className="underline text-[#F48721] text-[16px] flex items-center gap-1 cursor-pointer">
     See All  <LuMoveRight size={16} /> 
    </Link>

      </div>



        <Carousel responsive={responsive}>
  {flashSale.map((item) => (
    <FlashSaleCard
      key={item.id}
      item={item}
    />
  ))}
</Carousel>
    </div>
  );
};

export default FlashSale;