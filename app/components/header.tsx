import ThemeToggle from "@/app/components/theme-toggle";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li className={'text-center'}>nav</li>
                    <li>
                        <ThemeToggle></ThemeToggle>
                    </li>
                </ul>
            </nav>
        </header>
    )
}