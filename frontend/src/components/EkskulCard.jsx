import PropTypes from "prop-types";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { useState, useEffect } from "react";
import { Dot, DotGroup } from "pure-react-carousel";

const EkskulCard = ({ title, images }) => (
  <div className="duration-300 mr-4">
    <div className="relative aspect-[4/3] w-full">
      <div className="grid grid-cols-2 gap-1 h-full p-2 border bg-white">
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded ${
              index === 0 ? "col-span-2 row-span-1" : ""
            }`}
          >
            <img
              src={image}
              alt={`${title} - foto ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
        {title}
      </h3>
    </div>
  </div>
);

const EkskulSection = ({ newsData }) => {
  const [aspectRatio, setAspectRatio] = useState({ width: 16, height: 10 });
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [showArrows, setShowArrows] = useState(true);
  const updateLayout = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setVisibleSlides(3);
      setShowArrows(true);
      setAspectRatio({ width: 16, height: 16 });
    } else if (width >= 768) {
      setVisibleSlides(2);
      setShowArrows(false);
      setAspectRatio({ width: 16, height: 16 });
    } else {
      setVisibleSlides(1);
      setShowArrows(false);
      setAspectRatio({ width: 4, height: 4 });
    }
  };

  useEffect(() => {
    updateLayout(); // Initial check
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
<<<<<<< HEAD
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            EKSTRAKURIKULER
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="relative mb-8">
=======
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            Ekstrakurikuler
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="relative mb-12">
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
          <CarouselProvider
            naturalSlideWidth={aspectRatio.width}
            naturalSlideHeight={aspectRatio.height}
            totalSlides={newsData.length}
            visibleSlides={visibleSlides}
            infinite
            isPlaying
            interval={5000}
          >
            <div className="relative">
              <Slider>
                {newsData.map((news, index) => (
                  <Slide index={index} key={index}>
                    <EkskulCard title={news.title} images={news.images} />
                  </Slide>
                ))}
              </Slider>

              {/* Left Arrow */}
              {showArrows && (
                <>
<<<<<<< HEAD
                  <ButtonBack className="absolute left-4 lg:left-[-60px] top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50">
=======
                  <ButtonBack className="absolute left-4 lg:left-[-100px] top-1/2 transform -translate-y-1/2 z-10 bg-black hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50">
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </ButtonBack>

<<<<<<< HEAD
                  <ButtonNext className="absolute right-4 lg:right-[-60px] top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50">
=======
                  <ButtonNext className="absolute right-4 lg:right-[-100px] top-1/2 transform -translate-y-1/2 z-10 bg-black hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50">
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </ButtonNext>
                </>
              )}
            </div>
<<<<<<< HEAD
            <div className="flex justify-center mt-0 space-x-2">
              <DotGroup
                className="flex space-x-2"
                dotNumbers={[0, 1,]}
=======
            <div className="flex justify-center mt-4 space-x-2">
              <DotGroup
                className="flex space-x-2"
                dotNumbers={[0, 1]}
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
                renderDots={({ currentSlide, totalSlides }) =>
                  Array.from({ length: totalSlides - 2 }, (_, index) => (
                    <Dot
                      key={index}
                      slide={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
<<<<<<< HEAD
                          ? "bg-yellow-400"
=======
                          ? "bg-green-500"
>>>>>>> 0104e040fae8c08e08f7c18fa18295e5b95809e0
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))
                }
              />
            </div>
          </CarouselProvider>
        </div>
      </div>
    </section>
  );
};

EkskulCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

EkskulSection.propTypes = {
  newsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default EkskulSection;
