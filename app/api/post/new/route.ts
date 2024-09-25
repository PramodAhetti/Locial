import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; 
const prisma=new PrismaClient();


export async function POST(request:NextRequest){
  const body=await request.json();
  console.log("body",body)
  const post =await prisma.post.create({data : {
    authorId:body.autherId,
    content:body.message,
    latitude:body.location?.coords.latitude,
    longitude:body.location?.coords.longitude,
    time:new Date().toString()
  }});
  return Response.json(post) 
}