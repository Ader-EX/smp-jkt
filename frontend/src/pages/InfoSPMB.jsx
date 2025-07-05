import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import alur from "@/assets/alur.png";
import linimasa from "@/assets/linimasa.png";
import jalur from "@/assets/ppdb.png";

import spnmb from "@/assets/spmb-banner.png";
import { Button } from "@/components/ui/button";

const InfoSPMB = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    {
      id: "dasar-hukum",
      title: "REGULASI TERKAIT SPMB",
      content: (
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>SK Kadisdik No. 94/2024</strong> tentang Petunjuk Teknis
            PPDB Bersama Tahun Pelajaran 2024/2025
          </li>
          <li>
            <strong>SK Kadisdik No. 93/2024</strong> tentang Petunjuk Teknis
            PPDB Tahun Pelajaran 2024/2025
          </li>
          <li>
            <strong>SK Kadisdik No. 92/2024</strong> tentang Daftar Zona
            Prioritas Untuk PPDB TP 2024/2025
          </li>
          <li>
            <strong>SK Kadisdik No. 91/2024</strong> tentang Daya Tampung Satuan
            Pendidikan Negeri pada PPDB TP 2024/2025
          </li>
          <li>
            <strong>Peraturan Gubernur DKI Jakarta No. 15/2024</strong> Tentang
            Penerimaan Peserta Didik Baru
          </li>
        </ul>
      ),
    },
    {
      id: "umum",
      title: "UNDUHAN BERKAS",
      content: (
        <ul className="list-disc pl-6 space-y-1">
          <li>SPTJM TIDAK BUTA WARNA PMB 2025</li>
          <li>Surat Keterangan Peringkat Rerarta Nilai Rapor 2025</li>{" "}
          <li>surat keterangan rapor pendidikan PMB</li> <li>sptjm PMB 2025</li>{" "}
          <li>Sosialisasi Pelaksanaan SPMB 2025</li> <li>Sura</li>{" "}
          <li>SPTJM Inklusi</li>{" "}
          <li>
            Link Sosialisasi:{" "}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-blue underline"
            >
              Klik di sini{" "}
            </a>{" "}
          </li>{" "}
        </ul>
      ),
    },
    {
      id: "jalur-penerimaan",
      title: "JALUR PENERIMAAN",
      content: (
        <div className="space-y-4">
          <div>
            <strong>1. Jalur Prestasi</strong>
            <p>
              Memberi apresiasi kepada peserta didik berprestasi akademik atau
              non-akademik.
            </p>
          </div>
          <div>
            <strong>2. Jalur Zonasi</strong>
            <p>
              Memprioritaskan lokasi tempat tinggal dekat sekolah tanpa kriteria
              prestasi.
            </p>
          </div>
          <div>
            <strong>3. Jalur Afirmasi</strong>
            <p>
              Diperuntukkan bagi keluarga tidak mampu dan penyandang
              disabilitas.
            </p>
          </div>
          <div>
            <strong>
              4. Jalur Perpindahan Tugas Orang Tua/Wali dan/atau Anak Guru
            </strong>
            <p>
              Untuk peserta didik dari orang tua/wali yang pindah tugas atau
              anak guru di tempat orang tuanya bertugas.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "jalur",
      title: "JALUR, PERSYARATAN, KUOTA, SELEKSI, LINIMASA PENDAFTARAN",
      content: (
        <div className="max-w-3xl overflow-auto">
          <img
            src={jalur}
            alt="Jalur Pendaftaran SPMB"
            className="w-full h-auto max-h-[none] object-contain"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      id: "linimasa",
      title: "LINIMASA PENDAFTARAN",
      content: (
        <div className="max-w-3xl overflow-auto">
          <img
            src={linimasa}
            alt="Linimasa Pendaftaran SPMB"
            className="w-full h-auto max-h-[none] object-contain"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      id: "alur-pendaftaran",
      title: "ALUR PENDAFTARAN",
      content: (
        <div className="max-w-3xl  overflow-auto">
          <img
            src={alur}
            alt="Alur Pendaftaran SPMB"
            className="w-full h-auto max-h-[none] object-contain"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      id: "pusat-bantuan",
      title: "PUSAT BANTUAN",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Layanan Informasi SMP Negeri 244 Jakarta
          </h2>
          <p>
            <strong>Contact Person:</strong> 0827361809 (Pak Nopis Wandi)
          </p>
          <p>
            <strong>Email:</strong> smpn.244.jkt@gmail.com
          </p>
          <p>
            <strong>Alamat:</strong> Jl. Bakti VI No.28, Cilincing, Kec.
            Cilincing, Jkt Utara, Daerah Khusus Ibukota Jakarta 14120
          </p>

          <div className="w-full h-96">
            {/* This is a placeholder for the Google Map iframe. 
        You'd typically embed the actual map iframe here with a src attribute pointing to the Google Maps embed URL. */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.154937872942!2d106.93537931180508!3d-6.10983139385115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a204095a6bca1%3A0xdb860410b8df1a7f!2sJunior%20High%20School%20State%20244%20Of%20JAKARTA!5e0!3m2!1sen!2sid!4v1750144920501!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SMPN 244 Jakarta Map"
            ></iframe>
          </div>

          <h2 className="text-xl font-semibold mt-8">
            Layanan Informasi Pusat
          </h2>
          <p>
            <a
              href="https://spmb.jakarta.go.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-blue underline"
            >
              Website SPMB Jakarta
            </a>
          </p>
        </div>
      ),
    },
    {
      id: "hasil-spmb",
      title: "HASIL SPMB",
      content: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Hasil SPMB SMP Tahun 2023/2024 :</li>
          <li>1. SIAP PPDB Online _ Provinsi DKI Jakarta Prestasi Akademik</li>
          <li>
            2. SIAP PPDB Online _ Provinsi DKI Jakarta Prestasi non akademik
          </li>
          <li>3. SIAP PPDB Online _ Provinsi DKI Jakarta Disabilitas</li>
          <li>4. SIAP PPDB Online _ Provinsi DKI Jakarta PTO</li>
          <li>5. SIAP PPDB Online _ Provinsi DKI Jakarta KJP Plus Dkk</li>
          <li>6. SIAP PPDB Online _ Provinsi DKI Jakarta ZONASI</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
      {/* Header */}
      <div className="mb-8">
        <PageHeader
          title="Informasi SPMB"
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Kesiswaan", href: "/info-peserta-didik" },
            { label: "Info SPMB" }, // current page
          ]}
        />
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="grid sm:grid-cols-2 grid-cols-1 border mt-12">
            <img
              src={spnmb}
              alt="Logo Jakarta"
              className="w-full h-full object-cover"
            />
            <img
              src={spnmb}
              alt="Logo Jakarta"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold text-black py-10 my-8 text-center">
            MEKANISME SISTEM PENERIMAAN MURID BARU <br />
            BERSAMA SMP NEGERI 244 JAKARTA
          </h2>
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="space-y-3">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <Button
              onClick={() => toggleSection(section.id)}
              className="w-full bg-primary-base hover:bg-primary-base transition-all text-white px-6 py-4 flex items-center justify-between  duration-300"
            >
              <span className="font-medium text-left">{section.title}</span>
              <div className="flex-shrink-0 ml-4">
                {expandedSections[section.id] ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </Button>
            {expandedSections[section.id] && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="text-primary-bgText whitespace-pre-line overflow-x-auto">
                  {section.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-gray-600 hover:bg-primary-bgText text-white p-3 rounded-full shadow-lg transition-colors duration-200"
      >
        <ChevronUp className="w-5 h-5" />
      </Button>
    </div>
  );
};
export default InfoSPMB;
