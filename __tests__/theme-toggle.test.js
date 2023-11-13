import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ThemeToggle from '../app/components/theme-toggle';

describe('theme toggle', () => {
    it('should switch the theme by adding a data attribute', () => {
        render(<ThemeToggle></ThemeToggle>);
        
        const toggleDark = screen.getByTestId('theme-toggle--dark');
        
        fireEvent.click(screen.getByTestId('theme-toggle--light'));
        
        expect(toggleDark).toBeVisible();
    })
});