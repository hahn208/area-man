import { OpenAIStream, StreamingTextResponse } from "ai";
import { OpenAI } from 'openai';
import { dateReplace } from "./misc";

export const constructStream = async (dateMonth: string, dateDay: string) => {
    // Create an OpenAI API client. Config defaults to process.env.OPENAI_API_KEY.
    const openai = new OpenAI();
    
    let message = [
        {
            content: 'You are a journalist tasked with reporting jaw-dropping stories.',
            role: 'system',
        }
    ];
    
    if(!!process.env.OPENAI_PROMPT_WARM) {
        message.push(
            {
                role: 'user',
                content: dateReplace(process.env.OPENAI_PROMPT_WARM || '', dateMonth, dateDay)
            },
            {
                role: 'assistant',
                content: dateReplace('Florida Man Caught Pooping On a Dead Possum ‘In Full View of the Motoring Public’\n\n' +
                    'CLEARWATER, FLORIDA - An area man has been arrested after he was seen defecating on a dead possum by police officers out in the open where any other motorists could see him.\n\n' +
                    'At about 5:30 p.m. on [DATE], officers with the Clearwater Police Department witnessed Rudy Wilcox, 45, relieve himself on a dead possum in a public area.\n\n' +
                    'According to the arrest affidavit, police saw Wilcox’s “pants lowered and his anal region exposed.” The disturbing sight was not just seen by the officers, though, as police said that Wilcox “was in full view of the motoring public during busy traffic hours.”', dateMonth, dateDay)
            }
        );
    }
    
    message.push(
        {
            role: 'user',
            content: dateReplace(process.env.OPENAI_PROMPT || '', dateMonth, dateDay) || "Please say 'Hello World' in 5 different languages.",
        }
    );

    // Ask OpenAI for a streaming completion given the prompt
    const response = await openai.chat.completions.create(
        {
            // @ts-ignore
            messages: message,
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