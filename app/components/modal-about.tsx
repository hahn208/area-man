import Modal from "@/app/components/modal";
import Link from "next/link";
import ModalClose from "@/app/components/modal-close";

export default function ModalAbout() {
    return (
        <Modal>
            <Link href={'/'} className={'modal-close'}><ModalClose/></Link>
            <h1>About</h1>
            <h2>Created by <Link href={'https://github.com/hahn208/'} target={'_blank'}>Andrew Hahn</Link>.</h2>
            <p>This project is an exercise of NextJS, Tailwind, and ChatGPT. AI will never have the entropy of AREA MAN,
                but this app is just to entertain, not throw shade.</p>
        </Modal>
    );
}