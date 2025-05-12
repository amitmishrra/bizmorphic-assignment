import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/**
 * Pagination Component
 * Handles pagination controls with previous/next buttons.
 *
 * Props:
 * - totalItems: Total number of items
 * - currentPage: Current active page
 * - onPageChange: Callback to change the page
 * - itemsPerPage: Items shown per page
 */
const Pagination = ({ totalItems, currentPage, onPageChange, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Go to previous page
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Go to next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`p-2 rounded-full ${
          currentPage === 1
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </button>

      <span className="text-lg font-medium">
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </div>
  );
};

export default Pagination;
