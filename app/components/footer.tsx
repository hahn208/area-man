import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <nav>
                <ul className={'flex flex-inline gap-4'}>
                    <li>
                        <Link href={'https://github.com/hahn208/'} rel={'external'}>Andrew Hahn</Link>
                    </li>
                    <li>
                        <Link href={'./?modal=modal-about'}>About</Link>
                    </li>
                    <li>
                        <>Terms &amp; Conditions</>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}