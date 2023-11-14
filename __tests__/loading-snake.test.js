import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import LoadingSnake from '../app/components/loading-snake';

describe('Loading Snake', () => {
    render(<LoadingSnake></LoadingSnake>);

    it(
        'should render-- nothing else required',
        () => {
            //loadingSnake
            const snakeContainer = screen.getByTestId('loadingSnake');

            expect(snakeContainer).toBeInTheDocument();
        }
    );
});