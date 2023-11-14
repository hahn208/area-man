import '@testing-library/jest-dom';
import { act, fireEvent, getByTestId, render } from "@testing-library/react";
import { dateReplace } from "../app/_utils/misc";
import DateInput from "../app/components/date-input";

/** Polyfill **/
import { TextEncoder, TextDecoder } from 'util';
Object.assign(global, { TextDecoder, TextEncoder });

/**
 * Mock the fetch to our endpoint that returns a streamed response from ChatGPT
 */
global.fetch = jest.fn(
    (url, data) => {
        const { dateMonth, dateDay } = JSON.parse(data.body);
        
        const encoder = new TextEncoder;
        
        return Promise.resolve(
            {
                ok: true,
                status: 200,
                body: {
                    getReader() {
                        return {
                            read() {
                                return Promise.resolve(
                                    { 
                                        value: encoder.encode(dateReplace('AREA MAN [DATE]', dateMonth, dateDay)),
                                        done: true
                                    }
                                );
                            },
                        };
                    },
                },
            }
        );
    }
);

const testMonth = 'Oct', testDay = 21;

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

beforeEach(() => {fetch.mockClear();});

describe(
    'DateInput',
    () => {
        it(
            'renders a form that fetches values from a server action',
            async () => {
                let container, rerender;
                
                await act(
                    () => {
                        ({container, rerender} = render(<DateInput></DateInput>));
                    }
                );
                
                await act(() => {
                    fireEvent.change(getByTestId(container, 'dateMonth'), { target: { value: testMonth } });
                    fireEvent.change(getByTestId(container, 'dateDay'), { target: { value: testDay } });
                    fireEvent.click(getByTestId(container, 'dateInputSubmit'));
                });
                
                expect(fetch).toHaveBeenCalled();
                
                await act(() => { rerender(<DateInput></DateInput>); });
                
                expect(getByTestId(container, 'modalHeading')).toHaveTextContent('Area Man on Oct 21--');
                expect(getByTestId(container, 'modalContent')).toHaveTextContent('AREA MAN Oct 21');
            }
        );
    }
)
