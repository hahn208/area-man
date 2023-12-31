import Modal from "@/app/components/modal";
import Link from "next/link";
import ModalClose from "@/app/components/modal-close";

export default function ModalTerms() {
    return(
        <Modal>
            <Link href={'/'} className={'modal-close'}><ModalClose /></Link>
            <h1>Terms! Conditions!</h1>
            <p>This project stores no data directly. All data stored by third parties (eg ChatGPT) is not the responsibility of this site.</p>
        </Modal>
    );
}