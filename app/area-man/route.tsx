import { dateReplace } from "@/app/_utils/misc";
import { NextRequest } from "next/server";
import { OpenAI } from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client. Config defaults to process.env.OPENAI_API_KEY.
const openai = new OpenAI();

// Set the runtime to edge for best performance and longer timeout with Vercel.
export const runtime = 'edge';

export async function POST(request: NextRequest) {
    const { dateMonth, dateDay } = (await request.json());
    
    // Ask OpenAI for a streaming completion given the prompt
    const response = await openai.chat.completions.create(
        {
            messages: [
                {
                    role: 'user',
                    content: dateReplace(process.env.OPENAI_PROMPT || '', dateMonth, dateDay) || "Please say 'Hello World' in 5 different languages.",
                },
            ],
            model: 'gpt-3.5-turbo',
            stream: true,
            /* Set a temperate range of 0.75 - 1.25 for varied levels of responses-- random seed truncated to two decimals */
            temperature: 0.75 + (50*Math.random()|0)/100
        }
    );
    
    console.log(response);

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
}