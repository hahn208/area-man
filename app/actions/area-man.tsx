'use server'

import {revalidatePath} from 'next/cache'
import OpenAI from 'openai';

const openai = new OpenAI();

export async function fetchMan (prevState: any, formData: FormData)
{
    'use server'

    // Bust cache.
    revalidatePath('/');
    
    /*const params: OpenAI.Chat.CompletionCreateParamsStreaming = {
        messages: [
            {
                role: 'user',
                content: process.env.OPENAI_PROMPT?.replace('[DATE]', `${formData.get('dateMonth')} ${formData.get('dateDay')}`) || "Please say 'Hello World' in 5 different languages."
            }
        ],
        model: 'gpt-3.5-turbo',
        stream: true,
    };
    */
    // TODO: Any error checking at all.
    
    //* Toggle comment area for development.
    //const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
    /*/
    // @ts-ignore
    const chatCompletion: OpenAI.Chat.ChatCompletion = { choices: [{ message: { role: 'user', content: 'done.\n\ndone.' } }] }
    //*/

    const stream = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: "Please say 'Hello World' in 5 different languages." }],
        stream: true,
    });
    for await (const part of stream) {
        process.stdout.write(part.choices[0]?.delta?.content || '');
    }

    return {
        title: `On ${formData.get('dateMonth')} ${formData.get('dateDay')} area man be like--`,
        //response: chatCompletion.choices[0].message.content,
        response: '',
        date: `${formData.get('dateMonth')}${formData.get('dateDay')}`
    }
}
