import Modal from "@/app/components/modal";
import Link from "next/link";

export default () => {
    return(
        <Modal>
            <h1 className={'flex-'}>About</h1>
            <h2>Created by <Link href={'https://github.com/hahn208/'} target={'_blank'}>Andrew Hahn</Link></h2>
        </Modal>
    );
}