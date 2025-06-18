import PageHeader from "@/components/ui/PageHeader";
import React from "react";
import menanam from "@/assets/banner/menanam.png";

const VisionMission = () => {
  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
      {/* Header */}
      <PageHeader
        title="Visi dan Misi"
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Profil", href: "/profil-sekolah" },
          { label: "Visi dan Misi" },
        ]}
      />

      {/* Vision Section */}
      <div className="bg-white rounded-lg shadow-sm mb-8">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            VISI SEKOLAH
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-8">
          {/* School Image */}
          <div className="flex items-center justify-center">
            <div className="bg-gray-200 rounded-lg overflow-hidden w-full h-full">
              <img
                src={menanam}
                alt="Modern School Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Vision Content */}
          <div className="text-gray-700 space-y-4">
            <p className="font-medium text-primary-base text-justify">
              <span className="text-yellow-500">&quot;</span>Unggul dalam
              prestasi, cerdas berkarakter, peduli lingkungan dan berwawasan
              global<span className="text-yellow-500">&quot;</span>
            </p>

            <div className="space-y-3">
              <h3 className="font-bold text-gray-800">Indikator Visi:</h3>
              <h4 className="font-semibold">Berprestasi;</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  Terwujudnya lulusan prestasi berbasis ketampilan hidup dan
                  mampu bersaing di ranah nasional maupun internasional.
                </li>
                <li>
                  Terwujudnya peningkatan prestasi akademik dan non akademik
                  siswa di tingkat regional, nasional, dan tingkat
                  internasional.
                </li>
                <li>
                  Terwujudnya lulusan yang mampu berkomunikasi menggunakan
                  bahasa Inggris sederhana.
                </li>
                <li>
                  Terwujudnya lulusan yang mampu melaksanakan penelitian ilmiah
                  sederhana.
                </li>
              </ul>

              <h4 className="font-semibold mt-4">Cerdas berkarakter;</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  Terwujudnya peserta didik yang cerdas komprehensif, yaitu
                  cerdas spiritual, cerdas emosional, cerdas sosial, cerdas
                  intelektual, dan cerdas kinestetik.
                </li>
                <li>
                  Terwujudnya peserta didik yang taat pada ajaran agama dan
                  berakhlak mulia.
                </li>
                <li>
                  Terwujudnya peserta didik yang jujur, toleran, disiplin dan
                  bertanggung jawab, jujur, memiliki kepedulian, kepekaan,
                  keterampilan, baik pada diri sendiri, makhluk, dan lingkungan
                  sekitar, memahami, menghayati, gotong royong, berani, tekun,
                  damai anti kekerasan, kreatif dan inovatif.
                </li>
              </ul>

              <h4 className="font-semibold mt-4">Peduli lingkungan:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  Terwujudnya budaya dan lingkungan sekolah yang kondusif,
                  bersih, sehat, indah, dan nyaman.
                </li>
                <li>
                  Terwujudnya lingkungan sekolah sebagai sumber belajar
                  konekstual dalam pembelajaran.
                </li>
              </ul>

              <h4 className="font-semibold mt-4">Berwawasan global:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  Terwujudnya peserta didik yang kreatif, inovatif, berfikrat,
                  mampu menggunakan teknologi dengan bijak dan menciptakan
                  produk yang bermanfaat bagi masyarakat sekolah.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">MISI SEKOLAH</h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-[1fr_1.3fr] gap-8">
            {/* Mission Content */}
            <div className="text-gray-700 space-y-4">
              <p className="text-justify mb-6">
                Sesuai dengan visi yang telah dirumuskan dan untuk mewujudkan
                visi tersebut diperlukan suatu misi. Adapun Misi dari SMP Negeri
                ... yang dirumuskan berdasarkan visi adalah sebagai berikut:
              </p>

              <ol className="list-decimal list-inside space-y-3 text-sm">
                <li>
                  Menciptakan peserta didik yang kreatif, inovatif bermoral
                  serta, dan bermental tangguh.
                </li>
                <li>
                  Melaksanakan pembelajaran untuk berbagai tingkat kemampuan
                  dalam kehidupan sehari-hari.
                </li>
                <li>
                  Melaksanakan peserta didik yang berani, menghargai setiap
                  perbedaan dalam kehidupan bermasyarakat dan bertanggung jawab.
                </li>
                <li>
                  Menciptakan multi pelajar melalui pertukaran kebudayaan
                  terhadap yang telah rumah dll, bermacam destinasi dengan
                  menggalakkan budaya baca, dan bijaksana serta menghargai
                  kesetaraan dan hak.
                </li>
                <li>
                  Memotivasi cinta lingkungan dan memenfaatkan lingkungan
                  sebagai media belajar.
                </li>
                <li>
                  Menumbuhkan pemberdayaan yang bermoral dan berkelanjutan
                  dengan literasi dan numerasi berbasis teknologi.
                </li>
                <li>
                  Menumbuhkan managemen sarana pendidikan yang otentik,
                  berkarakter, dan berjiwa mutu pendidikan yang unggul.
                </li>
                <li>
                  Menjamin hak belajar semua anak tanpa terkecuali termasuk anak
                  yang berkebutuhan khusus (inklusi) dalam proses pembelajaran
                  yang menaurangi semua jenis perbedaan secara adil untuk dapat
                  mengekspresikan segala potensi yang dimiliki dengan maksimal
                  menciptakan suasana pembelajaran yang mewadahi kreatifitas
                  pelajar yang beragam kompetensi.
                </li>
                <li>Menciptakan perilaku hidup bersih dan sehat.</li>
              </ol>
            </div>

            {/* School Image */}
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 rounded-lg overflow-hidden w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?..."
                  alt="Modern School Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">MISI SEKOLAH</h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-gray-200 rounded-lg overflow-hidden w-[50%] h-[50%]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?..."
                alt="Modern School Building"
                className=" object-cover"
              />
            </div>
          </div>

          <div className="">
            {/* Mission Content */}
            <div className="text-gray-700 space-y-4">
              <p className="text-justify my-6">
                Tujuan yang ingin dicapai SMP Negeri 244 sebagai bentuk untuk
                mewujudkan visi sekolah yang tealah ditetapkan adalah sebagai
                berikut:
              </p>

              <ol className="list-decimal list-inside space-y-3 text-sm">
                <li>
                  Membentuk peserta didik yang mengimplementasikan Profil
                  Pelajar Pancasila dalam sikap dan tindakan nyata.
                </li>
                <li>
                  Menghasilkan peserta didik berprestasi melalui kebiasaan
                  penelitian sederhana dan ide kreatif yang bermanfaat bagi
                  lingkungan.
                </li>
                <li>
                  Membentuk budaya literasi, numerasi, dan kemampuan bahasa
                  Inggris komunikatif sesuai tuntutan Abad 21 melalui
                  pembelajaran aktif, kreatif, efektif, dan kontekstual
                  (Akrefektual).
                </li>
                <li>
                  Menyelenggarakan pembelajaran yang memacu daya nalar kritis,
                  kreatif, inovatif serta bijak dalam menggunakan teknologi.
                </li>
                <li>
                  Menciptakan peserta didik yang mampu berpikir kritis dalam
                  kegiatan berbasis proyek dengan mengedepankan dimensi Profil
                  Pelajar Pancasila.
                </li>
                <li>
                  Membentuk kepedulian terhadap lingkungan melalui kebiasaan
                  merawat dan mengelola limbah secara berkelanjutan.
                </li>
                <li>
                  Mengoptimalkan sarana dan prasarana sekolah dalam mendukung
                  ide/gagasan berbasis budaya lokal.
                </li>
                <li>
                  Menumbuhkan budaya hidup bersih dan sehat di kalangan peserta
                  didik.
                </li>
                <li>
                  Merancang pembelajaran berbasis kompetensi Abad 21 dengan ciri
                  khas sekolah dan daerah dalam semangat kebhinekaan global yang
                  harmonis.
                </li>
                <li>
                  Membentuk peserta didik yang berdaya saing tinggi,
                  berkarakter, taat beribadah, menghargai perbedaan, dan cinta
                  lingkungan serta bangsa.
                </li>
                <li>
                  Menghasilkan lulusan yang prestatif, memiliki keterampilan
                  hidup, mampu bersaing di tingkat regional dan nasional, serta
                  mampu berkomunikasi dalam bahasa Inggris sederhana.
                </li>
                <li>
                  Menghasilkan lulusan yang mengamalkan nilai-nilai Profil
                  Pelajar Pancasila dalam kehidupan sehari-hari.
                </li>
                <li>
                  Menciptakan peserta didik yang memiliki kompetensi vokasional
                  seperti budi daya tanaman kreatif dan jiwa kewirausahaan.
                </li>
                <li>
                  Menumbuhkan jiwa kepemimpinan yang bernalar kritis, tangguh,
                  percaya diri, serta menjunjung tinggi semangat gotong royong.
                </li>
                <li>
                  Menguasai kecakapan komunikasi sosial dan memiliki jiwa
                  kompetitif, kreatif, mandiri, serta menjunjung budaya lokal.
                </li>
                <li>
                  Membekali peserta didik dengan life skill agar mampu
                  beradaptasi terhadap perkembangan zaman.
                </li>
                <li>
                  Mengembangkan ide/gagasan menjadi karya nyata yang berpijak
                  pada budaya lokal dalam semangat kebhinekaan global.
                </li>
                <li>
                  Menumbuhkan karakter sopan, santun, mandiri, kreatif, serta
                  mampu bersaing di era modern.
                </li>
                <li>
                  Menjadikan sekolah sebagai tempat tumbuh kembang peserta didik
                  secara intelektual, emosional, sosial, dan keterampilan
                  berdasarkan potensi masing-masing, dengan mengedepankan nilai
                  gotong royong.
                </li>
                <li>
                  Mendorong peran serta masyarakat dan orang tua sebagai mitra
                  dalam penyelenggaraan pendidikan.
                </li>
                <li>
                  Menjalin kemitraan dan kerjasama dengan komite sekolah,
                  instansi lain, organisasi masyarakat, dan perguruan tinggi.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
