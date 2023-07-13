import React from "react";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = () => {
  return (
    <div>
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md">
            <BsChevronRight />
          </span>
        }
        // onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={50}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md">
            <BsChevronLeft />
          </span>
        }
        containerClassName="h-screen flex items-center justify-center mt-8 mb-4"
        pageClassName=" block w-10 h-10 flex items-center justify-center hover:bg-gray-300 rounded-md"
      />
    </div>
  );
};

export default Pagination;
