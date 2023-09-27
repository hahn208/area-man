export default () => {
    return (
        <div className={'absolute top-0 right-0 py-2 px-4 modal-close no-underline'}>
            <span className="sr-only">Close menu</span>
            <span aria-hidden="true" className={'font-sans text-3xl leading-none text-gray-700'}>&times;</span>
        </div>
    )
}