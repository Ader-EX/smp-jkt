import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/ui/PageHeader";
import sekolahOne from "@/assets/fasilitas/sekolah-1.png";
import sekolahTwo from "@/assets/fasilitas/sekolah-2.png";
import komputer from "@/assets/fasilitas/komputer.png";
import perpus from "@/assets/fasilitas/perpus.png";
import menanam from "@/assets/banner/menanam.png";
import belajar from "@/assets/fasilitas/belajar.png";

const Fasilitas = () => {
  const facilities = [
    {
      title: "Gedung Sekolah",
      image: sekolahOne,
    },
    {
      title: "",
      image: sekolahTwo,
    },
    {
      title: "Ruang Belajar",
      image: belajar,
    },
    {
      title: "Lapangan Olahraga",
      image: menanam,
    },
    {
      title: "Lab Komputer",
      image: komputer,
    },
    {
      title: "Perpustakaan",
      image: perpus,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <PageHeader
          title="Fasilitas"
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Profil", href: "/profil-sekolah" },
            { label: "Fasilitas" }, // current page
          ]}
        />

        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 text-black px-3 py-1 text-sm font-semibold mb-4">
            Tentang
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Fasilitas Sekolah
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">
            FASILITAS UNGGULAN
          </h2>
        </div>

        {/* First Row - 2 Gedung Sekolah */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {facilities.slice(0, 2).map((facility, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pb-10">
                    <h3 className="text-white text-xl font-semibold">
                      {facility.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Facilities - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.slice(2).map((facility, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-lg font-semibold">
                      {facility.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fasilitas;
