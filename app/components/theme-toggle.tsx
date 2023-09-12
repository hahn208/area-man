'use client'

import React from "react";

export default function ThemeToggle()
{
    // TODO: Set state to have aria-pressed applied to the buttons.
    
    const setScheme = (shade: string) => {
        document.body.setAttribute(`data-color-scheme`, '');
        global.setTimeout(() => { document.body.setAttribute(`data-color-scheme`, shade); }, 1);
    };

    /**
     * globals.css dictates the show/hide of these buttons.
     */
    return (
        <menu id={'theme-toggle'}>
            <li><button className={'theme-toggle--light'} onClick={() => { setScheme('light'); }} aria-label={'Enable light theme'}>🌙</button></li>
            <li><button className={'theme-toggle--dark'} onClick={() => { setScheme('dark'); }} aria-label={'Enable dark theme'}>☀️</button></li>
        </menu>
    );
}