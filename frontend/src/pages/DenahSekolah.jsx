/* eslint-disable react/prop-types */
import { useState } from "react";
import { MapPin } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import ltOne from "../assets/denah/lt1.png";
import ltTwo from "../assets/denah/lt2.png";
import ltThree from "../assets/denah/lt3.png";
import ltFour from "../assets/denah/lt4.png";
import { Button } from "@/components/ui/button";

const DenahSekolah = () => {
  const [selectedFloor, setSelectedFloor] = useState(1);

  const floorPlans = {
    1: {
      title: "DENAH LANTAI 1 - SMP NEGERI 244 JAKARTA",
    },
    2: {
      title: "DENAH LANTAI 2 - SMP NEGERI 244 JAKARTA",
    },
    3: {
      title: "DENAH LANTAI 3 - SMP NEGERI 244 JAKARTA",
    },
    4: {
      title: "DENAH LANTAI 4 - SMP NEGERI 244 JAKARTA",
    },
  };

  const FloorPlanDisplay = ({ floor }) => {
    return (
      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 min-h-96">
        <h2 className="text-xl font-bold text-center mb-6 text-primary-bgText">
          {floorPlans[floor].title}
        </h2>

        {/* Mock floor plan layout */}
        <div className="relative border-2 border-primary-bgText bg-gray-50 h-100 mx-auto max-w-2xl">
          {/* Room layouts vary by floor */}
          {floor === 1 && (
            <>
              <img
                src={ltOne}
                alt="Denah Lantai 1"
                className="w-full h-full object-cover"
              />
            </>
          )}

          {floor === 2 && (
            <>
              <img
                src={ltTwo}
                alt="Denah Lantai 2"
                className="w-full h-full object-cover"
              />
            </>
          )}

          {floor === 3 && (
            <>
              <img
                src={ltThree}
                alt="Denah Lantai 3"
                className="w-full h-full object-cover"
              />
            </>
          )}

          {floor === 4 && (
            <>
              <img
                src={ltFour}
                alt="Denah Lantai 4"
                className="w-full h-full object-cover"
              />
            </>
          )}

          {/* Stairs indicator */}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
      {/* Header */}
      <PageHeader
        title="Denah Sekolah"
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Profil", href: "/profil-sekolah" },
          { label: "Denah Sekolah" }, // current page
        ]}
      />

      <h3 className="text-center font-bold text-2xl text-primary-base mb-4">
        DENAH SEKOLAH
      </h3>
      <div className="w-32 h-1 bg-secondary-hover mx-auto mb-8"></div>

      {/* Navigation Buttons */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex w-full gap-2 justify-between">
          {[1, 2, 3, 4].map((floor) => (
            <Button
              key={floor}
              onClick={() => setSelectedFloor(floor)}
              className={`px-8 py-3 w-full  font-medium transition-all duration-200 flex justify-center space-x-2 ${
                selectedFloor === floor
                  ? "bg-primary-base text-white shadow-lg"
                  : "bg-white text-primary-bgText hover:bg-green-50 hover:text-green-600 border border-gray-200"
              }`}
            >
              <MapPin className="w-4 h-4 self-center" />
              <span>Denah Lantai {floor}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Floor Plan Display */}
      <div className="max-w-6xl mx-auto">
        <FloorPlanDisplay floor={selectedFloor} />
      </div>

      {/* Back to Top Button */}
    </div>
  );
};

export default DenahSekolah;
