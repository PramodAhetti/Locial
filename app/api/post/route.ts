import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; 
const prisma=new PrismaClient();


export async function GET(){
  const post =await prisma.post.findMany();
  return Response.json(post) 
}