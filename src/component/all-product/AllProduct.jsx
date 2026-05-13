"use client";
import { useEffect, useState } from "react";
import AllProductCard from "./AllProductCard";
import { LuMoveRight } from "react-icons/lu";
import Link from "next/link";
import { BsPercent } from "react-icons/bs";


const AllProduct = () => {

      const [heroAllProduct, setHeroAllProduct] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:5000/allProduct")
          .then((res) => res.json())
          .then((data) => setHeroAllProduct(data));
      }, []);


    return (
        <div className="w-11/12 mx-auto my-20">

             <div className='border-b-2 border-[#F48721] pb-2 mb-8 justify-between flex items-center'>
         
    <h2 class="text-2xl font-bold text-[#F48721] flex items-center gap-1.5">
    All Product
    </h2>

    <Link href='/weygthwye' className="underline text-[#F48721] text-[16px] flex items-center gap-1 cursor-pointer">
     See All  <LuMoveRight size={16} /> 
    </Link>

      </div>


           <div className="grid grid-cols-3 gap-4 ">
             {heroAllProduct.map((item) => ( <AllProductCard key={item.id} item={item}  />
  ))}
           </div>
        </div>
    );
};

export default AllProduct;