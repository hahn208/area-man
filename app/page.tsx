'use server'

import Alert from "@/app/components/alert";
import DateInput from "@/app/components/date-input";
import ModalAbout from "@/app/components/modal-about";

interface searchParams {
    [key: string]: string | string[] | undefined
}

export default async function Page({searchParams}: {searchParams: searchParams}) {
    return (
        <>
            <main className="flex flex-col items-center text-center pb-40">
                <h1>Area Man</h1>
                { !process.env.OPENAI_PROMPT &&
                    <Alert>OPENAI_PROMPT not set in .env</Alert>
                }
                { !process.env.OPENAI_API_KEY &&
                    <Alert>OPENAI_API_KEY not set in .env</Alert>
                }
                <h2>Enter your birthday and prepare to be <br/><strong className={'tracking-widest uppercase'}>amazed</strong></h2>
                <section className={'p-4'}>
                    <DateInput></DateInput>
                </section>
            </main>
            {/* Modal-based page content is loaded via URL param instead of with state or useRouter to avoid client rendering. */}
            {/* TODO: make use of portals */}
            {!!searchParams && searchParams.modal === 'modal-about' && <ModalAbout></ModalAbout>}
        </>
    );
}