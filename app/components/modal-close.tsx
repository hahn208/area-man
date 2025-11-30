export default function ModalClose() {
    return (
        <div className={'py-2 px-4'}>
            <span className="sr-only">Close modal</span>
            <span aria-hidden="true" data-testid={'modal-close-button'} className={'font-sans text-3xl leading-none text-gray-700'}>&times;</span>
        </div>
    );
}