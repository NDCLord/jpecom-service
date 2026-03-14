import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'JP Service API is running' });
}
