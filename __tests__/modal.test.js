import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe } from "node:test";
import Link from "next/link";
import Modal from '../app/components/modal';
import ModalAbout from "../app/components/modal-about";
import ModalClose from "../app/components/modal-close";
import ModalTerms from "../app/components/modal-terms";

describe('The modal', () => {
    it(
        'renders a modal with just the heading TEST.', 
        () => {
            render(<Modal><h1>TEST</h1></Modal>);
    
            const heading = screen.getByRole('heading', {
                name: /TEST/i,
            });
    
            expect(heading).toBeInTheDocument();
        }
    );

    it(
        'renders a close button',
        () => {
            render(<Modal><Link href={'/'} className={'modal-close'}><ModalClose/></Link></Modal>);

            const closeButton = screen.getByTestId('modal-close-button', {
                name: /&times;/i,
            });

            expect(closeButton).toBeInTheDocument();
        }
    );

    it('should work as an about page with close button',
        () => {
            render(<ModalAbout></ModalAbout>);
    
            const closeButton = screen.getByTestId('modal-close-button', {
                name: /&times;/i,
            });
            
            expect(closeButton).toBeInTheDocument();
            
            const heading = screen.getByRole('heading', {name: 'About'});
            
            expect(heading).toBeInTheDocument();
        }
    );

    it('should work as an about page with close button',
        () => {
            render(<ModalTerms></ModalTerms>);

            const closeButton = screen.getByTestId('modal-close-button', {
                name: /&times;/i,
            });

            expect(closeButton).toBeInTheDocument();

            const heading = screen.getByRole('heading');

            expect(heading).toBeInTheDocument();
        }
    );

});
