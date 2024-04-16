import React from "react";

const Pagination = ({
  totalPosts,
  postperpage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postperpage);
  const pagesToShow = 10;


  const generatePageNumbers = () => {
    const pageArr = [];
    let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + pagesToShow - 1);


    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageArr.push(i);
    }
    return pageArr;
  };

  const pageArr = generatePageNumbers();

  if (totalPages === 0) {
    return null; 
  }

  return (
    <div className="flex flex-wrap justify-center mt-4 gap-3 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-6">
      {currentPage > pagesToShow && (
        <button
          onClick={() => {
            console.log("Navigating to previous set of pages...");
            setCurrentPage(currentPage - pagesToShow);
          }}
          className="bg-CardColor text-white py-2 px-4 rounded-l-md transition duration-300 ease-in-out hover:bg-CardColorHover focus:outline-none"
        >
          &laquo; Prev {pagesToShow}
        </button>
      )}
      {pageArr.map((pageNumber, index) => (
        <button
          onClick={() => {
            console.log("Navigating to page:", pageNumber);
            setCurrentPage(pageNumber);
          }}
          className={`bg-CardColor text-white py-2 px-4 rounded-l-md transition duration-300 ease-in-out hover:bg-CardColorHover focus:outline-none ${
            pageNumber === currentPage ? "bg-CardColorHover" : ""
          }`}
          key={index}
        >
          {pageNumber}
        </button>
      ))}
      {totalPages > currentPage + pagesToShow && (
        <button
          onClick={() => {
            console.log("Navigating to next set of pages...");
            setCurrentPage(currentPage + pagesToShow);
          }}
          className="bg-CardColor text-white py-2 px-4 rounded-l-md transition duration-300 ease-in-out hover:bg-CardColorHover focus:outline-none"
        >
          Next {pagesToShow} &raquo;
        </button>
      )}
    </div>
  );
};

export default Pagination;
