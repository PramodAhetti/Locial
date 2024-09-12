import React from 'react';
import Link from 'next/link';
import { MapPin, MessageCircle } from 'lucide-react';
import GoogleLog from './component/loginGoogle';


const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen bg-zinc-800 text-white">

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-8">
          <MapPin size={64} className="mx-auto mb-4" />
          <br></br>
          <h2 className="text-6xl font-extrabold mb-4">LOCIAL</h2>
          <p className="text-base font-bold mb-4 text-zinc-300">Discover messages and events in your area and stay connected</p>
          <div className="flex items-center justify-center space-x-2 text-zinc-400">
            <MessageCircle size={20} />
            <span>Only see updates within your surroundings</span>
          </div>
        </div>

        <div className="flex flex-col space-y-4 w-full max-w-xs mt-14">
          <GoogleLog></GoogleLog>
          <Link href='/Near' className="w-full bg-white text-black py-3 px-4 rounded-full font-semibold border border-black hover:bg-gray-100 transition duration-300">
          Get Started
          </Link>
        </div>
      </main>

      <footer className="p-4 text-center text-sm text-zinc-500 border-t border-gray-200">
        <p>&copy; 2024 Locial. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;