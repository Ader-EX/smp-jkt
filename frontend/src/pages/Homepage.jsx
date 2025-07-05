/* eslint-disable react/prop-types */
import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
import Jumbotron from "../components/Jumbotron";

// Static assets for hero and sections
import menanam from "../assets/banner/menanam.png";
import mencetak from "../assets/banner/mencetak.png";
import pemuda from "../assets/banner/pemuda.png";

import pmr from "../assets/ekskul/pmr.png";
import basket from "../assets/ekskul/basket.png";
import pramuka from "../assets/ekskul/pramuka.png";
import padus from "../assets/ekskul/padus.png";
import rohis from "../assets/ekskul/rohis.png";

import perpus from "../assets/fasilitas/perpus.png";
import belajar from "../assets/fasilitas/belajar.png";
import komputer from "../assets/fasilitas/komputer.png";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Card } from "../components/ui/card";

// Lazy-loaded below-the-fold sections
const BeritaTerbaruSection = lazy(() => import("../components/BeritaCard"));
const PengumumanTerbaruSection = lazy(() =>
  import("../components/PengumumanCard")
);
const EkskulSection = lazy(() => import("../components/EkskulCard"));
const FasilitasSection = lazy(() => import("../components/FasilitasCard"));
const FAQSection = lazy(() => import("../components/FAQSection"));

const HomePage = () => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [aspectRatio, setAspectRatio] = useState({ width: 4, height: 4 });

  // Memoize static data
  const stats = useMemo(
    () => [
      { icon: "🏫", value: "25", label: "Ruang Kelas" },
      { icon: "🎓", value: "851", label: "Peserta Didik" },
      { icon: "🧮", value: "34", label: "Pendidik" },
      { icon: "👩‍🏫", value: "13", label: "Tenaga Pendidik" },
      { icon: "🎖️", value: "A", label: "Akreditasi" },
    ],
    []
  );

  const sampleNewsData = useMemo(
    () => [
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
    ],
    []
  );

  const ekskulData = useMemo(
    () => [
      { title: "PMR SMPN 244 Jakarta", images: [pmr] },
      { title: "ROHIS SMPN 244 Jakarta", images: [rohis] },
      { title: "Pramuka SMPN 244 Jakarta", images: [pramuka] },
      { title: "Paduan Suara SMPN 244 Jakarta", images: [padus] },
      { title: "Tim Basket SMPN 244 Jakarta", images: [basket] },
    ],
    []
  );

  const fasilitasData = useMemo(
    () => [
      { title: "Lapangan Olahraga", image: menanam },
      { title: "Gedung Sekolah", image: mencetak },
      { title: "Perpustakaan", image: perpus },
      { title: "Ruang Belajar", image: belajar },
      { title: "Lab Komputer", image: komputer },
    ],
    []
  );

  // Single resize listener updates slides & aspect ratio
  useEffect(() => {
    const calculateLayout = () => {
      const w = window.innerWidth;
      setVisibleSlides(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
      setAspectRatio(
        w >= 1024
          ? { width: 16, height: 6 }
          : w >= 768
          ? { width: 16, height: 9 }
          : { width: 4, height: 4 }
      );
    };
    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, []);

  return (
    <>
      {/* Hero Carousel deferred: fallback static image for faster LCP */}
      <Suspense
        fallback={
          <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
            <img
              src={mencetak}
              alt="|| SMP NEGERI 244 JAKARTA || Mencetak Pemimpin dengan Hati dan Aksi"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        }
      >
        <div className="relative">
          <CarouselProvider
            naturalSlideWidth={aspectRatio.width}
            naturalSlideHeight={aspectRatio.height}
            totalSlides={3}
            infinite
            isPlaying
            interval={5000}
          >
            <Slider>
              {[
                {
                  link: "/documentations",
                  image: mencetak,
                  title: "Mencetak Pemimpin dengan Hati dan Aksi",
                },
                {
                  link: "#services",
                  image: pemuda,
                  title: "Dari Pemuda Hari Ini, Lahir Pemimpin Esok Hari",
                },
                {
                  link: "/testimoni",
                  image: menanam,
                  title: "Menanam Nilai, Menuai Pemimpin Berkualitas",
                },
              ].map((slide, idx) => (
                <Slide index={idx} key={idx}>
                  <Jumbotron
                    welcomeText="|| SMP NEGERI 244 JAKARTA ||"
                    title={slide.title}
                    buttonLink={slide.link}
                    bgImage={slide.image}
                  />
                </Slide>
              ))}
            </Slider>

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

            <div className="flex justify-center mt-4 space-x-2">
              <DotGroup
                renderDots={({ currentSlide, totalSlides }) =>
                  Array.from({ length: totalSlides }).map((_, idx) => (
                    <Dot
                      key={idx}
                      slide={idx}
                      className={`w-3 h-3 mr-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide
                          ? "bg-secondary-hover"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))
                }
              />
            </div>
          </CarouselProvider>
        </div>
      </Suspense>

      {/* Welcome & Stats */}
      <section className="px-4 md:px-12 lg:px-20 py-12 bg-white">
        <div className="max-w-5xl mx-auto text-center md:text-left mb-12">
          <p className="border-l-4 border-yellow-400 pl-6 text-yellow-400 mb-0 text-xl">
            <span className="text-gray-600">Selamat Datang di</span>
          </p>
          <p className="text-2xl md:text-3xl font-bold text-primary-base mb-4">
            Website SMP Negeri 244 Jakarta
          </p>
          <p className="text-primary-bgText text-sm md:text-base leading-relaxed">
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
            dan masyarakat.
          </p>
        </div>

        <Card>
          <p className="border-l-4 border-yellow-400 pl-4 text-yellow-400 mb-0 text-xl">
            <span className="text-gray-600">Informasi</span>
          </p>
          <h4 className="text-2xl md:text-3xl mt-2 font-bold text-primary-base mb-8">
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
        </Card>
      </section>

      {/* Lazy-loaded sections below the fold */}
      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
        <BeritaTerbaruSection newsData={sampleNewsData} />
        <PengumumanTerbaruSection newsData={sampleNewsData} />
        <FasilitasSection facilities={fasilitasData} />
        <EkskulSection newsData={ekskulData} />
        <FAQSection />
      </Suspense>
    </>
  );
};

export default HomePage;
