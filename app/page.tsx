import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, MessageCircle } from 'lucide-react';
import GoogleLog from './component/loginGoogle';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authoptions';

const LandingPage =async () => {
  const user=await getServerSession(authOptions);
  return (
    <div className="flex flex-col min-h-screen w-screen bg-zinc-800 text-white">

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-8">
          <MapPin size={200} className="mx-auto mb-4" />
          <div className='m-6'></div>
          <br></br>

          <h2 className="text-6xl md:text-8xl lg:text-9xl font-title">
            LOCIAL
            </h2>
          <p className="text-1xl md:text-2xl font-bold p-2 m-4 text-zinc-300">Discover messages and events in your area and stay connected</p>
          <div className="flex items-center justify-center space-x-2 text-zinc-400">
            <MessageCircle size={20} />
            <span>Only see updates within your surroundings</span>
          </div>
        </div>

        <div className="flex flex-col space-y-4 w-full max-w-xs mt-14">
          {(user)?(          <Link href='/Near' className="w-full bg-gradient-to-r from-green-400 to-purple-600 hover:from-purple-700 hover:to-yellow-500 py-4 px-4 rounded-full font-semibold border border-white">
          Get Started
          </Link>):(<GoogleLog></GoogleLog>

)}
                  </div>
      </main>

      <footer className="p-4 text-center text-sm text-zinc-500 border-t border-gray-200">
        <p>&copy; 2024 Locial. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;