'use client'

import React, {FormEvent, useState} from "react";

/**
 * Note: Not currently implementing a defaultValue for the selector since this is an SPA, but if a link is shared
 *  it would need to be added.
 */
export default function DateInput() {
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
        onChange: (_e: React.ChangeEvent) => setMonth((_e.target as HTMLSelectElement).value),
        name: 'dateMonth',
        placeholder: 'Choose Month',
        required: true,
        value: month,
    };

    const selectDayOptions = {
        className: 'rounded-md p-2 m-2',
        id: 'dateMonth',
        onChange: (_e: React.ChangeEvent) => setDay((_e.target as HTMLSelectElement).value),
        name: 'dateDay',
        placeholder: 'Choose Day',
        required: true,
        value: day,
    };
    
    return (
        <form>
            <select {...selectMonthOptions}>{monthOptions}</select>
            <select {...selectDayOptions}>{dayOptions}</select>
            <button className={'rounded-md p-2 m-2 bg-white text-black leading-none'}>&gt;</button>
        </form>
    )
}