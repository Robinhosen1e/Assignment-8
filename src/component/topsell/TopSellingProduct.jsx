"use client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import { BsPercent } from 'react-icons/bs';
import { LuMoveRight } from 'react-icons/lu';
import Link from 'next/link';
import TopSellingProductCard from './TopSellingProductCard';


const TopSellingProduct = () => {

      const [topSellingProducts, setTopSellingProducts] = useState([]);
    
      useEffect(() => {
        fetch("https://assignments-8-server.onrender.com/topSellingProducts")
          .then((res) => res.json())
          .then((data) => setTopSellingProducts(data));
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
        <div>
             <div className='my-15 w-11/12 mx-auto '>


      <div className='border-b-2 border-[#F48721] pb-2 mb-8 justify-between flex items-center'>
         
    <h2 class="text-3xl font-bold text-[#F48721] flex items-center gap-1.5">
     Popular Products
    </h2>

    <Link href='/popularproducts' className="underline text-[#F48721] text-[16px] flex items-center gap-1 cursor-pointer">
     See All  <LuMoveRight size={16} /> 
    </Link>

      </div>



        <Carousel responsive={responsive}>
  {topSellingProducts.map((item) => (
    <TopSellingProductCard
      key={item.id}
      item={item}
    />
  ))}
</Carousel>
    </div>
        </div>
    );
};

export default TopSellingProduct;