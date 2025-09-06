'use client';

import React from "react";

export default function ThemeToggle()
{
    const setScheme = (shade: string) => {
        document.body.setAttribute(`data-color-scheme`, '');
        // A quick timeout is required to re-initiate the animation-- otherwise it only works once.
        global.setTimeout(() => { document.body.setAttribute(`data-color-scheme`, shade); }, 1);
    };

    /**
     * globals.css dictates the show/hide of these buttons.
     */
    return (
        <menu id={'theme-toggle'}>
            <li><button className={'theme-toggle--light'} data-testid={'theme-toggle--light'} onClick={() => { setScheme('light'); }} aria-label={'Enable light theme'}>🌙</button></li>
            <li><button className={'theme-toggle--dark'} data-testid={'theme-toggle--dark'} onClick={() => { setScheme('dark'); }} aria-label={'Enable dark theme'}>☀️</button></li>
        </menu>
    );
}