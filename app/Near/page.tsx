"use client"
import React, { useEffect,useState } from 'react';
import { Edit3, Trash2 } from 'lucide-react'; // Import specific icons from lucide-react
import { useSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Near() {
  const user=useSession();
  const router=useRouter(); 
  // if(user.status=='unauthenticated'){
  //   router.push('/');
  // }
  
  const [post,setpost]=useState([]);
  console.log("user",user)
  useEffect(()=>{
  const getposts=async ()=>{
      const response=await fetch('./api/post');
      const data=await response.json();
      setpost(data)
  }
  getposts();
  },[]) 
  return (
    <div className='col-start-1 col-end-9 row-start-2 row-end-8 flex flex-col m-3 text-black bg-zinc-600 rounded-xl'> 
        {post.map((data : any) => {
          return (
            <div key={data.id} className='border border-gray flex flex-col bg-zinc-300 p-3 m-4 rounded-lg'>
              <div className='flex justify-between items-center'>
                <h6 className='font-bold flex items-center'>
                  <Edit3 className='mr-2 text-blue-600' /> 
                  {data.title}
                </h6>
                <Trash2 className='text-red-600 cursor-pointer' /> 
              </div>
              <h4>{data.content}</h4>
            </div>
          );
        })}
    </div>
  );
}
