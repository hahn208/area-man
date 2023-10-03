'use server'

//import { revalidatePath } from 'next/cache'
import OpenAI from 'openai';

const openai = new OpenAI();

export async function fetchMan (prevState: any, formData: FormData)
{
    'use server'
    
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
        messages: [
            {
                role: 'user',
                content: process.env.OPENAI_PROMPT || "Grüezi" // TODO: Check on build that the env variables are in place.
            }
        ],
        model: 'gpt-3.5-turbo',
    };
    
    // TODO: Any error checking at all.
    
    //* Toggle comment area for development.
    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
    /*/
    // @ts-ignore
    const chatCompletion: OpenAI.Chat.ChatCompletion = { choices: [{ message: { role: 'user', content: 'done.' } }] }
    //*/

    // TODO: Test caching
    //revalidatePath('/');

    return {
        title: `On ${formData.get('dateMonth')} ${formData.get('dateDay')} area man be like--`,
        response: chatCompletion.choices[0].message.content,
    }
}
