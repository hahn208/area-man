'use client'

import { ChangeEvent, useState } from 'react';
// @ts-ignore
import { experimental_useFormState as useFormState, experimental_useFormStatus as useFormStatus } from 'react-dom'
import { fetchMan } from '@/app/actions/area-man';
import Modal from '@/app/components/modal';
import ModalClose from "@/app/components/modal-close";

const initialFormState = {
    title: null,
    response: null,
};

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button className={'rounded-md p-2 m-2 bg-white text-black leading-none'} type='submit' aria-disabled={pending}>&gt;</button>
    )
};

/**
 * Note: Not currently implementing a defaultValue for the selector since this is an SPA, but if a link is shared
 *  it would need to be added.
 */
export default function DateInput() {
    const [amFormState, formAction] = useFormState(fetchMan, initialFormState);
    const [isModalOpen, setModalOpen] = useState(true);

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
    
    return (
        <form action={formAction}>
            {/* TODO: this doesn't re-open */}
            {isModalOpen && amFormState?.title &&
                <Modal>
                    <a onClick={() => { return setModalOpen(false); }}><ModalClose /></a>
                    <h1>{amFormState?.title}</h1>
                    <p>{amFormState?.response}</p>
                </Modal>
            }
            <select {...selectMonthOptions}>{monthOptions}</select>
            <select {...selectDayOptions}>{dayOptions}</select>
            <SubmitButton></SubmitButton>
        </form>
    )
};
