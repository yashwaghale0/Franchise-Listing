import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import Left from "../../assets/images/left.svg";
import Right from "../../assets/images/right.svg";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="d-flex gap-10 pagination-text"
      >
        {/* <SlArrowLeftCircle size={30} /> */}
        <img src={Left} alt="Left arrow" />
        <span>Previous</span>
      </button>

      {pages.map((num) => (
        <button
          key={num}
          className={num === currentPage ? "active" : "inactive-btn"}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="d-flex gap-10 pagination-text"
      >
        <span>Next</span>
        {/* <SlArrowRightCircle size={30} /> */}
        <img src={Right} alt="Left arrow" />
      </button>
    </div>
  );
};

export default Pagination;
