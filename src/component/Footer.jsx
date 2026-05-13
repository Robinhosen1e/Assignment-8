
import imgs from '@/image/online store logo.png'
import Image from 'next/image';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside className=''>
    <Image src={imgs} height={100} width={100} alt='logo' className='mb-2' />

    <div>
      <p className='font-bold text-gray-700 text-xl'>
      Odo Fashion
    </p>
    <p className='text-xs text-gray-500 max-w-150 mt-2'>Odo is a modern fashion destination for stylish clothing, shoes, sunglasses, and everyday essentials. We bring trendy designs, quality products, and affordable fashion together to help you express your unique style with confidence.</p>
    </div>
    <div className='flex mt-2.5'>
       <div  className=' mr-3 border border-amber-500 p-2 text-[#F48721] hover:bg-[#F48721] hover:text-white cursor-pointer rounded-full'>
        <FaFacebookF  size={25} />
       </div>
       <div className=' mr-3 border border-amber-500 p-2 text-[#F48721] hover:bg-[#F48721] hover:text-white cursor-pointer rounded-full'>
        <FaYoutube size={25} />
       </div>
       <div className='  border border-amber-500 p-2 text-[#F48721] hover:bg-[#F48721] hover:text-white cursor-pointer rounded-full'>
        <BiLogoInstagramAlt size={25}  />
       </div>

    </div>
  </aside>
  <nav>
    <h6 className="text-gray-800 text-[18px] font-semibold mb-2">Information</h6>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">About us</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">Contact us</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">Company Information</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">Privacy Policy</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">Terms & Conditions</a>

  </nav>
  <nav>
    <h6 className="text-gray-800 text-[18px] font-semibold mb-2">Shop By</h6>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">Cap</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">Shirt</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">Pant</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">T-shirt</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">Bag</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">Watches</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">Sunglasses</a>
  </nav>
  <nav>
    <h6 className="text-gray-800 text-[18px] font-semibold mb-2">Support</h6>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">Support Center</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">How to Order</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">Payment</a>
    <a className="hover:text-[#F48721] text-gray-600 cursor-pointer">FAQ</a>

  </nav>
  
</footer>
        </div>
    );
};

export default Footer;