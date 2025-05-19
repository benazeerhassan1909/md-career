import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { token } = body;

        if (!token) {
            return NextResponse.json(
                { success: false, message: 'reCAPTCHA token is missing' },
                { status: 400 }
            );
        }

        // Verify the token with Google's reCAPTCHA API
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        });

        const data = await response.json();

        if (data.success) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json(
                { success: false, message: 'reCAPTCHA verification failed' },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
} 