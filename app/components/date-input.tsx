'use client'

import {ChangeEvent, useState} from 'react';
// @ts-ignore
import { experimental_useFormState as useFormState, experimental_useFormStatus as useFormStatus, Text } from 'react-dom'
import { fetchMan } from '@/app/actions/area-man';
import LoadingSnake from "@/app/components/loading-snake";
import Modal from '@/app/components/modal';
import ModalClose from "@/app/components/modal-close";
import {clsx} from "clsx";

const initialFormState = {
    title: null,
    response: null,
    date: null,
};

const SubmitButton = () => {
    const {pending} = useFormStatus();
    
    return (
        <button className={clsx('rounded-md text-xl font-extrabold p-2 m-2 bg-white text-black leading-none', pending ?? 'disabled cursor-not-allowed')} type='submit' aria-disabled={pending}>&raquo;</button>
    )
};

/**
 * Note: Not currently implementing a defaultValue for the selector since this is an SPA, but if a link is shared
 *  it would need to be added.
 */
export default function DateInput() {
    const [amFormState, formAction] = useFormState(fetchMan, initialFormState);
    const [isModalOpen, setModalOpen] = useState(false);

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
        id: 'dateMonth',
        onChange: (_e: ChangeEvent) => setDay((_e.target as HTMLSelectElement).value),
        name: 'dateDay',
        placeholder: 'Choose Day',
        required: true,
        value: day,
    };
    
    const modalContentLoading = <div className={'flex flex-col h-1/2 w-full gap-2 justify-center align-middle'}><span>Loading!</span><LoadingSnake /></div>;

    // Ew. Need a better way of checking for a loading state.    
    const modalContent = amFormState?.date !== `${month}${day}` ? modalContentLoading : <><h1>{amFormState?.title}</h1><p className={'text-left whitespace-pre-wrap'}>{amFormState?.response}</p></>;
    
    return (
        <form action={formAction} onSubmit={() => { setModalOpen(true); }}>
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
