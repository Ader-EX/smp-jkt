import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";

// Imports for all your pages
import Profile from "../pages/Profile";
import VisiMisi from "../pages/VisiMisi";
import TataTertib from "../pages/TataTertib";
import StrukturOrganisasi from "../pages/StrukturOrganisasi";
import Kurikulum from "../pages/Kurikulum";
import DenahSekolah from "../pages/DenahSekolah";
import Guru from "../pages/Guru";
import StaffTU from "../pages/StaffTU";
import InfoPesertaDidik from "../pages/InfoPesertaDidik";
import InfoSPMB from "../pages/InfoSPMB";
import InfoMutasi from "../pages/InfoMutasi";
import Ekstrakurikuler from "../pages/Ekstrakurikuler";
import Prestasi from "../pages/Prestasi";
import Fasilitas from "../pages/Fasilitas";
import Berita from "../pages/Berita";
import Galeri from "../pages/Galeri";
import InfoKelasBaru from "../pages/InfoKelasBaru";

import Pengumuman from "../pages/Pengumuman";

import CBT from "../pages/CBT";
import HubungiKami from "../pages/HubungiKami";
import PengumumanDetail from "@/pages/PengumumanDetail";
import BeritaDetail from "@/pages/BeritaDetail";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profil-sekolah" element={<Profile />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/tata-tertib" element={<TataTertib />} />
        <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/kurikulum" element={<Kurikulum />} />
        <Route path="/denah-sekolah" element={<DenahSekolah />} />
        <Route path="/guru" element={<Guru />} />
        <Route path="/staff-tu" element={<StaffTU />} />
        <Route path="/info-peserta-didik" element={<InfoPesertaDidik />} />
        <Route path="/info-spmb" element={<InfoSPMB />} />
        <Route path="/info-mutasi" element={<InfoMutasi />} />
        <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} />
        <Route path="/prestasi-siswa" element={<Prestasi />} />
        <Route path="/fasilitas-sekolah" element={<Fasilitas />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<BeritaDetail />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/info-kelas-baru" element={<InfoKelasBaru />} />
        <Route path="/info-kelulusan" element={<InfoKelasBaru />} />
        <Route path="/pengumuman" element={<Pengumuman />} />
        <Route path="/pengumuman/:id" element={<PengumumanDetail />} />
        <Route path="/admin-cbt" element={<CBT />} />
        <Route path="/ujian-cbt" element={<CBT />} />
        <Route path="/hubungi-kami" element={<HubungiKami />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
