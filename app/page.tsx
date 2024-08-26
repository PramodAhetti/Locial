import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-900 font-mono flex flex-col items-center justify-end p-8" style={{
      backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-WOeaA3NJen52Jgm4DIT_2WjPanzXzLhMg&s')`,
      backgroundRepeat:'no-repeat',
      backgroundPosition: 'center',
      backgroundSize:200

      
      }} >
      <div className="text-8xl font-extrabold mb-8">
        <span className="text-blue-500">L</span>
        <span className="text-red-500">O</span>
        <span className="text-yellow-500">C</span>
        <span className='text-yellow-500'>I</span>
        <span className="text-blue-500">A</span>
        <span className="text-red-500">L</span>
      </div>
      <div className="relative w-full text-center max-w-xl">
        ...Every place has a story...
      </div>
      <div className="mt-8 space-x-4">
        <button className="px-4 py-2 bg-blue-400 font-bold text-gray-800 rounded hover:bg-gray-300">
          Get Started
           </button>
        <button className="px-4 py-2 bg-blue-400 font-bold text-gray-800 rounded hover:bg-gray-300">
          Login 
        </button>
      </div>
    </div>
  )
}