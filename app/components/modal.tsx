import { ReactNode } from 'react';

export default function Modal({ children }: { children: ReactNode }) {
    return (
        /* The modal will be half the screen height. By default, there is a drop shadow, on dark mode an inner shadow. */
        <dialog open={true} className={'modal fixed overflow-auto top-14 w-5/6 h-5/6 lg:top-1/4 lg:h-1/2 lg:w-1/2 rounded-lg shadow-lg dark:shadow-inner'}>
            <div className={'relative'}>
                <div className={'pl-4'}>
                    {children}
                </div>
            </div>
        </dialog>
    );
}
