import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Handle GET request
  return NextResponse.json({ message: 'GET request to /api/users' })
}

export async function POST(request: NextRequest) {
  // Handle POST request
  return NextResponse.json({ message: 'POST request to /api/users' })
}