import { render, screen } from '@testing-library/react';
import Alert from '../app/components/alert';

describe('Alert', () => {
    render(<Alert>Hello World</Alert>);

    it(
        'should display an alert box with the provided text',
        () => {
            expect(screen.getByText('Hello World'));
        }
    );
});