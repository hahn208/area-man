'use client'

import { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import LoadingSnake from "@/app/components/loading-snake";
import Modal from '@/app/components/modal';
import ModalClose from "@/app/components/modal-close";

/**
 * Note: Not currently implementing a defaultValue for the selector since this is an SPA, but if a link is shared
 *  it would need to be added.
 */
export default function DateInput() {
    const router = useRouter();
    
    // Use state to collect streamed content
    const [streamedContent, setStreamedContent] = useState<String>("");

    // Maintain input state via URL parameters.
    const searchParams = useSearchParams(),
        { dateMonth, dateDay } = Object.fromEntries(searchParams);

    // Convert a number into a zero-prefixed string. eg 1 => '01'.
    const leadingZero = (n: number) => (`0${n}`).slice(-2);
    
    // Build the list of options for the form inputs.
    const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Generate a collection of month options for the select.
    const monthOptions = monthList.map((name, k) => { return <option key={name} value={name}>{leadingZero(++k)} - {name}</option> });
    
    // Populate an array of options for the 1-31 selection.
    const dayOptions = [...Array(31).keys()].map((_n) => { return <option key={_n} value={++_n}>{leadingZero(_n)}</option> });
    
    const selectMonthOptions = {
        className: 'rounded-md p-2 m-2',
        id: 'dateMonth',
        name: 'dateMonth',
        placeholder: 'Choose Month',
        required: true,
        defaultValue: dateMonth,
    };

    const selectDayOptions = {
        className: 'rounded-md p-2 m-2',
        id: 'dateDay',
        name: 'dateDay',
        placeholder: 'Choose Day',
        required: true,
        defaultValue: dateDay,
    };
    
    const formHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStreamedContent("");
        
        // Build form data to generate URL params
        const formData = new FormData(event.target as HTMLFormElement);
        
        // Push the form inputs to the URL.
        void router.push(`/?${new URLSearchParams(formData as any)}`);
        
        // Request streaming response.
        const response = await fetch(
            "/area-man",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dateMonth: formData.get('dateMonth'), dateDay: formData.get('dateDay') }),
            }
        );

        if(!response.ok) throw new Error(response.statusText);

        // This data is a ReadableStream
        const data = response.body;
        if (!data) {
            return;
        }

        const reader = data.getReader();
        const decoder = new TextDecoder();
        let streamDone = false;

        while (!streamDone) {
            const { value, done: doneReading } = await reader.read();
            streamDone = doneReading;
            const chunkValue = decoder.decode(value);
            setStreamedContent((prev) => prev + chunkValue);
        }

        // Reset the form behind the modal.
        (event.target as HTMLFormElement).reset();
    };
    
    const modalContentLoading = <div className={'flex flex-col h-1/2 w-full gap-2 justify-center align-middle'}><span>Loading!</span><LoadingSnake /><br /></div>,
        modalContent = (!dateMonth) ? modalContentLoading : <><h1><span className={'first-letter:text-3xl'}>Area Man</span> on {dateMonth} {dateDay}--</h1><p className={'text-left whitespace-pre-wrap'}>{streamedContent}</p></>;
    
    return (
        <form onSubmit={formHandler}>
            {!!dateMonth &&
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
            <button className={'rounded-md text-xl font-extrabold p-2 m-2 bg-white text-black leading-none'} type='submit'>&raquo;</button>
        </form>
    )
};
