import Modal from "@/app/components/modal";
import Link from "next/link";
import ModalClose from "@/app/components/modal-close";

export default () => {
    return(
        <Modal>
            <Link href={'/'}><ModalClose /></Link>
            <h1>Terms! Conditions!</h1>
            <p>This project stores no data directly. All data stored by third parties (ChatGPT)</p>
        </Modal>
    );
}