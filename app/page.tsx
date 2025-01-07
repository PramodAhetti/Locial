import React, { useState } from 'react';
import Link from 'next/link';
import { AlignJustify, MapPin, MessageCircle } from 'lucide-react';
import GoogleLog from './component/loginGoogle';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authoptions';

const LandingPage =async () => {
  const user=await getServerSession(authOptions);
  return (
     <div className='w-full h-screen grid grid-rows-12 grid-cols-12'>  

     <nav className='row-start-1 col-start-1 col-end-13 flex flex-row justify-between items-center m-2'>
       <h1 className='text-2xl md:text-8xl font-title text-center row-start-5 row-end-7 col-start-2 col-end-12'>LOCIAL</h1> 
       <AlignJustify size={30}></AlignJustify>
       </nav>
      {/* <div className='flex justify-center items-center row-start-2 row-end-4 col-start-5 col-end-9'>
         <MapPin size={150} ></MapPin>
      </div> */}
       
      <p className='text-white row-start-5 row-end-8 font-title text-5xl text-left col-start-2 col-end-12'>Discover, Connect and Share.</p>
      <div className='text-center text-sm row-start-10 col-start-2 col-end-12 text-gray-500 flex flex-row justify-around items-center'>
        <MessageCircle className='h-8 w-8'></MessageCircle>
        <p className='text-left p-1'>Only see updates within your surroundings.</p>

      </div>
     <GoogleLog></GoogleLog>
      <footer className="row-start-12 col-start-1 col-end-13 p-4 text-center text-sm text-zinc-500 border-t border-gray-200">
        <p>&copy; 2024 Locial. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;