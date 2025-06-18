/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactPaginate from "react-paginate";

export const MentahCard = ({ title, image, price }) => (
  <div className="flex flex-col bg-white border rounded-lg w-full overflow-hidden">
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
    )}
    <div className="p-6 flex flex-col text-center items-center">
      <h4 className="text-md font-bold text-[#3A55B4] mb-2">{title}</h4>
      <p className="text-lg font-semibold text-green-600">{price}</p>
    </div>
  </div>
);

export const MentahCardGrid = ({
  items,
  itemsPerPage = 6,
  needPagination = false,
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-1 p-6 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-xl">
        {currentItems.map((item, index) => (
          <MentahCard key={index} {...item} />
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
            containerClassName="pagination flex font-semibold"
            pageClassName="px-4 py-2 border rounded hover:bg-gray-200"
            activeClassName="bg-[#3A55B4] text-white"
            previousClassName="px-3 py-2 border rounded hover:bg-gray-200"
            nextClassName="px-3 py-2 border rounded hover:bg-gray-200"
          />
        </div>
      )}
    </>
  );
};
