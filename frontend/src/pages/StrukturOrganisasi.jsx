import PageHeader from "@/components/ui/PageHeader";
import struktur from "../assets/struktur.png";

const StrukturOrganisasi = () => {
  return (
    <div>
      <section className="min-h-screen px-6 py-10 md:px-20 md:py-16">
        <PageHeader
          title="Struktur Organisasi"
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Profil", href: "/profil-sekolah" },
            { label: "Struktur Organisasi" }, // current page
          ]}
        />
        <h3 className="text-center font-bold text-2xl text-primary-base mb-4">
          STRUKTUR ORGANISASI
        </h3>
        <div className="w-32 h-1 bg-secondary-hover mx-auto mb-8"></div>
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
