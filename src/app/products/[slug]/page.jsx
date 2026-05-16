

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://assignments-8-server.onrender.com/products')
      .then(res => res.json())
      .then(data => {
        const foundItem = data.find(item => {
          const itemSlug = item.name
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-');
          return itemSlug === slug;
        });

        if (foundItem) {
          setProduct(foundItem);
        } else {
          setError("Product not found");
        }
        setLoading(false);
      })
  }, [slug]);


  if (loading) {
    return <div className="text-center py-32 text-2xl">Loading product...</div>;
  }


  if (error || !product) {
    return (
      <div className="text-center py-32">
        <h1 className="text-4xl font-bold text-red-600">404 - Product Not Found</h1>
        <p className="mt-4">Slug: <code>{slug}</code></p>
      </div>
    );
  }


  return (
    <div className=''>
      <div className="flex w-8/12 mx-auto my-10">
        <div className='mr-20'>
           <Image src={product.image} height={400} width={400} alt={product.name} />
        </div>
              
               <div className="w-[56%] my-[2%]">
                   <h2 className="mb-2 text-xl font-bold">{product.name}</h2>

                   <p className='text-[13px] mb-3 text-gray-900'><span className='font-bold text-gray-800'>Description: </span>{product.description}</p>

                 <div className="bg-amber-500 p-1 rounded-2xl text-xs w-30 text-center mb-2 text-white">Brand: {product.brand}</div>
                                    
                   <p> 
                      <span className=" font-bold mr-2 text-[#f3790d]"><b className='mr-1 text-gray-800'>Price: </b>${product.price}</span>
                    </p>
                                
                                    
                                
                     <p className="my-2"><span className="text-gray-800 font-extrabold mr-1">Rating:</span>{product.rating}</p>
                                
                      <div className="bg-amber-500 p-1 rounded-2xl text-xs w-12 text-center mb-2 text-white">{product.category}</div>
                        <p className='font-medium text-gray-800'><b>stock:</b> {product.stock}</p>
                      <div className="flex  mt-9">
                        <button className="btn border text-sx font-medium text-gray-800 mb-2 border-[#f3790d] hover:bg-[#F48721] cursor-pointer hover:text-white py-0.5 px-5 rounded mr-4">Buy</button>
                         <button className=" btn border text-sx font-medium  mb-2 border-[#f3790d] bg-[#F48721] text-white py-1 px-3 cursor-pointer rounded mr-2">

                            <Link href='/' >Back Home</Link>

                        </button>
                       </div>
                                  
              </div>
    </div>
    </div>
  );
};

export default ProductDetail;
