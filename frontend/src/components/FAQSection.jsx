import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "Bagaimana cara mendaftar KJP Plus?",
      answer:
        "Untuk mendaftar KJP Plus, Anda perlu mengunjungi kantor kelurahan setempat dengan membawa dokumen yang diperlukan seperti KTP, KK, dan surat keterangan tidak mampu. Proses pendaftaran biasanya memakan waktu 2-3 hari kerja.",
    },
    {
      id: 2,
      question: "Bagaimana cara mendaftar Siswa Baru di SMPN 244 Jakarta?",
      answer:
        "Pendaftaran siswa baru dapat dilakukan melalui sistem online PPDB DKI Jakarta. Pastikan Anda telah menyiapkan dokumen seperti ijazah SD, akta kelahiran, dan kartu keluarga. Proses pendaftaran biasanya dibuka pada bulan Mei-Juni setiap tahunnya.",
    },
    {
      id: 3,
      question:
        "Kapan dan Bagaimana cara mendaftar mutasi siswa masuk ke SMPN 244 Jakarta?",
      answer:
        "Mutasi siswa dapat dilakukan setiap awal semester (Januari dan Juli). Anda perlu mengajukan permohonan mutasi ke sekolah asal dan SMPN 244 Jakarta dengan melengkapi dokumen seperti surat keterangan pindah, rapor, dan surat keterangan kelakuan baik.",
    },
  ];

  const toggleExpanded = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6  bg-gra">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <div className="w-1 h-8 bg-orange-400 mr-4"></div>
          <p className="text-gray-600 text-lg">
            Pertanyaan yang Sering Diajukan
          </p>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 ml-5">FAQ</h2>
      </div>

      {/* FAQ Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-gray-800 font-medium pr-4">
                  {item.question}
                </span>
                {expandedItems[item.id] ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              {expandedItems[item.id] && (
                <div className="px-6 pb-4 pt-0">
                  <div className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {faqData.slice(Math.ceil(faqData.length / 2)).map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-gray-800 font-medium pr-4">
                  {item.question}
                </span>
                {expandedItems[item.id] ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              {expandedItems[item.id] && (
                <div className="px-6 pb-4 pt-0">
                  <div className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
