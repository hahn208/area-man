import Link from 'next/link';
import Image from 'next/image'

export default function Footer() {
    return (
        <footer>
            <nav>
                <ul className={'flex flex-inline gap-4'}>
                    <li>
                        <Link href={'https://github.com/hahn208/'} target={'_blank'} rel={'external'} className={'invert-color cursor-alias new-win'}><Image src={'github-ico-dark.svg'} alt={''} width={24} height={24} /></Link>
                    </li>
                    <li>
                        <Link href={'https://www.linkedin.com/in/208hahn'} target={'_blank'} rel={'external'} className={'invert-color cursor-alias new-win'}><Image src={'linkedin-ico.svg'} alt={''} width={24} height={24} /></Link>
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