import Image from "next/image";
import Link from "next/link";

const FlashSaleCard = ({item}) => {

    const slug = item.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');



    console.log('flash', item);

    console.log('image' , item.image );
    return (
        <div className="card card-side bg-white shadow-sm mr-5 border border-gray-200 h-70 w-113 p-3">
  <figure>
    <Image
      src={item.image}
      height={1200}
      width={100}
      alt="Movie" 
      className="pr-4"
      />
  </figure>
  <div className="w-[56%] my-[2%]">
    <h2 className="mb-2 text-[18px] font-bold">{item.name}</h2>
    
      <p> 
  <span className=" font-bold mr-2 text-[#f3790d]">${item.originalPrice}</span>
  <span className="line-through text-gray-500">${item.salePrice}</span>
    </p>

    <p className="bg-red-600 p-1 rounded-2xl text-xs w-30 text-center mb-2 mt-3 text-white">Discount: {item.discount}</p>

    <p className="my-2"><span className="text-gray-800 font-extrabold mr-1">Rating:</span>{item.rating}</p>

    <div className="bg-amber-500 p-1 rounded-2xl text-xs w-12 text-center mb-4 text-white">{item.category}</div>

   <div className="flex ">
     <button className="btn border text-sx font-medium text-gray-800 mb-2 border-[#f3790d] hover:bg-[#F48721] cursor-pointer hover:text-white py-0.5 px-5 rounded mr-4">Buy</button>
    <button className=" btn border text-sx font-medium  mb-2 border-[#f3790d] bg-[#F48721] text-white py-1 px-3 cursor-pointer rounded mr-2">

        <Link href={`/flashsale/${slug}`} >View Detail</Link>

    </button>
   </div>
  
  </div>
</div>
    );
};

export default FlashSaleCard;