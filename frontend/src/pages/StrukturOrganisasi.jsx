import PageHeader from "@/components/ui/PageHeader";
import struktur from "../assets/struktur.png";

const StrukturOrganisasi = () => {
  return (
    <div>
      <section className="min-h-screen px-6 py-10 md:px-20 md:py-16">
        <PageHeader
          title="Tata Tertib"
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Profil", href: "/profil-sekolah" },
            { label: "Struktur Organisasi" }, // current page
          ]}
        />
        <div className="flex w-full justify-center">
          <img src={struktur} alt="Kalender Akademik" className="" />
        </div>

        <a
          href={struktur}
          download="struktur.png"
          className="mt-4 inline-block text-primary-base underline"
        >
          Unduh Gambar
        </a>
      </section>
    </div>
  );
};

export default StrukturOrganisasi;
