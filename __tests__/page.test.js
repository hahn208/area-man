import '@testing-library/jest-dom'
import { act, render, screen, waitFor } from '@testing-library/react';
import Page from '@/app/page';

jest.mock('next/navigation', () => {
    // Build a map to mock the returned iterable from URLSearchParams.entities()
    const mapEntries = new Map();
    mapEntries.set('dateMonth', 'Oct');
    mapEntries.set('dateDay', 21);

    return {
        ...jest.requireActual('next/navigation'),
        useRouter: () => {
            return {push: (path) => {}}
        },
        useSearchParams: () => {
            return {entries: () => mapEntries}
        }
    }
});

describe('Page', () => {
    it('should render', async () => {
        const _page = render(await Page());

        const heading = screen.getByTestId('page-heading');

        expect(heading).toBeInTheDocument();
    })
});