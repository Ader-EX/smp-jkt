import { Input } from "@/components/ui/input";
import PageHeader from "@/components/ui/PageHeader";
import React, { useState } from "react";

const InfoPesertaDidik = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedClass, setSelectedClass] = useState("VII-A");

  // Dummy data
  const students = [
    {
      id: 1,
      name: "ABDUL LATIF",
      nis: "13152",
      gender: "L",
      religion: "Islam",
      class: "VII-D",
    },
    {
      id: 2,
      name: "ABDUL LATIF",
      nis: "13152",
      gender: "L",
      religion: "Islam",
      class: "VII-D",
    },
    {
      id: 3,
      name: "ABDUL LATIF",
      nis: "13152",
      gender: "L",
      religion: "Islam",
      class: "VII-D",
    },
    {
      id: 4,
      name: "ABDUL LATIF",
      nis: "13152",
      gender: "L",
      religion: "Islam",
      class: "VII-D",
    },
    {
      id: 5,
      name: "ABDUL LATIF",
      nis: "13152",
      gender: "L",
      religion: "Islam",
      class: "VII-D",
    },
    {
      id: 6,
      name: "ABDUL LATIF",
      nis: "13152",
      gender: "L",
      religion: "Islam",
      class: "VII-D",
    },
    {
      id: 7,
      name: "ABDUL LATIF",
      nis: "13152",
      gender: "L",
      religion: "Islam",
      class: "VII-D",
    },
    {
      id: 8,
      name: "ABDUL LATIF",
      nis: "13152",
      gender: "L",
      religion: "Islam",
      class: "VII-D",
    },
    {
      id: 9,
      name: "ABDUL LATIF",
      nis: "13152",
      gender: "L",
      religion: "Islam",
      class: "VII-D",
    },
    {
      id: 10,
      name: "ABDUL LATIF",
      nis: "13152",
      gender: "L",
      religion: "Islam",
      class: "VII-D",
    },
  ];

  const totalPages = Math.ceil(students.length / itemsPerPage);

  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
      <PageHeader
        title="Peserta Didik "
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Kesiswaan", href: "/info-peserta-didik" },
          { label: "Info Peserta Didik" }, // current pag
        ]}
      />
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            Daftar Nama Siswa Kelas VII-A
          </h2>
          <p className="text-sm text-gray-600">Tahun Pelajaran 2024-2025</p>
          <p className="text-sm text-gray-600">Wali Kelas : Sarjiatun, S.Pd</p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Show</label>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <label className="text-sm text-gray-600">
                entries per halaman
              </label>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Pilih Kelas:</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm"
            >
              <option value="VII-A">VII-A</option>
              <option value="VII-B">VII-B</option>
              <option value="VII-C">VII-C</option>
              <option value="VII-D">VII-D</option>
            </select>
            <Input
              type="text"
              placeholder="Cari nama siswa..."
              className="border border-gray-300 rounded px-3 py-1 text-sm w-64"
              onChange={(e) => console.log(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
              Cari
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-400">
                <th className="border border-gray-400 px-4 py-3 text-left text-sm font-semibold text-gray-800">
                  NO.
                </th>
                <th className="border border-gray-400 px-4 py-3 text-left text-sm font-semibold text-gray-800">
                  Nama Peserta Didik
                </th>
                <th className="border border-gray-400 px-4 py-3 text-left text-sm font-semibold text-gray-800">
                  NIS
                </th>
                <th className="border border-gray-400 px-4 py-3 text-left text-sm font-semibold text-gray-800">
                  Jenis Kelamin
                </th>
                <th className="border border-gray-400 px-4 py-3 text-left text-sm font-semibold text-gray-800">
                  Agama
                </th>
                <th className="border border-gray-400 px-4 py-3 text-left text-sm font-semibold text-gray-800">
                  Asal Kelas
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">
                    {index + 1}.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">
                    {student.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">
                    {student.nis}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">
                    {student.gender}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">
                    {student.religion}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">
                    {student.class}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <div>
            Menampilkan 1-{Math.min(itemsPerPage, students.length)} dari{" "}
            {students.length} data
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border border-gray-300 rounded ${
                  currentPage === page
                    ? "bg-blue-500 text-white border-blue-500"
                    : "hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPesertaDidik;
