import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "Bagaimana cara mendaftar KJP Plus?",
      answer: (
        <p>
          Silahkan klik{" "}
          <a
<<<<<<< HEAD
            href="https://kjp.jakarta.go.id/"
            className="underline text-green-600"
=======
            href="https://www.smpn167jakarta.sch.id/pendaftaran-dtks-2022/"
            className="underline"
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
          >
            di sini
          </a>{" "}
          untuk info selengkapnya
        </p>
      ),
    },
    {
      id: 2,
      question: "Bagaimana cara mendaftar Siswa Baru di SMPN 244 Jakarta?",
      answer: (
        <p>
          Silahkan klik{" "}
          <a
<<<<<<< HEAD
            href="http://localhost:5173/info-spmb"
            className="underline text-green-600"
=======
            href="https://www.smpn167jakarta.sch.id/pendaftaran-dtks-2022/"
            className="underline"
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
          >
            di sini
          </a>{" "}
          untuk info selengkapnya
        </p>
      ),
    },
    {
      id: 3,
      question:
        "Kapan dan Bagaimana cara mendaftar mutasi siswa masuk ke SMPN 244 Jakarta?",
      answer: (
        <p>
          Silahkan klik{" "}
          <a
<<<<<<< HEAD
            href="http://localhost:5173/info-mutasi"
            className="underline text-green-600"
=======
            href="https://www.smpn167jakarta.sch.id/pendaftaran-dtks-2022/"
            className="underline"
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
          >
            di sini
          </a>{" "}
          untuk info selengkapnya
        </p>
      ),
    },
    {
      id: 4,
      question: "Bagaimana cara mendaftar KJP Plus?",
      answer: (
        <p>
          Silahkan klik{" "}
          <a
<<<<<<< HEAD
            href="https://kjp.jakarta.go.id/"
            className="underline text-green-600"
=======
            href="https://www.smpn167jakarta.sch.id/pendaftaran-dtks-2022/"
            className="underline"
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
          >
            di sini
          </a>{" "}
          untuk info selengkapnya
        </p>
      ),
    },
    {
      id: 5,
      question: "Bagaimana cara mendaftar Siswa Baru di SMPN 244 Jakarta?",
      answer: (
        <p>
          Silahkan klik{" "}
          <a
<<<<<<< HEAD
            href="http://localhost:5173/info-spmb"
            className="underline text-green-600"
=======
            href="https://www.smpn167jakarta.sch.id/pendaftaran-dtks-2022/"
            className="underline"
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
          >
            di sini
          </a>{" "}
          untuk info selengkapnya
        </p>
      ),
    },
    {
      id: 6,
      question:
        "Kapan dan Bagaimana cara mendaftar mutasi siswa masuk ke SMPN 244 Jakarta?",
      answer: (
        <p>
          Silahkan klik{" "}
          <a
<<<<<<< HEAD
            href="http://localhost:5173/info-mutasi"
            className="underline text-green-600"
=======
            href="https://www.smpn167jakarta.sch.id/pendaftaran-dtks-2022/"
            className="underline"
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
          >
            di sini
          </a>{" "}
          untuk info selengkapnya
        </p>
      ),
    },
  ];

  const toggleExpanded = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
<<<<<<< HEAD
    <div className="max-w-6xl mx-auto p-6  bg-gray">
=======
    <div className="max-w-6xl mx-auto p-6  bg-gra">
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <div className="w-1 h-8 bg-yellow-400 mr-4"></div>
          <p className="text-gray-600 text-lg">
            Pertanyaan yang Sering Diajukan
          </p>
        </div>
<<<<<<< HEAD
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-8">FAQ</h2>
=======
        <h2 className="text-3xl font-bold text-gray-800 ml-5">FAQ</h2>
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
      </div>

      {/* FAQ Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item) => (
            <div
              key={item.id}
<<<<<<< HEAD
              className="border border-gray-300 rounded-none overflow-hidden"
=======
              className="border border-gray-300 rounded-lg overflow-hidden"
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
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
<<<<<<< HEAD
              className="border border-gray-300 rounded-none overflow-hidden"
=======
              className="border border-gray-300 rounded-lg overflow-hidden"
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
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
