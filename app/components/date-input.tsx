'use client'

import {ChangeEvent, FormEvent, FormEventHandler, useState} from 'react';
import {useParams, useRouter} from "next/navigation";


import LoadingSnake from "@/app/components/loading-snake";
import Modal from '@/app/components/modal';
import ModalClose from "@/app/components/modal-close";

const initialFormState = {
    title: null,
    response: null,
    date: null,
};

const SubmitButton = () => {
    return (
        <button className={'rounded-md text-xl font-extrabold p-2 m-2 bg-white text-black leading-none'} type='submit'>&raquo;</button>
    )
};

/**
 * Note: Not currently implementing a defaultValue for the selector since this is an SPA, but if a link is shared
 *  it would need to be added.
 */
export default function DateInput() {
    const [isModalOpen, setModalOpen] = useState(false);

    const router = useRouter();
    const params = useParams();
    
    const [month, setMonth] = useState(''),
        [day, setDay] = useState('');

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
        onChange: (_e: ChangeEvent) => setMonth((_e.target as HTMLSelectElement).value),
        name: 'dateMonth',
        placeholder: 'Choose Month',
        required: true,
        value: month,
    };

    const selectDayOptions = {
        className: 'rounded-md p-2 m-2',
        id: 'dateDay',
        onChange: (_e: ChangeEvent) => setDay((_e.target as HTMLSelectElement).value),
        name: 'dateDay',
        placeholder: 'Choose Day',
        required: true,
        value: day,
    };
    
    const formHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const formData = new FormData(event.target as HTMLFormElement);
        
        setModalOpen(true);
        void router.push(`/?${new URLSearchParams([...formData.entries()] as string[][]).toString()}`);
    };
    
    console.log(params); // This isn't working.
    
    const modalContentLoading = <div className={'flex flex-col h-1/2 w-full gap-2 justify-center align-middle'}><span>Loading!</span><LoadingSnake /><br /><small>(ChatGPT takes ~30 seconds)</small></div>;
    
    const modalContent = null !== `${month}${day}` ? modalContentLoading : <><h1>{'f'}</h1><p className={'text-left whitespace-pre-wrap'}>{'f'}</p></>;
    
    return (
        <form onSubmit={formHandler}>
            {isModalOpen &&
                <Modal>
                    <a className={'modal-close'} onClick={() => { return setModalOpen(false); }}><ModalClose /></a>
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
