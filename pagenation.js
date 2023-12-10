import React from 'react';

function Pagenation({ currentPage, setCurrentPage }) {
  const totalPages = 10; // Set the total number of pages here
  const pagenumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="flex items-center justify-center space-x-2 p-[100px]">
        {/* Previous button */}
        <div
          onClick={() => handlePageChange(currentPage - 1)}
          className="border border-gray-500 p-2 cursor-pointer"
          disabled={currentPage === 1}
        >
          Previous
        </div>

        {/* Page numbers */}
        {pagenumbers.map((page) => (
          <div
            key={page}
            onClick={() => handlePageChange(page)}
            className={`border border-gray-500 p-2 cursor-pointer ${currentPage === page && 'bg-gray-300'}`}
          >
            {page}
          </div>
        ))}

        {/* Next button */}
        <div onClick={() => handlePageChange(currentPage + 1)} className="border border-gray-500 p-2 cursor-pointer">
          Next
        </div>
      </div>
    </>
  );
}

export default Pagenation;
