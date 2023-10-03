import {ReactNode} from "react";

export default function Alert ({children}: {children: ReactNode}) {
    return(
        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-2" role="alert">
            <p className="font-bold p-0 leading-none">{children}</p>
        </div>
    )
}