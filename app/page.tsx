import React, { useState } from 'react';
import Link from 'next/link';
import { AlignJustify, MapPin, MessageCircle } from 'lucide-react';
import GoogleLog from './component/loginGoogle';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authoptions';
import Image from 'next/image';
import { redirect } from 'next/navigation';
const LandingPage =async () => {
  const user=await getServerSession(authOptions);
  let button=<GoogleLog></GoogleLog>;
  const isMobileDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /android|iphone|ipad|ipod|blackberry|windows phone|opera mini|mobile/i.test(userAgent);
  };
  
  if(user){
    button=<Link href={'/Near'} className="text-center flex flex-col justify-center text-sm w-full row-start-12 row-end-13 m-2 col-start-3 col-end-11 bg-white text-black rounded-full font-semibold border border-black hover:bg-gray-500" >Get Started</Link>
  }
  return (
    
     <div className='w-full md:hidden h-screen grid grid-rows-12 grid-cols-12'>  
     <nav className='row-start-1 col-start-1 col-end-13 flex flex-row justify-between items-center m-2'>
       <h1 className='text-2xl md:text-8xl font-title text-center row-start-5 row-end-7 col-start-2 col-end-12'>LOCIAL</h1> 
       <AlignJustify size={30}></AlignJustify>
       </nav>
      {/* <div className='flex justify-center items-center row-start-2 row-end-4 col-start-5 col-end-9'>
         <MapPin size={150} ></MapPin>
      </div> */}
      <Image alt='fractal' src='/Fractal_tree.gif' className='row-start-3 row-end-6 col-start-4 col-end-10' width={600} height={600}></Image>
      <p className='text-white row-start-6 row-end-9 font-title text-5xl text-left col-start-2 col-end-12'>Discover, Connect and Share.</p>
      <div className='mb-10 text-center text-sm row-start-11 col-start-2 text-gray-400 col-end-12 flex flex-row justify-evenly items-center'>
        <MessageCircle className='h-8 w-8'></MessageCircle>
        <p className='text-left p-1'>Only see updates within your surroundings.</p>
      </div>
      {button}
           {/* <footer className="row-start-12 col-start-1 col-end-13 p-4 text-center text-sm text-zinc-500 border-t border-gray-200">
        <p>&copy; 2024 Locial. All rights reserved.</p>
      </footer> */}
    </div>
    
  )
};

export default LandingPage;