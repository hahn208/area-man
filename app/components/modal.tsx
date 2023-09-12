import Link from "next/link";
import {ReactNode} from "react";

export default function Modal({children}: {children: ReactNode})
{
    return(
        <dialog open={true} className={'w-5/6 lg:w-1/2 h-1/2 rounded-lg shadow-lg dark:shadow-inner'}>
            <div className="flex flex-row-reverse">
                <Link href={'/'} className={'py-2 px-4 modal-close no-underline flex-none'}>
                    <span className="sr-only">Close menu</span>
                    <span aria-hidden="true" className={'font-sans text-3xl leading-none text-gray-700'}>&times;</span>
                </Link>
                <div className={'modal-content flex-1 p-4'}>
                    {children}
                </div>
            </div>
        </dialog>
    );
}

// ::backdrop
// @container vs @media
