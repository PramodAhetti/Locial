// app/api/protected/route.js

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; 
import { getServerSession } from "next-auth/next"; // Make sure to import from the correct path
import { authOptions } from "../auth/[...nextauth]/route"; // Import your auth options

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions); // Get the session
  

  console.log('Session:', session);

  const posts = await prisma.post.findMany(); // Fetch posts from the database
  return NextResponse.json(posts); // Return the posts as JSON
}
