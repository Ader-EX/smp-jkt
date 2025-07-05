import PageHeader from "@/components/ui/PageHeader";
import React from "react";
import samplePDF from "../assets/sample.pdf"; // Adjust the path as necessary
import BeritaTerbaruSection from "@/components/BeritaCard";
import menanam from "../assets/banner/menanam.png"; // Adjust the path as necessary
const Prestasi = () => {
  const sampleNewsData = [
    {
      date: "21 Oktober 2024",
      title: "Kegiatan di greenhouse",
      images: [menanam],
    },
    {
      date: "12 Maret 2024",
      title: "Kegiatan baca bersama",
      images: [menanam],
    },
    {
      date: "23 Desember 2024",
      title: "Kegiatan di lab IPA",
      images: [menanam],
    },
  ];
  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
      <div className="">
        <PageHeader
          title="Prestasi"
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Kesiswaan", href: "/info-peserta-didik" },
            { label: "Prestasi" },
          ]}
        />
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center text-primary-base mb-4">
            PRESTASI AKADEMIK
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <h3 className="text-lg font-semibold">
            Prestasi akademik tahun pelajaran 2024/2025
          </h3>
          <p className="text-gray-700 mt-2 text-justify leading-relaxed">
            Assalamualaikum Warahmatullahi Wabarakatuh, salam sejahtera kepada
            bapak dan ibu orang tua murid. Dengan kata ini kami akan sampaikan
            informasi terkait prestasi putra dan putri kami pada tahun pelajaran
            2024/2025.
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-[80vh] border rounded-md overflow-hidden shadow">
          <iframe
            title="PDF Viewer"
            src={samplePDF} // Replace with your actual PDF path
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center text-primary-base mb-4">
            PRESTASI NON AKADEMIK
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <h3 className="text-lg font-semibold">
            Prestasi akademik tahun pelajaran 2024/2025
          </h3>
          <p className="text-gray-700 mt-2 mb-6 text-justify leading-relaxed">
            Assalamualaikum Warahmatullahi Wabarakatuh, salam sejahtera kepada
            bapak dan ibu orang tua murid. Dengan kata ini kami akan sampaikan
            informasi terkait prestasi putra dan putri kami pada tahun pelajaran
            2024/2025.
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-[80vh] border rounded-md overflow-hidden shadow">
          <iframe
            title="PDF Viewer"
            src={samplePDF} // Replace with your actual PDF path
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <BeritaTerbaruSection newsData={sampleNewsData} />
    </div>
  );
};

export default Prestasi;
