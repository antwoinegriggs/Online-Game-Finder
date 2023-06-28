import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className="page-card">
      <div className="previous">
        {currentPage > 1 && (
          <Link to="#" onClick={handlePrevPage}>
            Previous Page
          </Link>
        )}
      </div>
      <div className="next">
        {currentPage < totalPages && (
          <Link to="#" onClick={handleNextPage}>
            Next Page
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
