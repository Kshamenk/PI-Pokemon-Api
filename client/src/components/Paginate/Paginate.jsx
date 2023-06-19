import style from './Paginate.module.css'

export default function Paginate({ currentPage, itemsPerPage, totalItems, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };

    return (
        <div className={style.container}>
            <button onClick={handlePreviousPage}>&lt;</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={pageNumber === currentPage ? style.active : ""}
                >
                    {pageNumber}
                </button>
            ))}
            <button onClick={handleNextPage}>&gt;</button>
        </div>
    )
}