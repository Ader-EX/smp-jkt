import EkskulGridGrid from "@/components/EkskulGridGrid";
import GaleriGridGrid from "@/components/GaleriGridGrid";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

const Galeri = () => {
  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
      <div className="">
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
