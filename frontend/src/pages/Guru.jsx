import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/PageHeader";
import axios from "axios";

const Guru = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/guru?search=${encodeURIComponent(
          searchTerm
        )}&page=${currentPage}&limit=${pageSize}`
      );
      setData(res.data.data);
      setTotalPages(res.data.pagination.totalPages);
      setTotalItems(res.data.pagination.totalItems);
    } catch (err) {
      console.error("Error fetching guru data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm, currentPage, pageSize]);

  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
      <PageHeader
        title="Daftar Guru"
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Guru", href: "/guru" },
        ]}
      />

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label className="text-sm">Show</label>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border rounded px-2 py-1 text-sm"
          >
            {[10, 25, 50].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <label className="text-sm">entries</label>
        </div>

        <div className="w-full flex justify-end items-center mt-4">
        <div className="flex items-center gap-4">
          <h6>Cari:</h6>
          <Input
            type="text"
            placeholder="Cari nama guru..."
            className="border rounded px-3 py-1 text-sm w-64"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          
        </div>
      </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-yellow-400">
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">Nama Guru</th>
              <th className="border px-4 py-2">NIP</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Mapel yang Diampu</th>
              <th className="border px-4 py-2">Tugas Tambahan</th>
              <th className="border px-4 py-2">Foto</th>
            </tr>
          </thead>
          <tbody>
            {data.map((guru, idx) => (
              <tr key={guru.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2 text-sm">
                  {(currentPage - 1) * pageSize + idx + 1}
                </td>
                <td className="border px-4 py-2 text-sm">{guru.nama}</td>
                <td className="border px-4 py-2 text-sm">{guru.nip}</td>
                <td className="border px-4 py-2 text-sm">{guru.status}</td>
                <td className="border px-4 py-2 text-sm">{guru.mapel}</td>
                <td className="border px-4 py-2 text-sm">
                  {guru.tugasTambahan}
                </td>
                <td className="border px-4 py-2 text-sm">
                  {guru.photo && (
                    <img
                      src={`http://localhost:3000${guru.photo}`}
                      alt={guru.nama}
                      className="w-48 h-48 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/128";
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <div>
          Menampilkan {(currentPage - 1) * pageSize + 1}–
          {Math.min(currentPage * pageSize, totalItems)} dari {totalItems} data
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              variant={currentPage === i + 1 ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Guru;
