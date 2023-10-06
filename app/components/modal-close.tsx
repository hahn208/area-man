export default () => {
    return (
        <div className={'sticky top-0 right-0 py-2 px-4 modal-close no-underline cursor-pointer'}>
            <span className="sr-only">Close modal</span>
            <span aria-hidden="true" className={'font-sans text-3xl leading-none text-gray-700'}>&times;</span>
        </div>
    )
}