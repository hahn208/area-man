import {NextRequest} from "next/server";
import {constructStream} from '@/app/_utils/streaming';

// Set the runtime to edge for best performance and longer timeout with Vercel.
export const runtime = 'edge';

/* On form post, the route will be intercepted for /area-man */
export async function POST(request: NextRequest) {
    const { dateMonth, dateDay } = (await request.json());

    // Respond with the stream
    return constructStream(dateMonth, dateDay);
}