import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authoptions';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (session?.user?.email) {
      const email: string = session.user.email;

      console.log("Email:", email);

      let user = await prisma.user.findUnique({
        where: {
          email: email,
        }
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            email,
          },
        });
      }

      return NextResponse.json({ data: { id: user.id } });
    } else {
      return NextResponse.json({ error: 'Unauthorized: No email found.' }, { status: 401 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
