import { NextRequest, NextResponse } from 'next/server'

// RSVP form data interface
interface RSVPData {
  name: string
  contactNumber: string
  email: string
  attending: 'yes' | 'no'
  numberOfGuests: string
  message?: string
}

export async function GET() {
  return NextResponse.json({ message: 'RSVP API is working', timestamp: new Date().toISOString() })
}

export async function POST(request: NextRequest) {
  console.log('🔥 RSVP API POST called!')
  
  try {
    console.log('📊 Environment check:')
    console.log('- COUPLE_EMAIL:', process.env.COUPLE_EMAIL)
    
    console.log('📨 Parsing request body...')
    const data: RSVPData = await request.json()
    console.log('📝 Form data received:', data)

    // Validate required fields
    if (!data.name || !data.contactNumber || !data.email || !data.attending) {
      console.log('❌ Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('📧 Sending email notification to couple...')
    // Send email notification to couple
    try {
      await sendEmailNotification(data)
      console.log('✅ Email notification sent!')
    } catch (error) {
      console.error('❌ Failed to send notification email:', error)
    }
    
    console.log('📧 Sending confirmation email to guest...')
    // Send confirmation email to guest
    try {
      await sendConfirmationEmail(data)
      console.log('✅ Confirmation email sent!')
    } catch (error) {
      console.error('❌ Failed to send confirmation email:', error)
      throw error
    }

    return NextResponse.json(
      { message: 'RSVP submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('🚨 RSVP submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit RSVP', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

// Send email notification to the couple using EmailJS
async function sendEmailNotification(data: RSVPData) {
  console.log('📧 Preparing notification email...')
  const attendingText = data.attending === 'yes' ? 'YES ✅' : 'NO ❌'
  
  console.log('📧 Sending to:', process.env.COUPLE_EMAIL)
  
  // For now, we'll log the email content since we need to set up EmailJS
  const emailContent = `
    New RSVP from ${data.name}
    
    Guest Details:
    - Name: ${data.name}
    - Email: ${data.email}
    - Contact: ${data.contactNumber}
    - Attending: ${attendingText}
    - Number of Guests: ${data.numberOfGuests}
    ${data.message ? `- Message: ${data.message}` : ''}
    
    This RSVP was submitted through your wedding website.
  `
  
  console.log('📧 Email content to send:', emailContent)
  console.log('📧 Would send to:', process.env.COUPLE_EMAIL)
  
  // TODO: Implement EmailJS or other email service
  // For now, we'll simulate success
  return Promise.resolve()
}

// Send confirmation email to the guest using EmailJS
async function sendConfirmationEmail(data: RSVPData) {
  console.log('📧 Preparing confirmation email for guest:', data.email)
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    console.error('❌ Invalid email format:', data.email)
    throw new Error(`Invalid email format: ${data.email}`)
  }
  
  const attendingMessage = data.attending === 'yes' 
    ? "Thank you for confirming your attendance! We can't wait to celebrate with you! 💕"
    : "Thank you for letting us know. We understand and appreciate your response. ❤️"

  console.log('📧 Email content to send to guest:', attendingMessage)
  console.log('📧 Would send to:', data.email)
  
  // TODO: Implement EmailJS or other email service
  // For now, we'll simulate success
  return Promise.resolve()
}