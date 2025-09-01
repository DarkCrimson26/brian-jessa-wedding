import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Test API working!',
    timestamp: new Date().toISOString(),
    env: {
      hasResendKey: !!process.env.RESEND_API_KEY,
      coupleEmail: process.env.COUPLE_EMAIL,
      fromEmail: process.env.FROM_EMAIL
    }
  })
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    return NextResponse.json({ 
      message: 'Test POST successful!',
      receivedData: data,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Test POST failed', details: String(error) },
      { status: 500 }
    )
  }
}