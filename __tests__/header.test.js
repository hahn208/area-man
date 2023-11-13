import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '@/app/components/header';

describe('Header', () => {
    render(<Header></Header>);

    const themeToggle = screen.getByTestId('theme-toggle--light');

    it(
        'should contain a theme toggle button',
        () => {
            expect(themeToggle).toBeInTheDocument();
        }
    );
});