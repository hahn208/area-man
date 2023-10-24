import Link from 'next/link';

export default async function Footer() {
    return (
        <footer>
            <nav>
                <ul className={'flex flex-inline gap-4'}>
                    <li>
                        <Link href={'https://github.com/hahn208/'} target={'_blank'} rel={'external'} className={'cursor-alias'}>Andrew Hahn</Link>
                    </li>
                    <li>
                        <Link href={{ pathname: '/', query: { modal: 'modal-about'}}}>About</Link>
                    </li>
                    <li>
                        <Link href={{ pathname: '/', query: { modal: 'modal-terms'}}}>Terms &amp; Conditions</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}