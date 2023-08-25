import DateInput from "@/app/components/date-input";

export default function Page() {
  return (
    <main className="flex flex-col items-center text-center pb-40">
        <h1>Area Man</h1>
        <h2>Enter your birthday and prepare to be <br /><strong className={'tracking-widest uppercase'}>amazed</strong></h2>
        <section className={'p-4'}>
            <DateInput></DateInput>
        </section>
    </main>
  )
}