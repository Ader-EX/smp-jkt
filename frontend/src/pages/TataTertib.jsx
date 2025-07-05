import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import jakarta from "@/assets/jakarta.png";
import { Button } from "@/components/ui/button";

const TataTertib = () => {
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
      title: "I. DASAR HUKUM",
      content: `Undang-Undang No. 35 Tahun 2014: Tentang Perubahan atas Undang-Undang No. 23 Tahun 2002 tentang Perlindungan Anak

1. Undang-Undang RI No. 35 Tahun 2009: Tentang Narkoba
2. Permendikbud No. 23 Tahun 2015: Tentang Penciptaan Iklim Sekolah yang Menyenangkan dan Penumbuhan Budi Pekerti
3. Permendikbud No. 82 Tahun 2015: Tentang Pencegahan dan Penanggulangan Tindak Kekerasan di Lingkungan Sekolah
4. Peraturan Pemerintah No. 74 Tahun 2008: Tentang Guru
5. Permendikbud No. 64 Tahun 2015: Tentang Kawasan Tanpa Rokok di Lingkungan Sekolah
6. Pergub No. 179, Tahun 2014: Tentang Manajemen Sekolah
7. Pergub No. 330, Tahun 2014: Tentang Pembentukan Organisasi dan Tata Kerja SMP Negeri
8. Pergub No. 175, Tahun 2014: Tentang Jam Masuk Sekolah
9. Pergub No. 178, Tahun 2014: Tentang Pakaian Seragam Sekolah
10. Pergub No. 12, Tahun 2015: Tentang Komite Sekolah
11. Ingub No. 16 Tahun 2015: Tentang Bullying
12. Instruksi Kadisdik Provinsi DKI Jakarta No. 68 Tahun 2014: Tentang Sekolah dan Peserta Didik yang Cinta Damai dan Anti Kekerasan
13. Surat Edaran Kadisdik Provinsi DKI Jakarta No. 3/SE/2015: Tentang Tindak Lanjut Paska Deklarasi
14. Surat Edaran Kadisdik Provinsi DKI Jakarta No. 67/SE/2015: Tentang Larangan Membawa Kendaraan Roda Dua dan Roda Empat bagi Peserta Didik`,
    },
    {
      id: "umum",
      title: "II. UMUM",
      content: `Pendidikan Nasional berfungsi mengembangkan kemampuan dan membentuk watak serta peradaban bangsa dan bermartabat dalam rangka mencerdaskan kehidupan bangsa, bertujuan untuk berkembangnya potensi peserta didik agar menjadi manusia yang beriman dan bertakwa kepada Tuhan Yang Maha Esa, berakhlak mulia, sehat, berilmu, cakap, kreatif, mandiri dan menjadi warga Negara Indonesia yang demokratis serta bertanggung jawab.`,
    },
    {
      id: "khusus",
      title: "III. KHUSUS",
      content: `Tata Tertib SMP di DKI Jakarta adalah ketentuan yang mengatur kegiatan sehari-hari demi terwujudnya situasi dan kondisi yang kondusif untuk tercapainya hasil belajar yang maksimal bagi peserta didik. Tata tertib ini sebagai **ACUAN DASAR STANDAR MINIMAL** yang dapat dikembangkan di masing-masing sekolah.`,
    },
    {
      id: "aturan-seragam",
      title:
        "V. ATURAN SERAGAM SEKOLAH, PENAMPILAN, KEHADIRAN DAN SANKSI PELANGGARAN",
      content: `A. SERAGAM SEKOLAH
Mengenakan pakaian seragam sesuai dengan peraturan yang ditetapkan Pemerintah Provinsi DKI Jakarta dengan ketentuan sesuai Pergub No. 178 Th.2014 Tentang Pakaian Seragam Sekolah.
Senin (putih biru lengkap dengan atributnya)
Selasa (putih biru lengkap dengan atributnya)
Rabu (Pramuka lengkap dengan atributnya)
Kamis (Batik sekolah)
Jum’at (Pakaian Sadariah)

B. PENAMPILAN PESERTA DIDIK
Tata rias peserta didik sederhana dan tidak berlebihan, tidak mengenakan perhiasan.
Batas rambut peserta didik putra tidak melebihi leher baju, alis mata dan daun telinga serta tidak dicat.
Rambut peserta didik putri diikat rapi dan tidak dicat.
Peserta didik dilarang bertato/tindik.

C. KEHADIRAN PADA KBM / JAM BELAJAR PESERTA DIDIK
Jam belajar peserta didik dimulai:
a. Senin - Kamis: 06.30 s.d 13.50 WIB
b. Jum’at: 06.15 s.d 14.20 WIB (sholat Jum’at di Masjid sekolah)
c. Setiap peserta didik harus sudah berada di sekolah sekurang-kurangnya 10 menit sebelum jam pertama dimulai.

Apabila peserta didik terlambat, wajib lapor ke guru piket dan setelah diizinkan baru diperkenankan masuk mengikuti pelajaran yang sedang berlangsung. Peserta didik yang terlambat lebih dari 10 menit harus menunggu sampai 1 jam pelajaran selesai. Jika terulang sampai 3 kali, akan dilakukan pemanggilan orang tua.

Apabila seorang peserta didik tidak hadir di sekolah maka hari pertama masuk sekolah harus membawa surat keterangan yang sah, antara lain:
- Surat keterangan orang tua/wali karena sakit atau halangan lainnya.
- Surat keterangan dari dokter karena sakit lebih dari 2 hari.

Apabila peserta didik meninggalkan sekolah pada jam pelajaran, maka harus mendapat persetujuan dari Kepala Sekolah/Wakil Kepala Sekolah melalui guru piket.

Peserta didik tidak diperkenankan meninggalkan ruang kelas selama pelajaran berlangsung, kecuali seizin guru yang sedang mengajar.

D. KLASIFIKASI DAN SANKSI PELANGGARAN

Klasifikasi Pelanggaran:

Ringan:
a. Membuang sampah sembarangan
b. Memakai seragam tidak sesuai dengan tata tertib sekolah
c. Berada di luar kelas/kantin pada jam pelajaran
d. Menerima tamu pada saat jam pelajaran
e. Memakai sepatu tidak sesuai tata tertib sekolah
f. Main kartu di lingkungan sekolah
g. Berdandan berlebihan, mencat rambut, kuku tangan dan kuku kaki
h. Memakai celana model pensil/ketat
i. Berambut gondrong (rambut panjang) untuk pria
j. Bermain bola pada saat jam pelajaran kecuali jam pelajaran olahraga
k. Mengadakan perayaan ulang tahun di sekolah secara berlebihan
l. Tidak melaksanakan piket kelas
m. Membawa tip-ex cair, cat semprot, atau sejenisnya ke sekolah
n. Membawa makanan/minuman ke kelas saat istirahat/KBM
o. Menggunakan HP saat pelajaran tanpa izin guru

Sedang:
a. Bertato, memakai anting, gelang dan kalung bagi peserta didik laki-laki
b. Memberi keterangan palsu, memalsukan surat/tanda tangan
c. Melakukan demonstrasi tanpa izin di dalam/luar sekolah
d. Mengendarai kendaraan tidak sesuai UU Lalu Lintas
e. Melompat pagar sekolah
f. Masuk/keluar sekolah saat pelajaran tanpa izin
g. Tidak mengikuti upacara
h. Tidak mengindahkan instruksi Kepala Sekolah atau guru
i. Tidak mengikuti kegiatan keagamaan/peringatan hari besar
j. Nongkrong di sekitar sekolah setelah jam pelajaran
k. Pelecehan terhadap orang lain
l. Mencemarkan nama baik sekolah atau guru

Berat:
- Mencuri barang orang lain
- Terlibat organisasi ilegal
- Menyebarkan informasi bohong di media sosial
- Membawa/menyebarkan konten porno
- Merokok (termasuk rokok elektrik)
- Berjudi
- Melawan guru/orang tua secara lisan/tulisan/media
- Melakukan kekerasan fisik/psikis
- Memukul guru/kepala sekolah
- Pacaran berlebihan/asusila
- Membawa senjata tajam/api
- Terlibat tawuran
- Hamil atau menghamili
- Menikah saat masih sekolah
- Menggunakan narkoba
- Merusak fasilitas sekolah

Sanksi Pelanggaran:

**Ringan:**
- Dicatat dalam kartu pembinaan
- Diberi nasehat
- Dibina oleh wali kelas/Guru BK
- Surat peringatan 1 setelah 5 pelanggaran
- Surat peringatan 2 setelah 10 pelanggaran
- Surat peringatan 3 setelah 15 pelanggaran

**Sedang:**
- Dicatat dalam buku pembinaan
- Diberi nasehat
- Orang tua dipanggil
- Dibina oleh Wali Kelas, Guru BK, dan orang tua
- Surat peringatan 1: setelah 1 pelanggaran
- Surat peringatan 2: setelah 2 pelanggaran
- Surat peringatan 3: setelah 3 pelanggaran

**Berat:**
- Orang tua dipanggil
- Pembinaan di luar sekolah oleh lembaga kompeten (3–5 hari)
- Dikembalikan ke orang tua dan dipindahkan ke sekolah lain
- Langsung diberi surat peringatan 3

KODE ETIK PESERTA DIDIK

Kode Etik Peserta Didik SMP Negeri merupakan standar perilaku yang mencerminkan akhlak dan ketaatan terhadap norma masyarakat:

- Bertaqwa kepada Tuhan YME
- Menghargai ilmu, teknologi, seni dan budaya
- Menghargai budaya Indonesia
- Mengamalkan visi dan misi sekolah
- Menjaga nama baik sekolah
- Menaati peraturan dan tata tertib
- Menghormati guru dan orang yang lebih tua
- Jujur, sopan, berpenampilan rapi
- Menghargai pendapat orang lain
- Menjaga kebersihan dan keindahan lingkungan sekolah
- Menghindari perbuatan tercela
- Menghormati perbedaan
- Menolak senioritas dan bullying
`,
    },
    {
      id: "penutup",
      title: "VI. PENUTUP",
      content: `Segala sesuatu yang belum diatur di dalam tata tertib sekolah ini akan ditentukan kemudian dan tata tertib ini berlaku sejak ditetapkan. Kami menghimbau agar semua pihak yang terkait untuk memahami dan melaksanakan tata tertib ini demi memajukan kegiatan belajar mengajar SMP Negeri di Jakarta.`,
    },
  ];

  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
      {/* Header */}
      <div className="mb-8">
        <PageHeader
          title="Tata Tertib"
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Profil", href: "/profil-sekolah" },
            { label: "Tata Tertib" }, // current page
          ]}
        />
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">
            TATA TERTIB, KLASIFIKASI PELANGGARAN, DAN
            <br />
            PENENTUAN SANKSI SISWA
            <br />
            SMP NEGERI DI JAKARTA
          </h2>
          <img
            src={jakarta}
            alt="Logo Jakarta"
            className="mx-auto mb-4 w-[170px] h-[170px]"
          />
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
              className="w-full bg-primary-base hover:bg-primary-base text-white px-6 py-4 flex items-center justify-between transition-colors duration-200"
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
                <div className="text-primary-bgText whitespace-pre-line">
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
export default TataTertib;
