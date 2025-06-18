import EkskulGridGrid from "@/components/EkskulGridGrid";
import GaleriGridGrid from "@/components/GaleriGridGrid";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

const Galeri = () => {
  return (
    <div className="min-h-screen  py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <PageHeader
          title="Galeri"
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Kegiatan", href: "/" },
            { label: "Galeri" }, // current page
          ]}
        />
        <GaleriGridGrid />
      </div>
    </div>
  );
};

export default Galeri;
