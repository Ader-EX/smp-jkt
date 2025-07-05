/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";

import menanam from "../assets/banner/menanam.png";
import mencetak from "../assets/banner/mencetak.png";
import pemuda from "../assets/banner/pemuda.png";
// import DotGroup from "pure-react-carousel/lib/components/DotGroup";
import { Dot, DotGroup } from "pure-react-carousel";
import pmr from "../assets/ekskul/pmr.png";
import basket from "../assets/ekskul/basket.png";
import pramuka from "../assets/ekskul/pramuka.png";
import padus from "../assets/ekskul/padus.png";
import rohis from "../assets/ekskul/rohis.png";
import perpus from "@/assets/fasilitas/perpus.png";
import belajar from "@/assets/fasilitas/belajar.png";
import komputer from "@/assets/fasilitas/komputer.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import BeritaTerbaruSection from "@/components/BeritaCard";
import PengumumanTerbaruSection from "@/components/PengumumanCard";
import EkskulSection from "@/components/EkskulCard";
import FasilitasSection from "@/components/FasilitasCard";
import FAQSection from "@/components/FAQSection";

const HomePage = () => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const stats = [
    { icon: "🏫", value: "25", label: "Ruang Kelas" },
    { icon: "🎓", value: "851", label: "Peserta Didik" },
    { icon: "🧮", value: "34", label: "Pendidik" },
    { icon: "👩‍🏫", value: "13", label: "Tenaga Pendidik" },
    { icon: "🎖️", value: "A", label: "Akreditasi" },
  ];
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
  const ekskulData = [
    {
      title: "PMR SMPN 244 Jakarta",
      images: [pmr],
    },
    {
      title: "ROHIS SMPN 244 Jakarta",
      images: [rohis],
    },
    {
      title: "Pramuka SMPN 244 Jakarta",
      images: [pramuka],
    },
    {
      title: "Paduan Suara SMPN 244 Jakarta",
      images: [padus],
    },
    {
      title: "Tim Basket SMPN 244 Jakarta",
      images: [basket],
    },
  ];
  const fasilitasData = [
    {
      title: "Lapangan Olahraga",
      image: menanam,
    },
    {
      title: "Gedung Sekolah",
      image: mencetak,
    },
    {
      title: "Perpustakaan",
      image: perpus,
    },
    {
      title: "Ruang Belajar",
      image: belajar,
    },
    {
      title: "Lab Komputer",
      image: komputer,
    },
  ];

  const updateVisibleSlides = () => {
    if (window.innerWidth >= 1024) {
      setVisibleSlides(3);
    } else if (window.innerWidth >= 768) {
      setVisibleSlides(2);
    } else {
      setVisibleSlides(1);
    }
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const [aspectRatio, setAspectRatio] = useState({ width: 4, height: 4 });

  const updateAspectRatio = () => {
    if (window.innerWidth >= 1024) {
      setAspectRatio({ width: 16, height: 6 });
    } else if (window.innerWidth >= 768) {
      setAspectRatio({ width: 16, height: 9 });
    } else {
      setAspectRatio({ width: 4, height: 4 });
    }
  };

  useEffect(() => {
    updateAspectRatio();
    window.addEventListener("resize", updateAspectRatio);
    return () => window.removeEventListener("resize", updateAspectRatio);
  }, []);

  return (
    <>
      <div className="relative">
        <CarouselProvider
          naturalSlideWidth={aspectRatio.width}
          naturalSlideHeight={aspectRatio.height}
          totalSlides={3}
          infinite
          isPlaying
          interval={5000}
        >
          <div className="relative">
            <Slider>
              <Slide index={0}>
                <Jumbotron
                  welcomeText={"|| SMP NEGERI 244 JAKARTA ||"}
                  title={"“Mencetak Pemimpin dengan Hati dan Aksi”"}
                  description={""}
                  buttonText={""}
                  buttonLink="/documentations"
                  bgImage={mencetak}
                />
              </Slide>
              <Slide index={1}>
                <Jumbotron
                  welcomeText={"|| SMP NEGERI 244 JAKARTA ||"}
                  title={"“Dari Pemuda Hari Ini, Lahir Pemimpin Esok Hari”"}
                  description={""}
                  buttonText={""}
                  buttonLink="#services"
                  bgImage={pemuda}
                />
              </Slide>
              <Slide index={2}>
                <Jumbotron
                  welcomeText={"|| SMP NEGERI 244 JAKARTA ||"}
                  title={"“Menanam Nilai, Menuai Pemimpin Berkualitas”"}
                  description={""}
                  buttonText={""}
                  buttonLink="/testimoni"
                  bgImage={menanam}
                />
              </Slide>
            </Slider>

            {/* Left Navigation Button */}
            <ButtonBack className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </ButtonBack>

            {/* Right Navigation Button */}
            <ButtonNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </ButtonNext>
          </div>

          {/* Optional: Dot indicators at the bottom */}
          <div className="flex justify-center mt-4 space-x-2">
            <DotGroup
              className="flex space-x-2"
              dotNumbers={[0, 1, 2]}
              renderDots={({ currentSlide, totalSlides }) =>
                Array.from({ length: totalSlides }, (_, index) => (
                  <Dot
                    key={index}
                    slide={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-yellow-400"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))
              }
            />
          </div>
        </CarouselProvider>
      </div>
      <section className="px-4 md:px-12 lg:px-20 py-12 bg-white">
        {/* Welcome Section */}
        <div className="max-w-5xl mx-auto text-center md:text-left mb-12">
          <p className="border-l-4 border-yellow-400 pl-6 text-yellow-400 mb-0 text-xl">
            <span className="text-gray-600">Selamat Datang di</span>
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            Website SMP Negeri 244 Jakarta
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Website ini merupakan sarana utama dalam menyebarkan informasi
            kepada masyarakat luas. Selain sebagai pusat informasi akademik,
            kesiswaan, dan berbagai kegiatan sekolah, platform ini juga
            berfungsi sebagai media komunikasi yang menghubungkan seluruh elemen
            sekolah.
            <br />
            <br />
            Melalui pengembangan yang berkelanjutan, website SMP Negeri 244
            Jakarta diharapkan dapat menjadi sumber informasi yang lengkap dan
            mudah diakses oleh masyarakat. Selain itu, website ini juga berperan
            dalam mendukung perkembangan tenaga pendidik dan siswa, sekaligus
            memperkuat komunikasi antara pihak sekolah, alumni, orang tua siswa,
            dan masyarakat. Dengan adanya sinergi yang terjalin, sekolah dapat
            terus berkembang menjadi lingkungan pendidikan yang inovatif dan
            berdaya saing tinggi.
          </p>
        </div>

        {/* Data Sekolah Box */}
        <div className="bg-white shadow-lg border rounded-none max-w-6xl mx-auto p-6">
          <p className="border-l-4 border-yellow-400 pl-4 text-yellow-400 mb-0 text-xl">
            <span className="text-gray-600">Informasi</span>
          </p>
          <h4 className="text-2xl md:text-3xl font-bold text-green-800 mb-8">
            Data Sekolah
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-2xl font-bold text-gray-900">
                  {item.value}
                </div>
                <div className="text-lg text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BeritaTerbaruSection newsData={sampleNewsData} />
      <PengumumanTerbaruSection newsData={sampleNewsData} />
      <FasilitasSection facilities={fasilitasData} />
      <EkskulSection newsData={ekskulData} />
      <FAQSection />
    </>
  );
};

export default HomePage;
