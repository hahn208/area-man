import { OpenAIStream, StreamingTextResponse } from "ai";
import { OpenAI } from 'openai';
import { dateReplace } from "./misc";

export const constructStream = async (dateMonth: string, dateDay: string) => {
    // Create an OpenAI API client. Config defaults to process.env.OPENAI_API_KEY.
    const openai = new OpenAI();

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

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
};