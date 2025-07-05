/* eslint-disable react/prop-types */
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";

const FasilitasCard = ({ title, image, logo }) => (
  <Card>
    <div className="relative h-56">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {logo && (
        <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full p-2 shadow-md">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
      )}
    </div>
    <div className="p-6 flex items-center justify-center h-24">
      <h3 className="text-lg font-semibold text-primary-bgText text-center">
        {title}
      </h3>
    </div>
  </Card>
);

const FasilitasSection = ({ facilities }) => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [aspectRatio, setAspectRatio] = useState({ width: 100, height: 80 });

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleSlides(3);
        setAspectRatio({ width: 100, height: 80 });
      } else if (width >= 768) {
        setVisibleSlides(2);
        setAspectRatio({ width: 100, height: 90 });
      } else {
        setVisibleSlides(1);
        setAspectRatio({ width: 100, height: 100 });
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <section className="py-16 bg-primary-base text-white relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">FASILITAS</h2>
          <div className="w-32 h-1 bg-secondary-hover mx-auto"></div>
        </div>

        <CarouselProvider
          naturalSlideWidth={aspectRatio.width}
          naturalSlideHeight={aspectRatio.height}
          totalSlides={facilities.length}
          visibleSlides={visibleSlides}
          infinite
          isPlaying
          interval={5000}
        >
          <div className="relative">
            {/* Navigation Arrows */}
            <ButtonBack className="absolute left-4 lg:left-[-60px] top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none">
              <ChevronLeft className="w-6 h-6" />
            </ButtonBack>

            <ButtonNext className="absolute right-4 lg:right-[-60px] top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none">
              <ChevronRight className="w-6 h-6" />
            </ButtonNext>

            {/* Slider */}
            <Slider>
              {facilities.map((facility, index) => (
                <Slide index={index} key={index}>
                  <FasilitasCard
                    title={facility.title}
                    image={facility.image}
                    logo={facility.logo}
                  />
                </Slide>
              ))}
            </Slider>
          </div>

          {/* Dot Indicators */}
          {/* <div className="flex justify-center mt-8 space-x-2">
            {facilities.map((_, index) => (
              <Dot
                key={index - 2}
                slide={index - 2}
                className="w-3 h-3 rounded-full transition-all duration-300 bg-white opacity-50 hover:opacity-75"
                style={{
                  backgroundColor: "white",
                }}
              />
            ))}
          </div> */}

          <div className="flex justify-center mt-8 space-x-2">
            <DotGroup
              className="flex space-x-2"
              dotNumbers={[0, 1]}
              renderDots={({ currentSlide, totalSlides }) =>
                Array.from({ length: totalSlides - 2 }, (_, index) => (
                  <Dot
                    key={index}
                    slide={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-secondary-hover"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))
              }
            />
          </div>
        </CarouselProvider>
      </div>

      {/* Scroll to Top */}
    </section>
  );
};

export default FasilitasSection;
