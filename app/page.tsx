import Alert from "@/app/components/alert";
import DateInput from "@/app/components/date-input";
import ModalAbout from "@/app/components/modal-about";
import ModalTerms from "@/app/components/modal-terms";

export default async function Page(props = { searchParams: { modal: '' }}) {
    const {searchParams} = Object.assign(
        {
            searchParams: { modal: '' }
        },
        props
    );
    
    return (
        <>
            <main className="flex flex-col items-center text-center pb-40">
                <h1 data-testid={'page-heading'}>Area Man</h1>
                { !process.env.OPENAI_PROMPT &&
                    <Alert>OPENAI_PROMPT not set in .env</Alert>
                }
                { !process.env.OPENAI_API_KEY &&
                    <Alert>OPENAI_API_KEY not set in .env</Alert>
                }
                <h2>Enter your birthday and prepare to be <br/><strong className={'tracking-widest uppercase'}>baffled</strong></h2>
                <section className={'p-4'}>
                    <DateInput></DateInput>
                </section>
            </main>
            {/* Modal-based page content is loaded via URL param instead of with state or useRouter to avoid client rendering. */}
            {/* TODO: make use of portals */}
            {!!searchParams && searchParams.modal === 'modal-about' && <ModalAbout></ModalAbout>}
            {!!searchParams && searchParams.modal === 'modal-terms' && <ModalTerms></ModalTerms>}
        </>
    );
}