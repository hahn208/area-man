import ThemeToggle from "@/app/components/theme-toggle";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <ThemeToggle></ThemeToggle>
                    </li>
                </ul>
            </nav>
        </header>
    );
}