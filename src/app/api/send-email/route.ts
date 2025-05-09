// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    console.log('Request received') // Add this for debugging

    try {
        const body = await request.json()
        console.log('Request body:', body) // Log the incoming data

        const { email, message } = body

        // Validate input
        // if (!name || !email || !message) {
        //     console.log('Validation failed - missing fields')
        //     return NextResponse.json(
        //         { error: 'Missing required fields' },
        //         { status: 400 }
        //     )
        // }

        // Configure nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        })

        // Send email
        await transporter.sendMail({
            from: `"Career Form" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Application Received',
            text: message,
            html: `
        <p><strong>${message}</strong> </p>
      `
        })

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}