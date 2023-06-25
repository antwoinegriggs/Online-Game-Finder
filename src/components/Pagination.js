import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div>
      {currentPage > 1 && (
        <Link to="#" onClick={handlePrevPage}>
          Previous Page
        </Link>
      )}
      {currentPage < totalPages && (
        <Link to="#" onClick={handleNextPage}>
          Next Page
        </Link>
      )}
    </div>
  );
};

export default Pagination;
