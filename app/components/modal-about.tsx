import Modal from "@/app/components/modal";
import Link from "next/link";
import ModalClose from "@/app/components/modal-close";

export default function ModalAbout() {
    return (
        <Modal>
            <Link href={'/'} className={'modal-close'}><ModalClose/></Link>
            <h1>About</h1>
            <h2>Created by <Link href={'https://www.linkedin.com/in/208hahn'} target={'_blank'}>Andrew Hahn</Link>.</h2>
            <br />
            <p>This project is an exercise of NextJS, Tailwind, and ChatGPT. It leverages <a
                href={'https://vercel.com/docs/functions'} target={'_blank'}>edge functions</a> to stream the OpenAI response. LLMs will never have the entropy of AREA MAN, but this app is just for fun.</p>
        </Modal>
    );
}