import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/PageHeader";
import axios from "axios";

const InfoPesertaDidik = () => {
  const [kelasList, setKelasList] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  // Fetch class names on mount
  useEffect(() => {
    axios
      .get("http://localhost:3000/kelas/names")
      .then((res) => {
        setKelasList(res.data);
        if (res.data.length) setSelectedClass(res.data[0].id);
      })
      .catch((err) => console.error("Error fetching class names:", err));
  }, []);

  // Fetch students when filters change
  useEffect(() => {
    if (!selectedClass) return;
    axios
      .get(
        `http://localhost:3000/kelas/${selectedClass}?page=${currentPage}&pageSize=${itemsPerPage}&search=${encodeURIComponent(
          searchTerm
        )}`
      )
      .then((res) => {
        setStudents(res.data.siswa);
        setTotalPages(res.data.pagination.totalPages);
        setTotalItems(res.data.pagination.totalData);
      })
      .catch((err) => console.error("Error fetching students:", err));
  }, [selectedClass, currentPage, itemsPerPage, searchTerm]);

  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
      <PageHeader
        title="Peserta Didik"
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Kesiswaan", href: "/info-peserta-didik" },
          { label: "Info Peserta Didik" },
        ]}
      />

      {/* Controls */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6">
        {/* Show Entries Selector */}
        <div className="flex items-center gap-2">
          <label className="text-sm whitespace-nowrap">Show</label>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border rounded px-2 py-1 text-sm"
          >
            {[10, 25, 50].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <label className="text-sm whitespace-nowrap">entries</label>
        </div>

        {/* Kelas Selector */}
        <div className="flex items-center gap-2">
          <label className="text-sm whitespace-nowrap">Kelas:</label>
          <select
            value={selectedClass || ""}
            onChange={(e) => {
              setSelectedClass(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded px-2 py-1 text-sm w-full"
          >
            {kelasList.map((k) => (
              <option key={k.id} value={k.id}>
                {k.namaKelas}
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Cari nama siswa..."
            className="border rounded px-3 py-1 text-sm w-full"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Search Button */}
        <div className="flex justify-start sm:justify-end">
          <Button onClick={() => setCurrentPage(1)}>Cari</Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-yellow-400">
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">Nama</th>
              <th className="border px-4 py-2">NIS</th>
              <th className="border px-4 py-2">Jenis Kelamin</th>
              <th className="border px-4 py-2">Agama</th>
              <th className="border px-4 py-2">Kelas</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu, idx) => (
              <tr key={stu.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2 text-sm">
                  {(currentPage - 1) * itemsPerPage + idx + 1}
                </td>
                <td className="border px-4 py-2 text-sm">{stu.nama}</td>
                <td className="border px-4 py-2 text-sm">{stu.nis}</td>
                <td className="border px-4 py-2 text-sm">{stu.jenisKelamin}</td>
                <td className="border px-4 py-2 text-sm">{stu.agama}</td>
                <td className="border px-4 py-2 text-sm">{stu.kelasId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Pagination Info */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <div>
          Menampilkan {(currentPage - 1) * itemsPerPage + 1}–
          {Math.min(currentPage * itemsPerPage, totalItems)} dari {totalItems}{" "}
          data
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

export default InfoPesertaDidik;
