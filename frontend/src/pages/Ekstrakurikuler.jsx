import EkskulGridGrid from "@/components/EkskulGridGrid";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

const Ekstrakurikuler = () => {
  return (
    <div className="min-h-screen  py-8 px-4">
      <div className="max-w-6xl mx-auto">
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
