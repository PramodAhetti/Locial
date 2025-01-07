"use client"
import React from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'
export default function LoginButton() {
  return (
    <button onClick={()=>{signIn()}} className="mb-2 text-sm w-full row-start-11 col-start-3 col-end-11 bg-white text-black rounded-full font-semibold border border-black hover:bg-gray-500">
    Get Started 
  </button>
  )
}
