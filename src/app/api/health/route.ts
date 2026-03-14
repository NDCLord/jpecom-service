import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    service: 'jpecom-service',
    version: '0.1.0',
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
}
