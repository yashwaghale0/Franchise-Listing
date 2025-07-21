import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="d-flex gap-10"
      >
        <SlArrowLeftCircle size={30} />
        Previous
      </button>

      {pages.map((num) => (
        <button
          key={num}
          className={num === currentPage ? "active" : ""}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="d-flex gap-10"
      >
        Next
        <SlArrowRightCircle size={30} />
      </button>
    </div>
  );
};

export default Pagination;
