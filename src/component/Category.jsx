import Image from 'next/image';
import Imag1 from '@/image/shirt.png';
import Imag2 from '@/image/pant.png';
import Imag3 from '@/image/tshirt.png';
import Imag4 from '@/image/wristwatch.png';
import Imag5 from '@/image/sunglasses.png';
import Imag6 from '@/image/cap.png';
import Imag7 from '@/image/sneakers.png';
import Imag8 from '@/image/briefcase.png';
import Link from 'next/link';


const Category = () => {
    return (
       <div className='bg-[#ce752813] p-10 pb-20 mb-20'>
         <div className='w-8/12 mx-auto '>
            <h2 className='text-4xl font-bold text-center text-gray-800  '>Featured Categories</h2>

            <div className='flex gap-9 justify-center flex-wrap mt-13'>
                <Link href="/products" className='p-3 bg-white rounded-full border border-gray-300 cursor-pointer hover:bg-[#f3780d8c] transition duration-300'>
                    <Image src={Imag1} alt="" width={40} height={40}  />
                </Link>
                <Link href="/products" className='p-3 bg-white rounded-full border border-gray-300 cursor-pointer hover:bg-[#f3780d8c] transition duration-300'>
                    <Image src={Imag2} alt="" width={40} height={40}  />
                </Link>
                <Link href="/products" className='p-3 bg-white rounded-full border border-gray-300 cursor-pointer hover:bg-[#f3780d8c] transition duration-300'>
                    <Image src={Imag3} alt="" width={40} height={40}  />
                </Link>
                <Link href="/products" className='p-3 bg-white rounded-full border border-gray-300 cursor-pointer hover:bg-[#f3780d8c] transition duration-300'>
                    <Image src={Imag4} alt="" width={40} height={40}  />
                </Link>
                <Link href="/products" className='p-3 bg-white rounded-full border border-gray-300 cursor-pointer hover:bg-[#f3780d8c] transition duration-300'>
                    <Image src={Imag5} alt="" width={40} height={40}  />
                </Link>
                <Link href="/products" className='p-3 bg-white rounded-full border border-gray-300 cursor-pointer hover:bg-[#f3780d8c] transition duration-300'>
                    <Image src={Imag6} alt="" width={40} height={40}  />
                </Link>
                <Link href="/products" className='p-3 bg-white rounded-full border border-gray-300 cursor-pointer hover:bg-[#f3780d8c] transition duration-300'>
                    <Image src={Imag7} alt="" width={40} height={40}  />
                </Link>
                <Link href="/products" className='p-3 bg-white rounded-full border border-gray-300 cursor-pointer hover:bg-[#f3780d8c] transition duration-300'>
                    <Image src={Imag8} alt="" width={40} height={40}  />
                </Link>
            </div>
        </div>
       </div>
    );
};

export default Category;