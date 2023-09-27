'use server'

//import { revalidatePath } from 'next/cache'

export async function fetchMan (prevState: any, formData: FormData)
{
    'use server'

    //revalidatePath('/');

    return {
        title: `On ${formData.get('dateMonth')} ${formData.get('dateDay')} area man be like--`,
        response: 'Zap',
    }
}
