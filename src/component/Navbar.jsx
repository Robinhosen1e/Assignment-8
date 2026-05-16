'use client';
import Image from "next/image";
import Link from "next/link";
import Img from '@/image/online store logo.png'
import { FiUser } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";



const Navbar = () => {

   const { data: session, isPending } = authClient.useSession();
      const user = session?.user;

    const link = <>
     <li className=" text-gray-800  hover:text-[#f3790d] font-medium mr-6 transition duration-300 "><Link href="/">Home</Link></li>
     <li className=" text-gray-800  hover:text-[#f3790d] font-medium mr-6 transition duration-300"><Link href="/products">Product</Link></li>
     {user?(<li className=" text-gray-800  hover:text-[#f3790d] font-medium mr-6 transition duration-300"><Link href="/profile">Profile</Link></li>) : ("")}
     <li className=" text-gray-800 hover:text-[#f3790d] font-medium transition duration-300"><Link href="/about">About</Link></li>
    </>

    return (
        <div className=" bg-base-100 shadow-sm">
            <div className="w-11/12 mx-auto navbar">
  <div className="navbar-start">
    <div className="dropdown relative">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="absolute dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-[600px] p-2 shadow">
        {link}
      </ul>
    </div>
    <Link href="/" >
      <Image src={Img} alt="logo" width={50} height={50} className="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1">
        {link}
    </ul>
  </div>
    {user ? (
      <div className="flex items-center gap-5  navbar-end">

                     <span className="  text-[#f3790d] font-bold "><span className="text-gray-700 font-medium mr-2">Welcome</span> {user.name}</span>
                   <div className="rounded-full">
                     <Image src={user.image || userAvatar} alt="User Avatar" width={50} height={30} className="rounded-full" />
                   </div>
                    

                    <button  onClick={async ()=> await authClient.signOut()} className="py-1.5 px-2.5 rounded cursor-pointer text-[15px] text-white bg-[#f3790d] hover:bg-[#ff7700]" >
                        Sign Out
                </button>
                
                </div>
    ):
    (<div className="navbar-end">

       <div className="justify-items-center cursor-pointer hover:text-[#f3790d] transition duration-300">
        
        <FiUser size={20} />

    <Link href="/login" >
      SignIn
    </Link>

       </div>
  </div>)}
</div>
        </div>
    );
};

export default Navbar;