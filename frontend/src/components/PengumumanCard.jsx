import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PengumumanCard = ({ id, date, title, images }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-64 bg-gray-100">
      <div className="grid grid-cols-2 gap-1 h-full p-2">
        {images.slice(0, 4).map((image, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded ${
              idx === 0 ? "col-span-2 row-span-1" : ""
            }`}
          >
            <img
              src={image}
              alt={`${title} - foto ${idx + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
    <div className="p-6">
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
        {title}
      </h3>
      <a href={`/pengumuman/${id}`}>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-300">
          Baca Selengkapnya
        </button>
      </a>
    </div>
  </div>
);

PengumumanCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onReadMore: PropTypes.func.isRequired,
};

const PengumumanTerbaruSection = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pengumuman/newest?limit=3")
      .then((res) => res.json())
      .then((data) => {
        // transform backend shape to what the Card expects
        const formatted = data.map((item) => ({
          date: new Date(item.createdAt).toLocaleDateString(),
          title: item.nama,
          id: item.id,
          images: item.photo ? [`http://localhost:3000${item.photo}`] : [],
        }));
        setNewsData(formatted);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleReadMore = (newsItem) => {
    console.log("Read more clicked for:", newsItem.title);
    // e.g. navigate to detail page...
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-2">PENGUMUMAN</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsData.map((news, idx) => (
            <PengumumanCard
              key={idx}
              id={news.id}
              date={news.date}
              title={news.title}
              images={news.images}
            />
          ))}
        </div>

        <div className="text-center">
          <a href="/pengumuman" className="inline-block mb-4">
            <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 font-medium transition-colors duration-300">
              Lihat Pengumuman Lainnya
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PengumumanTerbaruSection;
