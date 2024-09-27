"use client"
import React, { useEffect, useState } from 'react';
import { Edit3, Trash2 } from 'lucide-react'; // Import specific icons from lucide-react
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
interface post{
    id:KeyType,        
    content:String,
    authorId:Number,  
    latitude:Number,
    longitude:Number,
    time:String
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
          console.log('user info', await axios.get('./api/users/1'));
          console.log(adduser);
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
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
        <div key={data.id} className='w-fit flex flex-col bg-lime-200 m-2 rounded-md'>
          <div className='flex justify-between m-2 items-center'>
            <p className='text-sm'>{data.content}</p>
          </div>
          <div className='flex justify-between mt-1'>
            <h1 className='text-xs pl-1 pr-1 text-zinc-500'>{data.time.slice(0, 15)}</h1>
            <Trash2 className='text-sm p-1 text-red-600 cursor-pointer' />
          </div>
        </div>
      ))}
    </div>
  );
}
