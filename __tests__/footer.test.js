import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Footer from '@/app/components/footer';

describe('Footer', () => {
    describe('links', () => {
        jest.mock('next/link', () => ({ children }) => children);

        it('should render the footer navigation', () => {
            render(<Footer></Footer>);

            const aboutLink = screen.getByText('About');
            expect(aboutLink).toBeInTheDocument();
        })
    });
});