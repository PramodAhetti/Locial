"use client"
import React, { useEffect, useState } from 'react';
import { Edit3, Trash2 } from 'lucide-react'; // Import specific icons from lucide-react
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
export default function Near() {
  const user = useSession();
  const router = useRouter();
  // if (user.status == 'unauthenticated') {
  //   router.push('/');
  // }

  const [post, setpost] = useState([]);
  console.log("user", user)
  useEffect(() => {
    const getUserId = async () => {
      if (user.status == 'authenticated') {
        const adduser = await axios.post('./api/users/new', { email: user.data?.user?.email })
        console.log(adduser)
      }
    }
    const getposts = async () => {
      console.log('location',location)
      const response = await fetch('./api/post');
      const data = await response.json();
      console.log(data)
      setpost(data)
    }
    getUserId();
    getposts();
  }, [user.status])
  return (

    <div className='col-start-1 overflow-x-auto text-wrap col-end-13 row-start-2 row-end-12 flex flex-col m-3 text-black rounded-md'>

      {post.map((data: any) => {
        return (
          <div key={data.id} className='border shadow-black shadow-lg w-fit border-black flex flex-col bg-lime-200 m-2 rounded-md'>
            <div className='flex justify-between m-2 items-center'>
              <p className='text-sm'>{data.content}</p>
              
            </div>
            <div className='flex justify-between mt-1'>
              <h1 className='text-xs pl-1 pr-1 text-zinc-500'>{data.time.slice(0, 15)}</h1>
              <Trash2 className='text-sm p-1 text-red-600 cursor-pointer' />
             </div>
          </div>
        );
      })}
    </div>
  );
}
