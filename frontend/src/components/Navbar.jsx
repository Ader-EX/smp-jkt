import { useState } from "react";
import {
  RiArrowDropDownLine,
  RiArrowDropRightLine,
  RiMailFill,
  RiPhoneFill,
} from "react-icons/ri";
import logo from "../assets/logo.png";

import IndonesianClock from "./IndonesianClock";
import SearchBar from "./Searchbar";

export const menuItems = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Profil",
    children: [
      { name: "Profil Sekolah", href: "/profil-sekolah" },
      { name: "Visi & Misi", href: "/visi-misi" },
      { name: "Tata Tertib", href: "/tata-tertib" },
      { name: "Struktur Organisasi", href: "/struktur-organisasi" },
      { name: "Kurikulum", href: "/kurikulum" },
      { name: "Denah Sekolah", href: "/denah-sekolah" },
    ],
  },
  {
    name: "Personil",
    children: [
      { name: "Guru", href: "/guru" },
      { name: "Staff Tata Usaha", href: "/staff-tu" },
    ],
  },
  {
    name: "Kesiswaan",
    children: [
      { name: "Info Peserta Didik", href: "/info-peserta-didik" },
      { name: "Info SPMB", href: "/info-spmb" },
      { name: "Info Mutasi", href: "/info-mutasi" },
      { name: "Ekstrakurikuler", href: "/ekstrakurikuler" },
      { name: "Prestasi Siswa", href: "/prestasi-siswa" },
    ],
  },
  {
    name: "Kegiatan",
    children: [
      { name: "Fasilitas Sekolah", href: "/fasilitas-sekolah" },
      { name: "Berita", href: "/berita" },
      { name: "Galeri", href: "/galeri" },
    ],
  },
  {
    name: "Pengumuman",
    children: [
      { name: "Info Kelas Baru", href: "/info-kelas-baru" },
      { name: "Info Kelulusan", href: "/info-kelulusan" },
      { name: "Pengumuman", href: "/pengumuman" },
    ],
  },
  {
    name: "CBT",
    children: [
      { name: "Admin CBT Server Cloud", href: "/admin-cbt" },
      { name: "Ujian CBT", href: "/ujian-cbt" },
    ],
  },
  {
    name: "Input Nilai Rapor",
    children: [
      { name: "E Rapor Kur-Mer", href: "http://36.94.124.5:7759/login" },
      { name: "Tengah Semester", href: "http://36.94.124.5:7759/login" },
      { name: "Rapor 5", href: "http://36.94.124.5:7759/login" },
    ],
  },
  {
    name: "Hubungi Kami",
    href: "/hubungi-kami",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeParentDropdown, setActiveParentDropdown] = useState(null);
  const [activeChildDropdown, setActiveChildDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleParentDropdownToggle = (key) => {
    setActiveParentDropdown((prev) => (prev === key ? null : key));
    setActiveChildDropdown(null);
  };

  const handleChildDropdownToggle = (key) => {
    setActiveChildDropdown((prev) => (prev === key ? null : key));
  };

  const renderDropdown = (children, parentKey, isMobile = false) => (
    <ul
      className={`${
        isMobile
          ? "flex-col items-start bg-white w-full border-l-2 border-secondary-hover ml-4 pl-4"
          : "flex flex-col bg-white shadow-lg  rounded-md w-full"
      }`}
    >
      {children.map((child, index) => {
        const childKey = `${parentKey}-${index}`;
        return (
          <li key={childKey} className={`relative ${isMobile ? "" : "group"}`}>
            <a
              href={child.href || "#"}
              className={`flex px-2 py-2 justify-between w-full ${
                isMobile
                  ? "text-primary-base py-2 font-medium hover:text-secondary-hover"
<<<<<<< HEAD
                  : "text-white bg-primary-base hover:bg-yellow-400 hover:text-black "
=======
                  : "text-white bg-primary-base hover:bg-secondary-hover hover:text-black "
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
              }`}
              onClick={(e) => {
                if (child.children) {
                  e.preventDefault();
                  handleChildDropdownToggle(childKey);
                }
              }}
            >
              {child.name}
              {child.children && (
                <span className="ml-2 text-xl self-center">
                  <RiArrowDropRightLine />
                </span>
              )}
            </a>
            {child.children && activeChildDropdown === childKey && (
              <div
                className={`${
                  isMobile
                    ? "flex w-full pl-4"
                    : "absolute left-full top-0 ml-2 w-48"
                }`}
              >
                {renderDropdown(child.children, childKey, isMobile)}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  const renderDesktopMenu = (items) => (
    <ul className="hidden md:flex flex-row items-center justify-center space-x-8 ">
      {items.map((item, index) => {
        const itemKey = `desktop-${index}`;
        return (
          <li key={itemKey} className="relative group">
            <a
              href={item.href || "#"}
<<<<<<< HEAD
              className="py-2 px-3 flex justify-center items-center font-semibold text-white hover:text-yellow-400 rounded"
=======
              className="py-2 px-3 flex justify-center items-center font-semibold text-white hover:text-secondary-hover rounded"
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
              onClick={(e) => {
                if (item.children) {
                  e.preventDefault();
                  handleParentDropdownToggle(itemKey);
                }
              }}
            >
              {item.name}
              {item.children && (
                <span className="ml-1 self-center">
                  <RiArrowDropDownLine className="text-xl" />
                </span>
              )}
            </a>
            {item.children && activeParentDropdown === itemKey && (
              <div className="absolute top-full left-0 mt-2 w-48">
                {renderDropdown(item.children, itemKey)}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  const renderMobileMenu = (items) => (
    <ul className="flex flex-col items-start space-y-1">
      {items.map((item, index) => {
        const itemKey = `mobile-${index}`;
        return (
          <li key={itemKey} className="flex flex-col items-start w-full">
            {item.href ? (
              <a
                href={item.href}
                className="flex items-center justify-between py-2 px-4 font-semibold text-white w-full hover:text-secondary-hover"
              >
                {item.name}
              </a>
            ) : (
              <div
                className="flex items-center justify-between py-2 px-4 font-semibold text-white w-full cursor-pointer hover:text-secondary-hover"
                onClick={() => handleParentDropdownToggle(itemKey)}
              >
                <span>{item.name}</span>
                {item.children && (
                  <button className="text-2xl">
                    <RiArrowDropDownLine />
                  </button>
                )}
              </div>
            )}
            {item.children && activeParentDropdown === itemKey && (
              <div className="w-full">
                {renderDropdown(item.children, itemKey, true)}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav className="border-gray-200 shadow-md w-full">
      <div className="bg-primary-base w-full py-2 md:py-4 px-2 md:px-4 text-white text-xs font-extralight">
<<<<<<< HEAD
        <div className="mx-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <section className="flex gap-2 items-center">
              <RiPhoneFill className="self-center text-xs" />
              <span className="text-xs">(021) 4400872</span>
            </section>
            <section className="flex gap-2 items-center">
=======
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <section className="flex gap-1 items-center">
              <RiPhoneFill className="self-center text-xs" />
              <span className="text-xs">(021) 4400872</span>
            </section>
            <section className="flex gap-1 items-center">
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
              <RiMailFill className="self-center text-xs" />
              <span className="text-xs">smpnegeri244@gmail.com</span>
            </section>
          </div>
          <div className="text-xs">
            <IndonesianClock />
          </div>
        </div>
      </div>

      {/* Logo and School Name Section */}
      <div className="flex w-full h-full justify-end items-center px-4 py-2 ">
        <div className="flex items-end justify-end">
          <SearchBar />
        </div>
      </div>

      <div className="w-full justify-center flex flex-col items-center py-3 md:py-6 px-4 bg-white">
        <img
          src={logo}
          alt="SMP Negeri 244 Jakarta Logo"
          className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain mb-2"
        />
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-center">
          SMP Negeri 244 Jakarta
        </h1>
        <h4 className="text-sm md:text-lg text-center text-gray-600">
          Mencetak Calon Pemimpin Bangsa
        </h4>
      </div>
      {/* Main Navigation */}
<<<<<<< HEAD
      <div className="w-full bg-red-500 mx-auto py-2 px-2 flex justify-center items-center">
=======
      <div className="w-full bg-primary-base mx-auto py-2 px-2 flex justify-center items-center">
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
        {renderDesktopMenu(menuItems)}

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none ml-auto"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Secondary color bar */}
<<<<<<< HEAD
      <div className="w-full bg-yellow-400 h-2"></div>
=======
      <div className="w-full bg-secondary-hover h-3"></div>
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-base p-4">
          {renderMobileMenu(menuItems)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
