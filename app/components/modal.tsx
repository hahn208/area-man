import {ReactNode} from 'react';

export default function Modal({children}: {children: ReactNode})
{
    return(
        /* The modal will be half the screen height. By default, there is a drop shadow, on dark mode an inner shadow. */
        <dialog open={true} className={'modal fixed overflow-auto top-1/4 w-5/6 lg:w-1/2 h-1/2 rounded-lg shadow-lg dark:shadow-inner'}>
            <div className={'relative'}>
                <div className={'pl-4'}>
                    {children}
                </div>
            </div>
        </dialog>
    );
}

// ::backdrop
// @container vs @media
