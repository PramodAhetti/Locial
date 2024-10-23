"use client"
import Link from "next/link";
import { Alert } from "@mui/material";
import { MapPin, Plus, Home, SendHorizonal, Edit3, Trash2 } from 'lucide-react';
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function HomeAndNearLayout(){
  type Location = {
    coords: {
      latitude: number,
      longitude: number
    }
  };

  const user = useSession();
  const router = useRouter();
  const postRef = useRef<HTMLInputElement>(null);
  const [location, setLocation] = useState<Location>({
    coords: {
      latitude: 0,
      longitude: 0
    }
  });
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    }

    function showPosition(position: Location) {
      setLocation(position);
    }

    getLocation();
  }, []);

  const submitPost = async () => {
    const message = postRef.current?.value;
    console.log('message :', message);

    try {
      const authorIdResponse = await axios.get('/api/users/new');
      const authorId = authorIdResponse.data?.data?.id;

      const result = await axios.post('/api/post/new', { authorId, message, location });
      if (postRef.current) {
        postRef.current.value = '';
      }
      console.log('Post submitted successfully:', result.data);
    } catch (error) {
      alert(error);
      console.error('Error submitting post:', error);
    }
  };

  useEffect(() => {
    const fetchUserAndPosts = async () => {
      if (user.status === 'authenticated') {
        try {
          await axios.get('./api/users/new');
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      } else {
        alert('Login first');
        router.push('/');
      }

      const location = {
        coords: {
          latitude: 18,
          longitude: 73,
        },
      };

      try {
        const response = await axios.post('./api/post/all', { location });
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchUserAndPosts();
  }, [user.status,router]);

  return (
    <div className='h-screen w-full grid grid-cols-12 bg-zinc-800 grid-rows-12'>
      <header className="row-start-1 row-end-2 col-start-1 col-end-13 m-4 flex justify-between items-center space-x-2">
        <Link href='/'><Home className="w-8 h-8 text-white" /></Link>
      </header>


      <div className="flex row-start-12 row-end-13 col-start-1 m-3 col-end-13 justify-between items-center">
        <input 
          placeholder="Enter a post" 
          ref={postRef} 
          className="p-2 w-5/6 bg-white border text-black border-black rounded-md"
        />
        <SendHorizonal onClick={submitPost} className="text-white w-8 h-8" />
      </div>

      <div className='col-start-1 overflow-x-auto text-wrap col-end-13 row-start-2 row-end-12 flex flex-col m-3 text-black rounded-md'>
        {posts.map((data) => (
          <div key={data.id} className='text-xs w-fit flex flex-col bg-white m-2 rounded-md'>
            <span className='bg-lime-200 p-1 font-bold w-fit rounded-lg border border-black m-1'> 
              {data.author.email.split('@')[0]}
            </span>
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
    </div>
  );
}
