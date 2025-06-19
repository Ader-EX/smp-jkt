import { useState, useEffect } from "react";
import {
  RiSearchLine,
  RiCloseLine,
  RiCalendarLine,
  RiEyeLine,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim().length > 5) {
        performSearch(searchTerm.trim());
      } else {
        setSearchResults([]);
        setIsSearchOpen(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const performSearch = async (keyword) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:3000/berita/search?keyword=${encodeURIComponent(
          keyword
        )}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const results = Array.isArray(data) ? data : data.data || [];

      setSearchResults(results);
      setIsSearchOpen(true);
    } catch (error) {
      console.error("Search error:", error);
      setError(
        "Gagal mengambil data. Pastikan server berjalan di localhost:3000"
      );
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const handleResultClick = (item) => {
    if (item.tags === "berita") {
      navigate(`/berita/${item.id}`);
    } else if (item.tags === "pengumuman") {
      navigate(`/pengumuman/${item.id}`);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <div className="relative">
        <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm focus-within:border-blue-500 focus-within:shadow-md transition-all duration-200">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Cari berita atau pengumuman..."
              className="w-full px-4 py-3 text-gray-700 focus:outline-none text-sm md:text-base"
            />
            {isLoading && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
              </div>
            )}
          </div>

          {searchTerm && (
            <button
              onClick={clearSearch}
              className="p-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <RiCloseLine className="text-xl" />
            </button>
          )}

          <button
            onClick={() =>
              searchTerm.trim().length > 5 && performSearch(searchTerm)
            }
            className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-3 transition-colors duration-200"
          >
            <RiSearchLine className="text-xl" />
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {error && (
            <div className="p-4 text-red-600 text-center border-b">
              <p>{error}</p>
            </div>
          )}

          {searchResults.length === 0 && !isLoading && !error && (
            <div className="p-4 text-gray-500 text-center">
              <p>Tidak ada hasil ditemukan untuk &quot;{searchTerm}&quot;</p>
            </div>
          )}

          {searchResults.map((item, index) => (
            <div
              key={item.id || index}
              onClick={() => handleResultClick(item)}
              className="cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <div className="flex p-4 gap-4 items-start border-b">
                <img
                  src={
                    item.tags === "pengumuman"
                      ? `http://localhost:3000${item.photo}`
                      : `http://localhost:3000/uploads/${item.photo}`
                  }
                  alt="thumbnail"
                  className="w-16 h-16 object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                    {item.nama || item.judul || "Judul tidak tersedia"}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <RiCalendarLine />
                      <span>{formatDate(item.createdAt)}</span>
                    </div>
                    {item.views && (
                      <div className="flex items-center gap-1">
                        <RiEyeLine />
                        <span>{item.views} views</span>
                      </div>
                    )}
                    {item.tags && (
                      <span className="ml-auto bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs">
                        {item.tags}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
