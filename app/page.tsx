import DateInput from "@/app/components/date-input";
import ModalAbout from "@/app/components/modal-about";

interface searchParams { [key: string]: string | string[] | undefined }

export default function Page({ searchParams }: { searchParams: searchParams })
{
    return (
        <>
            <main className="flex flex-col items-center text-center pb-40">
                <h1>Area Man</h1>
                <h2>Enter your birthday and prepare to be <br/><strong className={'tracking-widest uppercase'}>amazed</strong></h2>
                <section className={'p-4'}>
                    <DateInput></DateInput>
                </section>
            </main>
            {/* Modal based content is loaded via URL param instead of with state or useRouter to avoid client rendering. */}
            { !!searchParams && searchParams.modal === 'modal-about' && <ModalAbout></ModalAbout> }
        </>
    );
}