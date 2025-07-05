import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";

import spnmb from "@/assets/spmb-banner.png";
import samplePDF from "@/assets/sample.pdf";
import bannerMutasi from "@/assets/banner/mutasi.png";

const InfoMutasi = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    {
      id: "syarat-pendaftaran",
      title: "SYARAT PENDAFTARAN",
      content: (
        <div className="space-y-4">
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Menyerahkan fotocopi ijazah jenjang pendidikan sebelumnya, dan
              menunjukkan ijazah asli.
            </li>
            <li>
              Menyerahkan seluruh fotocopy Rapor yang telah dilegalisir dan
              menunjukkan Rapor aslinya, semester 1 (bagi kelas 7), semester 1,
              2 dan 3 (bagi kelas 8) dan semester 1, 2, 3, 4 dan 5 (bagi kelas
              9).
            </li>
            <li>
              Menyerahkan fotocopy sertifikat akreditasi sekolah asal yang
              berasal dari sekolah negeri.
            </li>
            <li>
              Menyerahkan surat permohonan orang tua/wali Peserta Didik tentang
              perpindahan (mutasi) masuk peserta didik bermaterai Rp 10.000,- ke
              SMPN 244 Jakarta.
            </li>
            <li>
              Menyerahkan Surat Keterangan pindah lengkap dari sekolah asal,
              yang ditanda tangani Kepala Dinas Pendidikan/Suku Dinas
              Pendidikan/Kantor Cabang Dinas Pendidikan setempat.
            </li>
            <li>
              Menyerahkan surat izin operasional/pendirian Satuan Pendidikan
              bagi Peserta Didik yang berasal dari Satuan Pendidikan yang
              dikelola oleh masyarakat /dari sekolah swasta.
            </li>
            <li>
              Menyerahkan Surat Keterangan Pindah/Keluar yang diunduh dari
              aplikasi Dapodik sebagai bukti Peserta didik telah dikeluarkan
              datanya dari Dapodik Satuan Pendidikan asal setelah Peserta Didik
              diterima pada Satuan Pendidikan tujuan.
            </li>
            <li>
              Menyerahkan surat keterangan bahwa peserta didik yang bersangkutan
              tidak sedang menjalani sanksi karena melakukan pelanggaran tata
              tertib dari sekolah asal.
            </li>
            <li>
              Menyerahkan fotocopy SKHUN/SIDANIRA dan menunjukkan aslinya.
            </li>
            <li>Menyerahkan fotocopy NISN.</li>
            <li>
              Menyerahkan fotocopy Akte Kelahiran dan Kartu Keluarga (KK).
            </li>
            <li>
              Menyerahkan fotocopy 8355 bagi sekolah DKI atau Daftar Absensi
              siswa bagi sekolah luar DKI.
            </li>
            <li>
              Menyerahkan lembaran Keterangan Pindah Sekolah pada rapot yang
              sudah di tandatangani oleh Kepala Sekolah
            </li>
            <li>
              Menyerahkan Fotokopi seluruh rapot yang sudah dilegalisir dan
              Rapot Asli.
            </li>
          </ol>

          <div className="mt-6">
            <p>
              <strong>Catatan:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>No 1 s.d No. 2 diserahkan saat MENDAFTAR</li>
              <li>No 3 s.d No. 14 diserahkan setelah dinyatakan DITERIMA</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "lampiran",
      title: "LAMPIRAN",
      content: (
        <>
          <h3 className="text-lg font-semibold">
            Pengumuman Jadwal Mutasi tahun pelajaran 2024/2025
          </h3>
          <p className="text-gray-700 mt-2 text-justify leading-relaxed">
            Assalamualaikum Warahmatullahi Wabarakatuh, salam sejahtera kepada
            bapak dan ibu orang tua murid. Dengan kata ini kami akan sampaikan
            informasi terkait mutasi pada tahun pelajaran 2024/2025.
          </p>

          {/* PDF Viewer */}
          <div className="w-full h-[80vh] border rounded-md overflow-hidden shadow">
            <iframe
              title="PDF Viewer"
              src={samplePDF} // Replace with your actual PDF path
              className="w-full h-full"
            ></iframe>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className=" px-6 py-10 md:px-20 md:py-16">
        {/* Header */}
        <div className="-mb-10">
          <PageHeader
            title="Informasi Mutasi"
            breadcrumbs={[
              { label: "Beranda", href: "/" },
              { label: "Kesiswaan", href: "/info-peserta-didik" },
              { label: "Info Mutasi" }, // current page
            ]}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm mb-8">
        <img
          src={bannerMutasi}
          alt="Logo Jakarta"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
        {/* Expandable Sections */}
        <div className="space-y-3">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full bg-primary-base hover:bg-green-800 transition-all text-white px-6 py-4 flex items-center justify-between  duration-300"
              >
                <span className="font-medium text-left">{section.title}</span>
                <div className="flex-shrink-0 ml-4">
                  {expandedSections[section.id] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              {expandedSections[section.id] && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="text-gray-700 whitespace-pre-line overflow-x-auto">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to top button */}
    </>
  );
};
export default InfoMutasi;