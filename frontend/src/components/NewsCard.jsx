/* eslint-disable react/prop-types */

import { useState } from "react";
import ReactPaginate from "react-paginate";

export const NewsCard = ({ id, title, description, date, image }) => (
  <div className="flex flex-col bg-white border rounded-lg w-full">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <div className="p-6 flex flex-col h-[280px]">
      <div className="flex-grow">
        <h4 className="text-lg font-bold text-[#3A55B4] mb-4 line-clamp-3 min-h-[84px]">
          {title}
        </h4>
        <p
          className="text-sm text-gray-700 mb-4 line-clamp-3"
          title={description}
        >
          {description}
        </p>
      </div>
      <div className="mt-auto">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <a
          href={`/product/${id}`}
          className="text-[#3A55B4] hover:font-bold font-semibold flex items-center gap-x-1"
        >
          Selengkapnya{" "}
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export const NewsCardGrid = ({
  newsItems,
  length = newsItems.length,
  itemsPerPage = 6,
  needPagination = false,
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = newsItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(newsItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % newsItems.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="grid grid-cols-1 p-6 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-xl">
        {currentItems.slice(0, length).map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
      {needPagination && (
        <div className="flex justify-center my-8">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            containerClassName="pagination flex font-semibold "
            pageClassName="px-4 py-2 border  rounded hover:bg-gray-200"
            activeClassName="bg-[#3A55B4] text-white"
            previousClassName="px-3 py-2 border  rounded hover:bg-gray-200"
            nextClassName="px-3 py-2 border rounded hover:bg-gray-200"
          />
        </div>
      )}
    </>
  );
};
