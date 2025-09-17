const Pagination = ({ pagination, currentPage, setCurrentPage }) => {

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }

    return (
        <div className="d-flex justify-content-between align-items-center mb-4" data-bs-theme="dark">
            <small className="text-secondary">Showing <b>{pagination.from}</b> to <b>{pagination.to}</b> of <b>{pagination.total}</b> results.</small>
            <nav aria-label="Page navigation">
                <ul className="pagination my-0">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &#129168; <small>Previous</small>
                        </button>
                    </li>

                    {[...Array(pagination.lastPage)].map((_, index) => (
                        <li
                            key={index + 1}
                            className={`page-item ${pagination.currentPage === index + 1 ? 'active' : ''}`}
                        >
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}

                    <li className={`page-item ${currentPage === pagination.lastPage ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === pagination.lastPage}
                        >
                            <small>Next</small> &#129170;
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
