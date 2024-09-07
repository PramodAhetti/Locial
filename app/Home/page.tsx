import React from 'react';
import { PrismaClient } from '@prisma/client';
import { Edit3, Trash2 } from 'lucide-react'; // Import specific icons from lucide-react

const prisma = new PrismaClient();

export default async function Home() {
  const posts = await prisma.post.findMany();
  console.log(posts);
  
  return (
    <div className='flex flex-col w-full text-black bg-orange-200 h-screen'> 
        {posts.map((data) => {
          return (
            <div key={data.id} className='border border-black flex flex-col bg-orange-300 p-3 m-3 rounded-lg'>
              <div className='flex justify-between items-center'>
                <h6 className='font-bold flex items-center'>
                  <Edit3 className='mr-2 text-blue-600' /> {/* Edit icon */}
                  {data.title}
                </h6>
                <Trash2 className='text-red-600 cursor-pointer' /> {/* Trash icon */}
              </div>
              <h4>{data.content}</h4>
            </div>
          );
        })}
    </div>
  );
}
