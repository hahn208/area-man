import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <nav>
                <ul className={'flex flex-inline gap-4'}>
                    <li>
                        <Link href={'https://www.linkedin.com/in/208hahn'} rel={'external'}>Andrew Hahn</Link>
                    </li>
                    <li>
                        <Link href={'./about'}>About</Link>
                    </li>
                    <li>
                        Terms & Conditions
                    </li>
                </ul>
            </nav>
        </footer>
    )
}