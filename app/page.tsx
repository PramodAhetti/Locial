import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-400 text-black">

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-8">
          <MapPin size={64} className="mx-auto mb-4 text-gray-800" />
          <br></br>
          <h2 className="text-6xl font-extrabold mb-2">LOCIAL</h2>
          <p className="text-base mb-4 text-gray-600">Discover messages and events in your area and stay connected</p>
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <MessageCircle size={20} />
            <span>Only see content within your radius</span>
          </div>
        </div>

        <div className="space-y-4 w-full max-w-xs">
          <button className="w-full bg-black text-white py-3 px-4 rounded-full font-semibold border border-white hover:bg-gray-800 transition duration-300">
            Log In
          </button>
          <button className="w-full bg-white text-black py-3 px-4 rounded-full font-semibold border border-black hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500 border-t border-gray-200">
        <p>&copy; 2024 Locial. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;