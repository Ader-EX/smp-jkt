import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/ui/PageHeader";
import menanam from "@/assets/banner/menanam.png";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <PageHeader
          title="Profil Sekolah"
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Profil", href: "/profil-sekolah" },
            { label: "Profil Sekolah" },
          ]}
        />

        {/* About Us Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            TENTANG KAMI
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-96 md:h-[400px] lg:h-[400px]">
              <img
                src={menanam}
                alt="SMP NEGERI 244 JAKARTA"
                className="w-full h-full object-cover rounded-md shadow"
              />
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-justify leading-relaxed">
                SMP NEGERI 244 JAKARTA adalah salah satu sekolah pendidikan
                tingkat Sekolah Menengah Pertama (SMP) yang berlokasi di wilayah
                Cilangkap, Jakarta Utara. Dil sekolah ini berposisi di bawah
                naungan Kementerian Pendidikan dan Kebudayaan Republik
                Indonesia, dengan komitmen kuat untuk menciptakan lingkungan
                belajar yang nyaman.
              </p>
              <p className="text-justify leading-relaxed">
                Sekolah ini memiliki sistem pembelajaran Sekolah Ramah Anak
                (Full Day School) dengan durasi 8 jam dalam sehari. SMPN 244
                Jakarta telah mengembangkan lingkungan belajar yang nyaman,
                kondusif, dan AKHLAK MULIA untuk membantu tumbuh kembang siswa
                secara optimal serta dan menghasilkan lulusan non-akademik.
              </p>
              <p className="text-justify leading-relaxed">
                SMP NEGERI 244 JAKARTA telah terakreditasi A, berdasarkan
                sertifikat No. 477/BAP-S/M/SK/2015. Hal ini menunjukkan bahwa
                sekolah telah memenuhi standar mutu pendidikan yang tinggi dari
                Badan Akreditasi Nasional. Dengan mengimplementasikan Kurikulum
                Merdeka.
              </p>
            </div>
          </div>
        </div>

        {/* Four Cards Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Brief History */}
          <Card className="h-full">
            <CardHeader className="bg-white text-white">
              <CardTitle className="text-center text-4xl text-primary-base">
                SEJARAH SINGKAT
              </CardTitle>
              <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2"></div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-gray-700">
                <p>
                  Perjalanan berdirinya SMP NEGERI 244 JAKARTA diawali dari
                  bentuk kelas jauh yang menjadi sebuah pendidikan menuju berkas
                  dari sekolah- sekolah sebelum:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>1982 - 1985</li>
                  <li>SMP Negeri 196 Jakarta</li>
                  <li>1985</li>
                  <li>
                    Berdasarkan Surat Keputusan Kamal No. 0888/0/1985, sekolah
                    resmi menjadi SMP NEGERI 244 JAKARTA
                  </li>
                </ul>
                <p>
                  Sejak saat itu, sekolah terus berkembang dalam hal fasilitas,
                  kualitas pengajaran, serta prestasi siswa di berbagai bidang.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Support Facilities */}
          <Card className="h-full">
            <CardHeader className="bg-white text-white">
              <CardTitle className="text-center text-4xl text-primary-base">
                FASILITAS PENUNJANG
              </CardTitle>
              <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2"></div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-gray-700">
                <p>
                  Untuk mendukung proses pembelajaran yang optimal, SMP NEGERI
                  244 JAKARTA telah dilengkapi dengan fasilitas berikut:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Lantai: Menggunakan sumber daya dari PLN</li>
                  <li>
                    Akses Internet: Terhubung dengan jaringan internet dari
                    Telkom
                  </li>
                  <li>Air Bersih: Dari PDAM</li>
                  <li>
                    Waktu Belajar: Menggunakan sistem Sekolah Ramah Anak (Full
                    Day School), dengan pembelajaran berlangsung selama 8 jam
                    dalam sehari
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Motto */}
          <Card className="h-full">
            <CardHeader className="bg-white text-white">
              <CardTitle className="text-center text-4xl text-primary-base">
                MOTTO
              </CardTitle>
              <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2"></div>
            </CardHeader>
            <CardContent className="p-6 flex items-center justify-center">
              <p className="text-center text-gray-700 font-medium text-lg">
                Unggul Prestasi, Luhur Jati Diri, Tanggap Teknologi
              </p>
            </CardContent>
          </Card>

          {/* Slogan */}
          <Card className="h-full">
            <CardHeader className="bg-white text-white">
              <CardTitle className="text-center text-4xl text-primary-base">
                SLOGAN
              </CardTitle>
              <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2"></div>
            </CardHeader>
            <CardContent className="p-6 flex items-center justify-center">
              <p className="text-center text-gray-700 font-medium text-lg">
                IMPIAN (Iman, Rajin, dan Nyaman)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
