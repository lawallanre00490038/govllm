import axios from 'axios';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  if (!token) {
    return new Response(
      JSON.stringify({ success: false, message: 'Token is missing' }),
      { status: 400 },
    );
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      },
    );

    if (data.success) {
      return new Response(
        JSON.stringify({ success: true, message: 'reCAPTCHA verified' }),
        { status: 200 },
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Failed to verify reCAPTCHA',
        }),
        { status: 400 },
      );
    }
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Internal Server Error' }),
      { status: 500 },
    );
  }
}
