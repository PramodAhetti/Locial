// app/api/protected/route.js

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; 
import { getServerSession } from "next-auth/next"; // Make sure to import from the correct path
import { authOptions } from "@/lib/authoptions";
import { RailSymbol } from "lucide-react";
import { Session } from "@auth0/nextjs-auth0";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try{
  const session = await getServerSession(authOptions); // Get the session
  if(session){
  const body=await req.json();
  const radius=1; 
  const latitude=body.location?.coords.latitude
  const longitude=body.location?.coords.longitude
  console.log('Session:', session);

  const posts = await prisma.post.findMany({
    where:{
      latitude:{
        gte:latitude-radius,
        lte:latitude+radius
      },
      longitude:{
        gte:longitude-radius,
        lte:longitude+radius
      }
    },
    include:{
      author:{
        select:{
          email:true
        }
      }
    }
  }); // Fetch posts from the database
  return NextResponse.json({data:posts}); // Return the posts as JSON
}else{
  throw "Unauthorized"
}
}catch(e){
  return NextResponse.json({error:e},{status:401});
}
}
