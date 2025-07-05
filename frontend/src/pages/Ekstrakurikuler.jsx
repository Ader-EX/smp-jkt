import EkskulGridGrid from "@/components/EkskulGridGrid";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

const Ekstrakurikuler = () => {
  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
      <div className="">
        <PageHeader
          title="Ekstrakurikuler"
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Kesiswaan", href: "/info-peserta-didik" },
            { label: "Ekstrakurikuler" }, // current page
          ]}
        />
        <EkskulGridGrid />
      </div>
    </div>
  );
};

export default Ekstrakurikuler;
