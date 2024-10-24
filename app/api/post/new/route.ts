import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; 
import { error } from "console";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authoptions";
const prisma=new PrismaClient();
export const dynamic = 'force-dynamic';

export async function POST(request:NextRequest){
  try{
  const session=await getServerSession(authOptions);
  if(session){
      const body=await request.json();
      console.log("body",body)
      const post =await prisma.post.create({data : {
        authorId:body.authorId,
        content:body.message,
        latitude:body.location?.coords.latitude,
        longitude:body.location?.coords.longitude,
        time:new Date().toString()
      }});
      return Response.json({message:"Post is saved"});
  }else{
      throw "Unauthorized";
  }
 
}catch(e){
  return NextResponse.json({error:e},{status:500});
}
}