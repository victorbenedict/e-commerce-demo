import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL!); // Fetch from your backend

    if (res.ok) {
      // Checks if the response status is 200-299
      return NextResponse.json({ message: 'API is up and running' });
    } else {
      return NextResponse.json({ message: 'API request failed' }, { status: res.status });
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: 'Error connecting to API', error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: 'Error connecting to API', error: 'Unknown error' },
        { status: 500 }
      );
    }
  }
}
