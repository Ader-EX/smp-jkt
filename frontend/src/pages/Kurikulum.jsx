import React, { useEffect, useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import axios from "axios";
import { Button } from "@/components/ui/button";

const Kurikulum = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [imageErrors, setImageErrors] = useState({});

  const fetchAll = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/kurikulum?page=${page}&limit=${limit}`
      );
      setData(res.data.data);
      setTotalPages(res.data.pagination.totalPages);
      setPageSize(res.data.pagination.pageSize);
    } catch (err) {
      console.error("Error fetching kurikulum list:", err);
    }
  };

  const handleImageError = (itemId) => {
    setImageErrors((prev) => ({
      ...prev,
      [itemId]: true,
    }));
  };

  const handleDownload = async (fileUrl, fileName) => {
    try {
      // Create a temporary link element to trigger download
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName || "kurikulum.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
      // Fallback: open in new tab
      window.open(fileUrl, "_blank");
    }
  };

  const ImageFallback = ({ item }) => (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-primary-bgText">
      <div className="w-16 h-16 bg-primary-base/10 rounded-full flex items-center justify-center mb-3">
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <p className="text-sm font-medium text-center px-4">{item.nama}</p>
      <p className="text-xs text-gray-400 mt-1">Document Preview</p>
    </div>
  );

  useEffect(() => {
    fetchAll();
  }, [page, limit]);

  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
      <PageHeader
        title="Kurikulum"
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Profil", href: "/profil" },
          { label: "Kurikulum" },
        ]}
      />

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-64">
              {imageErrors[item.id] ? (
                <ImageFallback item={item} />
              ) : (
                <img
                  src={
                    item.photo
                      ? `http://localhost:3000${item.photo}`
                      : "https://via.placeholder.com/300"
                  }
                  alt={item.nama}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-4">
              <h3 className="text-sm text-primary-bgText">12/06/2025</h3>
              <h3 className="text-lg font-semibold text-primary-bgText mb-8">
                {item.nama}
              </h3>

              <div className="flex justify-end">
                {/* Download Button */}
                <Button
                  onClick={() =>
                    handleDownload(
                      `http://localhost:3000${item.file}`,
                      `${item.nama}.pdf`
                    )
                  }
                  className="flex justify-end bg-primary-base hover:bg-primary-base text-white py-2 px-4 rounded-none transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Unduh</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show message if no data */}
      {data.length === 0 && (
        <div className="text-center py-12">
          <p className="text-primary-bgText text-lg">
            Tidak ada data kurikulum tersedia
          </p>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-12">
          <Button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
          >
            Prev
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 border rounded-lg transition-colors duration-200 ${
                page === i + 1
                  ? "bg-primary-base text-white border-green-600"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default Kurikulum;
