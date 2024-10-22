"use client"
import React, { useEffect, useState } from 'react';
import { Edit3, Trash2 } from 'lucide-react'; // Import specific icons from lucide-react
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import axios from 'axios';
import { Router } from 'next/router';
interface post{
    id:KeyType,        
    content:String,
    authorId:Number,  
    latitude:Number,
    longitude:Number,
    time:String,
    author:{
      email:String;
    }
}
export default function Near() {
  const user = useSession();
  const router = useRouter();

  const [post, setpost] = useState<post[]>([]);

  useEffect(() => {
    const getUserId = async () => {
      if (user.status === 'authenticated') {
        try {
          const adduser = await axios.get('./api/users/new');
          console.log(adduser);
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      }else{
        alert('Login first')
        router.push('/')
      }
    };

    const getposts = async () => {
      const location = {
        coords: {
          latitude: 18,
          longitude: 73,
        },
      };
      
      try {
        const response = await axios.post('./api/post/all', { location });
        console.log('posts', response);
        setpost(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getUserId();
    getposts();
  }, [user.status]);

  return (
    <div className='col-start-1 overflow-x-auto text-wrap col-end-13 row-start-2 row-end-12 flex flex-col m-3 text-black rounded-md'>
      {post.map((data) => (
        <div key={data.id} className='text-xs w-fit flex flex-col bg-white m-2 rounded-md'>
          <span className='bg-lime-200 p-1 font-bold w-fit rounded-lg border border-black m-1'> {data.author.email.split('@')[0]}</span> 
          <div className='flex justify-between p-1 items-center'>
            <p className='text-sm'>{data.content}</p>
          </div>
          <div className='flex justify-between'>
            <h1 className='text-xs p-2 text-zinc-500'>{data.time.slice(4, 15)}</h1>
            <Trash2 className='text-base pt-2 text-red-600 cursor-pointer' />
          </div>
        </div>
      ))}
    </div>
  );
}
