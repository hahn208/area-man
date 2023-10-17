'use client'

import {ChangeEvent, FormEvent, FormEventHandler} from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";
import OpenAI from 'openai';

import LoadingSnake from "@/app/components/loading-snake";
import Modal from '@/app/components/modal';
import ModalClose from "@/app/components/modal-close";


const SubmitButton = () => {
    return (
        <button className={'rounded-md text-xl font-extrabold p-2 m-2 bg-white text-black leading-none'} type='submit'>&raquo;</button>
    )
};

/**
 * Note: Not currently implementing a defaultValue for the selector since this is an SPA, but if a link is shared
 *  it would need to be added.
 */
export default async function DateInput() {
    //const [isModalOpen, setModalOpen] = useState(false);
    const openai = new OpenAI();
    const router = useRouter();

    /*const [month, setMonth] = useState(''),
        [day, setDay] = useState('');
*/
    const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Convert a number into a zero-prefixed string. eg 1 => '01'.
    const leadingZero = (n: number) => (`0${n}`).slice(-2);
    
    // Generate a collection of options for the select.
    const monthOptions = monthList.map((name, k) => { return <option key={name} value={name}>{leadingZero(++k)} - {name}</option> });
    
    // Populate an array of options for the 1-31 selection.
    const dayOptions = [...Array(31).keys()].map((_n) => { return <option key={_n} value={++_n}>{leadingZero(_n)}</option> });
    
    const selectMonthOptions = {
        className: 'rounded-md p-2 m-2',
        id: 'dateMonth',
        /*onChange: (_e: ChangeEvent) => setMonth((_e.target as HTMLSelectElement).value),*/
        name: 'dateMonth',
        placeholder: 'Choose Month',
        required: true,
    };

    const selectDayOptions = {
        className: 'rounded-md p-2 m-2',
        id: 'dateDay',
        /*onChange: (_e: ChangeEvent) => setDay((_e.target as HTMLSelectElement).value),*/
        name: 'dateDay',
        placeholder: 'Choose Day',
        required: true,
    };

    const searchParams = useSearchParams()
    
    const formHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const formData = new FormData(event.target as HTMLFormElement);
        
        //setModalOpen(true);
        void router.push(`/?${new URLSearchParams([...formData.entries()] as string[][]).toString()}`);
    };
    
    const modalContentLoading = <div className={'flex flex-col h-1/2 w-full gap-2 justify-center align-middle'}><span>Loading!</span><LoadingSnake /><br /><small>(ChatGPT takes ~30 seconds)</small></div>;
    
    const modalContent = (!searchParams.get('dateMonth')) ? modalContentLoading : <><h1>{'f'}</h1><p className={'text-left whitespace-pre-wrap'}>{'f'}</p></>;

/*    const stream = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: "Please say 'Hello World' in 5 different languages." }],
        stream: true,
    });
    for await (const part of stream) {
        process.stdout.write(part.choices[0]?.delta?.content || '');
    }*/
    
    return (
        <form onSubmit={formHandler}>
            {!!searchParams.get('dateMonth') &&
                <Modal>
                    <Link href={'/'} className={'modal-close'}><ModalClose/></Link>
                    {modalContent}
                </Modal>
            }
            <select {...selectMonthOptions}>
                <option value="">&lt;Month&gt;</option>
                {monthOptions}
            </select>
            <select {...selectDayOptions}>
                <option value="">&lt;Day&gt;</option>
                {dayOptions}
            </select>
            <SubmitButton></SubmitButton>
        </form>
    )
};
