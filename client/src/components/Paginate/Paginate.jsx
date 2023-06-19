import style from './Paginate.module.css'

export default function Paginate({currentPage, totalPages, onPageChange}) {

    const pageNumbers = Array.from({length: totalPages}, (_, i) => i + 1);


    return(
        <div className={style.container} >
            {pageNumbers.map((pageNumber)=>(
                <button
                  key={pageNumber}
                  onClick={()=> onPageChange(pageNumber)}
                  className={pageNumber === currentPage ? style.active : "" }
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    )
}