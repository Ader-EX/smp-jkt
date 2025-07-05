import ReactPaginate from "react-paginate";

import { useState } from "react";
import pramukaGambar from "../assets/ekskul/pramuka-gambar.png";
import rohisGambar from "../assets/ekskul/rohis-gambar.png";

import menanamGambar from "../assets/ekskul/menanam.png";
import EkskulGridCard from "./EkskulGridCard";

const dummyData = [
  { title: "Perkemahan Sabtu Minggu", image: pramukaGambar },
  { title: "Kegiatan Mengaji Bersama", image: rohisGambar },
  { title: "Kegiatan Menanam di Greenhouse", image: menanamGambar },
  { title: "Perkemahan Sabtu Minggu", image: pramukaGambar },
  { title: "Kegiatan Mengaji Bersama", image: rohisGambar },
  { title: "Kegiatan Menanam di Greenhouse", image: menanamGambar },
  { title: "Perkemahan Sabtu Minggu", image: pramukaGambar },
  { title: "Kegiatan Mengaji Bersama", image: rohisGambar },
  { title: "Kegiatan Menanam di Greenhouse", image: menanamGambar },
  { title: "Perkemahan Sabtu Minggu", image: pramukaGambar },
  { title: "Kegiatan Mengaji Bersama", image: rohisGambar },
  { title: "Kegiatan Menanam di Greenhouse", image: menanamGambar },
  { title: "Perkemahan Sabtu Minggu", image: pramukaGambar },
  { title: "Kegiatan Mengaji Bersama", image: rohisGambar },
  { title: "Kegiatan Menanam di Greenhouse", image: menanamGambar },
];

const itemsPerPage = 9;

const GaleriGridGrid = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = dummyData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(dummyData.length / itemsPerPage);

  return (
    <div className="px-4 py-8">
      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((item, index) => (
          <EkskulGridCard key={index} title={item.title} image={item.image} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <ReactPaginate
          previousLabel="‹"
          nextLabel="›"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="flex items-center space-x-2"
          pageClassName="w-8 h-8 flex items-center justify-center rounded border text-sm font-medium cursor-pointer hover:bg-primary-base/10"
          activeClassName="bg-primary-base text-white"
          previousClassName="w-8 h-8 flex items-center justify-center rounded border cursor-pointer hover:bg-gray-200"
          nextClassName="w-8 h-8 flex items-center justify-center rounded border cursor-pointer hover:bg-gray-200"
          breakLabel="..."
          breakClassName="w-8 h-8 flex items-center justify-center text-primary-bgText"
        />
      </div>
    </div>
  );
};

export default GaleriGridGrid;
